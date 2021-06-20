use users;



DELIMITER $$
drop PROCEDURE if exists `spFetchUser`;
create procedure `spFetchUser`(IN INemail VARCHAR(100), IN INuserID int, IN INfirstName VARCHAR(100),IN INlastName VARCHAR(100))
BEGIN
select u.userID,u.firstName,u.lastName,u.email,u.`password`,u.roleID,u.orgID, o.name as orgName, ui.roleInOrg from users.users u JOIN organizations.orgs o on o.orgID = u.orgID JOIN users.userInformation ui on ui.userID = u.userID where u.email = INemail or u.userID = INuserID or (u.firstName = INfirstName and u.lastName = INlastName);
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
Declare insertId int default 0;
INSERT into users.users (firstName,lastName,email,password,roleID,orgID) values (INfirstName,INlastName,INemail,INpassword,IFNULL(INroleID, 1), IFNULL(INorgID, 1));
SELECT LAST_INSERT_ID() into insertId;
INSERT INTO users.userInformation values (insertId,INroleInOrg);
SELECT insertId;

END$$

DELIMITER ;





 
 

CALL spFetchUser('s@impakter.com',0,"","");
CALL spFetchUser('',25,"","");
CALL spFetchUser('',0,"Ar","aaa");


CALL spAddUser('Ara','Vind','ara@vind.com','wadasf',NULL,NULL,'now');


SELECT LAST_INSERT_ID();
