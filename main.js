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
var id = 0;

function timer() {
    if (timerStatus == 0) {
        timerStatus = 1;

        start = new Date();
        
        loop = setInterval(function () {
            delta = new Date() - start; // milliseconds elapsed since start

            document.getElementById('timer').innerHTML = (delta/1000).toFixed(1);
        }, 10); // update about every second

    } else {
        timerStatus = 0;
        clearInterval(loop);

        document.getElementById('timer').innerHTML = (delta/1000).toFixed(2);
        document.getElementById('table').innerHTML = document.getElementById('table').innerHTML + `<tr class='tr' id='${id}'>
            <td>${document.getElementById('timer').innerHTML}</td>
            <td>${document.getElementById('scramble').innerHTML}</td>
            <td><i class="fas fa-times-circle" onclick="removeRow('${id}')"></i></td>
        </tr>`;
        id += 1;


        generateScramble();

    }
}

function clearTable() {
    var rows = document.getElementsByClassName('tr');
    for (var i = 0, l = rows.length; i < l; i++) {
        console.log(i)
        rows[0].remove();
        id = 0;
    }
};

function removeRow(id) {
    document.getElementById(`${id}`).remove()
}

window.onload = timerStatus = 0;
window.onload = table = document.getElementById('table'); 