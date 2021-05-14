use users;

DELIMITER $$
drop PROCEDURE if exists `spFetchUser`;
create procedure `spFetchUser`(IN INemail VARCHAR(100))
BEGIN
select u.userID,u.firstName,u.lastName,u.email,u.`password`,u.roleID,u.orgID,ur.`name` as roleName, o.name as orgName from users.users u JOIN users.userRoles ur on ur.roleID = u.roleID JOIN organizations.orgs o on o.orgID = u.orgID where u.email = INemail;
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
IN INorgID int)
BEGIN
INSERT into users.users values (INfirstName,INlastName,INemail,INpassword,INroleID,INorgID);

END$$

DELIMITER ;






select * from userRoles

update users set roleID = 2
update users set orgID = 6


insert into userRoles (name) values ("Admin"),("Employee"), ("Engineer")


CALL spFetchUser(4)