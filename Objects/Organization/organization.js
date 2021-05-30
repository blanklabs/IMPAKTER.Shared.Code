export default class Organization {
    name = ""
    orgID = null
    accessToken = ""
    industries = []
    countryID = null
    url = ""
    description = "NA"
    email = ""
    phone = ""
    logo = ""
    revenue = ""
    ticker = ""
    stockMarket = ""
    twitterUrl = ""
    facebookUrl = ""
    instagramUrl = ""




    map(organizationResponseObj) {
        this.name = organizationResponseObj.name
        this.organizationID = organizationResponseObj.organizationID
        this.accessToken = organizationResponseObj.organizationID
        this.website = organizationResponseObj.website
    }

}


//module.exports = organizationModel