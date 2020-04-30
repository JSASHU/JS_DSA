// Binary Min Heap lower value of priority is high priority.
// Binary Heap Insertion :- O(log N)
// Binary Heap Removal :- O(log N)
// Binary Heap Search :- O(N)

class PriorityQueue{
	constructor(){
		this.values = [];
	}
	enqueue(val,priority){
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
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
                if(leftChild.priority < el.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < el.priority) || 
                    (swap != null && rightChild.priority < leftChild.priority)){
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

class Node{
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}

let er = new PriorityQueue();
er.enqueue("common cold", 5);
er.enqueue("gunshot bound", 1);
er.enqueue("figh fever", 4);
er.enqueue("broken arm", 2);
er.enqueue("glass on foot", 3);
console.log(er);
/*console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());*/