describe("Pizza App", ()=>{
    beforeEach(()=> {
        cy.visit("http://localhost:3000/pizza");
    })

    const nameInput = () => cy.get("input[name=name]");
    const sizeInput = () => cy.get("select[name=size]");
    const pineappleInput = () => cy.get("input[name=pineapple]");
    const jalapenoInput = () => cy.get("input[name=jalapeno]");
    const pepperoniInput = () => cy.get("input[name=pepperoni]");
    const baconInput = () => cy.get("input[name=bacon]");
    const orderBtn = () => cy.get(`button[id="order-button"]`);

    it("sanity check", ()=> {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })
    it("The proper elements are showing", ()=> {
        nameInput().should("exist");
        sizeInput().should("exist");
        pineappleInput().should("exist");
        jalapenoInput().should("exist");
        pepperoniInput().should("exist");
        baconInput().should("exist");
        orderBtn().should("exist");

        cy.contains("Add to Order").should("exist");
    })
    describe("Filling out the inputs", ()=> {
        it("can navigate to the site", ()=> {
            cy.url().should("include", "pizza");
        })
        it("Order button starts out disabled", ()=> {
            orderBtn().should("be.disabled");
        })
        it("Can type into input", ()=> {
            nameInput()
                .should("have.value", "")
                .type("Satoshi")
                .should("have.value", "Satoshi");
        })
    })

})