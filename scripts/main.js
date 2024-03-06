import { holyFishList } from './fish.js'
import { soldierFishList } from './fish.js'
import { normalFishList } from './fish.js'
import { locationsList } from './locations.js'
import { tipsList } from './tips.js'

const allFish = holyFishList()
for (const fish of allFish) {
    console.log(fish)
}

const soldierFish = soldierFishList()
for (const fish of soldierFish) {
    console.log(fish)
}

const normalFish = normalFishList()
for (const fish of normalFish) {
    console.log(fish)
}



/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */

const parentHTMLElement = document.querySelector(".holyFish")
const parentHTMLElement1 = document.querySelector(".tips_display")
const parentHTMLElement2 = document.querySelector(".locations_display")
const parentHTMLElement3 = document.querySelector(".soldierFish")
const parentHTMLElement4 = document.querySelector(".normalFish")

parentHTMLElement.innerHTML = holyFishList() 
parentHTMLElement1.innerHTML = tipsList()
parentHTMLElement2.innerHTML = locationsList()
parentHTMLElement3.innerHTML =soldierFishList()
parentHTMLElement4.innerHTML =normalFishList()