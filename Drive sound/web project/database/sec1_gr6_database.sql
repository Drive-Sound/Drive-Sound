ALTER USER 'root'@'localhost' IDENTIFIED BY '';
DROP DATABASE IF EXISTS sec1_gr6_database;
create database sec1_gr6_database;
use sec1_gr6_database;
create table user_info(
	user_id			int   		 primary key,
    user_username	varchar(45)  not null,
    user_fname		varchar(45)	 not null,
    user_lname		varchar(45)	 not null,
    user_bdate		datetime	 not null,
    user_tel		varchar(10)  not null,
    user_bio		varchar(1000) 
);
insert into user_info(user_id,user_username,user_fname,user_lname,user_bdate,user_tel,user_bio) VALUES
(1,'Steve_Jo','Steve','Jolington','1985-1-20','0919998877','I am one of music lover and I want to share my opinion in many sound that I know'),
(2,'PPan01','Peter','Pan','1980-6-10','0834455667','My rating 4-5 - special/like my life, 3 - It great but not the best for me, 2 - just good, 0 - 1 - not ok for me'),
(3,'Li_Lo','Lily','Lonatta','2002-10-20','0889988776','Satit to Muict, like photograhpy and drawing ^^');

Create table `users_login` (
`id`         int            NOT NULL primary key auto_increment,
`name`         varchar(45)       ,
`email`        varchar(255)    ,
`password`     varchar(255)    ,
`time`         TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`role`			char(1)
)engine = InnoDB ;

insert into `users_login`(`id`,`name`,`email`,`password`,`time`,`role`) values
(1,'DriveAdmin','checkadmin@gmail.com','$2b$12$PC0baSobOzEYRVgfsobv8.LKMMZ3/zgnEjUyCBqUvu7kWRxWL1gdy','2022-04-03 22:46:38','a'),
(2,'DriveAdmin2','checkadmin2@gmail.com','$2b$12$PC0baSobOzEYRVgfsobv8.LKMMZ3/zgnEjUyCBqUvu7kWRxWL1gdy','2022-04-03 22:46:38','a'),
(3,'DriveUser1','checkuser@gmail.com','$2b$12$PC0baSobOzEYRVgfsobv8.LKMMZ3/zgnEjUyCBqUvu7kWRxWL1gdy','2022-04-03 22:46:38','u');
update `users_login` set role = 'a' where id = 2;
Create table playlist(
	playlist_id			int				primary key,
    playlist_title		varchar(100)	not null,
    playlist_bywho		varchar(45)		not null
);
INSERT INTO playlist(playlist_id,playlist_title,playlist_bywho) values
(10001,'myplaylist','Steve_Jo'),
(10002,'Lighten Up ','PPan01'),
(10003,'Supportive list','Li_Lo');

