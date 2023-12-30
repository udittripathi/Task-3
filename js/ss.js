
      function CheckPassword(inputtxt) 
      { 
        var decimal=  /^(?=.*[@])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        if(inputtxt.value.match(decimal)) 
        { 
          var str2='SmartServTest@123';
          var n = inputtxt.value.localeCompare(str2);
          if(n == 0){
            window.location.href = "dashboard.html";
            return false;
          }
          else{
            alert("Password valid! Not allowed to Login")
          }
          return true;
        }
        else
        { 
        alert('Password should contain atleast 1 Capital, 1 Small letter, Numerical value and only @ as special character.')
        return false;
        }
      }

      
      function togglePassword() {
        const passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }
    
    function checkCredentials() {
        const emailInput = document.getElementById('email');
    
        // Email validation using regex
        const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please provide a valid email address');
            emailInput.focus();
            return;
        }
    
    }