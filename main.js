
prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier  = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/U1V705yaI/model.json",modelloaded);
//create your model and store it in var classifier 

//define function modelLoaded
function modelloaded(){
    console.log("Model loaded");
}
//define function check() 
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);

}

//define function gotResult(error, results)
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
   console.log(results);
   document.getElementById("status").innerHTML = results[0].label;
   if(results[0].label == "Wearing Mask"){
    document.getElementById("update_emoji").innerHTML = "&#x1F637;";
   }
   else{
    document.getElementById("update_emoji").innerHTML  = "&#x26d4;";
   }
}
}