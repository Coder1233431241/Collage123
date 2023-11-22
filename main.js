camera=document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 250,
    image_format:'jpeg',
    jpeg_quality: 90
});
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var content;
function start(){
    recognition.start();
}
recognition.onresult=function(event){
     content=event.results[0][0].transcript.toLowerCase();
     if (content=="selfie"){
    speak();
     }
}
function speak(){
var synth=window.speechSynthesis;
Webcam.attach(camera);
speak_data="TAKING YOUR NEXT SELFIE IN 5 SECONDS!!"
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
setTimeout(function(){
    img_id="selfie_1";
    take_snapshot();
    speak_data="TAKING YOUR NEXT SELFIE IN 10 SECONDS!!"
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
},5000);
setTimeout(function(){
    img_id="selfie_2";
    take_snapshot();
    speak_data="TAKING YOUR NEXT SELFIE IN 15 SECONDS!!"
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
},10000);
setTimeout(function(){
    img_id="selfie_3";
    take_snapshot();
},15000);
}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        if (img_id=="selfie_1"){
        document.getElementById("result1").innerHTML='<img id="selfie_1" src="'+data_uri+'">'; 
        }
        if (img_id=="selfie_2"){
            document.getElementById("result2").innerHTML='<img id="selfie_2" src="'+data_uri+'">'; 
            }
            if (img_id=="selfie_3"){
                document.getElementById("result3").innerHTML='<img id="selfie_3" src="'+data_uri+'">'; 
                }
    });
}
