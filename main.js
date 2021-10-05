songplay=null;
leftwristx=0;
leftwristy=0;
rightWrist=0;
rightwristy=0;
function preload(){
    songplay=loadSound("Aimusic.mp3");
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}
function draw(){
    image(video,0,0,400,400);
}
function play(){
    songplay.play();
    songplay.rate(1);
    songplay.setVolume(1);
}
function gotPoses(results){
    if (results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    
    console.log('Left Wrist x='+leftwristx+'Left Wrist Y='+leftwristy);
    console.log('Right Wrist x='+rightwristx+'Right Wrist Y='+rightwristy);
    
    }
    }
function modelLoaded(){
    console.log('poseNet is  Initialized');
}