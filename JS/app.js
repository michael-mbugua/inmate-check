function dropDown(){
    document.getElementsById("myDropDown").classList.toggle("show");
}
window.onclick=function (event){
    if(!event.target.matches('.dropDownBtn')){
        var dropdowns=document.getElementsByClassName("dropdown_content");
        var i;
        for(i=0;i<dropdowns.length;i++){
            var openDropDown=dropdowns[i];
            if(openDropDown.classList.contains('show')){
                openDropDown.classList.remove('show');
            }
        }
    }
}


