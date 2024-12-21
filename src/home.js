import resImage from "./images/spicehut.png"
function loadHome(){

    const content = document.querySelector("#content")
    content.innerHTML = ''

    //Creating image to append
    const image = document.createElement("img")
    image.src = resImage
    image.alt = 'Images'
    content.appendChild(image);

    // Creating dish details div to add details
    const dishdetail = document.createElement("div")
    dishdetail.className = "dishdetails"
    dishdetail.innerHTML = "<p>Come and grab the blissful indian cuisine with a pinch of continental touch. We offer dishes that you will love to have with your family and friends, giving you a tour to flavor paradise!</p>"

    const tagline = document.createElement("h2")
    tagline.id = "tagline"
    tagline.innerHTML = "LET US ADD SPICE TO YOUR LIFE!"
    dishdetail.appendChild(tagline)

    content.appendChild(dishdetail)

    // Creating div for timing
    const timing = document.createElement("div")
    timing.className = "timing"
    timing.innerHTML = `<h2>Timing:</h2>
    <ul>
                    <li>Sunday: 8am - 8pm</li>
                    <li>Monday: 6am - 9pm</li>
                    <li>Tuesday: 6am - 9pm</li>
                    <li>Wednesday: 6am - 9pm</li>
                    <li>Thursday: 6am - 9pm</li>
                    <li>Friday: 6am - 11pm</li>
                    <li>Saturday: 6am - 11pm</li>
                </ul>`
    content.appendChild(timing)

    //Creating div for location
    const location = document.createElement("div")
    location.className = "location"
    location.innerHTML = `<h2>Location</h2>
                <p>123 Forest Drive, ForestVille, Maine</p>`

    content.appendChild(location)
}

export default loadHome;