console.log('link script');

const h2s = document.querySelectorAll('h2');
for (const h2 of h2s) {
    h2.style.color = 'red';
}

const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');

for (const card of cards) {
    card.style.borderRadius = '30px';
}

const bag = document.getElementById('blackBag').addEventListener('click', function () {
    // console.log('Button Clicked');
})



const removes = document.getElementsByClassName('remove-btn');
for (const remove of removes) {
    console.log(remove);
    remove.addEventListener('click', function (event) {
        // console.log('clicked');

        event.target.remove(event.target);
    })
}


// document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
//     const gmail = event.target.value;
//     const submit = document.getElementById('btn-sub');
//     if (gmail.endsWith == 'gmail.com') {
//         submit.removeAttribute('disabled');
//     }
//     else {
//         submit.setAttribute('disabled', true);
//     }

// })

function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please enter string.'
    }
    return fileName.toLowerCase().endsWith('@gmail.com');
}

document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const gmail = event.target.value;
    const submit = document.getElementById('btn-sub');
    if (isJavaScriptFile(gmail) == true) {
        submit.removeAttribute('disabled');
    }
    else {
        submit.setAttribute('disabled', true);
    }

})

// mouse over image change

function enterMouse() {
    this.setAttribute("src", "watch2.png");
}
function outMouse() {
    this.setAttribute("src", "images/categories/watch.png");
}

function changebgdoubleclick() {
    const background = document.getElementById('Subs');
    background.style.backgroundColor = 'coral';

}

