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
This will install the necessary bower components for the front end (Angular, Bootstrap, etc) from the ```bower.json``` file

3.) Navigate into the server file and install npm components
```bash
sudo npm install
```

With that, you should have everything you need to get techTracker up and running!

## Starting the Server & DataBase Locally:

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
This project uses a node module called ```nodemon``` that essentially just makes it so that we don't have to
manually restart the server everytime we make a change to the ```server.js``` file. Nodemon will watch the server.js
file and automatically restart when changes are made.

To start this server, enter this command into the second terminal window you have open from the root project directory:
```bash
cd server && nodemon server.js
```

And with that you're done! The app is by default set to run at [http://localhost:3000](http://localhost:3000) but you can change it to whatever
works for you via the ```server.js ``` file.
