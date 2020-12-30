const array = [
        {img: "./images/cards-imgs/Rectangle14.svg", span:"The Queen's Gambit", year:"2012", value:"THISWEEK"},
        {img: "./images/cards-imgs/Rectangle15.svg", span:"Walk of Shame", year:"2014", value:"TODAY"},
        {img: "./images/cards-imgs/Rectangle16.svg", span:"Boss Level", year:"2020", value:"TODAY"},
        {img: "./images/cards-imgs/Rectangle115.svg", span:"The Translators", year:"2020", value:"THISWEEK"},
        {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", value:"THISWEEK"},
        {img: "./images/cards-imgs/Intersection1.svg", span:"Unhinged", year:"2020", value:"THISWEEK"},
        {img: "./images/cards-imgs/Rectangle16.svg", span:"Boss Level", year:"2020", value:"THISMONTH"},
        {img: "./images/cards-imgs/Rectangle115.png", span:"Words on Bathroom Walls", value:"THISMONTH"},
        {img: "./images/cards-imgs/Rectangle14.svg", span:"The Queen's Gambit", year:"2012", value:"TODAY"},
        {img: "./images/cards-imgs/Rectangle227.png", span:"Let Him Go", value:"THISMONTH"},
        {img: "./images/cards-imgs/Rectangle116.svg", span:"Blackbird", value:"THISMONTH"},
        {img: "./images/cards-imgs/Rectangle116.svg", span:"Blackbird", year:"2020", value:"TODAY"},
    ] 

   

function jscards(cards) {
    const cardsContainer = document.getElementById('main-cards')
    for (let i = 0; i < cards.length; i++) {
        const curentCard = cards[i];
        const createCard = document.createElement('div')
        createCard.classList.add('cards')
        createCard.classList.add('MW-cards')
        createCard.classList.add(`${curentCard.value}`)
        createCard.innerHTML =
        `                                 
        <img  src=${curentCard.img} alt="">
        <div class="blur">
            <img src="./images/cards-imgs/Rectangle 26.svg" alt="">
        </div>
        <div class="ST-btn">
                    <img src="./images/Group26.svg" alt="">
                 </div>
                 <div class="div-2">
                    <img class="icons" src="./images/add-circle-fill.svg" alt="">
                 </div>
                 <div class="div-22">
                     <img class="icons" src="./images/Path18.svg" alt="">
                 </div>
                 <div class="card-span">    
                    <span>${curentCard.span}</span>
                 </div>
                 <div class="card-y">    
                    <span>${curentCard.year}</span>
            </div>   
         </div>        
        `
        cardsContainer.appendChild(createCard)
    }
}    
jscards(array)





const array2 = [
    {img:"./images/cards-imgs/Rectangle14.png",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Rectangle39.png",img4:"./images/times/Group53.png", span:"The Avengers",year:"2012"},
    {img:"./images/cards-imgs/Rectangle15.svg",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Rectangle41.png",img4:"./images/times/Group54.png", span:"Walk of Shame",year:"2014"},
    {img:"./images/cards-imgs/Rectangle16.SVG",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Rectangle43.png",img4:"./images/times/Group55.png", span:"Boss Level",year:"2020"},
    {img:"./images/cards-imgs/Rectangle30.png",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Path25.png",img4:"./images/times/Group56.png", span:"Unhinged",year:"2020"},
    {img:"./images/cards-imgs/Rectangle30.png",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Path25.png",img4:"./images/times/Group56.png", span:"Unhinged",year:"2020"},
    {img:"./images/cards-imgs/Rectangle30.png",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Path25.png",img4:"./images/times/Group56.png", span:"Unhinged",year:"2020"},
    {img:"./images/cards-imgs/Rectangle30.png",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Path25.png",img4:"./images/times/Group56.png", span:"Unhinged",year:"2020"},
    {img:"./images/cards-imgs/Rectangle30.png",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Path25.png",img4:"./images/times/Group56.png", span:"Unhinged",year:"2020"},
    {img:"./images/cards-imgs/Rectangle30.png",img2:"./images/times/=time/Rectangle38.png",img3:"./images/times/=time/Path25.png",img4:"./images/times/Group56.png", span:"Unhinged",year:"2020"},
]




function jsIcards(cards) {
    const cardsContainer = document.getElementById('I-div')
    for (let i = 0; i < cards.length; i++) {
        const curentCard = cards[i];
        const createCard = document.createElement('div')
        createCard.classList.add('cards')
        createCard.innerHTML =
        `                                 
        <img src=${curentCard.img} alt="">
        <div class="blur">
            <img src="./images/cards-imgs/Rectangle 26.svg" alt="">
        </div>
        <div class="ST-btn">
                <img src="./images/Group26.svg" alt="">
        </div>
            <div class="Utime">
                <div class="Dtime">
                    <img src=${curentCard.img2} alt="">
                    <div class="time">
                        <img src=${curentCard.img3} alt="">
                </div>
            </div>
            </div> 
                <div class="div-2">
                    <img class="icons" src="./images/add-circle-fill.svg" alt="">
                </div>
                <div class="div-22">
                    <img class="icons" src="./images/Path18.svg" alt="">
                </div>
                <div class="cards-T">
                    <img src=${curentCard.img4} alt="">
                </div>        
                <div class="card-span">    
                    <span>${curentCard.span}</span>
                </div>
                <div class="card-y">    
                    <span>${curentCard.year}</span>
                </div>   
        `
        cardsContainer.appendChild(createCard)
    }
}    
jsIcards(array2)


const array3 = [
    {img: "./images/cards-imgs/Rectangle114.png", span:"Awoken", year:"2019"},
    {img: "./images/cards-imgs/Rectangle115.png", span:"Words on Bathroom Walls", year:"2020"},
    {img: "./images/cards-imgs/Rectangle16.svg", span:"Boss Level", year:"2020"},
    {img: "./images/cards-imgs/Rectangle227.png", span:"Let Him Go", year:"2020"},
    {img: "./images/cards-imgs/Rectangle114.svg", span:"The Rental", year:"2020"},
    {img: "./images/cards-imgs/Rectangle115.svg", span:"The Translators", year:"2019"},
    {img: "./images/cards-imgs/Rectangle116.svg", span:"Blackbird", year:"2019"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
    {img: "./images/cards-imgs/Rectangle228.svg", span:"Happiest Season", year:"2020"},
]

function jsIIcards(cards) {
    const cardsContainer = document.getElementById('II-div')
    for (let i = 0; i < cards.length; i++) {
        const curentCard = cards[i];
        const createCard = document.createElement('div')
        createCard.classList.add('cards')
        createCard.innerHTML =
        `                                 
        <img src=${curentCard.img} alt="">
        <div class="blur">
            <img src="./images/cards-imgs/Rectangle 26.svg" alt="">
        </div>
        <div class="ST-btn">
                    <img src="./images/Group26.svg" alt="">
                 </div>
                 <div class="div-2">
                    <img class="icons" src="./images/add-circle-fill.svg" alt="">
                 </div>
                 <div class="div-22">
                     <img class="icons" src="./images/Path18.svg" alt="">
                 </div>
                 <div class="card-span">    
                    <span>${curentCard.span}</span>
                 </div>
                 <div class="card-y">    
                    <span>${curentCard.year}</span>
            </div>   
         </div>        
        `
        cardsContainer.appendChild(createCard)
    }
}    
jsIIcards(array3)

const array4 = [
    {img:"./images/cards-imgs/Rectangle1114.svg",img2:"./images/times/seris/Group49.png",span:"Ramo",year:"2020"},
    {img:"./images/cards-imgs/Rectangle1115.svg",img2:"./images/times/seris/Group50.png",span:"The Blacklist",year:"2013"},
    {img:"./images/cards-imgs/Rectangle1116.svg",img2:"./images/times/seris/Group51.png",span:"How I Met Your Mother",year:"2005"},
    {img:"./images/cards-imgs/Rectangle229.svg",img2:"./images/times/seris/Group52.png",span:"The Queen's Gambit",year:"2020"},
    {img:"./images/cards-imgs/Rectangle229.svg",img2:"./images/times/seris/Group52.png",span:"The Queen's Gambit",year:"2020"},
    {img:"./images/cards-imgs/Rectangle229.svg",img2:"./images/times/seris/Group52.png",span:"The Queen's Gambit",year:"2020"},
    {img:"./images/cards-imgs/Rectangle229.svg",img2:"./images/times/seris/Group52.png",span:"The Queen's Gambit",year:"2020"},
    {img:"./images/cards-imgs/Rectangle229.svg",img2:"./images/times/seris/Group52.png",span:"The Queen's Gambit",year:"2020"},
]
function jsIIIcards(cards) {
    const cardsContainer = document.getElementById('H-div')
    for (let i = 0; i < cards.length; i++) {
        const curentCard = cards[i];
        const createCard = document.createElement('div')
        createCard.classList.add('cards')
        createCard.innerHTML =
        `                                 
        <img src=${curentCard.img} alt="">
        <div class="blur">
            <img src="./images/cards-imgs/Rectangle 26.svg" alt="">
        </div>
        <div class="ST-btn">
                <img src="./images/Group26.svg" alt="">
        </div>
            </div>
            </div> 
                <div class="div-2">
                    <img class="icons" src="./images/add-circle-fill.svg" alt="">
                </div>
                <div class="div-22">
                    <img class="icons" src="./images/Path18.svg" alt="">
                </div>
                <div class="cards-T">
                    <img src=${curentCard.img2} alt="">
                </div>        
                <div class="card-span">    
                    <span>${curentCard.span}</span>
                </div>
                <div class="card-y">    
                    <span>${curentCard.year}</span>
                </div>   
        `
        cardsContainer.appendChild(createCard)
    }
}    
jsIIIcards(array4)

const array5 = [
    {img:"./images/COLLECTION/Rectangle31.png",P:"marvel"},
    {img:"./images/COLLECTION/Rectangle32.png",P:"dc"},
    {img:"./images/COLLECTION/Rectangle34.png",P:"netflix"},
    {img:"./images/COLLECTION/Rectangle33.png",P:"romantic"},
    {img:"./images/COLLECTION/Rectangle36.png",P:"comedy"},
    {img:"./images/COLLECTION/Rectangle35.png",P:"animations"},
    {img:"./images/COLLECTION/Rectangle35.png",P:"animations"},
    {img:"./images/COLLECTION/Rectangle35.png",P:"animations"},
    {img:"./images/COLLECTION/Rectangle35.png",P:"animations"},
    {img:"./images/COLLECTION/Rectangle35.png",P:"animations"},
    {img:"./images/COLLECTION/Rectangle35.png",P:"animations"},
    {img:"./images/COLLECTION/Rectangle35.png",P:"animations"},
]



function jsColl(cards) {
    const cardsContainer = document.getElementById('L-div')
    for (let i = 0; i < cards.length; i++) {
        const curentCard = cards[i];
        const createCard = document.createElement('div')
        createCard.classList.add('coll')
        createCard.innerHTML =
        `                                 
        <img src="${curentCard.img}" alt="">
        <div class="coll-a">
            <img src="./images/COLLECTION/Path26.png" alt="">
        </div>
        <div class="coll-ab">
            <p>#${curentCard.P}</p>
        </div>  
        `
        cardsContainer.appendChild(createCard)
    }
}    
jsColl(array5)


const content = document.getElementById('II-div')
const button = document.getElementById("cards-p4")

button.onclick = function (){
    if(content.className == "open"){
        content.className = "";
        button.innerHTML = "VIEW ALL";
    } else {
        content.className = "open";
        button.innerHTML = "VIEW LESS";
    }
}


const coontent = document.getElementById('H-div')
const buttoon = document.getElementById("cards-p5")

buttoon.onclick = function (){
    if(coontent.className == "open"){
        coontent.className = "";
        buttoon.innerHTML = "VIEW ALL";
    } else {
        coontent.className = "open";
        buttoon.innerHTML = "VIEW LESS";
    }
}


const cooontent = document.getElementById('L-div')
const buttooon = document.getElementById("cards-p6")

buttooon.onclick = function (){
    if(cooontent.className == "open"){
        cooontent.className = "";
        buttooon.innerHTML = "VIEW ALL";
    } else {
        cooontent.className = "open";
        buttooon.innerHTML = "VIEW LESS";
    }
}


function myFunction(event) {
    alert("You are registered");
    console.log(alert)
  }

