use news;

DELIMITER $$


create procedure `spGetNews`(IN INorgID int)
BEGIN
select * from articles where orgID = INorgID;
END$$

DELIMITER ;


CALL spGetNews(1)