function generateScramble(){
    for(a=p=l=[],r=Math.random;l++<25;)a.push((p='RLUDFB'.replace(p,'')[0|r()*5])+" '2"[0|r()*3]);
    document.getElementById('scramble').innerHTML = a.join(' ');
}

window.onload = generateScramble()