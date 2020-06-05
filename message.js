document.getElementById('display').innerHTML = "Please fill up all required fields!";

function create()   {
    let message = document.getElementById('message').value;
    let locker = document.getElementById('locker').value;
    let pin = document.getElementById('pin').value;

    document.getElementById('display').style.color = "white";

    if(message.length == 0 && locker.length == 0 && pin.length == 0) {
        document.getElementById('display').innerHTML = "Please fill up all required fields!";
    }

    else if(message.length == 0 && locker.length == 0 ) {
        document.getElementById('display').innerHTML = "Please fill up all required fields!";
    }

    else if(locker.length == 0 && pin.length == 0) {
        document.getElementById('display').innerHTML = "Please fill up all required fields!";
    }

    else if(pin.length == 0 && message.length == 0) {
        document.getElementById('display').innerHTML = "Please fill up all required fields!";
    }
    
    else if(message.length == 0 ) {
        document.getElementById('display').innerHTML = "Please enter your secret message!";
    }

    else if(locker.length == 0 || locker < 1 || locker > 9)   {
        document.getElementById('display').innerHTML = "Please Enter Locker Number between 1-9";
    }

    else if(pin.length == 0)  {
        document.getElementById('display').innerHTML = "Please Enter 4-Digits Pin";
    }

    else if(message.length != 0 && locker.length != 0 && pin.length != 0){
        document.getElementById('display').innerHTML = 'Your Secret Message: (' + message + ')' + ' have been successfully stored in Locker ' + locker + '. Good Luck on your Mission!';
    }
}
