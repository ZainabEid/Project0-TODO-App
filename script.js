const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var itemsCounter=0
var unCheckedCounter=0
var checkboxId=0

//new Todo Button Click
function newTodo() {
     
  // getting the to-do text from the input textbox
 const toDoText=document.getElementById("txt").value
 // check if there is a something to do
     if (!toDoText) {
         alert('please enter something to do! ')
    }else{
         toDoText.className=classNames.TODO_TEXT
  //MAKING THE TO DO LIST
  const node=document.createElement("li")
  node.className=classNames.TODO_ITEM
  
  /*create checkBox*/
  const checkBoxNode=document.createElement("INPUT")
  checkBoxNode.setAttribute("type", "checkbox")
  checkBoxNode.id="checkbox"+checkboxId
  checkBoxNode.setAttribute("onClick", "ubdateUncheckedCounter(this)")
  checkboxId++
  checkBoxNode.className=classNames.TODO_CHECKBOX
  
  //Add text and ckeckBox to the list item node
     node.innerHTML=checkBoxNode.outerHTML+toDoText 

//create Delete Button
    var deleteBtn=document.createElement("button")
    deleteBtn.className=classNames.TODO_DELETE
    deleteBtn.style.backgroundColor='red'
    deleteBtn.style.color="white"
    deleteBtn.appendChild(document.createTextNode('X'))
    deleteBtn.setAttribute("onClick", "DeleteFunction(this)")
    node.appendChild(deleteBtn)

// add the list item node to the un oredered list
      list.appendChild(node)    
     
  //update the Counter span
    itemsCounter++
    unCheckedCounter++
    itemCountSpan.innerHTML=itemsCounter
    uncheckedCountSpan.innerHTML=unCheckedCounter 
    
    //clear the textfield and set its placeholeder
    document.getElementById("txt").value=''
         }
        
  
  }

//the Delete item Function
function DeleteFunction(btn){
    if(confirm("are you sure?")){
          //ubdate un checked counter
              var  cbSibling=btn.previousElemtentSibling
              /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
              /*we need to check if the uncheccked counter counts this element or not
               * call ubdateUncheckedCounter function*/
              
              // remove the list element
            var btnListItem= btn.parentNode
              list.removeChild(btnListItem)
              itemsCounter-=1             
            
    }               
 }  
 
/*change checkbox value and ubdate the counter related to it*/
function ubdateUncheckedCounter(cb){
    var checkbox= document.getElementById(cb.id)
    if(checkbox.checked){
           unCheckedCounter-=1
    }else if (! checkbox.checked) {
           unCheckedCounter++
        }
     uncheckedCountSpan.innerHTML=unCheckedCounter
}

