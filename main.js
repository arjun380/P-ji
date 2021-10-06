function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw() {
    image(video, 0 ,0 , 640, 480);
    tint(tint_color);
    fill(255,0,0);
    rect(90, 40, 30, 30, 7);
    rect(490, 40, 30, 30, 7);
    rect(490, 420, 30, 30, 7);
    rect(90, 420, 30, 30, 7);
    fill(39,129,223);
    ellipse(305, 55, 460, 10);
    ellipse(305, 435, 460, 10);
    ellipse(105, 255, 10, 460);
    ellipse(505, 255, 10, 460);
}

function take_snapshot() {
save('Arjun_the_great.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}