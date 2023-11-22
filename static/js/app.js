var time = 1500
window.onload = function(){
    var message_timeout = document.getElementById("message-timer");
    setTimeout(function()
    {
        message_timeout.style.display = "none"; 
    }, time);    
};



