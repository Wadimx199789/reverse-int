module.exports = function reverse (n) {
  if(n<0){
    n*=(-1);
}

  let arr=String(n).split('');
  let newarr=[];
  for(let i=arr.length-1;i>=0;i--){
    newarr.push(arr[i]);
  }
  return newarr.join('');}

