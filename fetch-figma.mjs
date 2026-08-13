import fs from 'fs';

const FILE_KEY = process.env.FIGMA_FILE_KEY || 'kBsGqZO4U5n2mdeRnhiUxV';
const TOKEN = process.env.FIGMA_ACCESS_TOKEN || '';

async function fetchFigmaDoc() {
  const res = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
    headers: {
      'X-Figma-Token': TOKEN
    }
  });

  if (!res.ok) {
    console.error('Error fetching file:', res.status, res.statusText, await res.text());
    return;
  }

  const data = await res.json();
  fs.writeFileSync('figma_document.json', JSON.stringify(data, null, 2));
  console.log('Saved figma_document.json. Name:', data.name);
}

fetchFigmaDoc();
