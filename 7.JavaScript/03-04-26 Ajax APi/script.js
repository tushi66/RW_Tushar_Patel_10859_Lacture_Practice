function FetchData(){

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){
            console.log(this.responseText);
            
        }

    };
    xhttp.open("GET", "./Text.txt",true);
    xhttp.send();   
}


function FetchData1(){

    let Xhttp1 = new XMLHttpRequest();

    Xhttp1.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            console.log(this.responseText);
            
        }
    }

    Xhttp1.open("Get", "https://dummyjson.com/carts" , true);
    Xhttp1.send();

}


function FetchData2(){

    let Xhttp2 = new XMLHttpRequest();

    Xhttp2.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
         console.log(this.responseText);
         
        }
    }

    Xhttp2.open("Get", "https://dummyjson.com/posts", true);
    Xhttp2.send();


}