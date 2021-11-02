function bblSort(arr){
	
    for(var i = 0; i < arr.length; i++){
        
    
    for(var j = 0; j < ( arr.length - i -1 ); j++){
        
        if(arr[j] > arr[j+1]){
            
    
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        }
    }
    }
    
    console.log(arr);
    }
    
    
    
    var arr = [0,8,10,12,50,87,46,90,36];
    
    
    bblSort(arr);
    