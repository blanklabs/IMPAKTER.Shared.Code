/*
let organizationModel = require("./Objects/Organization/organization");
let certificateModel = require("./Objects/Certificate/certificate");

module.exports = {certificateModel, organizationModel}
*/

import { organizationModel } from "./Objects/Organization/organization.js";
import certificateModel from "./Objects/Certificate/certificate.js";

export { certificateModel, organizationModel }