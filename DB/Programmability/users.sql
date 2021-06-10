use users;



DELIMITER $$
drop PROCEDURE if exists `spFetchUser`;
create procedure `spFetchUser`(IN INemail VARCHAR(100), IN INuserID int)
BEGIN
select u.userID,u.firstName,u.lastName,u.email,u.`password`,u.roleID,u.orgID, o.name as orgName, ui.roleInOrg from users.users u JOIN organizations.orgs o on o.orgID = u.orgID JOIN users.userInformation ui on ui.userID = u.userID where u.email = INemail or u.userID = INuserID;
END$$

DELIMITER ;



use users;

DELIMITER $$
drop PROCEDURE if exists `spAddUser`;
create procedure `spAddUser`(
IN INfirstName VARCHAR(100),
IN INlastName VARCHAR(100),
IN INemail VARCHAR(100),
IN INpassword VARCHAR(500),
IN INroleID tinyint,
IN INorgID int,
IN INroleInOrg varchar(200))
BEGIN

INSERT into users.users (firstName,lastName,email,password,roleID,orgID) values (INfirstName,INlastName,INemail,INpassword,IFNULL(INroleID, 1), IFNULL(INorgID, 1));
INSERT INTO users.userInformation values(LAST_INSERT_ID(),INroleInOrg);
SELECT LAST_INSERT_ID();

END$$

DELIMITER ;





 
 

CALL spFetchUser('A',0);

CALL spAddUser('Ara','Vind','ara@vind.com','wadasf',NULL,NULL,'now');


SELECT LAST_INSERT_ID();
