
function quickSort(lb,ub){

    if(lb< ub){
        let loc = partition(lb,ub);
        quickSort(lb,loc-1);
        quickSort(loc+1,ub);
    }

}

function partition(lb,ub){

    let start = lb;
    let end = ub;

    let pivot = array[lb];

    while(start < end){
        while(array[start] <= pivot){
            start++;
        }
    
        while(array[end] > pivot){
            end--;
        }
    
        if(start < end){
            let temp = array[end];
            array[end] = array[start];
            array[start] = temp;
        }
    }

    array[lb] = array[end];
    array[end] = pivot;
    
    return end;

}

let array = [7,3,2,4,12,6];

quickSort(0,5);

console.log(array);
