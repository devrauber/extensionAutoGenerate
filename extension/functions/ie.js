export function generateIe() {
  const base = Math.floor(Math.random() * 10000000)
    .toString()
    .padStart(8, "0");

  const digit1 =
    1 * base[0] +
    3 * base[1] +
    4 * base[2] +
    5 * base[3] +
    6 * base[4] +
    7 * base[5] +
    8 * base[6];

  const rest1 = digit1 % 11;
  const dv1 = rest1 < 2 ? 0 : 11 - rest1;

  const digit2 =
    3 * base[0] +
    2 * base[1] +
    10 * base[2] +
    9 * base[3] +
    8 * base[4] +
    7 * base[5] +
    6 * base[6] +
    5 * dv1 +
    4 * base[7];

  const rest2 = digit2 % 11;
  const dv2 = rest2 < 2 ? 0 : 11 - rest2;

  return `${base}-${dv1}${dv2}`;
}
