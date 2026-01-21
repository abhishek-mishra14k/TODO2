let button = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")

button.addEventListener("click", function(){
    let li = document.createElement("li")
    li.textContent = input.value

    let delbttn = document.createElement("button")
    delbttn.textContent = "Delete"
    delbttn.classList.add("delete")

    li.appendChild(delbttn)
    ul.appendChild(li)
    input.value = ""     //this is used to clear the input field after adding the task
});
ul.addEventListener("click", function(event){
    //event.target.parentElement.remove()   //if we do this then it will remove the li element when we click on delete button
    if(event.target.nodeName == "BUTTON" ){
    let item = event.target.parentElement
    item.remove()
}});

// let delbttns = document.querySelectorAll(".delete")   //this will not work for dynamically created elements
// for(let delbttn of delbttns){
//     delbttn.addEventListener("click", function(event){
//         let par = this.parentElement
//         par.remove()
//     })}