  // Cenário de teste
describe('Cenário  1 - login', () => {

   // Caso de teste 1 
  it('Login com credenciais válidas', () => {

    // Dado que o usuário está na página de login
    cy.visit('https://www.saucedemo.com/v1/')
    cy.wait (2000)

    // Quando preencher os dados de login (user e password)
    cy.get('[data-test="username"]').type("standard_user")
    cy.wait (2000)
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.wait (2000)

     // E clica no botão "login"
    cy.get('#login-button').click()

     // Então o usuário realiza o login com sucesso
  })


    // Caso de teste 2 
  it('Login com username inválido', () => {

    // Dado que o usuário está na página de login
    cy.visit('https://www.saucedemo.com/v1/')
    cy.wait (2000)

    // Quando preencher os dados de login (user e password)
    cy.get('[data-test="username"]').type("standard_use")
    cy.wait (2000)
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.wait (2000)

     // E clica no botão "login"
    cy.get('#login-button').click()

     // Então deve exibir a mensagem de erro "Epic sadface: Username and password do not match any user in this service"
  })


    // Caso de teste 3 
  it('Login com senha inválida', () => {

    // Dado que o usuário está na página de login
    cy.visit('https://www.saucedemo.com/v1/')
    cy.wait (2000)

    // Quando preencher os dados de login (user e password)
    cy.get('[data-test="username"]').type("standard_user")
    cy.wait (2000)
    cy.get('[data-test="password"]').type("secret_sauc")
    cy.wait (2000)

     // E clica no botão "login"
    cy.get('#login-button').click()

     // Então deve exibir a mensagem de erro "Epic sadface: Username and password do not match any user in this service"
  })


    // Caso de teste 4
  it('Login com username vazio', () => {
    
    // Dado que o usuário está na página de login
    cy.visit('https://www.saucedemo.com/v1/')
    cy.wait (2000)
   
    // Quando preencher os dados de login( user e password)
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.wait (2000)

    // E clica no botão "login"
    cy.get('#login-button').click()

    // Então deve exibir a mensagem de erro "Epic sadface: Username is required
  })


   // Caso de teste 5 
  it('Login com senha vazia', () => {

    // Dado que o usuário está na página de login
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.wait (2000)

    // Quando preencher os dados de login (user e password)
    cy.get('[data-test="username"]').type("standard_user")
    cy.wait (2000)

     // E clica no botão "login"
    cy.get('#login-button').click()

     // Então deve exibir a mensagem de erro "Epic sadface: Password is required"
  })
})



// Cenário de teste
describe('Cenário  2 - Add to cart', () => {

   // Caso de teste 1 
  it('Adicionar um item ao carrinho', () => {

    //Dado que o usuário está autenticado com sucesso na página de produtos
    cy.visit("https://www.saucedemo.com/v1/inventory.html")
  
    //Identificar o item Sauce Labs Backpack
    cy.xpath("//div[normalize-space()='Sauce Labs Backpack']")
    cy.wait (2000)
    
    //Clicar no botão "ADD TO CART"
    cy.xpath("//div[@class='inventory_list']//div[1]//div[3]//button[1]").click()
    cy.wait (2000)

  })


  // Caso de teste 2
  it('Remover um item do carrinho', () => {

    //Dado que o usuário está autenticado com sucesso na página de produtos
    cy.visit("https://www.saucedemo.com/v1/inventory.html")
  
    //Identificar o item Sauce Labs Backpack
    cy.xpath("//div[normalize-space()='Sauce Labs Backpack']")

    //Clicar no botão "ADD TO CART"
    cy.xpath("//div[@class='inventory_list']//div[1]//div[3]//button[1]").click()
    cy.wait (2000)

    //Clicar no botão "REMOVE"
    cy.xpath("//button[@class='btn_secondary btn_inventory']").click()
  
 })
})
  // Cenário de teste
describe('Cenário  3 - Checkout', () => {

  // Caso de teste 1 
  it('Checkout com sucesso', () => {
  
    //Dado que o usuário está autenticado com sucesso na página de produtos
    cy.visit("https://www.saucedemo.com/v1/inventory.html")
  
    //Identificar o item Sauce Labs Backpack
    cy.xpath("//div[normalize-space()='Sauce Labs Backpack']")

    //Clicar no botão "ADD TO CART"
    cy.xpath("//div[@class='inventory_list']//div[1]//div[3]//button[1]").click()
    cy.wait (2000)

    // ir na página de carrinho

    cy.visit("https://www.saucedemo.com/v1/cart.html")

    // clicar no botão "Checkout"
    cy.xpath("//a[@class='btn_action checkout_button']").click()
   
    // Preencher frist name
    cy.get('[data-test="firstName"]').type("Ana")

    // Preencher last name
    cy.get('[data-test="lastName"]').type("Silva")

    // Preencher Zip/Postal Code
    cy.get('[data-test="postalCode"]').type("12345-678")
    
    // Clicar em Continue
    cy.get("#checkout_info_container > div > form > div.checkout_buttons > input").click()

    // Será direcionado para a página de Checkout: Overview
    cy.visit("https://www.saucedemo.com/v1/checkout-step-two.html")

    // Clicar no botão FINISH
    cy.get('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button').click()
})
})








