use `index`;

DELIMITER //

CREATE PROCEDURE spGetCertificates(in_organizationID int)
BEGIN
    select c,certificateID, c.name as certificateName
    from index.certificates c JOIN index.certificate_sdg cs on c.certi
    
    
    
    

end//

DELIMITER ;
