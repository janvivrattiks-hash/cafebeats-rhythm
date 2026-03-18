const getPixels = require("get-pixels");

function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [(h * 360).toFixed(1), (s * 100).toFixed(1) + '%', (l * 100).toFixed(1) + '%'].join(' ');
}

getPixels("public/logo.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path", err);
    return;
  }
  const colors = {};
  for(let i=0; i<pixels.data.length; i+=4) {
    const r = pixels.data[i];
    const g = pixels.data[i+1];
    const b = pixels.data[i+2];
    const a = pixels.data[i+3];
    if (a > 200) {
        // Group by 20 for similarity
        const hr = Math.round(r/20)*20;
        const hg = Math.round(g/20)*20;
        const hb = Math.round(b/20)*20;
        const rr = Math.min(255, hr);
        const gg = Math.min(255, hg);
        const bb = Math.min(255, hb);
        const hex = ((1 << 24) + (rr << 16) + (gg << 8) + bb).toString(16).slice(1);
        colors[hex] = (colors[hex] || {count: 0, r: rr, g: gg, b: bb});
        colors[hex].count++;
    }
  }
  const sorted = Object.values(colors).sort((a,b) => b.count-a.count).slice(0, 5);
  console.log("Top colors:");
  sorted.forEach(c => {
      const hex = ((1 << 24) + (c.r << 16) + (c.g << 8) + c.b).toString(16).slice(1);
      console.log(`#${hex}`, rgbToHsl(c.r, c.g, c.b), "Count:", c.count);
  });
});
