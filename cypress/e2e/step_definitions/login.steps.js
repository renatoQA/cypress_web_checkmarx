import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import homePage  from "../../pages/homePage";

// Sign-In:
Given("I am logged into the website", function () {
  cy.visit("/");
  const userName = Cypress.env("USERNAME");
  const password = Cypress.env("PASSWORD");
  homePage.loginOption();
  loginPage.loginUserName(userName);
  loginPage.loginPassword(password);
  loginPage.loginSubmitBtn();
});

