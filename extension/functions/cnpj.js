export function generateCnpj() {
  var n = Math.floor(Math.random() * 99999999999999);

  var d1 = 0;
  for (var i = 0; i < 12; i++) {
    d1 += parseInt(n.toString().charAt(i)) * (6 - ((i % 8) + 2));
  }
  d1 = 11 - (d1 % 11);
  if (d1 == 10 || d1 == 11) {
    d1 = 0;
  }

  var d2 = 0;
  for (var i = 0; i < 12; i++) {
    d2 += parseInt(n.toString().charAt(i)) * (7 - ((i % 8) + 2));
  }
  d2 += d1 * 2;
  d2 = 11 - (d2 % 11);
  if (d2 == 10 || d2 == 11) {
    d2 = 0;
  }

  var cnpj = n.toString() + d1.toString() + d2.toString();
  cnpj =
    cnpj.slice(0, 2) +
    "." +
    cnpj.slice(2, 5) +
    "." +
    cnpj.slice(5, 8) +
    "/" +
    cnpj.slice(8, 12) +
    "-" +
    cnpj.slice(12);

  return cnpj;
}
