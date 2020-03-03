// challenge: reverse the provided string using spread operator

function revString(str){
    // use spread operator and in one line of code reverse string
    return [...str].reverse().join('');
      
    }
    
    console.log(revString('car'));
    console.log(revString('bar'));