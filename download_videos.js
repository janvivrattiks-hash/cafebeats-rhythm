import https from 'https';
import fs from 'fs';

if (!fs.existsSync('public/videos')) {
  fs.mkdirSync('public/videos', { recursive: true });
}

const urls = [
  "https://cdn.pixabay.com/video/2019/07/21/25399-349880155_small.mp4",
  "https://cdn.pixabay.com/video/2021/08/25/86278-592817342_small.mp4",
  "https://cdn.pixabay.com/video/2019/11/02/28612-370123961_small.mp4"
];

urls.forEach((url, i) => {
  const file = fs.createWriteStream(`public/videos/reel${i+1}.mp4`);
  console.log(`Downloading ${url}...`);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Failed to download ${url}. Status Code: ${res.statusCode}`);
      return;
    }
    res.pipe(file);
    file.on('finish', () => { file.close(); console.log(`Finished reel${i+1}.mp4`); });
  }).on('error', (err) => { fs.unlink(`public/videos/reel${i+1}.mp4`, ()=>{}); console.error(err.message); });
});
