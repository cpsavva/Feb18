const mysql = require('mysql');
const inquirer = require('inquirer');
const queries = require('./queries.js');

var connection = mysql.createConnection ({

	host: "localhost",
	port: 3306,

	user: "root",
	
	password: "",
	database: 'top_songDB',

});


function initApp (){
	inquirer.prompt([
	{
		type: 'checkbox',
		message: "Welcome to the Top 1000 Song Database. What would you like to do out today?",
		choices: ['Find all songs from specific artist',
		 		'Find info for a specific song',
				'Find all artist listed more than once',
		 		'Find all artist from year range'],
		name: 'options'
	}

		]).then(handleInit);
};



function handleInit(initAns){
	switch (initAns.options[0]){
		case 'Find all songs from specific artist':
			//initAns.
			break;

		case 'Find info for a specific song':

			break;

		case 'Find all artist listed more than once':

			break;

		case 'Find all artist from year range':

			break;

		default
			console.log('I am sorry I do not understand. Please try again.')

	}
}

