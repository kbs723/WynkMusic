var count=3;
function prev(){
    var curr=count;
    count--;
    if(count<1){
        count=6;
    }
    document.getElementById('radio'+count).checked=true;
}
function next(){
    var curr=count;
    count++;
    if(count>6){
        count=1;
    }
    document.getElementById('radioo'+count).checked=true;
}

function mid_prev(){
    document.getElementById('mid_radio1').checked=true;
    document.getElementById('mid_but1').style.display="none";
    document.getElementById('mid_but2').style.display="initial";
    // document.getElementsByClassName('mid_but').style.justifyContent="flex-end";
}
function mid_next(){
    document.getElementById('mid_radio2').checked=true;
    document.getElementById('mid_but2').style.display="none";
    document.getElementById('mid_but1').style.display="initial";
    // document.getElementsByClassName('mid_but').style.justifyContent="flex-start";
}
function mid_prev2(){
    document.getElementById('mid_radio21').checked=true;
    document.getElementById('mid_but21').style.display="none";
    document.getElementById('mid_but22').style.display="initial";
    // document.getElementsByClassName('mid_but').style.justifyContent="flex-end";
}
function mid_next2(){
    document.getElementById('mid_radio22').checked=true;
    document.getElementById('mid_but22').style.display="none";
    document.getElementById('mid_but21').style.display="initial";
    // document.getElementsByClassName('mid_but').style.justifyContent="flex-start";
}
setInterval(function(){
    document.getElementById('radio'+count).checked=true;
    count++;
    if(count>6){
        count=1;
    }
},3200);
