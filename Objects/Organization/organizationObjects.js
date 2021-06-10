
class Organization {
    name = ""
    orgID = null
    url = ""
    type = ""
    description = "NA"
    longDescription = "NA"
    logoUrl = ""
}


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


export { Organization, OrgCommunication, OrgFinancial, OrgSustainability, OrgDocument }