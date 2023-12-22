export const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400,
};

export const pxToNum = px => Number(px.replace('px', ''));

export const numToPx = num => `${num}px`;

export const pxToRem = px => `${px / 16}rem`;

export const msToNum = msString => Number(msString.replace('ms', ''));

export const numToMs = num => `${num}ms`;

export const rgbToThreeColor = rgb =>
  rgb?.split(' ').map(value => Number(value) / 255) || [];

export function cssProps(props, style = {}) {
  let result = {};

  const keys = Object.keys(props);

  for (const key of keys) {
    let value = props[key];

    if (typeof value === 'number' && key === 'delay') {
      value = numToMs(value);
    }

    if (typeof value === 'number' && key !== 'opacity') {
      value = numToPx(value);
    }

    result[`--${key}`] = value;
  }

  return { ...result, ...style };
}

export function classes(...classes) {
  return classes.filter(Boolean).join(' ');
}
