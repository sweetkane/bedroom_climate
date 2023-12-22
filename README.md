# 🌡️🌤️ Bedroom Climate Control 🌡️🌤️ 
## Introduction
_This is my first personal project circa 2021!_

The Bedroom Climate Control web app gathers the **temperature** and **humidity** 
1. outside the user's window
2. inside the user's home
3. preferred by the user.

Using these six values it computes a simple suggestion: whether or not the user should open their window!

## Screenshot
![alt text](https://github.com/sweetkane/bedroom_climate/blob/master/client-bedroom-climate/public/Screenshot.PNG)

## Front-end
The app's front-end is a simple one-page React.JS web app. It is styled using Bootstrap React. 
The front-end pulls outdoor weather data directly from Aeris Weather, a public API for getting weather data from anywhere in the United States.
When interfacing with API endpoints from Aeris Weather, or the Bedroom Climate Control server, the front-end uses the built-in fetch() method.

## Back-end
The app's back-end is a simple Node.js server programmed using Express. 
The server handles POST requests by adding the data from the request to the connected PostgreSQL database.
It handles GET requests by pulling the most recent data for the given category from the database, and sending it in the response.

## Sensor Module
The sensor module is an ESP32 development module equipped with a DHT22 temperature+humidity sensor. 
Because ESP32 is wifi-enabled, it can wirelessly sends sensor readings to the server at a chosen interval.
It sends the data to the server as a POST request using a C++ HTTP library.
