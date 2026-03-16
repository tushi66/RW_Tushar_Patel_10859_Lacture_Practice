

// pattern

var pt = '';


for(var i=1; i<=5; i++){
    
    var raw= '';
    
    
    for(var j=1; j<=5; j++){

        raw += j; 
    

    }

    pt += raw + '<br />';


    
    
}
document.getElementById("pt1").innerHTML = pt;