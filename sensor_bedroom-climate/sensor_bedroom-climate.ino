//*
//  Rui Santos
//  Complete project details at Complete project details at https://RandomNerdTutorials.com/esp32-http-get-post-arduino/
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files.
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//*/

#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"
#include <string>
#include <sstream>

#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321


//----------------------------- HTTP Client Pre-setup
const char* ssid = "Wireless";
const char* password = "Shaloctrev8";

//Your Domain name with URL path or IP address with path
const char* serverName = "http://localhost:3001/";


unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
unsigned long timerDelay = 600000; // 10 minutes
// Set timer to 5 seconds (5000)
//unsigned long timerDelay = 5000;

//----------------------------- DHT Sensor Pre-setup
// DHT Sensor
uint8_t DHTPin = 4; 
               
// Initialize DHT sensor.
DHT dht(DHTPin, DHTTYPE);                

float Temperature;
float Humidity;
String jsonBody;

//----------------------------------------------------------------------
void setup() {
  Serial.begin(115200);


//----------------------------- HTTP Client Setup
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
 

//----------------------------- DHT Sensor Setup
  pinMode(DHTPin, INPUT);

  dht.begin(); 
  
}

void loop() {

  Temperature = dht.readTemperature(true);
  Humidity = dht.readHumidity();

   
    std::stringstream t_stream;
    t_stream << Temperature;
    std::string tempString = t_stream.str();

    std::stringstream h_stream;
    h_stream << Humidity;
    std::string humidString = h_stream.str();


  std::string temp = "{\"Type\":\"indoor\",\"Temperature\":\"" + tempString 
             + "\",\"Humidity\":\"" + humidString + "\"}";

  jsonBody = temp.c_str();
  
  
  //Send an HTTP POST request every 5 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      HTTPClient http;
      
      // Domain name with URL path or IP address with path
      bool httpSuccess = http.begin("192.168.0.25", 3001, "/");
      
      Serial.print("local IP:  ");
      Serial.println(WiFi.localIP());
      if (httpSuccess) { Serial.println("http begin success"); }
      else { Serial.println("http begin fail"); }

      Serial.println(jsonBody);
      // HTTP request with a content type: application/json
      http.addHeader("Content-Type", "application/json");
      int httpResponseCode = http.POST(jsonBody);
     
      Serial.print("HTTP Response code:  ");
      Serial.println(httpResponseCode);
        
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}
