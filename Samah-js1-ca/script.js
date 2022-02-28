function validateForm() {
    const name = document.forms["myForm"]["name"];
    const email = document.forms["myForm"]["email"];
    const subject = document.forms["myForm"]["subject"];

    if (name.value == "") {
        document.getElementById('errorname').innerHTML = "Please enter a valid name";
        name.focus();
        return false;
    } else {
        document.getElementById('errorname').innerHTML = "";
    }

    if (email.value == "") {
        document.getElementById('erroremail').innerHTML = "Please enter a valid email address";
        email.focus();
        return false;
    } else {
        document.getElementById('erroremail').innerHTML = "";
    }

    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Please enter a valid email address";
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Please enter a valid email address";
        email.focus();
        return false;
    }

    if (subject.value == "") {
        document.getElementById('errorsubj').innerHTML = "Please enter a valid message";
        subject.focus();
        return false;
    } else {
        document.getElementById('errorsubj').innerHTML = "";
    }

    return true;
}



const contact = document.getElementById('contact')
const home = document.getElementById('home')

const cont = document.getElementById('cont')
const Exitbtn = document.getElementById('Exitbtn')

const img1 = document.getElementById('img1')
const img1ext = document.getElementById('img1ext')

const dog1 = document.getElementById('dog1')
const dog2 = document.getElementById('dog2')

const dog3 = document.getElementById('dog3')

//

dog1.onload = getRandomDog();

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            } else {
                dog1.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}

dog2.onload = getRaandomDog();

function getRaandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRaandomDog();
            } else {
                dog2.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}

dog3.onload = getRaaandomDog();

function getRaaandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRaaandomDog();
            } else {
                dog3.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}

//

contact.addEventListener('click', () => {
    home.style.display = "none";
    cont.style.display = "block"
})
Exitbtn.addEventListener('click', () => {
    home.style.display = "block";
    cont.style.display = "none";
})
dog1.addEventListener('click', () => {
    home.style.display = "none";
    img1.style.display = "block";
})
img1ext.addEventListener('click', () => {
    home.style.display = "block";
    img1.style.display = "none";
})
dog2.addEventListener('click', () => {
    home.style.display = "none";
    img1.style.display = "block";
})
dog3.addEventListener('click', () => {
    home.style.display = "none";
    img1.style.display = "block";
})