# 📌 Projeto Node.js - Funções Matemáticas

## 📖 Sobre o Projeto

Este projeto foi desenvolvido em Node.js com o objetivo de implementar funções matemáticas utilizando boas práticas de desenvolvimento, incluindo:

* Validação de entrada;
* Tratamento de erros;
* Testes automatizados com Jest;
* Integração Contínua (CI) com GitHub Actions.

O sistema possui funções para cálculo de:

* Fatorial;
* Sequência de Fibonacci;
* Verificação de números primos.

---

# 🚀 Tecnologias Utilizadas

* Node.js
* JavaScript
* Jest
* GitHub Actions

---

# 📂 Estrutura do Projeto

```bash
├── src
│   ├── math.js
│   └── math.test.js
│
├── .github
│   └── workflows
│       └── node-ci.yml
│
├── package.json
└── README.md
```

---

# ⚙️ Funcionalidades

## 🔢 Função Fatorial

Calcula o fatorial de um número utilizando recursão.

### Exemplo:

```js
fatorial(5)
// Resultado: 120
```

---

## 🔁 Função Fibonacci

Retorna o número correspondente da sequência de Fibonacci.

### Exemplo:

```js
fibonacci(8)
// Resultado: 21
```

---

## ✅ Função Verificar Número Primo

Verifica se um número é primo.

### Exemplo:

```js
ehPrimo(7)
// Resultado: true
```

---

# 🧪 Testes Automatizados

Os testes foram implementados utilizando Jest.

Os testes validam:

* Entradas inválidas;
* Tratamento de erros;
* Resultados esperados das funções;
* Existência das funções.

Para executar os testes:

```bash
npm test
```

---

# 🔄 Integração Contínua (CI)

O projeto utiliza GitHub Actions para automação da integração contínua.

Sempre que houver um push na branch `main`, o workflow:

1. Faz checkout do projeto;
2. Instala as dependências;
3. Executa os testes automatizados;
4. Simula um processo de deploy.

Arquivo responsável:

```bash
.github/workflows/node-ci.yml
```

---

# ▶️ Como Executar o Projeto

## Instalar dependências

```bash
npm install
```

## Executar testes

```bash
npm test
```

---

# 📌 Objetivo do Projeto

Este projeto foi criado com fins de aprendizado e prática de:

* Node.js;
* Testes automatizados;
* Qualidade de software;
* Integração contínua;
* Boas práticas de programação.

---

# 👨‍💻 Autor

Paulo Henrique

