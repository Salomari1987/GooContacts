# GooContacts
Web application to search and view google's contacts easily

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Tech Stack](#tech-stack)
    1. [Installing Dependencies](#installing-dependencies)


## Usage

* Fork and clone project
* Follow steps in https://support.google.com/googleapi/answer/6158849?hl=en&ref_topic=7013279
* After creating new OAuth2.0 keys, copy the "Client ID" and paste it in Google_API_KEY_Example.js replacing ('xxxxxxxxxxxxxxx.apps.googleusercontent.com')
* Rename Google_API_KEY_Example.js to Google_API_KEY.js
* From the Client Directory, do    ```npm install```
* To start the application, from the Client directory, do    ```npm start```
* Go to your web browser, and type 'localhost:8000'
* Click Login
* This will take you to gmail where you can insert your credentials
* Afterwards you can search through your contacts based on name or phone number and view a contact by clicking it, to exit, you must log out of your gmail, or unauthorize the app from your gmail account.

## Requirements

- Node 4.x.x
- NPM
- python 2.x

## Development

### Tech Stack

* Backbone
* Bootstrap
* jQuery
* underscore.js

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
```
