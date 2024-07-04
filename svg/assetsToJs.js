import * as fs from 'fs';
const svgs = {};
const iconName = [];
const baseUrl = 'svg/assets';

function write(...folder) {
  const folders = folder.join('/');
  fs.readdirSync(`${baseUrl}/${folders}`).forEach((file) => {
    if (file.startsWith('.')) return;
    if (!file.endsWith('.svg')) return write(...folder, file);
    const svg = fs.readFileSync(`${baseUrl}/${folders}/${file}`, 'utf8');
    const name = file.replace(/.svg$/, '');
    iconName.push(`${folders}/${name}`);
    svgs[`${folders}/${name}`] = svg;
  });
}
write();

fs.writeFile('src/lib/icon/svgs.ts', 'export const svgs = ' + JSON.stringify(svgs) + ';', () => {
  console.log('Complete conversion of svg file to text');
});
fs.writeFile(
  'src/lib/icon/types.ts',
  `export type IconName =${iconName
    .map((x, i) => `${i === 0 ? '\n' : ''}  | '${x}'`)
    .join('\n')}\n`,
  () => {
    console.log('Complete conversion of type file to text');
  }
);
