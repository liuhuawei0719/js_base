

function buildHeap(items,heapSize){
  while(heapSize < items.length - 1){
    heapSize++;
    heapify(items,heapSize)
  }
}

function heapify(items, i){
  while(Math.floor(i/2)>0 && items[i] < items[Math.floor(i/2)]){
    swap(items,i,Math.floor(i/2))
    i = Math.floor(i/2)
  }
}

function swap(items,i,j){
  let temp = items[i];
  items[i] = items[j];
  items[j] = temp
}

var items = [,5, 2, 3, 4,2, 1]
//buildHeap(items,1)
//console.log(items)












