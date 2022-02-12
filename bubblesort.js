
function bubbleSort(array,n){

    for(let i = 0;i < n-1;i++){

        for(let j = 0;j < n-1-i;j++){
            if(array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

console.log(bubbleSort([5,6,1,2,4],5));