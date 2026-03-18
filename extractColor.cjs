const Jimp = require('jimp');

async function run() {
  const image = await Jimp.read('public/logo.png');
  const colors = {};
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const a = this.bitmap.data[idx + 3];
    if (a > 200) { 
      const rr = Math.round(r/20)*20;
      const gg = Math.round(g/20)*20;
      const bb = Math.round(b/20)*20;
      const hex = ((1 << 24) + (rr << 16) + (gg << 8) + bb).toString(16).slice(1);
      colors[hex] = (colors[hex] || 0) + 1;
    }
  });
  const sorted = Object.entries(colors).sort((a,b) => b[1] - a[1]).slice(0, 5);
  console.log("Top colors (hex, count):", sorted);
}
run().catch(console.error);
