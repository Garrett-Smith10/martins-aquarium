import { getTips } from "./database.js"

export const tipsList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipsList">'

    // Create HTML representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tips_card">
            
            <div class="tip__name">${tip.tip}</div>
         
        </section>
`
    }

    htmlString += `</article>`

    return htmlString
}