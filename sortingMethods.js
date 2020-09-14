var index = 0;

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            arraySwitch(arr, i, i + 1);
        }
    }
    drawLines(arr);
}

function selectionSort(arr) {
    var min = index;
    for (var j = index + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }

    if (min != index) {
        arraySwitch(arr, index, min);
    }
    index++;
    if (index >= arr.length) index = 0;

    drawLines(arr);
}

function insertionsSort(arr) {
    if (index == 0) index = 1;

    let j = index - 1;
    let tmp = arr[index];
    while (j >= 0 && arr[j] > tmp) {
        arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1] = tmp;

    index++;
    if (index >= arr.length) index = 0;

    drawLines(arr);
}

function arraySwitch(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reset() {
    index = 0;
}

function drawLines(arr) {
    for (var i = 0; i < arr.length; i++) {
        line(i + (PADDING * i), HEIGHT, i + (PADDING * i), HEIGHT - arr[i]);
    }
}