use `index`;

DELIMITER //

CREATE PROCEDURE spAddCertificate(in_name  varchar(200),in_organizationID int,in_description text)
BEGIN
    insert into certificates (name, organizationID, description) values (in_name,in_organizationID,in_description);

end//

DELIMITER ;

