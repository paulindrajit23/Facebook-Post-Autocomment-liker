var RPport = chrome.extension.connect(
  {
      name: "popup-Background"
  }
)
$(document).ready(function() {
	$('#time_section').hide();

	var email_error = true;
	var pass_error = true;
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	$('#email').keyup(function(){
		email_check();
	});
	$('#password').keyup(function(){
		password_check();
	});
	function email_check(){
		var email_val = $('#email').val();
		if(email_val.length == ''){
			$('#email_error').show();
			$('#email_error').html("Please Fill the Email Id");
			$('#email_error').focus();
			$('#email_error').css("color","red");
			email_error = false;
			return false;
		}
		else{
			$('#email_error').hide();
		}
		if((email_val.length < 6 ) || (email_val.length > 25 )){
			$('#email_error').show();
			$('#email_error').html("Email Id length must be between 6 and 25");
			$('#email_error').focus();
			$('#email_error').css("color","red");
			email_error = false;
			return false;
		}
		else{
			$('#email_error').hide();
		}
	}
	function password_check(){
		var email_val = $('#password').val();
		if(email_val.length == ''){
			$('#password_error').show();
			$('#password_error').html("Please Fill the password");
			$('#password_error').focus();
			$('#password_error').css("color","red");
			email_error = false;
			return false;
		}
		else{
			$('#password_error').hide();
		}
		if((email_val.length < 3 ) || (email_val.length > 8 )){
			$('#password_error').show();
			$('#password_error').html("password length must be between 3 and 8");
			$('#password_error').focus();
			$('#password_error').css("color","red");
			email_error = false;
			return false;
		}
		else{
			$('#password_error').hide();
		}
	}
		$('#login').click(function(){
			email_error = true;
		    pass_error = true;
		    var email_value = $('#email').val();
		    var password_value = $('#password').val();
		    email_check();
		    password_check();
		    if((email_error == true) && (pass_error == true)){
		    	localStorage.setItem("getemail",email_value);
		    	localStorage.setItem("getpass",password_value);
		    	$('#time_section').show();
		    	$('#login_section').hide();
		    	return true;
		    }
		    else{
		    	return false;
		    }
		});
		$('#start').click(function(){
		const R= document.querySelector("#time");
R.addEventListener("submit" , function() {
  var time_interval=document.querySelector("#time_count").value;
  console.log("times", time_interval)
 
chrome.tabs.query(
  {
      active: true,
      currentWindow: true
  },
  function(tabs) {
      var exttension_run= {
          action: "ExtensionRunning",
          exttension : {
              Timedata: time_interval,
              tabID: tabs[0].id
          }
      };
      sendRequest(exttension_run);
    }
    )        
  }
)
});

		document.getElementById("user").innerHTML=localStorage.getItem("getemail");
});