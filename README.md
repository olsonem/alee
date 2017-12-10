# alee

## About this project
Its a vue.js project built using the [Open Weather Map API](https://openweathermap.org/appid).

## How it's set up?
Sign up for a free account at [Open Weather Map](https://openweathermap.org/appid/users/sign_up). 

## How can you use it?
Once have both your API key and you can fork this repository and replace the API key located at file path: alee/src/common/api.js
```javascript
API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    config.params.APPID = 'API Key';
    config.params.units = 'imperial';
```
You can then begin making calls to the API

##To set up the project from scratch:

npm install -g vue-cli

# initialize webpack and name your project (ex: project-name) 
vue init webpack project-name

# answer all of the following questions 
Project name: project-name
Project description: A Vue.js project
Author: Your Name
Vue build: standalone
Install vue-router? Yes
Use ESLint to lint your code? No
Setup unit test with Karma + Mocha? No
Setup e2e tests with Nightwatch? No

# changes directories to the new folder and install dependencies
cd project-name
npm install

# how to run the local development server
npm run dev

# install the following:
# Axios (API calls)
npm install --save axios


# be sure to use debugging tools (like the Sources tab in the Chrome development tools) to test and debug your code in the local environment
installing the [Vue.js Dev Tool](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) can be very helpful.

# how to build the code for deployment on Github
# configure webpack to build code into /docs folder instead of default /dist folder
open config/index.js in your code editor
change all instances of dist to docs
change the path from root ('/') to none ('')

build: {
    ...
    index: path.resolve(__dirname, '../docs/index.html'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    ...
    assetsPublicPath: '',
    ...
}

save changes

# run the build command to create the docs folder
npm run build



---------------------------------------------
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
