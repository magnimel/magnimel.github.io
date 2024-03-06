var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

document.getElementById("e-message").onclick = function() {
    alert("Hello, Please provide a descriptive subject line and your preferred contact method so I can get in touch with you. Thank you very much.");
}