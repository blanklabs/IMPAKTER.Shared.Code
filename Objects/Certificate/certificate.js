
import compute from "../../Utilities/compute.js"
import { sdgs } from "../../Constants/sdgs.js"
import { industries } from "../../Constants/industries.js"


/*
const compute = require("../../Utilities/compute");
const sdgs = require("../../Constants/sdgs");
const industries = require("../../Constants/industries");
*/

export default class certificateModel {

constructor() {
        this.mode = ""
        this.certificateID = null
        this.organizationID = null
        this.name = ""
        this.description = ""
        this.priority = null
        this.applicationLength = ""
        this.imagePath = ""
        this.difficulty = null
        this.relevance = null
        this.validity = null
        this.region = null
        this.countries = []
        this.goal = null
        this.rating = "P3"
        this.pricing = ""
        this.sdgEngagement = ""
        this.sdgs = []
        this.sdgTargets = []
        this.industries = []
        this.industrySectors = []
        this.activeStatus = true
        this.computedPriority = null
        this.computedSdgs = []
        this.computedIndustries = []
        this.documents = null;

}

    setOrganizationID(id) {
        this.organizationID = id
    };

    getCertificatePayload() {
        return {
            mode: this.mode,
            certificateID: this.certificateID,
            basicDetails: {
                name: this.name,
                organizationID: this.organizationID,
                description: this.description,
                priority: this.priority,
                activeStatus: this.activeStatus,
                sdgEngagement: this.sdgEngagement,
                applicationLength: this.applicationLength,
                difficulty: this.difficulty,
                relevance: this.relevance,
                validity: this.validity,
                goal: this.goal,
                specificity: this.rating,
                pricing: this.pricing
            },
            sdgs: this.sdgs,
            sdgTargets: this.sdgTargets,
            industries: this.industries,
            industrySectors: this.industrySectors,
            documents: this.documents,
            additionalDetails: {
                applicationLength: this.applicationLength,
                difficulty: this.difficulty,
                relevance: this.relevance,
                validity: this.validity,
                goal: this.goal,
                specificity: this.rating,
                pricing: this.pricing
            },
            computedDetails: {
                computedActiveStatus: this.computedActiveStatus,
                computedSdgs: this.computedSdgs
            }
        }




    }
    change(certificateResponseObj) {
        this.certificateID = certificateResponseObj.details.certificateID
        this.name = certificateResponseObj.details.name
        this.organizationID = certificateResponseObj.details.organizationID
        this.description = certificateResponseObj.details.description
        this.priority = certificateResponseObj.details.priority
        this.sdgEngagement = certificateResponseObj.details.sdgEngagement
        this.activeStatus = compute.convertFromBool(certificateResponseObj.details.activeStatus)
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

    computeSdgs() {
        this.computedSdgs = []
        this.sdgs.forEach(
            sdg => {
                var temp = sdgs.filter(function (item) {
                    return item.value == sdg;
                })
                this.computedSdgs.push(temp[0])

            })
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