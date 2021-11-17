leftEyeX = 0;
leftEyeY = 0;
function preload(){
  mask = loadImage("https://i.postimg.cc/pTcDsZ1R/eyes-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log('PoseNet Is Initialized');
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    console.log("leftEyeX = " + results[0].pose.leftEye.x);
    console.log("leftEyeY = " + results[0].pose.leftEye.y);
    leftEyeX = results[0].pose.leftEye.x;
    leftEyeY = results[0].pose.leftEye.y;
  }
}

function draw(){
image(video,0,0,450,450);
image(mask,leftEyeX + 10,leftEyeY + 30,120,100);
}

function take_snapshot(){
    save("myfilter.png");
}