
function bam(){
    var ten = document.getElementById('ten').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    if(ten =='' && email=='' && pass ==''){
        alert('Hãy nhập Name , Email và Password')
        
    }
    else if(ten =='' && email ==''){
        alert('Hãy nhập Email và Password')
        
    }
    else if(ten =='' && pass==''){
        alert('Hãy nhập Name và Password')
    
    }
    else if(pass=='' && email=='' ){
        alert('Hãy nhập Password và Email')
    }
    else if(ten==''){
        alert('Hãy nhập Name')
    }
    else if(email==''){
        alert('Hãy nhập Email')
    }
    else if(pass==''){
        alert('Hãy nhập Password')
    }
}