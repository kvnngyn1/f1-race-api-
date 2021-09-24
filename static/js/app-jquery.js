// DATA INJECTION IS COMING FORM HERE

// name = (driverstandings > driver > givenName + familyName)
// position = (driverstandings > position)
// naitonality = (driverstandings > driver > nationality)
// sponsor = (driverstandings > constructors > name)
//  points = (driverstandings > points)






let dataToSend = {
    body: 'This is a post from JavaScript',
    user_id: 1
};

// SUCCESSFUL GET REQUESTS
fetch('http://127.0.0.1:5000/api/posts')
    .then(res => res.json())
    .then(data => console.log(data))

fetch('https://ergast.com/api/f1/2020/1/driverStandings.json')
    .then(res => res.json())
    .then(data => getData(data))

axios.get('https://ergast.com/api/f1/2020/1/driverStandings.json')
    .then(res => console.log(res.data))


// SUCCESSFUL POST REQUESTS
axios({
    method: 'POST',
    mode: 'no-cors',
    url: 'http://127.0.0.1:5000/api/posts',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*'
    },
    data: dataToSend
}).then(res => console.log(res.data));

fetch('http://127.0.0.1:5000/api/posts', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
})
    .then(res => res.json())
    .then(data => console.log('it works'))