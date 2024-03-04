/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            imageUrl: "assets/Angelfish.png",
            species: "Angelfish",
            length: 8,
            name: "Bubbles",
            harvestLocation: "Caribbean Sea",
            food: "Plankton"
        },
        {
            id: 2,
            imageUrl: "assets/Clownfish.png",
            species: "Clownfish",
            length: 4,
            name: "Marlin",
            harvestLocation: "Great Barrier Reef",
            food: "Algae"
        },
        {
            id: 3,
            imageUrl: "assets/Guppy.png",
            species: "Guppy",
            length: 2,
            name: "Finn",
            harvestLocation: "Amazon River",
            food: "Fish flakes"
        },
        {
            id: 4,
            imageUrl: "assets/Tuna.png",
            species: "Tuna",
            length: 60,
            name: "Sushi",
            harvestLocation: "Atlantic Ocean",
            food: "Squid"
        },
        {
            id: 5,
            imageUrl: "assets/Trout.png",
            species: "Trout",
            length: 18,
            name: "Splash",
            harvestLocation: "Freshwater Lake",
            food: "Insects"
        },
        {
            id: 6,
            imageUrl: "assets/Swordfish.png",
            species: "Swordfish",
            length: 100,
            name: "Blade",
            harvestLocation: "Pacific Ocean",
            food: "Fish"
        }
    ],
    locations: [
        {
            id: 1,
            imageUrl:"",
            location: "Caribbean Sea"
        },
        {
            id: 2,
            imageUrl:"",
            location: "Great Barrier Reef"
        },
        {
            id: 3,
            imageUrl:"",
            location: "Amazon River"
        },
        {
            id: 4,
            imageUrl:"",
            location: "Atlantic Ocean"
        },
        {
            id: 5,
            imageUrl:"",
            location: "Freshwater Lake"
        },
        {
            id: 6,
            imageUrl:"",
            location: "Pacific Ocean"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getlocations = () => {
    return database.locations.map(locations => ({...locations}))
}