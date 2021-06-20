import {Organization} from "../Organization/organizationObjects.js"
import {User, UserInformation} from "./userObjects.js"


export default class UserObject {
    user = new User()
    userInformation = new UserInformation()
    organization = new Organization()
}