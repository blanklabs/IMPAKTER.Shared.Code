delete from articles

select * from articles where orgID = 1

insert into articles (articleID,sourceID,categoryID,orgID,title,url,summary,content,image)values (13,1,1,6,"Seamore: Could Seaweed Become a Common Source of Sustainable Food?","https://impakter.com/","Summary of the Article 1","Content of the article 1","https://cdn.impakter.com/wp-content/uploads/2019/06/60765379_2525236357703804_387464599093379072_n.jpg"), (14,1,1,6,"Cameroon and the Fight Against Climate Change","https://impakter.com/cameroon-climate-change/","Summary of the Article 2","Content of the article 2","https://cdn.impakter.com/wp-content/uploads/2019/08/mount-cameroon-1489500_1280.jpg")

insert into articles (articleID,sourceID,categoryID,orgID,title,url,summary,content,image)values (8,1,1,6,"From Hardwear to Quickwear: The Evolution of the Apparel Industry","https://impakter.com/from-hardwear-to-quickwear-the-evolution-of-the-apparel-industry/","The apparel industry is perhaps the oldest and most important industry in the economic history of the western world. In fact, unidentified bird bones have been found to be used as sewing needles as early as 50,000 BC. Throughout history, humanity ","Content of the article 5","https://cdn.impakter.com/wp-content/uploads/2021/04/pexels-karolina-grabowska-5717963.jpg")

insert into articles (articleID,sourceID,categoryID,orgID,title,url,summary,content,image)values (9,1,1,6,"Sample Article 3","https://impakter.com/","Summary of the Article 3","Content of the article 3"), (10,1,1,6,"Sample Article 4","https://impakter.com/","Summary of the Article 4","Content of the article 4","")




select * from articlesTemp a join article_org o on a.articleID = o.articleID where o.orgID = 1 limit 10;

select * from article_org where orgID = 1;

select * from articlesTemp limit 10;


alter articlesTemp add COLUMN title VARCHAR(250) after articleID;


update articlesTemp set image = "https://i.stack.imgur.com/y9DpT.jpg"
update articlesTemp set title = "Title of the article"




update sources set credibility = 0

#forbes
update sources set credibility = 1 where sourceID in (46,1073)

select * from sources order by name