select * from certificates;
select * from certificate_sdg;
select * from certificate_sdgTarget;


select * from certificateOrganizations;

CALL spAddCertificate("Test Certificate",1,"Certificate Desc");

insert into certificateOrganizations (organizationID,name) Values ("YWIEMCAHGKDGKURSCE","Rain Forest Alliance");
insert into certificateOrganizations (organizationID,name) Values ("UYUOPEWRNYUWEOVASD","B CORP");
truncate table certificateOrganizations;

select * from indexCertificates.certificateOrganizations;


Use organizations;
insert into orgs (accessToken,name) Values ("YWIEMCAHGKDGKURSCE","Rain Forest Alliance");
insert into orgs (accessToken,name) Values ("UYUOPEWRNYUWEOVASD","B CORP");
insert into orgs (accessToken,name) Values ("SIOYRWEOFVZSALDSDF","USDA Organic");
insert into orgs (accessToken,name) Values ("WQWPERREHFLDSSGDLG","BON SUCRO");
insert into orgs (accessToken,name) Values ("EOIRWINSDFSDFDSPEW","Forest Stewardship Council");

select * from orgs;
