// It is best to use backend systems to store sensitive information but for the puropse of this project, local storage will be used.

// When the website loads, it is ready to process the JS below.
// When the sign up button is clicked, it is checking that an email and password has been entered in. If not than a message will be displayed below asking the user to do so.
// Once the use has entered in the correct information, their details are stored in local storage.
$(document).ready(function () {
  $("#signupBtn").click(function () {
    var signupEmail = $("#signupEmail").val();
    var signupPassword = $("#signupPassword").val();

    if (!signupEmail && !signupPassword) {
      $("#signup__message").text("Please enter both username and password.");
      return;
    }

    // Storing users login details in local storage
    localStorage.setItem(signupEmail, signupPassword);
    $("#signup__message").text("Registration successful. You can now log in.");
    window.location.href = "login.html";
  });

  // When the user clicks the login button, the code checks to see if any information has been input into the text fields.
  // After it gets the data from the local storage to see if the Email and password the user has entered, matches up to what is has been saved.
  $("#loginBtn").click(function () {
    var loginEmail = $("loginEmail").val();
    var loginPassword = $("#loginPassword").val();

    if (!loginEmail && !loginPassword) {
      $("#login__message").text("Please enter both username and password.");
      return;
    }

    // Checking the users login details in local storage
    var storedEmail = localStorage.getItem(loginEmail);
    var storedPassword = localStorage.getItem(loginPassword);

    if (storedEmail && storedPassword === loginEmail && loginPassword) {
      $("#login__message").text("Login successful!");
      window.location.href = "index.html";
    } else {
      $("#login__message").text("Invalid username or password.");
    }
  });
});
