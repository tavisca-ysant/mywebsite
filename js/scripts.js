
class UserData {
  constructor(email, password, cpassword) {
    this.email = email;
    this.password = password;
    this.cpassword = cpassword;
  }

  validate(){
    if(this.email == ""){
      alert("Please enter email");
      this.email.focus();
      return false;
    }

  if(this.password == ""){
      alert("Please enter password");
      this.password.focus();
      return false;
     }

  if(this.cpassword == ""){
      alert("Please enter password again");
      this.cpassword.focus();
      return false;
     }

  if(this.password != this.cpassword){
      alert("Password and confirm password must match");
      this.password.focus();
      return false;
  }
  }
}

function initialSetup() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => console.log(json));
}

function GetData(){
    var email = document.forms["loginform"]["email"];
    var password = document.forms["loginform"]["password"];
    var cpassword = document.forms["loginform"]["cpassword"];
    var userData = new UserData(email.value, password.value, cpassword.value);
    return userData.validate();
}

function field_focus(field, passed)
  {
    if(field.value == passed)
    {
      field.value = '';
    }
  }

  function field_blur(field, passed)
  {
    if(field.passed == '')
    {
      field.value = email;
    }
  }

//Fade in dashboard box


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
  filter = input.value.toUpperCase();
  
  tableData = document.getElementById("data_table");
  tr = tableData.getElementsByTagName("tr");
  
for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[0];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  } 
}
}