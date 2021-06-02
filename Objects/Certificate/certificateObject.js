
import compute from "../../Utilities/compute.js"
import { industries } from "../../Constants/Common/industries.js"
import Certificate from "./certificate.js"
import { document } from "./certificateObjects.js"

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
}

//module.exports = certificateModel