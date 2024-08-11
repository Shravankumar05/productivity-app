# Productivity App

## Overview
The Productivity App is a full-stack to-do list application developed using the MERN stack - MongoDB, Express.js, React, Node.js.
This application allows users to add, update, and delete tasks. Further features to be added are:
- Archived tasks collection
- Due-dates for tasks
- Login feature using JWT to allow for multiple users
- Calendar based view for tasks

## Current Features
- **Create Tasks**: Add new tasks to your to-do list.
- **Update Tasks**: Mark tasks as completed or incomplete with a single click.
- **Delete Tasks**: Remove tasks from the list.
- **Responsive Design**: The app is designed to be responsive and user-friendly on various devices.

## Technologies Used
- **Frontend**: React, Vite, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios for API requests, Mongoose for MongoDB schema/model.

## Installation and Usage
1. Set up required resources:
   a. Download the repository
   b. Download node.js
   c. Download mongoDB and mongoDB compass then create a new connection to run locally

2. Open the Productivity-App folder with visual-studio.

3. Navigate to the directory and run in the terminal:
  `cd productivity-app`

4. Install new-app dependencies:
  `cd client` 
  `npm install` 
  `npm install mongoose react express cors axios react-dom react-icons`  
  `npm run dev` 

5. Install server dependencies:
  `cd Server`
  `npm install`
  `npm install cors express mongoose nodemon`
  `node index.js` 

7. Go to `http://localhost:5173/` to view the app.
