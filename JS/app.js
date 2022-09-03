
const home="http://localhost:3000/inmates"
let inmateAPI=`${home}/5664`;
async function getDetails1(){
        const response=await fetch(inmateAPI);
        const data=await response.json();
        console.log(response)
        const {name,Bond,Hearings,Release_Date,criminal_Offense}=data;
        document.getElementById("Nameinmate").textContent=name;
        document.getElementById("inmatebond").textContent=Bond;
        document.getElementById("inmatehearing").textContent=Hearings;
        document.getElementById("release_date").textContent=Release_Date;
        document.getElementById("criminal_offense").textContent=criminal_Offense;
    }
    document.getElementById("submit").addEventListener('click',getDetails1)
    let  thikaURL=`${home}/5676`;
    async function getDetails2(){
            const response=await fetch(thikaURL);
            const data=await response.json();
            console.log(response)
            const {name,Bond,Hearings,Release_Date,criminal_Offense}=data;
            document.getElementById("thikaNameinmate").textContent=name;
            document.getElementById("thikainmatebond").textContent=Bond;
            document.getElementById("thikainmatehearing").textContent=Hearings;
            document.getElementById("thikarelease_date").textContent=Release_Date;
            document.getElementById("thikacriminal_offense").textContent=criminal_Offense;
        }
        document.querySelector(".thika_submit").addEventListener('click',getDetails2)
    

const url=`${home}/5676`
async function getDetails3(){
        const response=await fetch(url);
        const data=await response.json();
        console.log(response)
        const {name,Bond,Hearings,Release_Date,criminal_Offense}=data;
        document.getElementById("induNameinmate").textContent=name;
        document.getElementById("induinmatebond").textContent=Bond;
        document.getElementById("induinmatehearing").textContent=Hearings;
        document.getElementById("indurelease_date").textContent=Release_Date;
        document.getElementById("inducriminal_offense").textContent=criminal_Offense;
    }
document.querySelector(".indu_submit").addEventListener('click',getDetails3)

function checking(){
    alert("kindly choose the prison you want to search from")
}

    function register(){
        document.getElementById("register").addEventListener('click',()=>{
            alert("your details have been saved ,you can now proceed to go to home");
            reset()
        })
    }
let dobAGE=document.getElementById("dobcalc");
currentYear=new Date.currentYear;
age=currentYear-dobAGE;
if(age!=18){
    alert("must be 18 years old")
}
input=getElementByClassName("caseID");
input.addEventListener()
