# attempts to insert comma demilited string into a table

DROp PROCEDURE if exists SP_SplitString;
DELIMITER //
 CREATE PROCEDURE SP_SplitString(Value longtext)
 BEGIN
 DECLARE front TEXT DEFAULT NULL;
DECLARE frontlen INT DEFAULT NULL;
DECLARE TempValue TEXT DEFAULT NULL;
CREATE temporary TABLE store(
Id int NOT NULL AUTO_INCREMENT,
allValues varchar(30),
PRIMARY KEY(Id)
);
iterator:
 LOOP  
IF LENGTH(TRIM(Value)) = 0 OR Value IS NULL THEN
LEAVE iterator;
END IF;
SET front = SUBSTRING_INDEX(Value,',',1);
 SET frontlen = LENGTH(front);
SET TempValue = TRIM(front);
INSERT INTO store (allValues) VALUES (TempValue);
SET Value = INSERT(Value,1,frontlen + 1,'');
END LOOP;
select allValues from store into @;
DROP TEMPORARY TABLE store;
END //
DELIMITER ;




insert into store call SP_SplitString('Hi,Hello,Good Morning,Bye');

select * from store;



USE index;

DROP PROCEDURE if exists addCertificate;
DELIMITER //
 CREATE PROCEDURE addCertificate(INcertificateID int,sdgs longtext)
 BEGIN
 DECLARE front TEXT DEFAULT NULL;
DECLARE frontlen INT DEFAULT NULL;
DECLARE TempValue TEXT DEFAULT NULL;


iterator:
 LOOP  
IF LENGTH(TRIM(sdgs)) = 0 OR sdgs IS NULL THEN
LEAVE iterator;
END IF;
SET front = SUBSTRING_INDEX(sdgs,',',1);
 SET frontlen = LENGTH(front);
SET TempValue = TRIM(front);
INSERT INTO index.certificate_sdg (certificateID,sdgID) VALUES (INcertificateID,TempValue);
SET Value = INSERT(Value,1,frontlen + 1,'');
END LOOP;


END //
DELIMITER ;

