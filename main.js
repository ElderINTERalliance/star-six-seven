const jetpack = require("fs-jetpack");

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

    document.getElementById("pin").addEventListener('keydown', function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            document.getElementById("login").click();
        }
    })

    window.addEventListener("contextmenu", event => {
        event.preventDefault();
        document.getElementById("contextmenu").style.display = "block";
        var origin = {
            left: event.pageX,
            top: event.pageY
        };
        setposition(origin);
    })
    window.addEventListener('click', function(){
        document.getElementById("contextmenu").style.display = "none";
    })
    const setposition = ({ top, left }) => {
        this.document.getElementById("contextmenu").style.left = `${left}px`;
        this.document.getElementById("contextmenu").style.top = `${top}px`;
    };

    var settings = jetpack.read('settings.json', 'json');
    if(settings.darkmode){
        darkmode();
    }

    this.document.getElementById("darkmode").addEventListener('click', function(){
        if(!settings.darkmode){
            settings.darkmode = true;
            jetpack.write('settings.json', JSON.stringify(settings));
            darkmode();
        } else {
            settings.darkmode = false;
            jetpack.write('settings.json', JSON.stringify(settings));
            lightmode();
        }
    })
};

function choosecounselor(element){
    if(document.querySelector('.counselor.selected')){
        document.querySelector('.counselor.selected').classList.remove('selected');
    }
    element.classList.add('selected');
}

function darkmode(){
    changestylesheet("dark.css");
}

function lightmode(){
    changestylesheet("main.css");
}

function changestylesheet(style){
    document.getElementById("stylesheet").setAttribute("href", style);
}