const URL = 'http://localhost:3333/users';
const URL1 = 'http://localhost:3333/users/3';
const URL2 = 'http://localhost:3333/users/6'

const searchName = document.getElementById('namee');
const searchUsern = document.getElementById('usernamee');
const searchEmail = document.getElementById('emaill');

const btn = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3')



const create = () => {
    const data = {
        name: searchName.value,
        username: searchUsern.value,
        email: searchEmail.value
    }

    let option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL, option).then(response => response.json())
}

btn.addEventListener('click', create)

const change = () => {
    const data = {
        name: searchName.value,
        username: searchUsern.value,
        email: searchEmail.value
    }

    let option = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL1, option).then(response => response.json())
}

btn2.addEventListener('click', change)

const udalit = () => {
    const data = {
        name: searchName.value,
        username: searchUsern.value,
        email: searchEmail.value
    }

    let option = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL2, option).then(response => response.json())
}

btn3.addEventListener('click', udalit)
