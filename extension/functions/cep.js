export function generateCep() {
  var cep = "";

  // Gera o primeiro dígito aleatório de acordo com a região
  var regiao = Math.floor(Math.random() * 10);
  cep += regiao;

  // Gera os próximos quatro dígitos aleatórios
  for (var i = 0; i < 4; i++) {
    cep += Math.floor(Math.random() * 10);
  }

  // Gera os próximos três dígitos aleatórios (identificadores de distribuição)
  for (var i = 0; i < 3; i++) {
    cep += Math.floor(Math.random() * 10);
  }

  // Formata o CEP no padrão XXXXX-XXX
  cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");

  return cep;
}
