function hora(){
    var now = new Date();
    now = ("00"+now.getHours()).slice(-2)+':'+("00"+now.getMinutes()).slice(-2);
    window.document.getElementById('time').innerHTML = now;
}
window.onload = setInterval(hora,1000);
