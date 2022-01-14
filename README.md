# Guide on how to run and deploy to heroku

## Clone the project

Open terminal and run:

`git clone https://github.com/Evander98/elemes.git`

When it's done, type:

`cd elemes`

## Install all the dependencies

In the project directory, you can run:

`npm install`

## Start the project

You can start the project by running:

`npm start`

It will open the browser. If the browser does not appear, please open the browser manually then paste http://localhost:3000 in the browser's address bar.


# Deploy this project to Heroku

## Install Heroku CLI

First you need to download Heroku CLI by following this link:

`https://devcenter.heroku.com/articles/heroku-cli`

When downloaded, you can install the Heroku CLI.

## Verifying your installation

To verify your CLI installation, use the command below:

`heroku --version`

## Login to Heroku

Open Heroku website https://id.heroku.com/login then login from your browser.

Also you need to login from your Heroku CLI:

`heroku login`

It will open your browser for the authentication.

## Setting up new Heroku app

On the Heroku dashboard, press button New then press Create new app:

![image](https://user-images.githubusercontent.com/47407913/149549419-16ccab8e-2234-4bdc-a1b7-d7a6ee97fe44.png)

Type your app name:

![image](https://user-images.githubusercontent.com/47407913/149549639-1d625e63-5c43-4b6b-b4a9-662d20e39ecd.png)

## Deploy to Heroku

In your project directory, run:

`git add .`

Commit your project:

`git commit -m "Heroku deploy"`

Add the remote URL:

`git remote add origin [paste your remote URL/Heroku app URL]`

Deploy to Heroku:

`git push -u origin main`

