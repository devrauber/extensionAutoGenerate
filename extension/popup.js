import { generateCpf } from "./functions/cpf.js";
import { generateCnpj } from "./functions/cnpj.js";
import { generateIe } from "./functions/ie.js";
import { generateIm } from "./functions/im.js";
import { generateRg } from "./functions/rg.js";
import { generateCep } from "./functions/cep.js";

const dados = [
  { id: 1, nome: "CPF", function: "generateCpf" },
  { id: 2, nome: "CNPJ", function: "generateCnpj" },
  { id: 3, nome: "Inscrição Estadual", function: "generateIe" },
  { id: 4, nome: "Inscrição Municipal", function: "generateIm" },
  { id: 5, nome: "RG", function: "generateRg" },
  { id: 6, nome: "CEP", function: "generateCep" },
];

const favoritItems = [];
const container = document.getElementById("meu-container");

dados.forEach((item) => {
  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.display = "none";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      const input = document.createElement("input");
      input.type = "text";
      input.setAttribute("readonly", "true");
      input.value = item.nome;
      div.appendChild(input);
    } else {
      div.removeChild(div.lastChild);
    }
  });

  const span = document.createElement("span");
  span.textContent = item.nome;

  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("readonly", "true");

  const copiarButton = document.createElement("button");
  copiarButton.textContent = "Copiar";
  copiarButton.addEventListener("click", () => {
    input.select();
    document.execCommand("copy");
  });

  const gerarButton = document.createElement("button");
  gerarButton.textContent = "Gerar";
  gerarButton.addEventListener("click", () => {
    const functionName = item.function;
    switch (functionName) {
      case "generateCpf":
        input.value = generateCpf();
        break;
      case "generateCnpj":
        input.value = generateCnpj();
        break;
      case "generateIe":
        input.value = generateIe();
        break;
      case "generateIm":
        input.value = generateIm();
        break;
      case "generateRg":
        input.value = generateRg();
        break;
      case "generateCep":
        input.value = generateCep();
        break;
      default:
        console.log("Função não encontrada");
    }
  });

  div.appendChild(checkbox);
  div.appendChild(span);
  div.appendChild(input);
  div.appendChild(copiarButton);
  div.appendChild(gerarButton);

  container.appendChild(div);
});

const salvarButton = document.getElementById("salvarButton");
const checkboxList = document.querySelectorAll("input[type='checkbox']");

const changeClass = () => {
  container.classList.toggle("selecionando-favoritos");
  salvarButton.style.display = container.classList.contains(
    "selecionando-favoritos"
  )
    ? "block"
    : "none";

  checkboxList.forEach((checkbox) => {
    checkbox.style.display = container.classList.contains(
      "selecionando-favoritos"
    )
      ? "block"
      : "none";
  });
};

const favoriteButton = document.getElementById("favButton");
favoriteButton.addEventListener("click", () => {
  changeClass();
});

salvarButton.addEventListener("click", () => {
  favoritItems.length = 0;

  checkboxList.forEach((checkbox) => {
    if (checkbox.checked) {
      const nome = checkbox.nextElementSibling.textContent;
      const itemJaAdicionado = favoritItems.some((item) => item.nome === nome);
      if (!itemJaAdicionado) {
        favoritItems.push({ nome });
      }
    }
  });
  changeClass();
});
