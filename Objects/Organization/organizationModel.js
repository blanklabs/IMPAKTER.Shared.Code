import Organization from "./organization.js"
import { organizationCases, OrgCommunication, OrgFinancial, OrgSustainability, OrgDocument } from "./organizationObjects.js"

export default class organizationObject {
    constructor(orgID) {
        this.organization.orgID = orgID;
    }
    organization = new Organization()
    orgCommunication = new OrgCommunication()
    orgFinancial = new OrgFinancial()
    orgSustainability = new OrgSustainability()
    regions = []
    countries = []
    industries = []
    industrySectors = []
    documents = [new OrgDocument()]
}