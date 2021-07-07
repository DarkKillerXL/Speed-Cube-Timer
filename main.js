function generateScramble(){
    for(a=p=l=[],r=Math.random;l++<25;)a.push((p='RLUDFB'.replace(p,'')[0|r()*5])+" '2"[0|r()*3]);
    document.getElementById('scramble').innerHTML = a.join(' ');
}

document.addEventListener('keyup', logKey);

function logKey(e) {
    console.log(`${e.key}`)

    if (e.key == ' ') {
        timer();
    }
};

window.onkeydown = function(e) { 
    return !(e.keyCode == 32);
};
var start;
var loop;
var delta;

function timer() {
    if (timerStatus == 0) {
        timerStatus = 1;

        start = Date.now;
        
        loop = setInterval(function () {
            delta = Date.now() - start; // milliseconds elapsed since start
        
            console.log(delta); // in seconds

            document.getElementById('timer').innerHTML = toString(delta);
        }, 1000); // update about every second

    } else {
        timerStatus = 0;

        clearInterval(loop);
    }
}

function update() {

};

window.onload = timerStatus = 0; 