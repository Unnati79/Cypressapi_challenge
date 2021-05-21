
describe('API Automation', () => {
    
   
        it('get request' ,() => {

        

        cy.request( {
            method : 'GET',
            url : 'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false',
        }).then((response)=> {
            expect(response.body).has.property("Name", "Carbon credits")
            expect(response.body).has.property("CanRelist", true)
            expect(response.body.Promotions[1].Name).to.equal("Gallery")
            expect(response.body.Promotions[1].Description).to.contains("2x larger image")
        
        })
    })
})