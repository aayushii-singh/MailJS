function validateEmail(email) {
    let pattern = /^abc([._+][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return pattern.test(email);
}

function checkEmail() {
    let email = document.getElementById("email").value;
    let result = validateEmail(email) ? "✅ Valid Email" : "❌ Invalid Email";
    document.getElementById("result").innerText = result;
}

/* 
✅ Valid Emails:
1. abc.xyz@bridgelabz.co.in
2. abc+test@bridgelabz.co

❌ Invalid Emails:
1. abc$xyz@bridgelabz.co.in  (Invalid special character `$`)
2. abc&test@bridgelabz.co    (Invalid special character `&`)
*/
