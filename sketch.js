var arr = [];

const WIDTH = 600;
const HEIGHT = 600;
var PADDING = 0;

var state = 0;
var a = 255;
var r = 255;
var g = 0;
var b = 0;

var selection;
var currentSort;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(153);
  
	for (var i = 0; i < HEIGHT; i++) {
		arr[i] = i;
	}

  shuffle(arr, true);
  frameRate(60);  

  selection = createSelect();
  selection.option('Bubble Sort');
  selection.option('Selection Sort');
  selection.option('Insertion Sort');
  selection.option('Quick Sort');
  selection.changed(modeReset);

  resetButton = createButton("Reset");
  resetButton.mousePressed(modeReset);

  modeReset();
}

function draw() {
	background(51);
	stroke(r, g, b);
	strokeWeight(4);
	
	changeColor(5);

    for (var i = 0; i < arr.length; i++) {
        line(i + (PADDING * i), HEIGHT, i + (PADDING * i), HEIGHT - arr[i]);
    }
} 

async function modeReset() {
	if (currentSort != undefined) {
		await currentSort.end();
	}


	for (var i = 0; i < HEIGHT; i++) {
		arr[i] = i;
	}
	shuffle(arr, true);
	
	switch(selection.value()) {
		case "Bubble Sort":
			currentSort = new BubbleSort();
			currentSort.sort();
			break;

		case "Selection Sort":
			currentSort = new SelectionSort();
			currentSort.sort();
			break;

		case "Insertion Sort": 
			currentSort = new InsertionSort();
			currentSort.sort();
			break;

		case "Quick Sort":
			currentSort = new QuickSort();
			currentSort.sort(0, arr.length - 1);
			break;
	}
	
}

function keyPressed() {
	if (keyCode === ENTER) {
		modeReset();
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