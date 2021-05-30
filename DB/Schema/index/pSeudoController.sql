select * from certificates;
select * from certificate_sdg;
select * from certificate_sdgTarget;


select * from certificateOrganizations;

CALL spAddCertificate("Test Certificate",1,"Certificate Desc");

insert into certificateOrganizations (organizationID,name) Values ("YWIEMCAHGKDGKURSCE","Rain Forest Alliance");
insert into certificateOrganizations (organizationID,name) Values ("UYUOPEWRNYUWEOVASD","B CORP");
truncate table certificateOrganizations;

select * from indexCertificates.certificateOrganizations;




update certificates set organizationID = 6


use `index`;
insert into certificates (name,orgID,status) values ("Chain of Custody",6);
insert into certificates (name,orgID,status) values ("Pesticide Free",6,1);
insert into certificates (name,orgID,status) values ("Creulty Free",6,2);
insert into certificates (name,orgID,status) values ("B Corp",6,1);