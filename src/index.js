
exports.min = function min (array = []) {
  let min = array[0];
if(array.length){
  for(let i=0; i<array.length; i++){
      if(min>array[i]){
          min=array[i];
      }
  }
  return min;
}
return 0;
}

exports.max = function max (array = []) {
    let max = array[0];
    if(array.length){
      for(let i=0; i<array.length; i++){
          if(max<array[i]){
              max=array[i];
          }
      }
      return max;
    }
    return 0;
}

exports.avg = function avg (array = []) {
  let sum = 0;
  if(array.length){
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    return sum/array.length;
  }
  return 0;
}
