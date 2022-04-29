function store(){
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var fourth = document.getElementById('fourth');
    var fifth = document.getElementById('fifth');

    var one = document.getElementById('1').innerHTML = first.value;
    var two = document.getElementById('2').innerHTML = second.value;
    var three = document.getElementById('3').innerHTML = third.value;
    var four = document.getElementById('4').innerHTML = fourth.value;
    var five = document.getElementById('5').innerHTML = fifth.value;
   console.log(one,two,three,four,five);
}
