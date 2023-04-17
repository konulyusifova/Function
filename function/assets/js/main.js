// function all(value){
//     for (let i= 0; i < value.length; i++) {
//         if(value[i]>0 && value[i]<10){
//             console.log(value[i]);
//            }
//     }
// }
// all("uhd76w83dgb8jhws")



// function num(value){
//     var sum=0;
//     for( var i=0; i<value.length; i++){
//         if(value[i]%2==0){
//             sum+=value[i];
//         }
//     }
//     return sum;
// }
// var arr=[23,44,36,62,73,78,90,457];
// var a=num(arr);
// console.log(a);



function num(value){
    var product=1;
    for( var i=0; i<value.length; i++){
        if(value[i]%2==1){
            product*=value[i];
        }
    }
    return product;
}
var arr=[23,44,36,61,73,78,90,457];
var a=num(arr);
console.log(a);



