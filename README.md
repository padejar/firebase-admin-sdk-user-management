# firebase-admin-sdk-user-management
Firebase Admin SDK RESTful API built with Node.js and Express.js to bridge between the connection using RESTful client.

I built this API to bridge between Firebase Admin SDK for managing Firebase Authentication Users via RESTful client, due to the extended
capability of Node.js version of the SDK (other than managing Storage and Realtime Database).

Installation:<br>
1. Download this repo as zip file or clone this repo using your favorite Git client.<br>
2. Go to your Firebase project console and download your app's server credential and save it to your project folder.<br>
3. Open userRouter.js file in the routes directory. And find the following codes:<br>
<pre>admin.initializeApp({
  credential: admin.credential.cert("path/to/cert-file.json"),<br>
  databaseURL: "https://yourapphere.firebaseio.com"<br>
});</pre>
4. Replace the "path/to/cert-file.json" with the path to your server credential file.<br>
5. Replace database url with your own app's database url.<br>
6. Open CMD/Terimal and do the following command:<br>
<pre>npm install</pre>
7. You can now test this API using your favorite RESTful client like Postman or Advance REST client. (the default url is http://localhost:3000/users)
