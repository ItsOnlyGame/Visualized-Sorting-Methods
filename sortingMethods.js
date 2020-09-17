class SortMethod {
    constructor() {
        this.stop = false;
    }

    end() {
        this.stop = true;
    }

    async arraySwitch(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

class BubbleSort extends SortMethod {
    async sort() {
        for (var j = 0; j < arr.length; j++) {
            for (var i = 0; i < arr.length - 1; i++) {
                if (this.stop) return;

                if (arr[i] > arr[i + 1]) {
                    await this.arraySwitch(arr, i, i + 1);
                }
            }
            await this.sleep(1);
        }
    }
}

class SelectionSort extends SortMethod {
    async sort() {
        for (var i = 0; i < arr.length; i++) {

            var min = i;
    
            for (var j = i + 1; j < arr.length; j++) {

                if (this.stop) return;

                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
        
            if (min != i) {
                await this.arraySwitch(arr, i, min);
                await this.sleep(1);
            }
        }
    }
}

class InsertionSort extends SortMethod {
    async sort() {
        for (var i = 1; i < arr.length; i++) {
            if (this.stop) return;

            let temp = arr[i];
            for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
                await this.arraySwitch(arr, j + 1, j);
            }

            arr[j+1] = temp;
            await this.sleep(1);
        }
    }
}

class QuickSort extends SortMethod {

    constructor() {
        super();
        this.states = [];
    }

    async sort(start, end) {
        if (start >= end || this.stop) {
            return;
        }

        let index = await this.partition(arr, start, end);
        this.states[index] = -1;
    
        await Promise.all([
            this.sort(start, index - 1),
            this.sort(index + 1, end)
        ]);
    }

    async partition(arr, start, end) {
        for (let i = start; i < end; i++) {
            if (this.stop) return;

            this.states[i] = 1;
        }
    
        let pivotValue = arr[end];
        let pivotIndex = start;
        this.states[pivotIndex] = 0;

        for (let i = start; i < end; i++) {
            if (this.stop) return;

            if (arr[i] < pivotValue) {
                await this.arraySwitch(arr, i, pivotIndex);
                await this.sleep(1);
                this.states[pivotIndex] = -1;
                pivotIndex++;
                this.states[pivotIndex] = 0;
            }
        }
        await this.arraySwitch(arr, pivotIndex, end);
        await this.sleep(1);

        for (let i = start; i < end; i++) {
            if (i != pivotIndex) {
                if (this.stop) return;
                this.states[i] = -1;
            }
        }
    
        return pivotIndex;
    }
}

