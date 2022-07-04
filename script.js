addBtn = document.getElementById('add');
addBtn.remo=null;

function add() {
    let added = document.getElementById('new-task').value;  //getting the value

    let uncheck = document.getElementById("incomplete-tasks");  //To add in the incomplete tasks list

    let newlist = document.createElement('li');  //making a new list
    newlist.textContent = added;        //adding our fetched value to it
         //appeding the list into div
    newlist.innerHTML = `<input type="checkbox" class="check"><label>${added}</label><input type="text" value="${added}"><button class="edit">Edit</button><button class="delete">Delete</button>`;
    uncheck.appendChild(newlist); 
    document.getElementById('new-task').value = '';
    
     if(addBtn.remo!=null)
      addBtn.remo.remove();
}

function myFunc(event){
 var x = event.target;
    if(x.className == "edit"){
      let update = x.parentNode.querySelector('label').innerHTML;
      document.getElementById("new-task").value = update;
      document.getElementById("add").innerHTML = "Update";
      addBtn.remo=x.parentNode;
    }
    if(x.className == "delete"){
        x.parentNode.remove();
      }
    if(x.className == "check"){
        if(x.checked == 1){
            let check = document.getElementById("completed-tasks");
            let newlist = document.createElement('li');
            text = x.parentNode.querySelector('label').innerHTML;
            newlist.innerHTML = `<input type="checkbox" class = "check" checked><label>${text}</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button>`;
            check.appendChild(newlist);
            x.parentNode.remove();
        }
        else{
            let uncheck = document.getElementById("incomplete-tasks");
            let newlist = document.createElement('li'); 
            text = x.parentNode.querySelector('label').innerHTML;
            newlist.innerHTML =  `<input type="checkbox" class="check"><label>${text}</label><input type="text" value="${text}"><button class="edit">Edit</button><button class="delete">Delete</button>`;
            uncheck.appendChild(newlist);
            x.parentNode.remove();
        }
      
    }
  
}