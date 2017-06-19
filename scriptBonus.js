var friends = ['Dylan', 'JB', 'Greg', 'Justin', 'Chris'];

document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector('button');

    button.addEventListener('click', function(){
        for (var i = 0; i < friends.length; i++){
            var div = document.createElement('div');
            div.className = 'friend';
            var h3 = document.createElement('h3');
            var t = document.createTextNode(friends[i]);
            var sing = document.createElement("button");
            sing.innerHTML = "Do Something";
            div.appendChild(sing);
            document.body.appendChild(div);
            div.appendChild(h3);
            h3.appendChild(t);
            div.appendChild(sing);
            var friend = friends[i];
            sing.addEventListener('click', singSong.bind(null, friends[i], div)); 
            var btn = document.createElement('button');
        }

        console.log(i);
    });

    function singSong(friend, div) {
        for (var j = 99; j > 0; j--){
            var para = document.createElement('p');
            if (j >= 3){
            var k = document.createTextNode(j + " lines of code in the file " + j +  " lines of code; " + friend + " strikes one out, clears it all out, " + [j-1] + ' lines of code in the file,');
                div.appendChild(para);
                para.appendChild(k);
            } else if (j === 2) {
                var l = document.createTextNode('2 lines of code in the file, 2 lines of code; ' + friend + ' strikes one out, clears it all out, 1 line of code in the file,');
                div.appendChild(para);
                para.appendChild(l);
            } else {
                var m = document.createTextNode('1 line of code in the file, 1 line of code; ' + friend + ' strikes one out, clears it all out, no more lines of code in the file.');
                div.appendChild(para);
                para.appendChild(m);
            }
        }     
    }
});


