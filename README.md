# topkart_lightning_deals_api
 
 #Requirements : 
 1. You should have mysql installed on your local system or you have to provide a remote host ip.
 2. The mysql server either local or remote should have a db named 'topkart' with empty schema.
 3. Nodejs Version >= 12.0 required for sequelize ORM to function correctly.
 
 #Steps to run the app:
 1. Download and extract this repo.
 2. change directory to the repo folder in your terminal.
 3. Add a .env file to your folder with the following variable " 
   ```
   PORT=3001
DB_HOST=<localhost or remotehost ip>
DB_PASSWORD=<your db password>
DB_USER=<your db user name>
DB_NAME=topkart
DB_DIALECT=mysql
JWT_SECRET=<your jwt secret>

```
4. Run the command `npm install` in the repo directory in your terminal.
5. Run the command `npm run dev` in the repo directory in your terminal.
6. You can now test all the endpoints with required body parameters given in the code.

#Improvement to be done:

The improvments are majorly related to the frontend.Once the frontend is developed, we can take up the follwing actions : 
1. Add session to users browser with a certain expiry time to avoid logging in reapeatedly.
2. Add CORS and morgan to improve the security of API.
3. Divide the backend into microservices if the scale is considerable.
4. Containerization to avoid deprecation bugs.

##Hope you like it. That said, there is always scope for some improvement when discussed thoroughly. Thanks.
 
