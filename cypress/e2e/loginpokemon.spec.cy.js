describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         // Переходим на сайт
         cy.visit('https://pokemonbattle.me/');
         
         // Вводим логин и пароль
         cy.get('input[type="email"]').type('USER_LOGIN');
         cy.get('input[type="password"]').type('USER_PASS');
         cy.get('button[type="submit"]').click();
         
         // Переходим в Магазин
         cy.get('.header__btns > [href="/shop"]').click();
         
         // Ищем доступный аватар и покупаем его
         cy.get('.available > button').first().click();
         
         // Вводим данные карты
         cy.get('.credit').type('4620869113632996');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_date').type('1225');
         cy.get('.k_input_name').type('NAME');
         
         // Подтверждаем оплату
         cy.get('.pay-btn').click();
         
         // Вводим код подтверждения СМС
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         
         // Проверяем успешность покупки
         cy.contains('Покупка прошла успешно').should('be.visible');
     });
 });