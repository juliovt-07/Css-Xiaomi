function hora(){
    var now = new Date();
    now = ("00"+now.getHours()).slice(-2)+':'+now.getMinutes();
    window.document.getElementById('time').innerHTML = now;
}
window.onload = setInterval(hora,1000);
