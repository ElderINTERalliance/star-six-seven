window.onload = function(){
    document.getElementById("newsession").addEventListener('click', function(){
        document.getElementById("newsessionscreen").style.display = "block";
        document.getElementById("mainmenu").style.display = "none";
        var fitties = fitty('.counselorname');
        fitties[0].fit();
    });

    document.getElementById("login").addEventListener('click', function(){
        document.getElementById("mainmenu").style.display = "block";
        document.getElementById("pinscreen").style.display = "none";
        var fitties = fitty('.conversationtitletext', {
            maxSize: 60
        });
        fitties[0].fit();
    });
    document.getElementById("sendmessage").addEventListener('click', function(){
        var message = document.getElementById("messagebox").value;
        if(message != ""){
            document.getElementById("messages").innerHTML += "<div class='sentmessage'>"+message+"</div>";
            document.getElementById("messagebox").value = "";
        }
    })
    document.getElementById("messagebox").addEventListener('keydown', function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            document.getElementById("sendmessage").click();
        }
    })
};

function choosecounselor(element){
    if(document.querySelector('.counselor.selected')){
        document.querySelector('.counselor.selected').classList.remove('selected');
    }
    element.classList.add('selected');
}