export function generateIm() {
  var n = Math.floor(Math.random() * 9999999)
    .toString()
    .padStart(7, "0");

  var p1 = parseInt(n.charAt(0)) * 2;
  var p2 = parseInt(n.charAt(1)) * 3;
  var p3 = parseInt(n.charAt(2)) * 4;
  var p4 = parseInt(n.charAt(3)) * 5;
  var p5 = parseInt(n.charAt(4)) * 6;
  var p6 = parseInt(n.charAt(5)) * 7;

  var sum = p1 + p2 + p3 + p4 + p5 + p6;
  var mod = sum % 11;

  var dv = mod < 2 ? 0 : 11 - mod;

  return n + dv.toString();
}
