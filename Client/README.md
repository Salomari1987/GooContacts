# GooContacts
Web application to search and view google's contacts easily

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Tech Stack](#Tech-Stack)
    1. [Installing Dependencies](#installing-dependencies)

## Usage

* Clone project
* Follow steps in https://support.google.com/googleapi/answer/6158849?hl=en&ref_topic=7013279
* After creating new OAuth2.0 keys, copy the client Id and paste it in Google_API_KEY_Example.js replacing ('xxxxxxxxxxxxxxx.apps.googleusercontent.com')
* Rename Google_API_KEY_Example.js to Google_API_KEY.js
* From the Client Directory, do    ```npm install```
* To start the application, from the Client directory, do    ```npm start```
* Go to your web browser, and type 'localhost:8000'
* Click Login
* This will take you to gmail where you can insert your credentials

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
