#include <RH_ASK.h>
#include <SPI.h>

RH_ASK driver;

const int buttonPin = 5; // The push button is connected to digital pin 5

int buttonState = LOW; // the current button state
int lastButtonState = LOW; // the most recent button state before the current one 
int messageState = 0; // 0 for OFF, 1 for ON

void setup()
{
    pinMode(buttonPin, INPUT_PULLUP); // Set push button pin as input with internal pull-up resistor
    Serial.begin(9600);
    if (!driver.init()) {
      Serial.println("RF driver initialization failed"); // a message for debugging purposes
    }       
}

void loop()
{
    // Read the state of the push button
    buttonState = digitalRead(buttonPin);

    // Check if the button state has changed
    if (buttonState != lastButtonState)
    {
        // If the button is pressed (and it wasn't before)
        if (buttonState == HIGH)
        {
            // Toggle the message state
            messageState = !messageState;
        }
        // Delay for debouncing
        delay(50);
    }

    // Save the current button state for comparison in the next iteration
    lastButtonState = buttonState;

    // Determine the message based on message state
    String message;
    if (messageState == 1)
    {
        message = "1"; // This message turns the relay on in the receiver end
    }
    else
    {
        message = "0"; // This one turns it off 
    }

    // Send the message via RF transmitter
    driver.send((uint8_t *)message.c_str(), message.length());
    driver.waitPacketSent();
    Serial.println("Message sent: " + message); // Printing the message sent for debugging

    delay (50); // A delay to ensure good transmission
}
