#include <RH_ASK.h>
#include <SPI.h> 

// Create Amplitude Shift Keying Object
RH_ASK rf_driver;

void setup()
{
    // Initialize ASK Object
    rf_driver.init();
    // Setup Serial Monitor
    Serial.begin(9600);
    pinMode(7, OUTPUT); //The pin the relay is connected to
}

void loop()
{
    // Set buffer to size of expected message 
    uint8_t buf[1];
    uint8_t buflen = sizeof(buf);
    // Check if received packet is correct size
    if (rf_driver.recv(buf, &buflen))
    {
        // Message received with valid checksum
        Serial.print("Message Received: ");
        Serial.println((char*)buf);

        // Check if received message is "1"
        if (buf[0] == '1')
        {
            // Set a specific pin on Arduino UNO to HIGH
            digitalWrite(7, HIGH); //Let the current flow through the relay
            // Serial.println("Pin set to HIGH."); // line to be uncommented if debugging
        }
        else if (buf[0] == '0') {
          digitalWrite(7, LOW); // Stop the flow of the current through the relay
          // Serial.println("Pin set to LOW."); // line to de uncommented if debugging
 
        }

        memset(buf, 0, sizeof(buf)); // Clear the buffer to avoid msicommunication
        buflen=sizeof(buf);
    }
}