// for adding functionality of pressing enter to click on button
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});

// function for calculating ahsowing status and score
function check() {
    let x = document.getElementById("pass").value;
    
    let score = 2;

    if(x.length <8){

        document.getElementById("err").textContent = "Password must contain atleast 8 characters";

    }
    else{
        // for checking capital letter
        for(let i =0; i < x.length; i++){
            if(x.charCodeAt(i) >=65 && x.charCodeAt(i)<=90){
                score +=2;
                break;
            }
        }
        // for checking small letter
        for(let i =0; i < x.length; i++){
            if(x.charCodeAt(i) >=97 && x.charCodeAt(i)<=122){
                score +=2;
                // console.log(sum);
                break;
            }
        }

        // for checking special character
        for(let i =0; i < x.length; i++){
            if(x.charCodeAt(i) >=32 && x.charCodeAt(i)<=47 || x.charCodeAt(i) >=58 && x.charCodeAt(i)<=69 || x.charCodeAt(i) >=91 && x.charCodeAt(i)<=96 || x.charCodeAt(i) >=123 && x.charCodeAt(i)<=126){
                score +=2;
                // console.log(sum);
                break;
            }
        }

        for(let i =0; i < x.length; i++){
            if(x.charCodeAt(i) >=48 && x.charCodeAt(i)<=57){
                score +=2;
                break;
            }
        }

        // assignment note for each password score
        let status = "";

        if(score == 4){
            status = "Poor";
            document.getElementById("stat").style.color = "red";
            document.getElementById("score").style.color = "red";
        }
        else if(score == 6){
            status = "Moderate";
            document.getElementById("stat").style.color = "orange";
            document.getElementById("score").style.color = "orange";
        }
        else if(score == 8){
            status = "Good";
            document.getElementById("stat").style.color = "orange";
            document.getElementById("score").style.color = "orange";
        }
        else if(score == 10){
            status = "Strong password";
            document.getElementById("stat").style.color = "green";
            document.getElementById("score").style.color = "green";
        }
        console.log(status);

        // showing status to the user
        document.getElementById("stat").textContent = "Status : " + status;

        document.getElementById("score").textContent = "Score : " + score + "/10";

    }
    
}


