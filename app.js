document.querySelector('#add').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert('Please Enter Task');
    }
    else {
        document.querySelector('#tasks').innerHTML+= `<div class="task">
<span id="tasknm">${document.querySelector("#newtask input").value}</span>
<button id="delbtn"class="delete">Delete</button></div>`;
        var dtsk = document.querySelectorAll('.delete');
        for(var i=0;i<dtsk.length;i++){
            dtsk[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        var task_list = document.querySelectorAll('#tasknm');
        for(var i=0;i<task_list.length;i++){
            task_list[i].onclick=function(){
                this.classList.toggle('Completed');
            }
        }
        document.querySelector('#newtask input').value = '';


    }
 }
