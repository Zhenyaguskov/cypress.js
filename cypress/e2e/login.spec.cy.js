describe('Login and Password Form Tests', () => {
  const baseUrl = 'https://login.qa.studio';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Positive login case', () => {
    cy.wait(1000); // Ждем 1 секунду для загрузки элементов
    cy.get('#mail').should('be.visible').type('german@dolnikov.ru');
    cy.get('#pass').should('be.visible').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.visible').click();
    cy.contains('Авторизация прошла успешно', { timeout: 10000 }).should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия кнопки крестик
  });

  it('Password recovery logic', () => {
    cy.wait(1000); // Ждем 1 секунду для загрузки элементов
    cy.get('#forgotEmailButton').should('be.visible').click();
    cy.get('#mailForgot').should('be.visible').type('anyemail@example.com');
    cy.get('#restoreEmailButton').should('be.visible').click();
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    cy.get('#message').should('be.visible');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('.link').should('be.visible');
  });

  it('Negative login case: incorrect email', () => {
    cy.wait(1000); // Ждем 1 секунду для загрузки элементов
    cy.get('#mail').should('be.visible').type('wrongemail@dolnikov.ru');
    cy.get('#pass').should('be.visible').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.visible').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#message').should('be.visible');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('.link').should('be.visible');
  });

  it('Negative login case: incorrect email', () => {
    cy.wait(1000); // Ждем 1 секунду для загрузки элементов
    cy.get('#mail').should('be.visible').type('wrongemail@dolnikov.ru');
    cy.get('#pass').should('be.visible').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.visible').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия кнопки крестик
  });

  it('Negative validation case: email without @', () => {
    cy.wait(1000); // Ждем 1 секунду для загрузки элементов
    cy.get('#mail').should('be.visible').type('germandolnikov.ru');
    cy.get('#pass').should('be.visible').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.visible').click();
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
  });

  it('Login with mixed case email', () => {
    cy.wait(1000); // Ждем 1 секунду для загрузки элементов
    cy.get('#mail').should('be.visible').type('german@dolnikov.ru');
    cy.get('#pass').should('be.visible').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.visible').click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия кнопки крестик
  });
});