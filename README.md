# Phonebook-System

NOTE: This DEMO is working with practice server!

- JS program that can load, create and delete entries from a Phonebook. The HTML Template is pre-given.

- When the [Load] button is clicked, a GET request will be made to the server to get all phonebook entries. Each received entry will be in a li tag inside the ul and a [Delete] button attached. 

- Pressing the [Delete] button will send a DELETE request to the server and delete the entry. 

- When the [Create] button is clicked, a new POST request will be made to the server with the information from the Person and Phone textboxes, and they will be cleared and the Phonebook will be automatically reloaded (like if the [Load] button was pressed).

* The data sent on a POST request should be a valid JSON object, containing properties person and phone. Example format: 
{
  "person": "<person>",
  "phone": "<phone>"
}

The url to which the program make requests is: http://localhost:3030/jsonstore/phonebook

GET and POST requests go to http://localhost:3030/jsonstore/phonebook, while DELETE requests go to http://localhost:3030/jsonstore/phonebook/:key> , where :key is the unique key of the entry (you can find out the key from the key property in the GET request);
