import fs from 'fs';
import path from 'path';

const FILE_KEY = process.env.FIGMA_FILE_KEY || 'kBsGqZO4U5n2mdeRnhiUxV';
const TOKEN = process.env.FIGMA_ACCESS_TOKEN || '';

const doc = JSON.parse(fs.readFileSync('figma_document.json', 'utf8'));

// Let's explore the document children
function walk(node, depth = 0, results = []) {
  const indent = '  '.repeat(depth);
  results.push({
    id: node.id,
    name: node.name,
    type: node.type,
    depth,
    childCount: node.children ? node.children.length : 0,
    hasFills: !!(node.fills && node.fills.length),
    fills: node.fills
  });

  if (node.children) {
    for (const child of node.children) {
      walk(child, depth + 1, results);
    }
  }
  return results;
}

const flatNodes = walk(doc.document);
console.log(`Total nodes in document: ${flatNodes.length}`);

// Print top 3 levels
const topNodes = flatNodes.filter(n => n.depth <= 3);
console.log('Top level structure:');
topNodes.forEach(n => {
  console.log(`${'  '.repeat(n.depth)}[${n.type}] ${n.name} (id: ${n.id})`);
});

// Also write all nodes summary to a file
fs.writeFileSync('flat_nodes.json', JSON.stringify(flatNodes.map(n => ({
  id: n.id,
  name: n.name,
  type: n.type,
  depth: n.depth,
  childCount: n.childCount
})), null, 2));
