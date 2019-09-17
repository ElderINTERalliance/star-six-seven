const jetpack = require("fs-jetpack"),
    remote = require('electron').remote,
    mongoose = require('mongoose');



window.onload = function(){
    document.getElementById("newsession").addEventListener('click', function(){
        document.getElementById("newsessionscreen").style.display = "block";
        document.getElementById("mainmenu").style.display = "none";
        var fitties = fitty('.counselorname');
        fitties[0].fit();
        window.scrollTo(0,0);
    });

    document.getElementById("login").addEventListener('click', function(){
        document.getElementById("mainmenu").style.display = "block";
        document.getElementById("pinscreen").style.display = "none";
        var fitties = fitty('.conversationtitletext', {
            maxSize: 60
        });
        fitties[0].fit();
        window.scrollTo(0,document.body.scrollHeight);
    });
    document.getElementById("sendmessage").addEventListener('click', function(){
        var message = document.getElementById("messagebox").value;
        if(message != ""){
            document.getElementById("messages").innerHTML += "<div class='sentmessage'>"+message+"</div>";
            document.getElementById("messagebox").value = "";
            window.scrollTo(0,document.body.scrollHeight);
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
    this.document.getElementById("x").addEventListener('click', function(){
        remote.getCurrentWindow().close();
    })
    this.document.getElementById("newsessionnext").addEventListener('click', function(){
        var selected = document.querySelector('.counselor.selected');
        detailsscreen(selected);
    })

    this.document.getElementById("startnewsession").addEventListener('click', function(){
        document.getElementById("detailsscreen").style.display = "none";
        document.getElementById("mainmenu").style.display = "block";
    })

    this.document.getElementById("convdetailsback").addEventListener('click', function(){
        document.getElementById("detailsscreen").style.display = "none";
        document.getElementById("newsessionscreen").style.display = "block";
    })
};

function choosecounselor(element){
    if(document.querySelector('.counselor.selected')){
        document.querySelector('.counselor.selected').classList.remove('selected');
    }
    element.classList.add('selected');
}

function detailsscreen(element){
    document.getElementById("newsessionscreen").style.display = "none";
    document.getElementById("detailsscreen").style.display = "block";
    switch (element.id) {
        case "kinross":
            document.getElementById("counselornamevar").innerHTML = "Mrs. Kinross";
            document.getElementById("detailsimg").src = "images/counselors/kinross.png"            
            break;

        case "driehaus":
            document.getElementById("counselornamevar").innerHTML = "Mr. Driehaus";
            document.getElementById("detailsimg").src = "images/counselors/driehaus.png"
            break;

        case "listerman":
            document.getElementById("counselornamevar").innerHTML = "Mr. Listerman";
            document.getElementById("detailsimg").src = "images/counselors/listerman.png"
            break;

        case "graham":
            document.getElementById("counselornamevar").innerHTML = "Mrs. Graham";
            document.getElementById("detailsimg").src = "images/counselors/graham.png"
            break;

        case "montgomery":
            document.getElementById("counselornamevar").innerHTML = "Mrs. Montgomery";
            document.getElementById("detailsimg").src = "images/counselors/montgomery.png"
            break;
    
        default:
            document.getElementById("counselornamevar").value = "Mrs. Kinross"
            break;
    }
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