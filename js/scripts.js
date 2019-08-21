function validate(){
    var email = document.forms["loginform"]["email"];
    var password = document.forms["loginform"]["password"];
    var cpassword = document.forms["loginform"]["cpassword"];

    if(email == ""){
        alert("Please enter email");
        email.focus();
        return false;

    }

    if(password == ""){
        alert("Please enter password");
        password.focus();
        return false;

    }

    if(cpassword == ""){
        alert("Please enter password again");
        cpassword.focus();
        return false;

    }

    if(password != cpassword){
        alert("Password and confirm password must match");
        password.focus();
        return false;

    }



}

function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
  }

  function field_blur(field, email)
  {
    if(field.value == '')
    {
      field.value = email;
    }
  }

//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('a').click(function(event){
    event.preventDefault(); 
    });

    function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var course=document.getElementById("course_row"+no);
 var task=document.getElementById("task_row"+no);
 
	
 var course_data=course.innerHTML;
 var task_data=task.innerHTML;

	
 course.innerHTML="<input type='text' id='course_text"+no+"' value='"+course_data+"'>";
 task.innerHTML="<input type='text' id='task_text"+no+"' value='"+task_data+"'>";
 
}

function save_row(no)
{
 var course_val=document.getElementById("course_text"+no).value;
 var task_val=document.getElementById("task_text"+no).value;


 document.getElementById("course_row"+no).innerHTML=course_val;
 document.getElementById("task_row"+no).innerHTML=task_val;
 

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_course=document.getElementById("new_course").value;
 var new_task=document.getElementById("new_task").value;
 
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='course_row"+table_len+"'>"+new_course+"</td><td id='task_row"+table_len+"'>"+new_task+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_course").value="";
 document.getElementById("new_task").value="";
 
}


function search() {
  // Declare variables
  var input, filter;
  input = document.getElementById("search-btn");
  filter = input.value;
  tableData = document.getElementById("data_table");
  

  // Loop through all list items, and hide those who don't match the search query
  // for (i = 0; i < li.length; i++) {
  //   a = li[i].getElementsByTagName("a")[0];
  //   txtValue = a.textContent || a.innerText;
  //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //     li[i].style.display = "";
  //   } else {
  //     li[i].style.display = "none";
  //   }
  // }
  for (var i = 1 ; i < tableData.rows.length; i++) {
   
    var row = "";

    for (var j = 0; j < tableData.rows[i].cells.length; j++) {
      
        row += tableData.rows[i].cells[j].innerHTML;
        
        if(row.indexOf(filter) > -1){
          row.style.display = "";
          break;
        }
        else{
          row.style.display = "none";

        }
    }

    
}
}