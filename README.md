# azurian_test

In order to run this test you will need to download and configure the data base from this repository:
https://github.com/manul00/AzurianDatabase.git

in the folder /db you can find the script to create the data base, import it to your SLQ client and run it, you can copy the code and run it manually if you prefer.

the configuration for the data base is:
{
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'manuel',
	multiStatements: true
}

make sure you configure correctly the local DB, if the configuration is Ok, you will see the message: 'Conected to database'.

the Local server in Node JS uses the port 3700, if you have a problem with the routes it might be the port isn't available.

to run the server just go to the root folder of the project, open the terminal and run npm start , you must have Node JS installed into your PC to run this command. You will see the success message on the terminal 

then go to the root folder of the Angular proyect /ManuelTest and run the command ng serve to run the Page of the Angular project (The Angular project will run fine without the Node server but it will not do the requests)

if you have any question or any doub, feel free to call me 948871083

Manuel

