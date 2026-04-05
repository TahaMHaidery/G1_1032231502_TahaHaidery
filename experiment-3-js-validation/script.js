document.getElementById("myForm").addEventListener("submit", function (e) {
  let isValid = true;

  // Get values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let mobile = document.getElementById("mobile").value;

  // Clear previous errors
  document.querySelectorAll(".error").forEach((e) => (e.innerText = ""));

  // Name validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  // Email validation
  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter valid email";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Minimum 6 characters";
    isValid = false;
  }

  // Mobile validation
  if (mobile.length !== 10 || isNaN(mobile)) {
    document.getElementById("mobileError").innerText =
      "Enter valid 10-digit number";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault(); // Stop form submission
  } else {
    alert("Form submitted successfully!");
  }
});
