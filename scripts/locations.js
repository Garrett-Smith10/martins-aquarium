import { getLocations } from "./database.js"

export const locationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationsList">'

    // Create HTML representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="locations_card">
        <div><img  class="location__image image--card" src="${location.imageUrl}" /></div>
            <div class="tip__name">${location.location}</div>
         
        </section>
`
    }

    htmlString += `</article>`

    return htmlString
}