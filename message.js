document.getElementById('display').innerHTML = "Please enter your message";

function create()   {
    let message = document.getElementById('message').value;
    let locker = document.getElementById('locker').value;
    let pin = document.getElementById('pin').value;

    document.getElementById('display').style.color = "white";

    if(message.length == 0) {
        document.getElementById('display').innerHTML = "Please enter your secret message!";
    }

    else if(location == undefined || location < 1 || location > 9)   {
        document.getElementById('display').innerHTML = "Please Enter Locker Number between 1-9";
    }

    else if(pin == undefined)  {
        document.getElementById('display').innerHTML = "Please Enter 4-Digits Pin";
    }

    else{
        document.getElementById('display').innerHTML = 'Your Secret Message: (' + message + ')' + ' have been successfully stored in Locker ' + locker + '. Good Luck on your Mission!';
    }
}