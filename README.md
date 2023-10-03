# :tent: YelpCamp

![Screenshot_2](https://github.com/geochrs/yelpcamp/assets/125922884/b3bf123c-f9c9-4a83-8713-86da0b01e6e1)

YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.

## Features

:small_blue_diamond: Users can create, edit, and remove campgrounds <br>
:small_blue_diamond: Users can review campgrounds once, and edit or remove their review <br>
:small_blue_diamond: Search campground by name or location <br>

## Run it locally

1. Install mongodb
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/geochrs/yelpcamp.git
cd yelpcamp
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Run node app.js in the terminal with the project.

Then go to localhost:3000.
