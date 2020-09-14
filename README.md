# TravelApplication
Travel application build in React, Firebase, MongoDB, Express and Nodejs

# Locals

Locals is an application for users from all over the world to use when they are searching for local city guides for their destination
Anyone can set up a profile and become a tour guide for people visiting their hometown.

Hopefully we can build this application out to become the #1 travel application in the world

# Setup

to setup the repository make sure you have Node.js installed on your machine.
clone the repository by clicking 
![Image of git clone](https://github.com/lucvankerkvoort/TravelApplication/blob/master/Screenshot%202020-09-14%20161822.png)

clone the repo onto your local machine using 

`git clone (copy repository name from image above)`

go into the folder that you downloaded and enter the following command into your terminal
Depending on your package manager use:

`npm install`

or

`yarn`

then cd into the views folder and run:

`npm start`

or

`yarn run start`

if you run into any problems you can always shoot me an email at luc.van.kerkvoort@gmail.com

# Application

The application has been build using React.js for the front-end. Utilizing mostly funcional components
Firebase is used for authentication and as a realtime database for the chat functionality
MongoDB has to be implemented still but I'm using the Firebase storage and firestore for now.

## Home Page

The home page is a simple one pager with information about the project and a contact form at the bottom.
The contact form uses emailjs to send the messages to the main email address connected to the application.


![Image of Home](https://github.com/lucvankerkvoort/TravelApplication/blob/master/home.gif)

## Login

The login is build with the use of Firebase. It has great documentation and there are a ton of tutorials out there that showcase how to setup a authentication with Google, email and password, Github etc.

![Image of Login](https://github.com/lucvankerkvoort/TravelApplication/blob/master/Login.gif)


## Register

The Register is also build with Firebase. I also added Firebase Storage to save the images and then sending the picture url over to the firestore to serve the user information on Login


![Image of Register](https://github.com/lucvankerkvoort/TravelApplication/blob/master/register.gif)

## Chat
The chat functionality is build with the Firebase Realtime database. 
It sends and receives messages from the realtime database indicating the ones that are send from the user and the ones send by other users.


![Image of git clone](https://github.com/lucvankerkvoort/TravelApplication/blob/master/Screenshot%202020-09-14%20161822.png)