create table song_info(
	song_id				int		 		primary key,
	song_name			varchar(20)  	not null,
    song_produced_date	date		 	,
    song_rating			int		 		,
    song_brand		   	varchar(20)  	,
    song_solo_musician	varchar(20)		,
    song_type_song		varchar(20)		,
    song_detail			varchar(1000)	,
    song_chord			varchar(1000)	,
    song_lyric			varchar(1000)	,
    song_album			varchar(100)	,
    song_photo			varchar(1000)	,
    song_count_join		int				DEFAULT 0 not null,
    song_inapp_date	    date			not null
);
insert into song_info(song_id,song_name,song_produced_date,song_rating,song_brand,song_solo_musician,song_type_song,song_detail,song_chord,song_lyric,song_album,song_photo,song_count_join,song_inapp_date) VALUES
(00000001,'Sugar','2015-1-13','4','Maroon 5',null,'Pop','"Sugar" is a song recorded by American band Maroon 5 ..........','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/chord/sugar.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/lylics/sugar.png','V','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/cover%20song/sugar.jpg','0','2022-1-13'),
(00000002,'Imagine','1971-9-9','4',null,'John Lennon','Rock','Imagine is the second studio album by English musician John Lennon, released on 9 September 1971 by Apple Records...........','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/chord/imagine.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/lylics/imagine.png','Imagine','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/cover%20song/imagine.jpg','0','2022-1-15'),
(00000003,'Blinding light','2019-11-29','4',null,'The Weeknd','Electropop','"Blinding Lights" is a song by Canadian singer-songwriter the Weeknd. It was released on November 29, 2019,..........','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/chord/blinding%20light.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/lylics/blinding%20light.png','After Hours','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/project_p3/Drive%20sound/web%20project/public/images/cover%20song/blinding%20light.jpg','0','2022-1-10'),
(00000004,'Beige','2017-06-16','3',null,'Yoke Lore','Indie','Its an attempt to be really specific. People say “I love you” all the time and call each other baby and stuff',null,'https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/beige.png','Goodpain EP','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/Beige.jpg','0','2017-09-20'),
(00000005,'Less Than Zero','2022-01-07','5',null,'The Weeknd','R&B','On the track, Abel sings about the way a girl that he used to be romantically involved with perceives him now, as less than zero.','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/chord/LessThanZero.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/lessthanzero.png','Dawn FM','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/Less_Than_Zero.jpg','0','2022-02-10'),
(00000006,'Super Far','2017-06-28','4','LANY',null,'Indie','is about a long distance relationship that’s coming to an end.','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/chord/superfar.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/superfar.png','LANY','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/SuperFar.jpg','0','2017-09-20'),
(00000007,'Big lie','2016-12-09','4',null,'Post Malone','Hip-Hop','comparing his fame and money to those around him, and saying that their accomplishments are miniscule in comparison to his.',null,'https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/biglie.png','Beerbongs & bentleys','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/beerbongs.jpg','0','2017-01-01'),
(00000008,'Stand by Me','2000-11-13','5','Oasis',null,'Rock','Noel Gallagher claims to have written the song whilst suffering from food poisoning when he first moved to London.','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/chord/standbyme.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/standbymy.png','Be Here Now','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/standbyme.jpg','5','2017-01-01'),
(00000009,'Live Forever','1994-08-08','5','Oasis',null,'Rock','This song was written when Noel was working as a construction worker and he had some down time to write songs.','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/chord/liveforever.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/liveforever.png','Definitely Maybe','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/liveforever.jpg','0','2017-01-01'),
(00000010,'Save Your Tears','2020-03-20','4',null,'The Weeknd','R&B',' addresses his past relationships and recollects on the experiences they went through together,','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/chord/saveyourtear.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/saveyoutears.png','After Hours','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/Img.8.jpg','0','2020-04-01'),
(00000011,'Stay','2018-04-27','3',null,'Post Malone','R&B','The song is about Post’s struggle to maintain a relationship with a girl. It’s possible Post wrote this song during the short time','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/chord/stay.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/stay.png','Beerbongs & bentleys','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/beerbongs.jpg','0','2018-05-01'),
(00000012,'Creep','1992-09-21','5','Radiohead',null,'Alternative','tells the tale of an inebriated man who tries to get the attention of a woman to whom he is attracted by following her around.','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/chord/creep.png','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/lylics/creep.png','Pablo Honey','https://raw.githubusercontent.com/Drive-Sound/Drive-Sound/Picture-Patch1/public/images/cover%20song/creep.jpg','0','2017-01-01')
;

create table user_like(
	userid			int  		not null,
    songid			int			not null,
	FOREIGN KEY (userid) REFERENCES `users_login`(`id`),
    FOREIGN KEY (songid) REFERENCES song_info(song_id)
);

ALTER TABLE user_like
  ADD PRIMARY KEY (userid,songid);

insert into user_like(userid,songid) VALUES
(1,00000001),
(2,00000002),
(2,00000003);

create table user_listened(
	userid			int			not null,
    songid			int			not null,
	FOREIGN KEY (userid) REFERENCES `users_login`(`id`),
    FOREIGN KEY (songid) REFERENCES song_info(song_id)
);

ALTER TABLE user_listened
  ADD PRIMARY KEY (userid,songid);
  
insert into user_listened(userid,songid) VALUES
(1,00000003),
(2,00000002),
(2,00000001);

create table user_listen_later(
	userid			int			not null,
    songid			int			not null,
	FOREIGN KEY (userid) REFERENCES `users_login`(`id`),
    FOREIGN KEY (songid) REFERENCES song_info(song_id)
);

ALTER TABLE user_listen_later
  ADD PRIMARY KEY (userid,songid);
  
insert into user_listen_later(userid,songid) VALUES
(1,00000002),
(2,00000001),
(1,00000003);

create table add_song_to_playlist(
	playlistid		int		not null,
    songid			int		not null,
	FOREIGN KEY (playlistid) REFERENCES playlist(playlist_id),
    FOREIGN KEY (songid) REFERENCES song_info(song_id)
);

ALTER TABLE add_song_to_playlist
  ADD PRIMARY KEY (playlistid,songid);
  
insert into add_song_to_playlist(playlistid,songid) VALUES
(10003,00000003),
(10003,00000002),
(10001,00000001);

create table user_add_playlist(
	userid			int			not null,
    playlistid		int			not null,
    FOREIGN KEY (userid) REFERENCES `users_login`(`id`),
	FOREIGN KEY (playlistid) REFERENCES playlist(playlist_id)
);

ALTER TABLE user_add_playlist
  ADD PRIMARY KEY (userid,playlistid);
  
insert into user_add_playlist(userid,playlistid) VALUES
(2,10001),
(1,10002),
(1,10003);

