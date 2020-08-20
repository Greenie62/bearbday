var html="";
var beehive=document.querySelector(".beehive");
var bear =document.querySelector(".bear_container")
var pupils =document.querySelectorAll('.pupil')
var buzzone=new Audio("./assets/bee.wav")
var buzztwo=new Audio('./assets/flybuzz.wav')

for(let i=0;i<500;i++){
    html += "<div class='honeycomb'></div>"
}

beehive.innerHTML=html;


function createBee(classname){
    var bee= document.createElement("div");
    bee.className=classname
    var beeHead=document.createElement("div");
    beeHead.className="head"
    var beeBody=document.createElement("div")
    beeBody.className="body"
    var yellowOne=document.createElement("div")
    yellowOne.className="yellow"
    var yellowTwo=document.createElement("div")
    yellowTwo.className="yellow"
    var blackOne=document.createElement("div")
    blackOne.className="black"
    var blackTwo=document.createElement("div")
    blackTwo.className="black"
    var stinger= document.createElement("div");
    stinger.className="stinger"
    beeBody.appendChild(yellowOne)
    beeBody.appendChild(blackOne)

    beeBody.appendChild(yellowTwo)
    beeBody.appendChild(blackTwo)

    bee.appendChild(beeHead)
    bee.appendChild(beeBody);
    bee.appendChild(stinger)


    document.querySelector("body").appendChild(bee)


}


createBee("bee")
createBee("beetwo")
createBee("beethree")
createBee("attackbee patrol")


for(let i=0;i<12;i++){

setTimeout(()=>{
        if(i === 8){
            console.log('unleash the bee!')
        document.querySelector(".attackbee").classList.remove('patrol')
        document.querySelector(".attackbee").classList.add('attack')
        }
if(i === 9){
bear.classList.remove("stand")
 bear.classList.add('ouch')

pupils.forEach(pup=>{
    pup.classList.add("bigeyes")
})

}

if(i === 11){
    document.querySelector(".bday").style.display='block'
document.querySelector(".bday").style.top="200px"
}

    
},i*1000)
}