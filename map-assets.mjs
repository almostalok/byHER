import fs from 'fs';
import path from 'path';

const doc = JSON.parse(fs.readFileSync('figma_document.json', 'utf8'));

// Build a map of imageRef -> { nodeNames, nodeIds, bounds }
const imageMap = {};

function inspectFills(node) {
  if (node.fills && Array.isArray(node.fills)) {
    for (const fill of node.fills) {
      if (fill.type === 'IMAGE' && fill.imageRef) {
        if (!imageMap[fill.imageRef]) {
          imageMap[fill.imageRef] = [];
        }
        imageMap[fill.imageRef].push({
          id: node.id,
          name: node.name,
          box: node.absoluteBoundingBox
        });
      }
    }
  }

  if (node.children) {
    for (const child of node.children) {
      inspectFills(child);
    }
  }
}

inspectFills(doc.document);
fs.writeFileSync('mapped_images.json', JSON.stringify(imageMap, null, 2));
console.log(`Mapped ${Object.keys(imageMap).length} distinct image fills to document nodes.`);
