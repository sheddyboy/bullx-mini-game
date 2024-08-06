export function getRandomBoolean() {
  return Math.random() >= 0.5;
}

export function getRandomHSL(altValue: number) {
  const hue = Math.floor(Math.random() * 360); // 0-359
  const saturation = Math.floor(Math.random() * 41) + 30; // 30-70%
  const lightness = Math.floor(Math.random() * 51) + 30; // 30-90%

  return {
    normal: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    alt: `hsl(${hue}, ${getRandomBoolean() ? saturation + altValue : saturation - altValue}%, ${lightness}%)`,
  };
}

export function getRandomNumber(n: number) {
  return Math.floor(Math.random() * n);
}

export const padWithZero = (number: number) =>
  number.toString().padStart(2, "0");
