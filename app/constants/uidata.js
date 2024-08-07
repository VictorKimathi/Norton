

const categories = [
    {
        "_id": "6537ece708ff5b7de97d0695",
        "title": "Fried Rice",
        "value": "fried_rice",
        "imageUrl": "https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-videoSmall.jpg",
        "createdAt": "2023-10-24T16:12:23.571Z",
        "updatedAt": "2023-10-24T16:12:23.571Z",
        "__v": 0
    },
    {
        "_id": "65310f3381e4d98d60b093c5",
        "title": "Curry",
        "value": "curry",
        "imageUrl": "https://www.kitchensanctuary.com/wp-content/uploads/2022/09/Air-Fryer-Chicken-Curry-square-FS-36.jpg",
        "__v": 0
    },
    {
        "_id": "6531206cbbe4998e90af3feb",
        "title": "Pizza",
        "value": "pizza",
        "imageUrl": "https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg?fit=700%2C1024",
        "__v": 0
    },
    {
        "_id": "6531209dbbe4998e90af3fef",
        "title": "Pasta",
        "value": "pasta",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTrVWYeToFlZsp2mHHvWH2KLT2fRUa_GyBg&s",
        "__v": 0
    },
    {
        "_id": "653120babbe4998e90af3ff1",
        "title": "Beverages",
        "value": "beverages",
        "imageUrl": "data:image/jpeg;base64,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",
        "__v": 0
    },
    {
        "_id": "65312084bbe4998e90af3fed",
        "title": "Burgers",
        "value": "burgers",
        "imageUrl": "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
        "__v": 0
    },
    {
        "_id": "65310efb81e4d98d60b093c3",
        "title": "Chicken",
        "value": "chicken",
        "imageUrl": "data:image/jpeg;base64,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",
        "__v": 0
    },
    {
        "_id": "653120e1bbe4998e90af3ff3",
        "title": "More",
        "value": "more",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_DZmbY8qhx0ko86x44CYtnRWwLu1qhuJ8A&s",
        "__v": 0
    }
]

