function heapSort(items){
  let heapSize = items.length-1;
  buildHeap(items,heapSize)
  for(var i= items.length-1; i>0; i--){
    swap(items, 0, i);
    heapSize--;
    heapify(items,heapSize,0);
  }
  return items
}

function buildHeap(items,heapSize){
  for(let i=Math.floor(heapSize/2);i>=0;i--){
    heapify(items,heapSize,i);
  }
}

function heapify(items,heapSize,i){
  while(true){
    var maxIndex=i;
    if(2*i <= heapSize && items[i]<items[2*i]){
      maxIndex = 2*i;
    }
    if(2*i+1 <= heapSize && items[maxIndex] < items[2*i+1]){
      maxIndex = 2*i+1
    }
    if(maxIndex === i) break
    swap(items,i, maxIndex);
    i = maxIndex;
  }
}


function swap(items,i,j){
  let temp = items[i];
  items[i] = items[j];
  items[j] = temp
}



function MaxK(items,k){
  var itemK = items.splice(0,k+1)
  itemK = heapSort(itemK)
  for(let i = 0; i<items.length; i++ ){
    if(items[i] > itemK[0]){
      itemK[0] = items[i]
      heapSort(itemK)
    }
  }
  return itemK
}

var items = [11,10,22,9, 2, 8, 33, 7, 44, 6, 5]

console.log(MaxK(items,3))


