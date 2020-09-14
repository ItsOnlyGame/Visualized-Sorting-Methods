var arr = [];

const WIDTH = 600;
const HEIGHT = 600;
var PADDING = 0;

var state = 0;
var a = 255;
var r = 255;
var g = 0;
var b = 0;

var mode = "Bubble Sort";
var sel;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(153);
  
	for (var i = 0; i < HEIGHT; i++) {
		arr[i] = i;
	}

  shuffle(arr, true);
  frameRate(500);  

  sel = createSelect();
  sel.option('Bubble Sort');
  sel.option('Selection Sort');
  sel.option('Insertion Sort');
  sel.changed(modeReset);
}

function draw() {
	background(51);
	stroke(r, g, b);
	strokeWeight(4);

	switch(mode) {
		case "Bubble Sort":
			bubbleSort(arr);
			break;

		case "Selection Sort":
			selectionSort(arr);
			break;

		case "Insertion Sort": 
			insertionsSort(arr);
			break;
	}
  	changeColor(5);
} 

function modeReset() {
	for (var i = 0; i < HEIGHT; i++) {
		arr[i] = i;
	}
	reset();
	mode = sel.value();
	shuffle(arr, true);
}

function keyPressed() {
	if (keyCode === ENTER) {
		modeReset
	}
}

function changeColor(speed) {
  if (state == 0){
	g += speed;
	if(g == 255)
		state = 1;
  }
  if (state == 1){
	  r -= speed;
	  if(r == 0)
		  state = 2;
  }
  if (state == 2){
	  b += speed;
	  if(b == 255)
		  state = 3;
  }
  if (state == 3){
	  g -= speed;
	  if(g == 0)
		  state = 4;
  }
  if (state == 4){
	  r += speed;
	  if(r == 255)
		  state = 5;
  }
  if (state == 5){
	  b -= speed;
	  if(b == 0)
		  state = 0;
  }
}