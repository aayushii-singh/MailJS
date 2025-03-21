function validateEmail(email) {
    let pattern = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return pattern.test(email);
}

function checkEmail() {
    let email = document.getElementById("email").value;
    let result = validateEmail(email) ? "✅ Valid Email" : "❌ Invalid Email";
    document.getElementById("result").innerText = result;
}

//valid--abc@bridgelabz.co     abc.xyz@bridgelabz.co.in
//invalid---abc@xyz.co.in (Missing "bridgelabz")     xyz@bridgelabz.co.in (Missing "abc")
