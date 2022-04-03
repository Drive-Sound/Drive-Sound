Readme → How to run my program


– How to implement the program  –
Execute the ‘sec1_gr6_database.sql’ in folder ‘database’ on MYSQL program
Go to \Drive-Sound-main\Drive sound\web project and connect to the command prompt and run “npm start”
Open your preference browser and connect to localhost at http://localhost:8888/Starter
The application will be ready to start.

– Login and register –
The user must create a new account and the web will ask you to login again before connecting
We can't provided some of the example account because the password is encrypted
Logout button is provided on each page.


-Search Functions - 
First you can access to Search_Page.html by clicking on the Search text in the navigation bar.
Then 
type the song’s name in the input box and click search > the song that consist of you input will be displayed in form of table 
but if it’s not match from .sql > program will display “Not Found” 
and if you not input something in text box and click search > the result will be displayed all of list song in .sql
Next click in each row in the result table > you will access to Result_Page.html and you will see more detail of each song that you select and click in result table in Search_Page.html

Administrator Functions → First, you must to connect the SQL table with admin.js inside the admin.js will have like password : “...” (in line17-20) to set your password in SQL. I will use the port to running at “6001”. →( npm run post-man ) 
→ When you connect the SQL with admin.js, you can go to the http://localhost:6001/ to check that it connects successfully and it will show all information of user_info table. The package that I use it will show you in the package.json such as  "cors": "^2.8.5" and "mysql": "^2.18.1".
→ In the admin.js, You can use all of the examples in the commend that I give to test in the Postman. I will give you all of thing that must to use in the Postman such as Url, Method, and the example of data in the SQL. 




