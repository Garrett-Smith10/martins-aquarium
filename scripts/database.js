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
            imageUrl:"assets/CarribeanSea.png",
            location: "Caribbean Sea"
        },
        {
            id: 2,
            imageUrl:"assets/GreatBarrierReef.png",
            location: "Great Barrier Reef"
        },
        {
            id: 3,
            imageUrl:"assets/AmazonRiver.png",
            location: "Amazon River"
        },
        {
            id: 4,
            imageUrl:"assets/AtlanticOcean.png",
            location: "Atlantic Ocean"
        },
        {
            id: 5,
            imageUrl:"assets/FreshwaterLake.png",
            location: "Freshwater Lake"
        },
        {
            id: 6,
            imageUrl:"assets/PacificOcean.png",
            location: "Pacific Ocean"
        }
    ],
    tips: [
        {
            id: 1,
            tip: "Regularly check and maintain the water temperature."
        },
        {
            id: 2,
            tip: "Perform partial water changes regularly to remove waste and replenish essential nutrients."
        },
        {
            id: 3,
            tip: "Keep an eye on water parameters such as pH, ammonia, nitrite, and nitrate levels."
        },
        {
            id: 4,
            tip: "Clean the tank and equipment (such as filters and pumps) regularly to prevent algae buildup and ensure proper functioning."
        },
        {
            id: 5,
            tip: "Provide appropriate filtration to keep the water clean and healthy for fish."
        },
        {
            id: 6,
            tip: "Monitor fish behavior and health regularly to detect any issues early and take necessary actions."
        }
    ]
    
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}