import { PATTERN_WIDTH, BASE, COLORS } from "./constants";

// Code in this file copied from: https://codepen.io/niallains/pen/ExEOmdJ

function getLine(vert, color, offset) {
  const OFF_X = vert ? offset * BASE : BASE / 2,
    OFF_Y = vert ? 0 : offset * BASE;

  return `linear-gradient(
    45deg,
    ${color} 0 ${BASE / 3}px,
    transparent ${BASE / 3}px ${BASE * (2 / 3)}px,
    ${color} ${BASE * (2 / 3)}px ${BASE}px,
    transparent ${BASE + 1}px
  ) ${OFF_X}px ${OFF_Y}px /
  ${BASE}px ${BASE}px repeat-${vert ? "y" : "x"}`;
}

function getPattern(lines, bg) {
  const WIDTH = (PATTERN_WIDTH - 1) * 2;
  let css = "";
  lines.forEach((l) => {
    for (let pos = l[1]; pos < l[1] + l[2]; pos++) {
      css +=
        getLine(false, l[0], pos) +
        ", " +
        getLine(true, l[0], pos) +
        ", " +
        getLine(false, l[0], WIDTH - pos) +
        ", " +
        getLine(true, l[0], WIDTH - pos) +
        ", ";
    }
  });
  return css + bg;
}

let randInt,
  randEl = (arr) => arr[randInt(arr.length)];
function generatePattern(name) {
  const seed = name
    .toLowerCase()
    .replace(/\s/g, "")
    .split("")
    .reduce((sum, l) => sum + l.charCodeAt(), 0);

  const RNG = [
    0x80000000,
    1103515245,
    12345,
    seed || Math.floor(Math.random() * 10000),
  ];
  randInt = (max) => {
    RNG[3] = (RNG[1] * RNG[3] + RNG[2]) % RNG[0];
    return Math.floor((max * RNG[3]) / RNG[0]);
  };

  let palette = [],
    lines = [];
  for (let i = 0; i < 6; i++) {
    palette.push(randEl(COLORS));
  }

  let pos = 4 + randInt(6);
  while (pos < PATTERN_WIDTH) {
    let lineWidth = randInt(4);
    if (pos + lineWidth > PATTERN_WIDTH) {
      lineWidth = PATTERN_WIDTH - pos;
    }
    if (randInt(4) !== 0) {
      lines.push([randEl(palette), pos, lineWidth]);
    }
    pos += lineWidth;
  }

  return getPattern(lines, randEl(COLORS));
}

export { generatePattern };
