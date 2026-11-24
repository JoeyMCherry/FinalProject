alert("In this game, you are shown a tornado siren image and you have to guess which siren is in the image based off what you read about on the other pages!");
var images = [
    {src:"3t22.jpg", name: "3T22"},
    {src: "fs2001.jpg", name:"2001"},
    {src:"508sideview.jpg", name:"508"},
    {src:"fseclipse8.jpg", name:"Eclipse 8"},
    {src:"hornet.jpg", name:"Hornet"},
    {src:"Sentry3V8.jpg", name:"3V8"},
    {src:"Sentry3V8H.jpg", name:"3V8H"},
    {src:"STH10.png", name:"STH10"},
    {src:"thunderbolt.jpg", name:"Thunderbolt"},
    {src:"whelenvortex.jpg", name:"Vortex"},
    {src:"WS2000-12.png", name:"WS2000"},
    {src:"Whelen2800lineup.jpeg", name:"WPS 2800"},
    {src:"20V1T.jpg", name:"20V1T"},
    {src:"14V.jpg", name:"14V"},
    {src:"5V.png", name:"5V"},
    {src:"AL5000.webp", name:"AL5000"},
    {src:"AL6000R.webp", name:"AL6000R"},
    {src:"Allertor.jpeg", name:"Allertor"},
    {src:"Banshee115.jpg", name:"Banshee"},
    {src:"Cyclone.jpg", name:"Cyclone"},
    {src:"T121.jpg", name:"T121"},
    {src:"T130.png", name:"T130"}
];
var rightAnswer;
function randomSiren(){
    document.getElementById("result").textContent = "";
    var random=Math.floor(Math.random()* images.length);
    var selectedSiren= images[random];
    rightAnswer = selectedSiren.name;
    document.getElementById("image").src=selectedSiren.src;
    MultipleChoice(rightAnswer);
}
function MultipleChoice(answer){
    var choices = images.map(image => image.name);
    choices.sort(() => Math.random() -0.5);
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.innerHTML = "";
    choices.forEach(choice =>{
        var button=document.createElement("button");
        button.textContent=choice;
        button.addEventListener("click", function(){
            CheckAnswer(choice,answer);
        });
        buttonDiv.appendChild(button);
    });
}
function CheckAnswer(choice,answer){
    if(choice == answer){
        document.getElementById("result").textContent="You are right!";
    }
    else{
        document.getElementById("result").textContent="Try again!";
    }
}
document.getElementById("next").addEventListener("click", randomSiren);
randomSiren()
