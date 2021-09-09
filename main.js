// ,  ,  ,  ,  , 
let myInput = document.querySelector('.add-tasks input');
let myBtn = document.querySelector('.add-tasks .plus');
let taskContent = document.querySelector('.tasks-content');
let noTaskMessage = document.querySelector('.no-tasks-message');
let myCount = document.querySelector('.tasks-count span');
let myComplete = document.querySelector('.tasks-completed span');

window.onload = function(){
    myInput.focus();
};


myBtn.onclick = function() {

    if(myInput.value === ''){
        console.log("No value");
    }else{
        // console.log(myInput.value);
        noTaskMessage.remove();
        let mainSpan = document.createElement('span');
        let deleteElement = document.createElement('span');
        let text = document.createTextNode(myInput.value);
        let deleteText = document.createTextNode('Delete');
        mainSpan.appendChild(text);
        mainSpan.className = 'task-box';
        deleteElement.appendChild(deleteText);
        deleteElement.className = 'Delete';
        mainSpan.appendChild(deleteElement);
        taskContent.appendChild(mainSpan);
        myInput.value = '';
        myInput.focus();
    }
}
document.addEventListener('click', function(e){
    if(e.target.className == 'Delete'){
        e.target.parentNode.remove();
    }
    // if(e.target.classList.contains('task-box')){
    //     e.target.classList.toggle('.finish');
    // }
});