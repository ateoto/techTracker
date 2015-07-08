# techTracker
baby's first angular app

## Prerequisites:

1.) Install NodeJS - http://nodejs.org

2.) Make sure NPM is up to date 
```bash
sudo npm install npm -g
```
3.) Install Bower
```bash
npm install bower -g
```


## Installation:

1.) Install techTracker folder via git

2.) Navigate into the client/src and install bower components
```bash
bower install
```
This will install the necessary bower components for the front end (Angular, Bootstrap, etc) from the ```bower.json``` file.

3.) Navigate into the server file and install npm components
```bash
sudo npm install
```
This will install the necessary server node modules for the project including MongoDB, ExpressJS, and Mongoose from the ```package.json``` file

With that, you should have everything you need to get techTracker up and running!

## Setup:

You will need two terminal windows open; one for the database and one for the server.

You'll first need to start up your database. techTracker uses MongoDB and by default, the database is stored in the 'data' file.
To start, create a file called ```data``` in your root project directory
```bash 
mkdir data
```
Once that file is created, you should simple be able to start the database via this command:
```bash
mongod --dbpath data
```
You are free to set your dbpath to whatever works for you; this is simply the default.

Once you have the DB up and running properly, you should be able to start up the server without error.
This project uses a node module called ```nodemon``` that eliminates the fuss of making changes to the ```server.js``` file. Nodemon will watch the server.js file and automatically restart when changes are made.

Given that this project has nodemon set up as an alias in the ```package.json``` file, we should be able to start the server up by simply typing into the terminal from the server file:
```bash
npm start
```

And with that you're done! The app is by default set to run at [http://localhost:3000](http://localhost:3000) but you can change it to whatever
works for you via the ```server.js ``` file.
