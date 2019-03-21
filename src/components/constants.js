export var API_URL =  ( window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") 
? "https://localhost:5001/" 
: "https://league-stats-backend.herokuapp.com/";