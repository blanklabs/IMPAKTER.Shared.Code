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

//module.exports = {Transport, codes }
export { Transport, transportCodes }