function insertionSortReverse(array) {
    for(var i = array.length - 1; i >= 0; i--){
        var val = array[i];
        var j;
        for(j = i; j > 0 && arr[j+1] < val; j--){
            arr[j] = arr[j - 1];
        }
        arr[j] = val;
    }
    return array;
}
