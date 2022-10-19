function sumNum(a){
    return function(b){
    alert(a+b);
    }
  }
  sumNum(60)(9);