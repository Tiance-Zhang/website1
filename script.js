console.log("Hello Webpage!");

//const dictionary of each member's information

const aibaInfo = {Name:"Wen Shang Yi ", DOB:"28 November 1976", Birthplace:"Hsin-Chu, Taiwan", Position:["Leader,Lead guitarist"] };

const junInfo = {Name:"Tsai Shen-yen", DOB:"25 April 1977", Birthplace:"Kaohsiung, Taiwan", Position:["Bass guitarist"]};

const ninoInfo = {Name:"Chen Shin Hung", DOB:"6 December 1975", Birthplace:"Taipei, Taiwan", Position:["Lead vocalist"]};

const ohnoInfo = {Name:" Liu Yen-ming", DOB:"28 July 1973", Birthplace:"Miaoli, Taiwan", Position:["Drummer"]};

const shoInfo = {Name:"Shi Chin-hang", DOB:"11 December 1975", Birthplace:"Taipei, Taiwan", Position:["Rhythm guitarist"]};

//when the mouse hover on top of the div/picture, the name will become visiable
function showName(id){
    document.getElementById(id).style.visibility = 'visible';
}

//when the mouse move away from the div/picture, the name will become hidden
function hideName(id){
    document.getElementById(id).style.visibility = 'hidden';
}

//event listener call prep() func when the page is loaded
window.addEventListener("load",prep());

//prepare the getDetails() func by creating a list and addig list items in the list (with no values yet)
function prep(){
    var ul; var li;
    var current_td = document.getElementsByTagName('td');
    for (var i = 3; i < 5; i++){
        for (var j = 0; j<5; j++){
            ul = document.createElement('ul');
            ul.setAttribute("style", "list-style:none;");
            li = document.createElement('li');
            li.setAttribute("style","margin:0.5em 0;");
            ul.appendChild(li);
            current_td[i].appendChild(ul);
        }
    }
}

//when the function is called, make the information table visible; get the information from dict and modify the list content correspondingly
function getDetailsAiba(){
    var current_td; var items;
    current_td = document.getElementsByTagName('td');
    document.getElementById('intro').style.visibility = 'visible';
    items = document.getElementsByTagName('li');

    for (var i = 0; i < 3; i++){
        current_td[i].innerHTML = Object.values(aibaInfo)[i];
    }
    for (var i = 0; i<5; i++){
        items[i].textContent = Object.values(aibaInfo)[3][i];
    }
    for (var i = 5; i<10; i++){
        items[i].textContent = Object.values(aibaInfo)[4][i-5];
    }
}

//when the function is called, make the information table visible; get the information from dict and modify the list content correspondingly
function getDetailsJun(){
    var current_td; var items;
    current_td = document.getElementsByTagName('td');
    document.getElementById('intro').style.visibility = 'visible';
    items = document.getElementsByTagName('li');

    for (var i = 0; i < 3; i++){
        current_td[i].innerHTML = Object.values(junInfo)[i];
    }
    for (var i = 0; i<5; i++){
        items[i].textContent = Object.values(junInfo)[3][i];
    }
    for (var i = 5; i<10; i++){
        items[i].textContent = Object.values(junInfo)[4][i-5];
    }
}

//when the function is called, make the information table visible; get the information from dict and modify the list content correspondingly
function getDetailsNino(){
    var current_td; var items;
    current_td = document.getElementsByTagName('td');
    document.getElementById('intro').style.visibility = 'visible';
    items = document.getElementsByTagName('li');

    for (var i = 0; i < 3; i++){
        current_td[i].innerHTML = Object.values(ninoInfo)[i];
    }
    for (var i = 0; i<5; i++){
        items[i].textContent = Object.values(ninoInfo)[3][i];
    }
    for (var i = 5; i<10; i++){
        items[i].textContent = Object.values(ninoInfo)[4][i-5];
    }
}

//when the function is called, make the information table visible; get the information from dict and modify the list content correspondingly
function getDetailsOhno(){
    var current_td; var items;
    current_td = document.getElementsByTagName('td');
    document.getElementById('intro').style.visibility = 'visible';
    items = document.getElementsByTagName('li');

    for (var i = 0; i < 3; i++){
        current_td[i].innerHTML = Object.values(ohnoInfo)[i];
    }
    for (var i = 0; i<5; i++){
        items[i].textContent = Object.values(ohnoInfo)[3][i];
    }
    for (var i = 5; i<10; i++){
        items[i].textContent = Object.values(ohnoInfo)[4][i-5];
    }
}

//when the function is called, make the information table visible; get the information from dict and modify the list content correspondingly
function getDetailsSho(){
    var current_td; var items;
    current_td = document.getElementsByTagName('td');
    document.getElementById('intro').style.visibility = 'visible';
    items = document.getElementsByTagName('li');

    for (var i = 0; i < 3; i++){
        current_td[i].innerHTML = Object.values(shoInfo)[i];
    }
    for (var i = 0; i<5; i++){
        items[i].textContent = Object.values(shoInfo)[3][i];
    }
    for (var i = 5; i<10; i++){
        items[i].textContent = Object.values(shoInfo)[4][i-5];
    }
}

//when the function is called, make the information table invisible
function hideDetails(){
    document.getElementById('intro').style.visibility = 'hidden';
}

