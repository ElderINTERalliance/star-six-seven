window.onload = function(){
    document.getElementById("newsession").addEventListener('click', function(){
        document.getElementById("toptextmain").innerHTML = "select a </br>counselor";
        document.getElementById("newsession").style.display = "none";
        document.getElementById("resumesession").style.display = "none";
        document.getElementById("newsessionnext").style.display = "block";
        document.getElementById("counselors").style.display = "grid";
        var fitties = fitty('.counselorname');
        fitties[0].fit();
    });
};