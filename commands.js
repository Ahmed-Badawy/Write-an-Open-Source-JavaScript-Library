1- create a repo on git hub & copy these commands to your cmd to init the project
	echo "# Write-an-Open-Source-JavaScript-Library" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git remote add origin https://github.com/Ahmed-Badawy/Write-an-Open-Source-JavaScript-Library.git
	git push -u origin master
//make two dirs (src & build)

/*********************************************************************
Common Github commands
**********************************************************************/
	git config --global user.name "Ahmed-Badawy"
	git config --global user.email me@ahmed-badawy.com
	git config --global user.password 159357Bad
	git init 										: Create a new local repository
	git clone /path/to/repository   				: Check-out/Create a working copy of a local repository
	git clone ahmed-badawy@github.com:/TheShare		: Check-out/ For a remote server 

	git status										: List the files you have changed
	git add <file-name>								: add a file
	git add * 	or:  git add -A						: add all files
	git commit -m "Commit message"					: commit changes
	git remote add origin <server>					: Connect to a remote repository
	git push origin master							: push to specific pranch
/**********************************************************************/




2- install node & install npm & set you npm name & email like this:-
	npm set init-author-name Ahmed-Badawy
	npm set init-author-email me@ahmed-badawy.com
	npm set init-author-url http://ahmed-badawy.com
	npm set init-author-license 'MIT'
	npm set save-exact true
//the save-exact will make the npm save the exact version of the depencies not * like the default.

3- login to npm with the cmd
	npm adduser
	username: ahmed-badawy
	password: 159357
	email   : me@ahmed-badawy.com

4- create your package.json file 
	npm init
//make the code begin src/index.js

5- add a new node module 
	npm install --save unique-random-array  
	Or npm i -S unique-random-array
//as you can see. because the --save it got added to package.json under dependencies array & also saved with exact working version because of the save-exact config.

6- to activate it from the cmd:-
	node //will access the node mode
		var lib = require('./src/index.js');
		lib.all; 						//will output all numbers
		lib.random(); 					//will output one number
//ctrl+c : exit the node mode

7- now you can push it to github:-
	git status // this will reveal what files will git add. 
//now i created .gitignore file & added (node_modules) in it to exclude it
	git add . 
	git commit -m "my msg"
	git push origin master


8- publishing & updating to npm packages:-
		npm publish 				: publish & update the package
		npm info RetreveNumbers 	: check the info of the online package
// then tag it on github: (tags will make a tag & a release) saves the current code forever
		git tag 1.1.0
		git push --tags

/*	
	in the package.json -> version : 1.0.0 
	first number (1) means a major version or a breaking change of the bundle
	second number (0) minor release (new features or non breaking changes)
	third number (0) is a patch release (bug fix) 
*/
-------------------------
//to add a beta version put it like this: version : 1.1.0-beta.0     & on publish put this command: npm publish --tag beta
// & on install put this command: npm i RetreveNumbers@beta
-------------------------

9- adding testing 
		npm inatall mocha chai --save-dev
		Or npm i -D mocha chai
/*
	after that we put the test code inside src
	then we modify our package.json:  "test": "mocha src/index.test.js -w"
	the -w means watch system files for changes
*/
// run the test with this:-
		npm test


10- Semantic-Release is an ci to automate the releases publishing process:
		npm install -g semantic-release-cli
		semantic-release-cli setup
	



























