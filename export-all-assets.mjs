import fs from 'fs';
import path from 'path';

const FILE_KEY = process.env.FIGMA_FILE_KEY || 'kBsGqZO4U5n2mdeRnhiUxV';
const TOKEN = process.env.FIGMA_ACCESS_TOKEN || '';

const doc = JSON.parse(fs.readFileSync('figma_document.json', 'utf8'));

// 1. First let's fetch all image fills in the document
async function fetchImageFills() {
  console.log('Fetching image fills mapping...');
  const res = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}/images`, {
    headers: { 'X-Figma-Token': TOKEN }
  });
  if (res.ok) {
    const data = await res.json();
    console.log('Image fills found:', Object.keys(data.meta.images || {}).length);
    fs.writeFileSync('image_fills.json', JSON.stringify(data, null, 2));
    
    // Download each image fill
    const imagesDir = path.join('public', 'assets', 'figma');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    for (const [imageRef, url] of Object.entries(data.meta.images || {})) {
      console.log(`Downloading image fill ${imageRef}...`);
      const imgRes = await fetch(url);
      if (imgRes.ok) {
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        // detect format if possible or save as png
        fs.writeFileSync(path.join(imagesDir, `fill_${imageRef}.png`), buffer);
      }
    }
  } else {
    console.error('Error fetching image fills:', res.status, await res.text());
  }
}

// 2. Identify all vector nodes, groups, svgs, and sections to export as SVG and PNG
async function exportNodes() {
  function findNodes(node, list = []) {
    // If it's a vector, component, boolean operation, star, ellipse, frame with graphics, etc.
    const isGraphic = 
      node.type === 'VECTOR' ||
      node.type === 'BOOLEAN_OPERATION' ||
      node.type === 'STAR' ||
      node.type === 'LINE' ||
      node.type === 'ELLIPSE' ||
      node.type === 'REGULAR_POLYGON' ||
      (node.type === 'FRAME' && (node.name.toLowerCase().includes('svg') || node.name.toLowerCase().includes('icon') || node.name.toLowerCase().includes('vector') || node.name.toLowerCase().includes('duck') || node.name.toLowerCase().includes('cam') || node.name.toLowerCase().includes('lip') || node.name.toLowerCase().includes('pill') || node.name.toLowerCase().includes('computer') || node.name.toLowerCase().includes('graphic')));

    if (isGraphic) {
      list.push({ id: node.id, name: node.name, type: node.type });
    }

    if (node.children) {
      for (const child of node.children) {
        findNodes(child, list);
      }
    }
    return list;
  }

  const graphicNodes = findNodes(doc.document);
  console.log(`Found ${graphicNodes.length} graphic/vector nodes to export.`);
  fs.writeFileSync('graphic_nodes.json', JSON.stringify(graphicNodes, null, 2));

  // Also let's find all frames/sections directly inside 1920w default
  const frame1920 = findNodeById(doc.document, '1:2492');
  if (frame1920 && frame1920.children) {
    console.log(`Main frame children (${frame1920.children.length}):`);
    const mainSections = frame1920.children.map(c => ({ id: c.id, name: c.name, type: c.type }));
    console.log(mainSections);
    fs.writeFileSync('main_sections.json', JSON.stringify(mainSections, null, 2));
  }
}

function findNodeById(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
  }
  return null;
}

async function main() {
  await fetchImageFills();
  await exportNodes();
}

main();
