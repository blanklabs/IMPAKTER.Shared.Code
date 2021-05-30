
import compute from "../../Utilities/compute.js"
import { industries } from "../../Constants/Common/industries.js"
import Certificate from "./certificate"
import { document } from "./certificateObjects"

/*
const compute = require("../../Utilities/compute");
const sdgs = require("../../Constants/sdgs");
const industries = require("../../Constants/industries");
*/

export default class certificateObject {
    constructor(orgID) {
        this.certificate.orgID = orgID;
    }
    certificate = new Certificate()
    regions = []
    countries = []
    sdgs = []
    sdgTargets = []
    industries = []
    industrySectors = []
    documents = [new document()]

    model(certificateResponseObj) {
        this.certificateID = certificateResponseObj.details.certificateID
        this.name = certificateResponseObj.details.name
        this.organizationID = certificateResponseObj.details.organizationID
        this.description = certificateResponseObj.details.description
        this.priority = certificateResponseObj.details.priority
        this.sdgEngagement = certificateResponseObj.details.sdgEngagement
        this.status = certificateResponseObj.details.status
        this.relevance = certificateResponseObj.details.relevance
        this.validity = certificateResponseObj.details.validity
        this.goal = certificateResponseObj.details.goal
        this.pricing = certificateResponseObj.details.pricing
        this.specificity = certificateResponseObj.details.rating
        this.sdgs = certificateResponseObj.sdgs;
        this.sdgTargets = certificateResponseObj.sdgTargets;
        this.industries = certificateResponseObj.industries;
        this.industrySectors = certificateResponseObj.industrySectors;
        this.computedPriority = compute.convertFromScale(certificateResponseObj.details.priority)
        this.documents = certificateResponseObj.documents;

    }



    computeIndustries() {
        this.computedIndustries = []
        this.industries.forEach(
            industry => {
                var temp = industries.filter(function (item) {
                    return item.value == industry;
                })
                this.computedIndustries.push(temp[0])

            })
    }

}

//module.exports = certificateModel