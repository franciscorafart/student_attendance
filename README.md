Full stack student attendance list.

This is a full stack student attendance list built with Node Express and MongoDB. With this app the teacher can enter a student's name to the database and determine if they are late or on time by clicking a button. They can delete students from the list as well.

Link to project: https://studentatt.herokuapp.com/

How It's Made:

Tech used: HTML, CSS, JavaScript, Node, Express, MongoDB.

This app has an API that connects to a MongoDB database in the server.js file. The main.js file in the public folder handles the requests that are sent to the API with a fetch() method. In this way the database information is hidden from the client side device and updated to the database can be made in a secure manner.

Optimizations

In the future I will add a feature in which the teachers can add lists by date, so that they can keep track of attendance through out the year.

Lessons Learned:

With this app I learnt how to write an API to communicate the client device with my Mongo databasen in a secure manner.

How to run:

1. Dowload files
2. Enter your database information on the server.js file
3. Go to the folder in the terminal
4. run $ npm install
5. run $npm run dev
6. In your browser go to localhost:3000
7. Follow me on github!
