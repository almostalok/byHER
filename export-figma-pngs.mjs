import fs from 'fs';
import path from 'path';

const FILE_KEY = process.env.FIGMA_FILE_KEY || 'kBsGqZO4U5n2mdeRnhiUxV';
const TOKEN = process.env.FIGMA_ACCESS_TOKEN || '';

async function exportHighResPngs() {
  const doc = JSON.parse(fs.readFileSync('figma_document.json', 'utf8'));

  // Let's find key frames and groups in 1920w default
  const nodesToExport = [];

  function traverse(node, pathName = '') {
    const currentPath = pathName ? `${pathName} > ${node.name}` : node.name;
    
    // Check if node is a frame or group representing a visual module or section
    if (node.type === 'FRAME' || node.type === 'GROUP' || node.type === 'COMPONENT' || node.type === 'INSTANCE') {
      const name = (node.name || '').toLowerCase();
      // If it's a prominent container, collage, card, or visual
      if (
        name.includes('section') ||
        name.includes('hero') ||
        name.includes('about') ||
        name.includes('work') ||
        name.includes('wrapped') ||
        name.includes('content') ||
        name.includes('process') ||
        name.includes('notes') ||
        name.includes('pill') ||
        name.includes('footer') ||
        name.includes('card') ||
        name.includes('grid') ||
        name.includes('photo') ||
        name.includes('image') ||
        name.includes('duck') ||
        name.includes('camera') ||
        name.includes('computer') ||
        name.includes('megaphone') ||
        name.includes('oval')
      ) {
        nodesToExport.push({
          id: node.id,
          name: node.name.replace(/[^a-zA-Z0-9_-]/g, '_'),
          type: node.type
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        traverse(child, currentPath);
      }
    }
  }

  traverse(doc.document);
  console.log(`Found ${nodesToExport.length} candidate frames/groups for @2x PNG export.`);

  const pngDir = path.join('public', 'assets', 'pngs_2x');
  if (!fs.existsSync(pngDir)) {
    fs.mkdirSync(pngDir, { recursive: true });
  }

  // Batch request in chunks of 30
  const chunkSize = 30;
  for (let i = 0; i < nodesToExport.length; i += chunkSize) {
    const chunk = nodesToExport.slice(i, i + chunkSize);
    const ids = chunk.map(n => n.id).join(',');
    console.log(`Exporting PNG @2x batch ${i / chunkSize + 1} (${chunk.length} nodes)...`);

    const res = await fetch(`https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=2`, {
      headers: { 'X-Figma-Token': TOKEN }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.images) {
        for (const [nodeId, pngUrl] of Object.entries(data.images)) {
          if (pngUrl) {
            const item = chunk.find(n => n.id === nodeId);
            const safeName = item ? `${item.name}_${nodeId.replace(':', '_')}.png` : `node_${nodeId.replace(':', '_')}.png`;
            const pngRes = await fetch(pngUrl);
            if (pngRes.ok) {
              const buffer = Buffer.from(await pngRes.arrayBuffer());
              fs.writeFileSync(path.join(pngDir, safeName), buffer);
            }
          }
        }
      }
    } else {
      console.error('Batch export failed:', res.status, await res.text());
    }
  }

  console.log('Finished exporting high-res PNGs!');
}

exportHighResPngs();
