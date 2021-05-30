use news;

DELIMITER $$
 drop procedure if exists `spGetNews`;

create procedure `spGetNews`(IN INorgID int)
BEGIN
select a.articleID,a.title,a.image,a.url,a.summary,a.datetime,a.keywords,s.`name` as sourceName from articlesTemp a join sources s on a.sourceID = s.sourceID where a.articleID in (select articleID from article_org where article_org.orgID = INorgID);
END$$

DELIMITER ;


CALL spGetNews(6)

