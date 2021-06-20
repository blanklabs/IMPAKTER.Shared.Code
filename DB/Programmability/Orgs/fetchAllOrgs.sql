use organizations;

drop procedure if exists `fetchAllOrgs`;
DELIMITER $$

create procedure `fetchAllOrgs`(IN INtypeID tinyint)
BEGIN
select orgID,name from organizations.orgs where typeID = INtypeID or INtypeID = 0;
END$$

DELIMITER ;


CALL fetchAllOrgs(0)
