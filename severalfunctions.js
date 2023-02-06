function validatePassword(password) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
  }
  var password = "Password1@";
  if (validatePassword(password)) {
    console.log("Password is valid");
  } else {
    console.log("Password is invalid");
  }
    

  async function checkUsernameAndEmail(username, email) {
    try {
      const response = await fetch(`https://serverexample.com/api/check-username-and-email?username=${username}&email=${email}`);
      const data = await response.json();
      if (data.usernameExists || data.emailExists) {
        return {
          success: false,
          message: data.usernameExists ? "Username already exists" : "Email already exists"
        };
      } else {
        return {
          success: true,
          message: "Both username and email are available"
        };
      }
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "An error occurred while checking the availability of the username and email"
      };
    }
  }
  
  const username = "newuser";
  const email = "newuser@example.com";
  checkUsernameAndEmail(username, email).then(result => {
    if (result.success) {
      console.log(result.message);
      // Create the new user account here
    } else {
      console.error(result.message);
    }
  });
  

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  