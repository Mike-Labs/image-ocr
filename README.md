# image-ocr
By using capacitor dependency we connect to firebase android app to extract text from image

# Adjust the appID
Make sure appid in config.ts matches the path to MainActivity.java

It should also be the same appID you have given in firebase console Android Project 

# Download your Actual Google.json File

Upon downloading your google.json file paste it at the path: android/app

# Initialize Firebase in Android

Inside the MainActivity.java you should initialize the firebase.

## Adding Functionality to Extract Text Button

Upon clicking async function allows user to choose whether to take a photo or pick from the gallery.

It wraps these 2 options with a cancel button below it through an actionsheet.

Once the user chooses it calls the OCR function after checking if base64Image is valid

The function to extract text from OCR is called and we get the results.


## Prerequisites
- [Node.js](https://nodejs.org/) (v22 or higher)
- [Ionic CLI](https://ionicframework.com/docs/cli) (v6.2.1 or higher)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Mike-Labs/image-ocr.git
cd your-repo
```
### 2. Install Dependancies
```
npm install
```
### 3. Run the Project
```
ionic serve
````


