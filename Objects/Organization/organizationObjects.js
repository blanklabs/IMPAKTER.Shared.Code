
class OrgCommunication {
    email = ""
    phone = ""
    twitterUrl = ""
    facebookUrl = ""
    instagramUrl = ""
    videoUrl = ""

}

class OrgFinancial {
    revenue = ""
    ticker = ""
    stockMarket = ""
}

class OrgSustainability {
    sdgs = []
    sdgTargets = []
}

class OrgDocument {
    name = null
    url = null
    language = null
}
const organizationCases = {
    NEW: "NEW",
    UPDATE: "UPDATE"
}

export { organizationCases, OrgCommunication, OrgFinancial, OrgSustainability, OrgDocument }