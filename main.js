function preload(){

}

function setup(){
    canvas = createCanvas(550, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 550, 400);
}