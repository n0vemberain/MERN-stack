
// step 1 : grab the ID with getElementById
// step 2 : add event listener to the button
document.getElementById("login-btn").addEventListener("click",function(event){

    event.preventDefault(); // to prevent form submission

    // step 3 : get the value from the input fields
    const accountNumber = document.getElementById("account-number").value; //input field always have value
    const pin = document.getElementById("pin").value; 
    // step 4 : perform validation
    if (accountNumber.length == 11 && pin.length >= 6){
        if (pin === "123456"){
            window.location.href = "./main.html"; // redirect to dashboard
        }
        else{
            console.log("Invalid pin");
        }
    }
    else{
        console.log("Invalid account number or pin");
    }
})