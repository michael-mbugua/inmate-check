url='http://localhost:3000/inmates2/5665';
fetch(url)
.then(response=>response.text())
.then(response=>{
    console.log(response);
    
})
async function getDetails(){
    const response=await fetch(url);
    const data=await response.json();
    const {name,Bond,Hearings,Release_Date,criminal_Offense}=data;
    document.getElementById("Nameinmate").textContent=name;
    document.getElementById("inmatebond").textContent=Bond;
    document.getElementById("inmatehearing").textContent=Hearings;
    document.getElementById("release_date").textContent=Release_Date;
    document.getElementById("criminal_offense").textContent=criminal_Offense;
}
document.getElementById("submit").addEventListener('click',getDetails)