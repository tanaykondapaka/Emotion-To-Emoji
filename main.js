var prediction1;
var predection2;

Webcam.set(
    {
        width:350,
        height:300,
        image_format:"png",
        png_quality:90
    }
);
cam = document.getElementById("webcam");
Webcam.attach('#webcam');
function cam_on(){
Webcam.snap(function(data_uri){document.getElementById('selfie').innerHTML="<img id='pic' src='"+data_uri+"'>"})
    
}
console.log('ml5 Version=', ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JFe-_3DEP/model.json", model_ready);


function model_ready(){
    console.log("model Ready!")
    
}

function speak(){
    synth=window.speechSynthesis;
    s1="The first prediction is "+prediction1
    s2=" and The second prediction is "+prediction2
    utter=new SpeechSynthesisUtterance(s1+s2);
    synth.speak(utter);
}

function check(){

img=document.getElementById("pic");
classifier.classify(img, gotResults)

}

function gotResults(error, results){
if(error){
    console.log(error)
}
else{
    console.log(results);
    prediction1=results[0].label;
    prediction2=results[1].label;
    document.getElementById("result1").innerHTML=prediction1;
    document.getElementById("result2").innerHTML=prediction2;
    speak()
if(prediction1=="Happy"){
    document.getElementById("emoji1").innerHTML="&#128516;"
}
if(prediction2=="Happy"){
    document.getElementById("emoji2").innerHTML="&#128516;"
}
if(prediction1=="Sad"){
    document.getElementById("emoji1").innerHTML="&#128543;"
}
if(prediction2=="Sad"){
    document.getElementById("emoji2").innerHTML="&#128543;"
}
if(prediction1=="Shocked"){
    document.getElementById("emoji1").innerHTML="&#128551;"
}
if(prediction2=="Shocked"){
    document.getElementById("emoji2").innerHTML="&#128551;"
}
if(prediction1=="Hungry"){
    document.getElementById("emoji1").innerHTML="&#128523;"
}
if(prediction2=="Hungry"){
    document.getElementById("emoji2").innerHTML="&#128523;"
}
if(prediction1=="Bored"){
    document.getElementById("emoji1").innerHTML="&#128529;"
}
if(prediction2=="Bored"){
    document.getElementById("emoji2").innerHTML="&#128529;"
}

}

}



