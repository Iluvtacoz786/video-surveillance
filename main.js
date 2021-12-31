var video=""
var status=""
var object=[];
function preload(){
    video=createVideo("video.mp4")
    
}
function setup(){
    canvas=createCanvas(500,400)
    canvas.position(400,50)
video.hide()
}
function draw(){
    image(video,0,0,500,400)
    if(status!=""){
        objectDetector.detect(video,gotResult)
        document.getElementById("num_obj").innerHTML="Number of Objects Detected:"+object.length;
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status: Objects Detected"
            fill("red")
            text(object[i].label,object[i].x,object[i].y)
            noFill()
            stroke("red")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)

        }

    }

}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
   document.getElementById("status").innerHTML="Status: Detecting Objects"
}
function modelLoaded(){
    console.log("model is loaded");
status=true
video.loop()
video.volume(0)
video.speed(1)

}
function gotResult(error,result){
    if(error){
        console.log("error");
    }
    else{
        console.log(result);
        object=result
    }

}

