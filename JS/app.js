let inmateAPI='http://localhost:3000/inmates';

// fetch(inmateAPI)
// .then(response=>{
//     console.log(response);
//     return(response.text()).then(response=>{
//         console.log(response)
//     })
// })
document.getElementById("submit").addEventListener('click',()=>{
    fetch(inmateAPI)
    .then(response=>response.text())
    .then(response=>{
        console.log(response)
        document.getElementById("inmateDetails").append(response)
    })
})


