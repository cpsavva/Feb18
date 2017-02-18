'use strict'


const mysql = require('mysql');
var connection = mysql.createConnection ({

	host: "localhost",
	port: 3306,

	user: "root",
	
	password: "",
	database: 'top_songDB',

});


///artist search
function artistSearch (){
	inquirer.prompt([
	{
		type: 'input',
		message: 'Please enter artist'
		name: 'artist'
	},

	]).then(artistQuery);
};

function artistQuery(ans){

	connection.query(SELECT * FROM top1000 where artist_name = ?, {artist: ans.artist}, function(err, res) {
		for (i = 0; i<res.length; i++){
			console.log( 'Position: '+ res[i].id +
				' || Song: ' + res[i].song_name + 
				' || Year Release: ' + res[i].year_released)
		}

	});
};



//song search
function songSearch (){
	inquirer.prompt([
	{
		type: 'input',
		message: 'Please enter song'
		name: 'song'
	},

	]).then(songQuery);
};

function songQuery(ans){

	connection.query('SELECT * FROM top1000 where artist_name = ?', ans.song, function(err, res) {
	for (i = 0; i<res.length; i++){
			console.log( 'Position: '+ res[i].id +
				' || Artist: ' + res[i].artist_name + 
				' || Year Release: ' + res[i].year_released)
		}
	});
};


//multiple artist 
function duplicateArtists(){
	connection.query('SELECT artist_name FROM Top1000 GROUP BY artist_name HAVING count(*)>1', function(err, res) {
	for (i = 0; i<res.length; i++){
			console.log( 'Position: '+ res[i].id +
				' || Artist: ' + res[i].artist_name + 
				' || Song: ' + res[i].song_name + 
				' || Year Release: ' + res[i].year_released)
		}
	});
};




//year query
function yearRange(){
	inquirer.prompt([
	{
		type: 'input',
		message: 'Please enter starting year'
		name: 'year1'
	},
	{
		type: 'input',
		message: 'Please enter ending year'
		name: 'year2'
	}

	]).then(yearQuery);

}

function yearQuery(ans){
	var substitutions = [ans.year1, ans.year2] 
 	connection.query('WHERE year_released BETWEEN ? and ?', substitutions, function(err, res){
 		for (i = 0; i<res.length; i++){
			console.log( 'Position: '+ res[i].id +
				' || Artist: ' + res[i].artist_name + 
				' || Song: ' + res[i].song_name + 
				' || Year Release: ' + res[i].year_released)
		}
 	}
};


module.exports = {artistSearch, songSearch, duplicateArtist, yearRange}


