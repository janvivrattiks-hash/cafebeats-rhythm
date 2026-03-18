import Jimp from 'jimp';

async function run() {
  const image = await Jimp.read('public/logo.png');
  const colors = {};
  let total = 0;
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const a = this.bitmap.data[idx + 3];
    if (a > 200) { 
      // round colors to nearest 10s to group similar shades
      const rr = Math.round(r/10)*10;
      const gg = Math.round(g/10)*10;
      const bb = Math.round(b/10)*10;
      const hex = ((1 << 24) + (rr << 16) + (gg << 8) + bb).toString(16).slice(1);
      colors[hex] = (colors[hex] || 0) + 1;
      total++;
    }
  });
  const sorted = Object.entries(colors).sort((a,b) => b[1] - a[1]).slice(0, 10);
  console.log("Top colors (hex, count):", sorted);
}
run().catch(console.error);
