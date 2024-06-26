export class LoginPage {
  // Steps Login com sucesso

  visitHomePage() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
  // Criação de exceções e utilização correta dos Metodos(funções)
  enterUserName() {
    cy.get('input[name="username"]').type("Admin");
  }

  enterPassword() {
    cy.get('input[type="password"]').type("admin123");
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  // Assertions

  LoginSuccessfully() {
    cy.get("p.oxd-text[data-v-7b563373][data-v-133d244a]").should(
      "contain",
      "Time at Work"
    );
  }

  // Steps Login com falha

  EnterInvalidName() {
    cy.get('input[name="username"]').type("Admi");
  }

  invalidCredentials() {
    cy.get(
      "p.oxd-text.oxd-alert-content-text[data-v-7b563373][data-v-87fcf455]"
    ).should("contain", "Invalid credentials");
  }

  shouldContainRequiredFields() {
    cy.get(".oxd-input-group > .oxd-text").should("contain", "Required");
  }

  // Steps Reset Password
  clickForgotPassword() {
    cy.get(".orangehrm-login-forgot > .oxd-text").click();
  }

  ButtonConfirmResetPassword() {
    cy.get(
      "button.oxd-button.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset[data-v-10d463b7][data-v-76e562c4]"
    ).click();
  }
  ValidMessageReset() {
    cy.get(".orangehrm-forgot-password-title").should(
      "contain",
      "Reset Password link sent successfully"
    );
  }

  ValidResetPassword() {
    cy.get(
      "h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title[data-v-7b563373][data-v-18892c44]"
    ).should("contain", "Reset Password link sent successfully");
  }

  // Clear input box
  loginClearInputBox() {
    cy.get(this.username_textbox).clear().get(this.password_textbox).clear();
  }
}
