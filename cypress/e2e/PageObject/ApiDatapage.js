const ApiDatapage = {
    createEmployee() {
    cy.fixture('user.json').then((userData) => {
    cy.request({
      method: "POST",
      url: "https://dummy.restapiexample.com/api/v1/create",
      body: userData,
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
      //string response
      const responseBodyString = JSON.stringify(response.body, null, 2);
      cy.log("API Response Body:", responseBodyString);

      expect(response.body.data).to.have.property("name", "test");
      expect(response.body.data).to.have.property("salary", "123");

      const createdUserId = response.body.id;

      const responseBody = JSON.parse(responseBodyString);
      if (responseBody.data && responseBody.data.id) {
        window.userId = responseBody.data.id;
        cy.log("user id is :" + userId);
        expect(userId, "User ID is not missing").to.exist;
      } else {
        cy.log("User ID is missing");
      }
    });
})
  },

  selectEmployee() {
    cy.request({
      method: "GET",
      url: `https://dummy.restapiexample.com/api/v1/employee/${userId}`,
      failOnStatusCode: false,
    }).then((response) => {
      cy.log("API Response:", response);
      expect(response.status).to.eq(200);
      expect(userId, "User ID is missing").to.exist;
    });
  },

  updateEmployee(updatedData) {
    cy.request({
      method: "PUT",
      url: `https://reqres.in/api/users/${userId}`,
      body: updatedData,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  },
  deleteEmployee() {
    cy.request({
      method: "DELETE",
      url: `https://reqres.in/api/users/${userId}`,
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  },
};

export default ApiDatapage;
