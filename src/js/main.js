function timer() {
    
    var nowDate = new Date();

    var achiveDate = new Date(2019,6,12,22,20,0); //Year / Month(0 - January) / Date / Hours / Minutes / Seconds

    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);

    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;

    let daysEl = document.getElementById('days');
        daysEl.innerHTML = days;
    let hoursEl = document.getElementById('hours');
        hoursEl.innerHTML = hours;
    let minutesEl = document.getElementById('minutes');
        minutesEl.innerHTML = minutes;
    let secondsEl = document.getElementById('seconds');
        secondsEl.innerHTML = seconds;

    setTimeout(timer, 1000);
}

window.onload = function() {
    timer();
}