const restaurants = [
    {
        "_id": "6530ebbcc9e72013e5b65933",
        "title": "Lapisara Eatery",
        "time": "15 min",
        "imageUrl": "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
        "owner": "fdfsdfsdfs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "6765",
        "coords": {
            "id": "2023",
            "latitude": 37.78792117665919,
            "longitude": -122.41325651079953,
            "address": "698 Post St, San Francisco, CA 94109, United States",
            "title": "Lapisara Eatery",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530ea6bc9e72013e5b6592d",
        "title": "Burger King",
        "time": "30 min",
        "imageUrl": "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
        "owner": "sjgdsjgfjshhjs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "3278",
        "coords": {
            "id": "2020",
            "latitude": 37.785925590588505,
            "longitude": -122.41007428687641,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "Burger King",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530eb66c9e72013e5b65931",
        "title": "La Foods",
        "time": "25 min",
        "imageUrl": "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
        "owner": "fgdgdfgd",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "5666",
        "coords": {
            "id": "2022",
            "latitude": 37.787503258917035,
            "longitude": -122.39854938269353,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "La Foods",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530eb23c9e72013e5b6592f",
        "title": "Italian Restaurant",
        "time": "35 min",
        "imageUrl": "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
        "owner": "sjgdsjgfjshhjs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "3278",
        "coords": {
            "id": "2021",
            "latitude": 37.78557922976825,
            "longitude": -122.40722000299483,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "Italian Restaurant",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    }
]

const foods = [
    {
        "_id": "65316968f94c6496dc84f3c1",
        "title": "Tiramisu",
        "foodTags": [
            "Italian",
            "Dessert",
            "Coffee",
            "Mascarpone",
            "Cocoa"
        ],
        "foodType": [
            "Dessert"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.9,
        "ratingCount": "420",
        "description": "A classic Italian dessert made of layers of coffee-soaked ladyfingers and creamy mascarpone, topped with cocoa.",
        "price": 7.99,
        "additives": [
            {
                "id": 1,
                "title": "Ladyfingers",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "Coffee",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "Mascarpone Cheese",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "Cocoa",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "Sugar",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "35 min"
    },
    {
        "_id": "653168e9f94c6496dc84f3bf",
        "title": "Spaghetti Carbonara",
        "foodTags": [
            "Italian",
            "Creamy",
            "Pasta",
            "Bacon",
            "Egg"
        ],
        "foodType": [
            "Main Course",
            "Lunch",
            null
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.7,
        "ratingCount": "310",
        "description": "A traditional Italian pasta dish with creamy egg sauce, pancetta, and cheese.",
        "price": 14.99,
        "additives": [
            {
                "id": 1,
                "title": "Egg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "Pancetta",
                "price": "3.00"
            },
            {
                "id": 3,
                "title": "Parmesan Cheese",
                "price": "2.00"
            },
            {
                "id": 4,
                "title": "Black Pepper",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "Pasta",
                "price": "3.00"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 2,
        "category": "6531209dbbe4998e90af3fef",
        "time": "20 min"
    },
    {
        "_id": "653169a9f94c6496dc84f3c3",
        "title": "Vegan Salad Bowl",
        "foodTags": [
            "Vegan",
            "Healthy",
            "Salad",
            "Fresh",
            "Organic"
        ],
        "foodType": [
            "Starter",
            "Lunch",
            "Dinner",
            "Health",
            "Vegan"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.6,
        "ratingCount": "230",
        "description": "A refreshing mix of organic vegetables, nuts, seeds, and a tangy vinaigrette.",
        "price": 11.99,
        "additives": [
            {
                "id": 1,
                "title": "Mixed Greens",
                "price": "1.50"
            },
            {
                "id": 2,
                "title": "Walnuts",
                "price": "2.00"
            },
            {
                "id": 3,
                "title": "Quinoa",
                "price": "1.50"
            },
            {
                "id": 4,
                "title": "Cherry Tomatoes",
                "price": "1.00"
            },
            {
                "id": 5,
                "title": "Vinaigrette",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "55 min"
    },
    {
        "_id": "65316771f94c6496dc84f3bd",
        "title": "Margherita Pizza",
        "foodTags": [
            "Italian",
            "Cheesy",
            "Vegetarian"
        ],
        "foodType": [
            "Main Course"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ebbcc9e72013e5b65933",
        "rating": 4.5,
        "ratingCount": "150",
        "description": "A classic Margherita pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil.",
        "price": 12.99,
        "additives": [
            {
                "id": 1,
                "title": "Cheese",
                "price": "2.00"
            },
            {
                "id": 2,
                "title": "Pepperoni",
                "price": "2.50"
            },
            {
                "id": 3,
                "title": "Ketch up",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "30 min"
    },
    {
        "_id": "65316a01f94c6496dc84f3c7",
        "title": "Tropical Fruit Smoothie",
        "foodTags": [
            "Fruit",
            "Smoothie",
            "Refreshing",
            "Sweet",
            "Cold"
        ],
        "foodType": [
            "Drink",
            "Breakfast",
            "Snack",
            "Dessert",
            "Vegan"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.7,
        "ratingCount": "280",
        "description": "A delightful blend of tropical fruits, creating the perfect sweet and refreshing drink.",
        "price": 6.99,
        "additives": [
            {
                "id": 1,
                "title": "Mango",
                "price": "2.00"
            },
            {
                "id": 2,
                "title": "Pineapple",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "Banana",
                "price": "1.00"
            },
            {
                "id": 4,
                "title": "Coconut Milk",
                "price": "1.50"
            },
            {
                "id": 5,
                "title": "Ice",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "25 min"
    },
    {
        "_id": "653169d8f94c6496dc84f3c5",
        "title": "Mixed Grill Platter",
        "foodTags": [
            "Barbecue",
            "Meat",
            "Grilled",
            "Spicy",
            "Savory"
        ],
        "foodType": [
            "Main Course",
            "Dinner",
            "Grill",
            "Non-Vegetarian",
            "Barbecue"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.8,
        "ratingCount": "320",
        "description": "A succulent assortment of grilled meats, served with sides and sauces.",
        "price": 18.99,
        "additives": [
            {
                "id": 1,
                "title": "Chicken",
                "price": "3.00"
            },
            {
                "id": 2,
                "title": "Beef",
                "price": "4.00"
            },
            {
                "id": 3,
                "title": "Lamb",
                "price": "4.00"
            },
            {
                "id": 4,
                "title": "Pork",
                "price": "3.50"
            },
            {
                "id": 5,
                "title": "Barbecue Sauce",
                "price": "1.00"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "45 min"
    }
]

const cart =  [
    {
        "_id": "653b6588541d2aa2c1e89cd1",
        "userId": "6537a4448cd1bd140ebddcee",
        "productId": {
            "_id": "65316771f94c6496dc84f3bd",
            "title": "Margherita Pizza",
            "restaurant": "6530ebbcc9e72013e5b65933",
            "rating": 4.5,
            "ratingCount": "150",
            "imageUrl": [
                "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
                "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
            ]
        },
        "additives": [
            "Extra Cheese",
            "Mushrooms"
        ],
        "instructions": "",
        "totalPrice": 25.98,
        "quantity": 2,
        "__v": 0
    }
]

const profile = {
    "_id": "6537a4448cd1bd140ebddcee",
    "username": "Dbestech",
    "email": "db@king.com",
    "uid": "4NmOkCbvu7ToaBS9ZR1UVpv0G1g2",
    "address": [],
    "userType": "Vendor",
    "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/bdec9d7d-0544-4fc4-823d-3b898f6dbbbf-vinci_03.jpeg",
    "updatedAt": "2023-10-24T11:02:28.215Z"
}
const choicesList = [
    {
        id:1,
        name:"Pick  up",
        value:"pickup"
    },
    {
        id:2,
        name:"3star",
        value:"3star"
    },
    {
        id:3,
        name:"4star",
        value:"4star"
    },
    {
        id:4,
        name:"Under 30 min",
        value:"under30"
    },
]
export default  {categories,choicesList, restaurants, foods, cart, profile}