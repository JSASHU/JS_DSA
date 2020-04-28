class MaxBinaryHeap{
	constructor(){
		this.values = [];
	}
	insert(val){
		this.values.push(val);
		this.bubbleUp();
	}
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    //extract maximum element and reindex/sunk down the BinaryHeap
    extractMap(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const el = this.values[0];
        while(true){
            let leftChildIdx = 2*idx+1;
            let rightChildIdx = 2*idx+2;
            let rightChild,leftChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(rightChild > el){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > el) || 
                    (swap != null && rightChild > leftChild)){
                    swap = rightChildIdx
                }
            }
            if(swap===null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = el;
            idx = swap;
        }
    }
}

let mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55)
console.log(mbh.values);
console.log(mbh.extractMap());
console.log(mbh.values);