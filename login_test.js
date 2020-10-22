Feature('Login');

Scenario('Login Zero Bank', I => {
  I.amOnPage('/');
  I.click('#signin_button');
  I.seeInCurrentUrl('/login.html');
  I.seeInTitle('Zero - Log in');
  I.fillField('#user_login', 'username');
  I.fillField('#user_password', 'password');
  // pause();
  I.click('Sign in');
  I.seeInTitle('Zero - Account Summary');
  // I.saveScreenshot('loggedIn.jpg');
  I.click('#account_activity_tab');
  I.see('Show Transactions');
  I.selectOption({ xpath: '//select[@id="aa_accountId"]' }, 'Loan');
  I.wait(4);
});
