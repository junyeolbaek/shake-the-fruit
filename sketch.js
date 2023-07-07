//fruits.

let value;
let img1,img2,img3,img4,img5,img6,img7,img8;img9;img10;img11;img12;img13;
let img;

function preload() {
  img1 = loadImage("1.jpg");
  img2 = loadImage("2.jpg");
  img3 = loadImage("3.jpg");
  img4 = loadImage("4.jpg");
  img5 = loadImage("5.jpg");
  img6 = loadImage("6.jpg");
  img7 = loadImage("7.jpg");
  img8 = loadImage("8.jpg");
  img9 = loadImage("9.jpg");
  img10 = loadImage("10.jpg");
  img11 = loadImage("11.jpg");
  img12 = loadImage("12.jpg");
  img13 = loadImage("13.jpg");
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  img = img1;
  
  //DeviceOrientationEvent, DeviceMotionEvent
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    //ios 13 device
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        let button = createButton("Click to access! <br> Shake it");
        button.style('font-size', '24px');
        button.mousePressed(requsetAccess);
        button.center();
        throw error;
      })
      .then(() => {
        // on any subsequent visits
        permissionGranted = true;
      });
  } else {
    //non ios 13 device
    textSize(48);
    // text("non ios 13 device", 100, 100);
    permissionGranted = true;
  }
}


function requsetAccess() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove();
}

function requsetAccess() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove();
}

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
    if (!permissionGranted) {
    return;
  }
  if(value == 1){
    img = img1;
  }else if (value == 2){
    img = img2;
  }else if (value == 3){
    img = img3;
  }
  else if (value == 4){
    img = img4;
  }
  else if (value == 5){
    img = img5;
  }
  else if (value == 6){
    img = img6;
  }
  else if (value == 7){
    img = img7;
  }
  else if (value == 8){
    img = img8;
  }else if (value == 9){
    img = img9;
  }
  else if (value == 10){
    img = img10;
  }
  else if (value == 11){
    img = img11;
  }
  else if (value == 12){
    img = img12;
  }
  else if (value == 13){
    img = img13;
  }
  
  background(220);
  image (img,width/2,height/2,width,height);
  // console.log(value);
}

function deviceShaken(){
  value = int(random(1, 13));
}
