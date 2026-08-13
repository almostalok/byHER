import fs from 'fs';
import path from 'path';

const srcDir = path.join('public', 'assets', 'figma');
const targetDir = path.join('public', 'assets');

const namedAssets = {
  'hero_portrait.png': 'fill_0ca607e2690591d855fa3f8c46c915971f7c0fc6.png',
  'mascot_duck.png': 'fill_7567f4cfc61f15d0785305b601ac837a5f79b17c.png',
  'about_portrait.png': 'fill_0a5a9b7a2ba46b860bc282358681ad62dc8f526a.png',
  'lips_graphic.png': 'fill_c22892493a4bb19617bd1f341fb1d0e06339365d.png',
  'camera_graphic.png': 'fill_2787c3b15117f37a141ba365504ea42417bee0cf.png',
  'megaphone_graphic.png': 'fill_c831b0874e454d27fb51bcb01a9d03ac92c16ca4.png',
  'wrapped_card_1.png': 'fill_49aaf45912cd8c04cccb529e68d013de493ab710.png',
  'wrapped_card_2.png': 'fill_f48b0930d240d0c5646a47783cfc6bc709de4840.png',
  'wrapped_card_3.png': 'fill_1f269cf0a3df6a272020e202c6dd17da868adf16.png',
  'wrapped_card_4.png': 'fill_26ca247a2ce1ee1e62b7a2a38641522901739c5c.png',
  'content_work_bench.png': 'fill_96b62be6e66270fd1d58628e096572784091bd21.png',
  'pushpin_graphic.png': 'fill_de1bc5d27fc9417a0feb11cc8f543ceb8ff4c344.png',
  'computer_90s_graphic.png': 'fill_8627e69c6a449668600b8f6f56c103fe080d398d.png',
  'skill_pills_bottle.png': 'fill_ce03ccac926aea0e570ca5d221a4fb5f0cd78ad9.png',
  'notes_polaroid_1.png': 'fill_0dfe3d49dcfe52a5b8b95fc809d4cb8206ca0440.png',
  'notes_polaroid_2.png': 'fill_db139e7150ea3ba4d74f1833aa28f9241eb53531.png',
  'pill_canva.png': 'fill_372e2fe80887b0a39bc63c7ff0397bff9e990240.png',
  'pill_claude.png': 'fill_eb708b32143db8a57bd4bc73dd492fb4de6b9fa8.png',
  'pill_gdocs.png': 'fill_4682de825056461b5d7716aac19eb77fb4fcffdc.png',
  'pill_vscode.png': 'fill_2429970fa57e9ca4fa16b68325dd3d775a2da7b3.png',
  'pill_edits.png': 'fill_68b691a47de5e306b3af257d4d4abb60c8775f6c.png',
  'icon_insta.png': 'fill_6b83ab67a9158e80454ecb6aba7098f04b7f5ef0.png',
  'icon_linkedin.png': 'fill_f2c3a7363d938ad3979f497e8275f5102337e80b.png',
  'mascot_footer.png': 'fill_5d039e14bc6df7cdff11ff9a9d6d09be871b8bb2.png'
};

for (const [targetName, sourceFile] of Object.entries(namedAssets)) {
  const sourcePath = path.join(srcDir, sourceFile);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, path.join(targetDir, targetName));
    console.log(`Copied ${sourceFile} -> ${targetName}`);
  } else {
    console.warn(`Source file not found: ${sourceFile}`);
  }
}

console.log('All named assets copied successfully!');
