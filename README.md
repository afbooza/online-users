### RUN JSON-SERVER

#OPTION 1
App spoofs a Promise/timeout to the server with a 2 second delay. Works as is. 

#OPTION 2
Comment out under where it says GET STATIC DATA and uncomment the above method line 17 to 25 and the Axios import statement.

Install json-server:
npm i -g json-server

From the root of the project run:
json-server --watch src/mock/mockData.json

Navigate to http://localhost:3000/data if you want to see the data, otherwise the app will call it directly



### RUN APP
npm start 
Navigate to http://localhost:3100/

