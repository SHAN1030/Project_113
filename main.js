function preload(){

}
function setup(){
    canvas = createCanvas(810,600);
    canvas.position(800,250);
    video = createCapture(VIDEO);
    video.hide();
    }

function draw(){
    image(video,80,50,640,480);
    circle(750, 60, 100);
    fill('indigo');
    circle(750, 530, 100);
    fill('yellow');
    circle(60, 530, 100);
    fill('orange');
    circle(60, 60, 100);
    fill('blue'); 

    rect(30,100,55,390);
    fill('purple');
    rect(720,100,55,390);
    fill('red');
    rect(100,500,610,55); 
    fill('green');
    rect(100,30,610,55);
    fill('blue');
}

function take_snapshot(){
        save("mypicture.png");
    }

    