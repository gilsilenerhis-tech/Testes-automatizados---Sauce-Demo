# 🤖 Testes Automatizados com Cypress e Gherkin

📌 **Descrição**  
Este repositório contém **testes automatizados** criados utilizando a metodologia **BDD (Behavior Driven Development)**, escritos em **linguagem natural Gherkin** e implementados em **JavaScript** com o framework **Cypress**.  

O objetivo dos testes é validar fluxos essenciais da aplicação [Sauce Demo](https://www.saucedemo.com), garantindo a qualidade das funcionalidades de login, carrinho de compras e checkout.

---

🎯 **Objetivo**  
- Garantir a confiabilidade das principais funcionalidades da aplicação  
- Melhorar a rastreabilidade dos cenários de teste através da linguagem natural (Gherkin)  
- Automatizar a execução dos testes para reduzir retrabalho e acelerar o processo de QA  

---

🗂️ **Estrutura do Repositório**  
- **/cypress/e2e** → cenários de teste escritos em Gherkin (`.feature`)  
- **/cypress/support** → comandos e funções auxiliares  
- **/cypress/fixtures** → dados usados nos testes  
- **/reports** → relatórios de execução  

---

✅ **Escopo dos Testes Automatizados**  
- Login de usuários válidos e inválidos  
- Adição e remoção de produtos no carrinho  
- Persistência de itens durante a navegação  
- Fluxo completo de checkout  

---

🔍 **Tecnologias Utilizadas**  
- **JavaScript (Node.js)**  
- **Cypress**  
- **Gherkin (Cucumber BDD)**  

---

📊 **Execução dos Testes**  
Para rodar os testes, utilize os comandos abaixo:  

```bash
# Instalar dependências
npm install

# Executar os testes no Cypress
npx cypress open

# Executar em modo headless (CI/CD)
npx cypress run
