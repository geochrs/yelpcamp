const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6494b70a9bad2ad38834ba7a',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dolorem pariatur, inventore nam, repellendus eaque incidunt excepturi voluptatem autem temporibus earum vitae dignissimos eveniet consectetur quaerat alias qui deleniti cumque.',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dushaxfmg/image/upload/v1687681623/Yelpcamp/ev4jf4gbeemwayldisr2.jpg',
                    filename: 'Yelpcamp/ev4jf4gbeemwayldisr2',
                },
                {
                    url: 'https://res.cloudinary.com/dushaxfmg/image/upload/v1687681629/Yelpcamp/rxwwyonypkdck1xndlls.jpg',
                    filename: 'Yelpcamp/rxwwyonypkdck1xndlls',
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})