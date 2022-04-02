DROP DATABASE IF EXISTS drive_sound;
create database drive_sound;
use drive_sound;
create table user_info(
	user_id			int(5)    	 primary key,
    user_username	varchar(45)  not null,
    user_email		varchar(50)  not null,
    user_pass		varchar(50)  not null,
    user_fname		varchar(45)	 not null,
    user_lname		varchar(45)	 not null,
    user_bdate		datetime	 not null,
    user_tel		varchar(10)  not null,
    user_role		char(1)		 not null,
    user_bio		varchar(1000) 
);
insert into user_info(user_id,user_username,user_email,user_pass,user_fname,user_lname,user_bdate,user_tel,user_role,user_bio) VALUES
(00001,'Steve_Jo','steve_jolington@gmail.com','Sjo12345','Steve','Jolington','1985-1-20','0919998877','u','I am one of music lover and I want to share my opinion in many sound that I know'),
(00002,'PPan01','peter_p@gmail.com','Ppan_01','Peter','Pan','1980-6-10','0834455667','a','My rating 4-5 - special/like my life, 3 - It great but not the best for me, 2 - just good, 0 - 1 - not ok for me'),
(00003,'Li_Lo','lily_lon@gmail.com','Llon_zaza007','Lily','Lonatta','2002-10-20','0889988776','u','Satit to Muict, like photograhpy and drawing ^^');

create table login_info(
	login_email		varchar(50)  primary key,
    login_userid	int(5)		 not null,
    login_pass		varchar(50)  not null,
    login_role		char(1)		 not null,
    login_log   	varchar(100) not null,
    FOREIGN KEY (login_userid) REFERENCES user_info(user_id),
    FOREIGN KEY (login_email) REFERENCES user_info(user_email),
    FOREIGN KEY (login_pass) REFERENCES user_info(user_pass),
    FOREIGN KEY (login_role) REFERENCES user_info(user_role)
);

insert into user_Login(login_email,login_userid,login_pass,login_role,login_log) VALUES
('steve_jolington@gmail.com',00001,'Sjo12345','u','steve_jolington@gmail.com - 192-123-267-1 - 20/3/2022 7:52pm'),
('peter_p@gmail.com',00002,'Ppan_01','a','peter_p@gmail.com - 192-168-167-1 - 19/3/2022 8:02am'),
('peter_p@gmail.com',00002,'Ppan_01','a','peter_p@gmail.com - 192-168-167-1 - 20/3/2022 3:02pm');

Create table playlist(
	playlist_id			int(5)			primary key,
    playlist_title		varchar(100)	not null,
    playlist_bywho		varchar(45)	not null,
    FOREIGN KEY (playlist_bywho) REFERENCES user_info(user_username)
);
INSERT INTO playlist(playlist_id,playlist_title,playlist_bywho) values
(10001,'myplaylist','Steve_Jo'),
(10002,'Lighten Up ','PPan01'),
(10003,'Supportive list','Li_Lo');

create table song_info(
	song_id				int(8)		 	primary key,
	song_name			varchar(20)  	not null,
    song_produced_date	date		 	not null,
    song_rating			int(1)		 	not null,
    song_brand		   	varchar(20)  	,
    song_solo_musician	varchar(20)		,
    song_type_song		varchar(20)		,
    song_detail			varchar(1000)	,
    song_chord			varchar(1000)	,
    song_lyric			varchar(1000)	,
    song_album			varchar(100)	
);
insert into song_info(song_id,song_name,song_produced_date,song_rating,song_brand,song_solo_musician,song_type_song,song_detail,song_chord,song_lyric,song_album) VALUES
(00000001,'Sugar','2015-1-13','4','Maroon 5',null,'Pop','"Sugar" is a song recorded by American band Maroon 5 ..........',null,null,'V'),
(00000002,'Imagine','1971-9-9','4',null,'John Lennon','Rock','Imagine is the second studio album by English musician John Lennon, released on 9 September 1971 by Apple Records...........',null,null,'Imagine'),
(00000003,'Blinding light','2019-11-29','4',null,'The Weeknd','Electropop','"Blinding Lights" is a song by Canadian singer-songwriter the Weeknd. It was released on November 29, 2019,..........',null,null,'After Hours'),
(00000004,'Sugar2','2019-11-29','4',null,'The Weeknd','Electropop','"Blinding Lights" is a song by Canadian singer-songwriter the Weeknd. It was released on November 29, 2019,..........',null,null,'After Hours');

create table user_like(
	userid			int(5)		not null,
    songid			int(8)		not null,
	FOREIGN KEY (userid) REFERENCES user_info(user_id),
    FOREIGN KEY (songid) REFERENCES song_info(song_id)
);

ALTER TABLE user_like
  ADD PRIMARY KEY (userid,songid);
  
insert into user_like(userid,songid) VALUES
(00001,00000001),
(00001,00000002),
(00003,00000003);

create table user_listened(
	userid			int(5)		not null,
    songid			int(8)		not null,
	FOREIGN KEY (userid) REFERENCES user_info(user_id),
    FOREIGN KEY (songid) REFERENCES song_info(song_id)
);

ALTER TABLE user_listened
  ADD PRIMARY KEY (userid,songid);
  
insert into user_listened(userid,songid) VALUES
(00003,00000003),
(00003,00000002),
(00001,00000001);

create table user_listen_later(
	userid			int(5)		not null,
    songid			int(8)		not null,
	FOREIGN KEY (userid) REFERENCES user_info(user_id),
    FOREIGN KEY (songid) REFERENCES song_info(song_id)
);

ALTER TABLE user_listen_later
  ADD PRIMARY KEY (userid,songid);
  
insert into user_listen_later(userid,songid) VALUES
(00002,00000002),
(00002,00000001),
(00001,00000003);

create table add_song_to_playlist(
	playlistid		int(5)		not null,
    songid			int(8)		not null,
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
	userid			int(5)		not null,
    playlistid		int(5)		not null,
    FOREIGN KEY (userid) REFERENCES user_info(user_id),
	FOREIGN KEY (playlistid) REFERENCES playlist(playlist_id)
);

ALTER TABLE user_add_playlist
  ADD PRIMARY KEY (userid,playlistid);
  
insert into user_add_playlist(userid,playlistid) VALUES
(00003,10001),
(00003,10002),
(00001,10003);

