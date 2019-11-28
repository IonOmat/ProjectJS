function itemLoad(item){
 item = document.getElementById("itemID");
 return item.value;

}

document.addEventListener("keypress",function(keyPressed){
    var ul = document.querySelector("ul");
    var item = document.getElementById("itemID")
    // console.log(keyPressed.which);
    if(keyPressed.which == 13 && item !=""){
        var li =document.createElement("li");
        var newTodo =  itemLoad();
        var item = document.getElementById("itemID").value = "";
        var icon = document.createElement("img");
        icon.setAttribute("scr","./img/trash.png");
        icon.setAttribute("class","btn");
        icon.setAttribute("onclick","deleteToDo()");
        ul.appendChild(li).append(icon,newTodo);


    }
})

function deleteToDo(){
    event.currentTarget.parentElement.remove();
}