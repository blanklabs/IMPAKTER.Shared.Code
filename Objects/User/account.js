const loginCases = {
    NEWUSER: "NEWUSER",
    FAILEDLOGIN: "FAILEDLOGIN",
    INCORRECTPASSWORD: "INCORRECTPASSWORD",
    SUCCESS: "SUCCESS"
}

const signupCases = {
    EXISTING: "EXISTING",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED"
}

const updateCases = {
    SUCCESS: "SUCCESS",
    FAILED: "FAILED"
}

const loginMessages = {
    NEWUSER: "NEWUSER",
    FAILEDLOGIN: "FAILEDLOGIN",
    SUCCESS: "SUCCESS"
}

const signupMessages = {
    EXISTING: "You are already signed up. Please sign in instead",
    SUCCESS: "SUCCESS",
    FAILED: "Something went wrong. Please retry"
}



export { loginCases, signupCases, updateCases, loginMessages, signupMessages }

//module.exports = { loginCases, signupCases }