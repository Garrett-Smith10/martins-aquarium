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
            image: "flubble.jpg",
            species: "Flubble Fish",
            length: "6 inches",
            name: "Bubble",
            harvestLocation: "Underwater Candyland",
            food: "Rainbow sprinkles"
        },
        {
            id: 2,
            image: "bloopster.jpg",
            species: "Bloopster Bass",
            length: "8 inches",
            name: "Bobby",
            harvestLocation: "Bubbly Bay",
            food: "Bubblegum balls"
        },
        {
            id: 3,
            image: "glitterfin.jpg",
            species: "Glitterfin Guppy",
            length: "4 inches",
            name: "Glitzy",
            harvestLocation: "Sparkle Springs",
            food: "Fairy dust flakes"
        },
        {
            id: 4,
            image: "twinkletooth.jpg",
            species: "Twinkletooth Tetra",
            length: "3 inches",
            name: "Twinkie",
            harvestLocation: "Starry Stream",
            food: "Pixie potion pellets"
        },
        {
            id: 5,
            image: "sparklescale.jpg",
            species: "Sparklescale Swordtail",
            length: "5 inches",
            name: "Sparky",
            harvestLocation: "Shimmering Shore",
            food: "Unicorn tears"
        },
        {
            id: 6,
            image: "whiskerwhirl.jpg",
            species: "Whiskerwhirl Wrasse",
            length: "7 inches",
            name: "Whirly",
            harvestLocation: "Whimsical Waters",
            food: "Magic marshmallows"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}