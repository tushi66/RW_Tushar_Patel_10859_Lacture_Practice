const BASE_URL  ="http:/localhost:5000"

async function fetchData() {

    try{

        let res = await fetch(`${BASE_URL}/api/employees`)
        let data = await res.json()

        console.log(data);
        
        

    }catch(err){
        console.log(err);
        
    }
    
}