function convertFile() {
    var Convert = document.getElementById("input-string").value;
    var Result = ""; 
    for (let i = 0; i < Convert.length; i++) { 
        if (Convert[i] !== " ") {  
            Result = Result + Convert[i];
        } else {
            Result = Result + "_";
        }
    }
    document.getElementById("input-string").value = Result;
}
