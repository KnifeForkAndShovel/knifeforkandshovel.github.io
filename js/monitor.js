// monitor script will go here


var element = document.getElementById('canvas')


function onTouch(event) {
    alert(event.type);
}



element.addEventListener('touch', onTouch);

