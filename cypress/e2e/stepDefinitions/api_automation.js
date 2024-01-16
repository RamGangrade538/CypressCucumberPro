import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ApiDatapage from "../PageObject/ApiDatapage";


Given("User is able to open Website", () => {
  // cy.visit("https://reqres.in/");
});

Then("User Create the Employee Data", () => {
  ApiDatapage.createEmployee();
});
Then("User Select the Employee Data", () => {
  ApiDatapage.selectEmployee();
});
Then("User Update the Employee Data", () => {
  ApiDatapage.updateEmployee();
});
Then("User Delete the Employee Data", () => {
  ApiDatapage.deleteEmployee();
});
