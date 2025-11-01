document.getElementById('btn-update-title').addEventListener('click',function(){
            // console.log("Button clicked! Updating title...");
            const pageTitleElement = document.getElementById('page-title');
            // console.log("Okay");
            pageTitleElement.innerText = "Title has been updated!";
        })


        
document.getElementById('name-btn').addEventListener('click',function(){
    // console.log("I got the button");
    const name = document.getElementById('name');
    name.innerText= "Okay Okay its Fatin"
});


//set event listener
document.getElementById('update-btn').addEventListener('click',function(){
    // console.log("Update button clicked");
    const inputValue = document.getElementById('input');
    // option 1
    // document.getElementById('No-name').innerText = inputValue.value;

    // option 2
    const noNameElement = document.getElementById('No-name');
    noNameElement.innerText = inputValue.value;

    

    //clear the input field
    inputValue.value = '';
});