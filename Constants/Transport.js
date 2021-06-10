class Transport {

    status = {
        code: transportCodes.DEFAULT, case: "", message: ""
    }
    data = {}

    constructor() {

    }


}

const transportCodes = {
    SUCCESS: 1,
    FAILURE: 0,
    DEFAULT: null
}

const generalCases = {
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
    INTERNALERROR: "INTERNALERROR"
}




//module.exports = {Transport, codes }
export { Transport, transportCodes, generalCases }