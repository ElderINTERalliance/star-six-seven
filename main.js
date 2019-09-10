window.onload = function(){
    document.getElementById("newsession").addEventListener('click', function(){
        /*document.getElementById("toptextmain").innerHTML = "select a </br>counselor";
        document.getElementById("newsession").style.display = "none";
        document.getElementById("resumesession").style.display = "none";
        document.getElementById("newsessionnext").style.display = "block";
        document.getElementById("counselors").style.display = "grid";*/
        document.getElementById("newsessionscreen").style.display = "block";
        document.getElementById("mainmenu").style.display = "none";
        var fitties = fitty('.counselorname');
        fitties[0].fit();
    });

    document.getElementById("login").addEventListener('click', function(){
        /*document.getElementById("toptextmain").innerHTML = "select a </br>counselor";
        document.getElementById("login").style.display = "none";
        document.getElementById("pin").style.display = "none";
        document.getElementById("newsessionnext").style.display = "block";
        document.getElementById("counselors").style.display = "grid";*/
        document.getElementById("mainmenu").style.display = "block";
        document.getElementById("pinscreen").style.display = "none";
        console.log("test");
        var fitties = fitty('.conversationtitletext', {
            maxSize: 60
        });
        fitties[0].fit();
    });
    document.getElementById("sendmessage").addEventListener('click', function(){
        var message = document.getElementById("messagebox").value;
        document.getElementById("messages").innerHTML += "<div class='sentmessage'>"+message+"</div>";
    })
};