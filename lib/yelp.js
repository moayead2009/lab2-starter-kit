const YelpAPI = require('yelp-api');
const dotenv = require('dotenv').config();

class Yelp {
    constructor() {
        this.api = new YelpAPI(process.env.YELP_API_KEY);
    }

    //
    //  Restaurants
    //

    //  Get x nearby restaurants
    async get_nearby_restaurants_by_address(address, items = 5) { }

    //  Get top restaurants by address
    async get_top_restaurants_by_address(address, items = 5) { }

    //  Get closest restaurants by address
    async get_closest_restaurants_by_address(address, items = 5) { }

    //  Get closest restaurant by address and restaurant category
    //  https://www.yelp.ca/developers/documentation/v3/business_search
    async get_restaurant_by_address(address, category) { }

    //  Get closest restaurant by address and restaurant name
    async get_restaurant_reviews_by_address(address, name) { }

    //  Get a restaurant by phone number
    async get_restaurant_by_phone_number(phone_number) {
        return this.api.query('businesses/search/phone', [{ phone: phone_number }])
            .then(data => {
                return data;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }

    //
    //  Events
    //

    //  Get events by point (lat, lng)
    async get_events_by_point(lat, lng, items = 5) { }
}

module.exports = Yelp;