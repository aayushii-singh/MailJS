function validateEmail(email) {
    let pattern = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return pattern.test(email);
}

function checkEmail() {
    let email = document.getElementById("email").value;
    let result = validateEmail(email) ? "✅ Valid Email" : "❌ Invalid Email";
    document.getElementById("result").innerText = result;
}

/* 
✅ Valid Emails (Should Pass)
1. abc@bridgelabz.co
2. abc.xyz@bridgelabz.co.in

❌ Invalid Emails (Should Fail)
1. abc@xyz.co.in (Missing "bridgelabz")
2. abcxyz@bridgelabz.co.in (Missing "." after "abc")
*/
