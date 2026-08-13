import fs from 'fs';
import path from 'path';

const FILE_KEY = process.env.FIGMA_FILE_KEY || 'kBsGqZO4U5n2mdeRnhiUxV';
const TOKEN = process.env.FIGMA_ACCESS_TOKEN || '';

async function exportAllSvgs() {
  const doc = JSON.parse(fs.readFileSync('figma_document.json', 'utf8'));

  // Find all meaningful vector nodes or SVG groups
  const nodesToExport = [];

  function traverse(node) {
    // If it's a vector or has vector children or is an icon/illustration
    const nameLower = (node.name || '').toLowerCase();
    const isSvgCandidate = 
      node.type === 'VECTOR' ||
      node.type === 'BOOLEAN_OPERATION' ||
      node.type === 'STAR' ||
      node.type === 'LINE' ||
      node.type === 'ELLIPSE' ||
      node.type === 'REGULAR_POLYGON' ||
      (node.type === 'FRAME' && (nameLower.includes('svg') || nameLower.includes('icon') || nameLower.includes('vector') || nameLower.includes('duck') || nameLower.includes('camera') || nameLower.includes('lip') || nameLower.includes('pill') || nameLower.includes('computer') || nameLower.includes('pin') || nameLower.includes('bubble') || nameLower.includes('shape') || nameLower.includes('arrow') || nameLower.includes('logo') || nameLower.includes('graphic')));

    if (isSvgCandidate) {
      nodesToExport.push({
        id: node.id,
        name: node.name.replace(/[^a-zA-Z0-9_-]/g, '_'),
        type: node.type
      });
    }

    if (node.children) {
      for (const child of node.children) {
        traverse(child);
      }
    }
  }

  traverse(doc.document);
  console.log(`Found ${nodesToExport.length} candidate nodes for SVG export.`);

  const svgDir = path.join('public', 'assets', 'svgs');
  if (!fs.existsSync(svgDir)) {
    fs.mkdirSync(svgDir, { recursive: true });
  }

  // Batch request in chunks of 50
  const chunkSize = 50;
  for (let i = 0; i < nodesToExport.length; i += chunkSize) {
    const chunk = nodesToExport.slice(i, i + chunkSize);
    const ids = chunk.map(n => n.id).join(',');
    console.log(`Exporting SVG batch ${i / chunkSize + 1} (${chunk.length} nodes)...`);

    const res = await fetch(`https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg`, {
      headers: { 'X-Figma-Token': TOKEN }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.images) {
        for (const [nodeId, svgUrl] of Object.entries(data.images)) {
          if (svgUrl) {
            const item = chunk.find(n => n.id === nodeId);
            const safeName = item ? `${item.name}_${nodeId.replace(':', '_')}.svg` : `node_${nodeId.replace(':', '_')}.svg`;
            const svgRes = await fetch(svgUrl);
            if (svgRes.ok) {
              const svgText = await svgRes.text();
              fs.writeFileSync(path.join(svgDir, safeName), svgText);
            }
          }
        }
      }
    } else {
      console.error('Batch export failed:', res.status, await res.text());
    }
  }

  console.log('Finished exporting SVGs!');
}

exportAllSvgs();
