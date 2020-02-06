console.log("Hello Webpage!");

//const dictionary of each member's information

const aibaInfo = {Name:"Wen Shang Yi ", DOB:"28 November 1976", Birthplace:"Hsin-Chu, Taiwan", Position:["Leader,Lead guitarist"] };

const junInfo = {Name:"松本潤", DOB:"1983/08/30", Birthplace:"Tokyo, Japan", Movies:["Narratage (2017)","Girl In The Sunny Place (2013)","Boys Over Flowers: Final (2008)", "The Last Princess (2008)", "Yellow Tears (2007)"], Drama:["99.9 Criminal Lawyer Season II (2018)","99.9 Criminal Lawyer (2016)","Heartbroken Chocolatier (2014)", "Lucky Seven (2012)", "Summer Romance Shines in Rainbow Colors (2010)"]};

const ninoInfo = {Name:"二宮和也", DOB:"1983/06/17", Birthplace:"Tokyo, Japan", Movies:["The Asada Family (2020)","Killing For The Prosecution (2018)","The Last Recipe (2017)", "Nagasaki: Memories of My Son (2015)", "Letters from Iwo Jima (2006)"], Drama:["Black Forceps (2018)","Baseball Brainiacs (2014)","Freeter, Ie wo Kau (2010)", "Ties of Shooting Stars (2008)", "Devil (2008)"]};

const ohnoInfo = {Name:"大野智", DOB:"1980/11/26", Birthplace:"Tokyo, Japan", Movies:["Mumon: The Land of Stealth (2017)","Kaibutsu-kun (2011)","Yellow Tears (2007)", "Pika**nchi Life Is Hard Dakara Happy (2004)", "Pika*nchi Life Is Hard Dakedo Happy (2002)"], Drama:["The Most Difficult Romance (2016)","Shinigami Kun (2014)","The Locked Room Murders (2012)", "Kaibutsu-kun (2010)", "Uta no Onii-san (2009)"]};

const shoInfo = {Name:"櫻井翔", DOB:"1982/01/25", Birthplace:"Tokyo, Japan", Movies:["Laplace's Witch (2018)","The Chart of Love (2014)","The After-Dinner Mysteries (2013)", "In His Chart (2011)", "Yatterman (2009)"], Drama:["My High School Business (2017)","The Family Game (2013)","My Daddy Is an Idol! (2012)", "The After-Dinner Mysteries (2011)", "Legal Eagle, First Class (2010)"]};

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

//event listener catch the element clicked on the page
//if the element belongs to the heart class, switch the src bewteen a hollow heart and a full heart pic.
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; 
    var src = target.src;
    if(target.className == "heart"){
      if (src != "https://cdn.glitch.com/881cc85c-643a-4f85-8b01-d9585bb9d0ea%2FMedia-Icon-25-512.png?v=1569865432458"){
        target.setAttribute("src","https://cdn.glitch.com/881cc85c-643a-4f85-8b01-d9585bb9d0ea%2FMedia-Icon-25-512.png?v=1569865432458");
      }else {
        target.setAttribute("src","https://image.flaticon.com/icons/png/512/69/69904.png");
      }
    }
}, false);