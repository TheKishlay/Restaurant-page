function loadContact(){
    const contentdiv = document.querySelector("#content")
    // const contact = document.createElement("div")

    // contentdiv.innerHTML = ''

    // const contacttitle = document.createElement("div")
    contentdiv.innerHTML = `<h1>Contact Us</h1>`

    const address = document.createElement("div")
    address.innerHTML = `<h2>Address:</h2>
    <p>123 Forest Drive, ForestVille, Maine</p>`

    const contactnum = document.createElement("div")
    contactnum.innerHTML = `<h2>Contact Number:</h2>
    <ul>
        <li>100-100-1000</li>
        <li>100-100-2000</li>
        <li>100-100-3000</li>
    </ul>`

    const mail = document.createElement("div")
    mail.innerHTML = `<h2>Email:</h2>
    <ul>
        <li>Information: information@abc.com</li>
        <li>Booking: booking@abc.com</li>
        <li>Complaints: complaints@abc.com</li>
    </ul>`

    //Appending all created elements
    // contact.appendChild(contacttitle)
    contentdiv.appendChild(address)
    contentdiv.appendChild(contactnum)
    contentdiv.appendChild(mail)
    // contentdiv.appendChild(contact)
}

export default loadContact