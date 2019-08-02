# GoogleBooks

## Motivation
I created this web app to gain experience creating a React-Express app.

[View the app here](https://floating-thicket-45775.herokuapp.com/)

## How it Works
Search for a book in the search bar on the home page. You should see a list of books appear below the search bar. 
Browse through the titles and click either "Save" or "View Book." The "save" button will allow you to access this title again (on the "Saved Books" page), 
and the "view book" button will link to the Google page for that book. 

You can access your saved books by clicking the "Saved Books" tab in the navbar. You can also remove books from your saved books list!

## The Process
This app includes a backend server (Express) and a frontend using React. 
The app searches the Google Books API after a user enters a search term in the input field. When a book is saved, that book is then entered/created into a database (MongoDB). If a user selects the "Saved Books" tab, the React-Router then routes to show the Saved.js Component.
The entire webpage is technically one continuous page that shows different components based on certain routes. I only included three client-side routes (the Home/Search page, the Saved page, and the 404 page). The backend is composed of API routes that access the GoogleBooks API 
and the database. I created several presentational components including the search form, results display, navbar, and jumbotron. 

## Technology Used
* React
* Express
* Bootstrap
* Node
* React Router
* MongoDB
* Mongoose

### Portfolio 
**If you'd like to see more of my work, check out my portfolio [here](https://rocky-refuge-62195.herokuapp.com/#)
