use organizations;

drop procedure if exists `tcGetcertificateOrg`;
DELIMITER $$

create procedure `tcGetcertificateOrg`(IN INorgID int)
BEGIN
select o.orgID,name, url, description, logoUrl,oc.email,oc.phone,oc.address,oc.facebookUrl,oc.twitterUrl,oc.instagramUrl,oc.videoUrl,GROUP_CONCAT( DISTINCT os.sdgID) as sdgs from organizations.orgs o left join organizations.orgCommunication oc on o.orgID = oc.orgID left join index.org_sdg os on o.orgID = os.orgID where o.orgID = INorgID;
END$$

DELIMITER ;


CALL tcGetCertificateOrg(6)
