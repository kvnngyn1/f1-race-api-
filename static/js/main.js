console.log( document.getElementsByTagName('h1')[1].innerHTML = 'New Text Alert!!') 

console.log( document.getElementsByTagName('h1'))

let color_button = document.getElementById('color-button')

let current_class = document.getElementsByTagName('h1')[0].getAttribute('class')

const color_change = () => {
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if (header_text == 'Hello World'){
        document.getElementsByTagName('h1')[0].className = `${current_class} color-change`
    } else{
        header_text = 'Something Else'
    }
}

// Change Text Color via a click event listener in JS
color_button.addEventListener('click', color_change)


// Adding New Button Via JavaScript
let button = document.createElement('button')
let button_display = document.createElement('h2')

// Add Inner HTML Text to the button
button.innerHTML = 'I am here!!'
document.body.append(button)

button.addEventListener('click', function () {
    button_display.innerHTML = 'More JavaScript Info Please...'
    document.body.append(button_display)
})

// Another example of adding dynamic HTML via JavaScript
let easy_button = document.createElement('button')

// Add Inner HTML text to easy_button
easy_button.innerHTML = 'Easy Grab Button'
document.getElementById('easy-grab').append(easy_button)

// Grab copied text - then place into 
const source = document.querySelector('div.source')
source.addEventListener('copy', ( event ) => {
    console.log(event)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase());
    event.preventDefault();
})

// Grabbing Form Data From a Submit Event
const form = document.querySelector('#testDataForm')
console.log(form)

// Add Event Listener for submit event(s)
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name').value
    let query_last = document.querySelector('#last-name').value

    // Another way of getting access to the form data
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;

    console.log(event)
    console.log(query_first, query_last)
    console.log(first_name, last_name)
})

const racer_data = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response)

    let url = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`

    console.log(`This is the given name from f1 racer ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName}`)
}