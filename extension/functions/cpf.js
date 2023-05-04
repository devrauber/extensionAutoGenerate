export function generateCpf() {
  var n = Math.floor(Math.random() * 999999999);

  var d1 = 0;
  for (var i = 0; i < 9; i++) {
    d1 += parseInt(n.toString().charAt(i)) * (10 - i);
  }
  d1 = 11 - (d1 % 11);
  if (d1 == 10 || d1 == 11) {
    d1 = 0;
  }

  var d2 = 0;
  for (var i = 0; i < 9; i++) {
    d2 += parseInt(n.toString().charAt(i)) * (11 - i);
  }
  d2 += d1 * 2;
  d2 = 11 - (d2 % 11);
  if (d2 == 10 || d2 == 11) {
    d2 = 0;
  }

  var cpf = n.toString() + d1.toString() + d2.toString();
  cpf =
    cpf.slice(0, 3) +
    "." +
    cpf.slice(3, 6) +
    "." +
    cpf.slice(6, 9) +
    "-" +
    cpf.slice(9);

  return cpf;
}
