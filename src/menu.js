function loadMenu(){
    const contentdiv = document.querySelector("#content")
    // const menu = document.createElement("div")
    // menu.className = "menu"
    // const menutitle = document.createElement("div")
    
    contentdiv.innerHTML = ''
    
    contentdiv.innerHTML = `<h1>Menu</h1>`
    const beverages = document.createElement("div")
    beverages.innerHTML = `<h2>Beverages</h2>
    <ul>
        <li>Honey tea</li>
        <li>Lemon tea</li>
        <li>Milk tea</li>
        <li>Cold coffee</li>
        <li>Hot coffee</li>
        <li>Mix juice</li>
        <li>Orange juice</li>
    </ul>`

    const starters = document.createElement('div')
    starters.innerHTML = `<h2>Starter</h2>
    <ul>
        <li>Tandoori chicken</li>
        <li>Paneer tikka</li>
        <li>Chicken chilly</li>
        <li>Paneer chilly</li>
        <li>Noodles</li>
        <li>Soup</li>
    </ul>`

    const mainCourse = document.createElement("div")
    mainCourse.innerHTML = `<h2>Main Course</h2>
    <ul>
        <li>Dal fry</li>
        <li>Mix veg</li>
        <li>Paneer lababdar</li>
        <li>Mushroom masala</li>
        <li>Butter chicken</li>
        <li>Handi chicken</li>
        <li>Shahi paneer</li>
        <li>Egg masala</li>
    </ul>`

    const riceBread = document.createElement("div")
    riceBread.innerHTML = `<h2>Rice and Breads</h2>
    <ul>
        <li>Tandoori roti</li>
        <li>Tawa roti</li>
        <li>Butter naan</li>
        <li>Garlic naan</li>
        <li>Lachha paratha</li>
        <li>Jeera rice</li>
    </ul>`

    //Appending all created elements
    contentdiv.appendChild(beverages)
    contentdiv.appendChild(starters)
    // contentdiv.appendChild(menutitle)
    contentdiv.appendChild(mainCourse)
    contentdiv.appendChild(riceBread)
    // contentdiv.appendChild(menu)
}

export default loadMenu