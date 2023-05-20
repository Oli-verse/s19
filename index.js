function login(){

	var username = prompt("Enter your username: ")
	var password = prompt("Enter your password: ")
    var role = prompt("Enter your role: ")
 
if ((username == null || password == null || role == null)||(username == " " || password == " " ||  role == " "))
{
    alert("Please provide all the required information.")
  }
  else {
    console.log("Login successful!");
    console.log("Username: " + username);
    console.log("Password: " + password);
    console.log("Role: " + role);
}


 switch (role) {
      case "Admin":
        console.log("Welcome back to the class portal, Admin!");
        break;
      case "Teacher":
        console.log("Thank you for logging in, Teacher!");
        break;
      case "Student":
        console.log("Welcome to the class portal, Student!");
        break;
      default:
        console.log("Role out of range.");
        break;
    }

}


login()

function calculateAvg(q1,q2,q3,q4){
  
  sum = q1 + q2 + q3 + q4
  average = sum/4
  average = Math.round(average)
  console.log(average)
}

  let n1 = parseInt(prompt("Enter score 1:"));
  let n2 = parseInt(prompt("Enter score 2:"));
  let n3 = parseInt(prompt("Enter score 3:"));
  let n4 = parseInt(prompt("Enter score 4:"));





  calculateAvg(n1,n2,n3,n4)

  if (average <= 74) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is F");
  } else if (average >= 85 && average <= 89) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is B");
  } else if (average >= 90 && average <= 95) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is A");
  } else if (average > 96) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is A+");
  } else {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is C");
  }
