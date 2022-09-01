url='http://localhost:3000/inmates2';
fetch(url)
.then(response=>response.text())
.then(response=>{
    console.log(response);
    
})
