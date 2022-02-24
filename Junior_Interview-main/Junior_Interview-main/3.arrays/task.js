function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length===arr2.length && arr1.every((v,i)=>v === arr2[i])){
    result=true;
  }
  else{
    result=false;
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(x=> x>0 && x%3===0).map(n=> n*=10);
  return resultArr; // array
}
// console.log(advancedFilter([-10,-21,12,123]))
