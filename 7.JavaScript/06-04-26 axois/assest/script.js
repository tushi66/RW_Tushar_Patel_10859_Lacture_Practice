// Fetch and axois in Javascript


const fetchdata = () => {

    fetch('https://dummyjson.com/posts')
    .then( (response) => response.json() )
    .then( (data) => console.log(data))

}


const fetchdata1= async() => {

        let res =  await fetch('https://dummyjson.com/posts');

        let respon = await res.json();
        
        let data = console.log(res);
        
        console.log(data);

}