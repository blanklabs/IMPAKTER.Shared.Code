import { Certificate, CertificateDocument } from "./certificateObjects.js"

/*
const compute = require("../../Utilities/compute");
const sdgs = require("../../Constants/sdgs");
const industries = require("../../Constants/industries");
*/

export default class CertificateObject {
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
    documents = [new CertificateDocument()]
}

//module.exports = certificateModel