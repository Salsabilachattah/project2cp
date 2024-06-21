
#include <WiFiManager.h>
#include <WebServer.h>

// Create a web server on port 80
WebServer server(80);
WiFiManager wifiManager;
bool etat = 0;
int relaypin = 17;

// Handle the /getLocalIP request
void handleGetLocalIP() { // this function was destined to get the local ip adress of the esp and to send it to the app either by broadcasting it with udp or by using mdns , we didn't have time to do any of the two solutions but at least we tried 
  if (WiFi.status() == WL_CONNECTED) {
    String ip = WiFi.localIP().toString();
    server.send(200, "text/plain", ip); // send the local ip adress to the web server to retreive it later 
  } else {
    server.send(200, "text/plain", "Not connected to any WiFi network");
  }
}

void handler() { //This function handles the incoming messages from the web server, setting our boolean variables accordingly
  String msg = server.arg("plain"); // Getting the message
  Serial.println(msg); // Printing the message for debugging purposes
  if (msg == "True") {
    etat = 1;
  }
  else {
    etat = 0;
  }
  // Send a response back to the client
  server.send(200, "application/json", "{\"success\":true}");
}

void setup() {
  Serial.begin(115200);
  pinMode(relaypin, OUTPUT);
  // Start WiFiManager and wait for connection
  wifiManager.autoConnect("ESP32-ConfigAP", "12345678"); // when the esp doesn't find any saved wi-fi nearby , it creates its own access point , you can then connect to it with your phone and connect it to your desired wi-fi through a web portal (just like esi's PG )
  // Print the IP address if connected
  if (WiFi.status() == WL_CONNECTED) {
    Serial.print("Connected to WiFi. IP Address: ");
    Serial.println(WiFi.localIP());
  }
  // Keep the AP mode active while being connected to Wi-Fi
  WiFi.softAP("ESP32-ConfigAP", "12345678");
  Serial.println(WiFi.SSID());
  // Define endpoint
  server.on("/getLocalIP", HTTP_GET, handleGetLocalIP);
  //added this:
  server.on("/change_etat", HTTP_POST, handler);
  server.begin();
  Serial.println("HTTP server started");
}
void loop() {
  if (etat) {
    digitalWrite(relaypin, HIGH);
  }
  else {
    digitalWrite(relaypin, LOW);
  }
  server.handleClient();
}