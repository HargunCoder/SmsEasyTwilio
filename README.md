# What is SmsEasy?
<img src="https://filestore.hasura.io/v1/file/315de2b5-6f76-40b2-a62e-5d1c65e84ae2" width=30%>  <img src="https://filestore.hasura.io/v1/file/14235220-c8e4-4d92-a1b0-02a9ab1a2021" width=30%> <img src="https://filestore.hasura.io/v1/file/c7e56cdd-dbd6-4e80-9a42-efd181172bec" width=30%>

SmsEasy is a react native based application developed using Twilio Sms API (free version) to send messages using a simple and user-friendly interface.

Since the app is developed in react native, it works for both android and ios devices.The backend of the application is written in python-flask.
The application is used to send a message from a specified number to specific number (In the free version of Twilio only one from and to the number can be used, limitation of Twilio).

The app is constructed in a manner that it can be easily modified to send a message to any number if paid Twilio version is used, by making some minute changes.

### To Check out the app you can scan the qr code given with expo app on your phone or visit
### [Expo App Link](https://expo.io/@harguncoder/smseasy-twilio)

## Features of App

In this application we have two parts or main screens:

1. An authentication Screen which is used to make sure only authorised users are allowed to enter.This screen has sign up and login session for the user.(As of now only username and password authentication is enabled but google login/email login etc features available in hasura auth can be easily added)

2. A message sending screen which is the main home screen of the app.A user can choose whom to send a message to and from whom to send(default values for free api set) and the message they want to compose and send.
A logout option is also available in this screen.



## How it works?

1. The initial authentication screen is using hasura auth to allow user login or sign up. Hasura auth services are implemented using clusters,so at any time to see the complete authentication database. use command in terminal:
#### hasura api-console

2. After login, you are directed to the message screen, where after entering all the details you can send the message.
3.  Using axios a POST request is made to the backend which is written in python flask.The POST request contains the fields
(from, to, message)
4. The backend is using twilio api to send this message. The fields are then extracted from the post request and an appropriate request is made using Twilio API to send a message.
5. The backend returns either of the two messages(6,7) to the application(response to HTTP POST request)
6. Error Status none meaning the message has been successfully sent.
7. Error Status <Error> Denoting the error that has occurred and why sending the message has failed.


## What does it use?

1. [Twilio](https://www.twilio.com)
2. [Axios](https://www.npmjs.com/package/react-native-axios)
3. [React Native](https://facebook.github.io/react-native)
4. [Native Base](https://nativebase.io)
5. [React Navigation](https://reactnavigation.org)
6. [Expo] (https://expo.io)

## How to use it?

Install the app using the expo [link](https://expo.io/@harguncoder/smseasy-twilio) on your expo app.Before launching the app make a call to the clusters by visiting these links:
### [cluster](https://auth.apprehensiveness68.hasura-app.io/ui) 
### https://auth.apprehensiveness68.hasura-app.io/ui (Copy URL in browser search and wake cluster)

After the clusters have exited the sleeping state and are in running state you can open the app.
After launching the app, either login or sign up to enter the main app screen. Compose a message and send it to the number you want (in free version it's limited) and your message is sent.


## Cloning and Running

The process is divided into parts for easier deployment by the user.If you face any issues please check errors section and if still unresolved raise an issue on Github  
### Prerequisites  
Tools that you must installed on your computer  
1. [Hasura CLI Tool](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)  
2. [Git Bash](https://git-scm.com/downloads)  
3. [node js](https://nodejs.org/en/download/)  
### Cloning and deploy
1. Open git bash where you will like to set up the project and run  
```git clone https://github.com/HargunCoder/SmsEasyTwilio```
2. cd into the cloned repository
3. We now set up the cluster by using hasura quickstart.Enter the following commands in terminal  
```hasura quickstart hargun/smseasy```  
```cd smseasy```  
```git add . && git commit -m "First commit"```  
```git push hasura master```  
4. You can check the cluster name (needed for further setup) and other info by running  
```hasura cluster status```  

### Project Setup And Deploying
1. In the main project folder (not in smseasy)Run the command to setup node modules  
```npm install```
2. Open Hasura.js file and change the cluster name as  
Original file  
```const clusterName = "apprehensiveness68";```  
Change to    
```const clusterName = "<Your cluster name here>";```    
Example my cluster name is entailment42   
```const clusterName = "entailment42";```
3. In src folder open Appscreen.js and change the 23 line as following  
Original line  
```axios.post('https://app.apprehensiveness68.hasura-app.io/input',formData)```  
Change to  
```axios.post('https://app.<your cluster name>.hasura-app.io/input',formData)```  
Example my cluster name is entailment42  
```axios.post('https://app.entailment42.hasura-app.io/input',formData)```
4. In smseasy\microservices\app\src open init.py and change line 1 to  
Original Line  
```from flask import Flask, jsonify, render_template```  
Changed Line
```from flask import Flask, jsonify, render_template,request```
5. To run the app type the command in your terminal (In main Project directory)
```npm start```
6. Download expo app and scan the qr code to run the app on your device


## Errors
### On opening the app we get the screen this app is configured with an auth provider.
-This error is seen because the cluster responsible for providing the auth services is in sleeping state.You will need to wake up the cluster by using the given external URL of your cluster.  
-Check ```Hasura.js``` file that you have set cluster name as your own cluster name.Checkout point 2 in Project Setup And Deploying
### Message not being sent or spinner keeps spinning.
 In smseasy\microservices\app\src open init.py and change line 1 to  

Original Line  
```from flask import Flask, jsonify, render_template```  
Changed Line  
```from flask import Flask, jsonify, render_template,request```  




Feel free to raise an issue or make a pull request. I will be happy to improve my app :)

### [GitHub Link](https://github.com/HargunCoder/SmsEasyTwilio)
