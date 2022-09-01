let thikaURL='http://localhost:3000/thika/5666';
async function getDetails(){
        const response=await fetch(thikaURL);
        const data=await response.json();
        console.log(response)
        const {name,Bond,Hearings,Release_Date,criminal_Offense}=data;
        document.getElementById("Nameinmate").textContent=name;
        document.getElementById("inmatebond").textContent=Bond;
        document.getElementById("inmatehearing").textContent=Hearings;
        document.getElementById("release_date").textContent=Release_Date;
        document.getElementById("criminal_offense").textContent=criminal_Offense;
    }
    document.getElementById("submit").addEventListener('click',getDetails)
    // document.getElementById("submiting").addEventListener('click',
    // )
    function checking(){
            alert("kindly choose the prison you want to search from")
        }