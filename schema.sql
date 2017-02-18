CREATE DATABASE top_songDB;

USE top_songDB;

CREATE TABLE top1000 (
	id INT PRIMARY KEY,
	artist_name VARCHAR(100) NOT NULL,
	song_name VARCHAR(100) NOT NULL,
	year_released INT(4) NULL,
	global_pop DECIMAL(10,4) NULL,
	us_pop DECIMAL(10,4) NULL,
	uk_pop DECIMAL(10,4) NULL,
	eur_pop DECIMAL(10,4) NULL,
	row_pop DECIMAL(10,4) NULL
);

