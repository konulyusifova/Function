// // Cevrenin sahe dusturu

// function areaOfCircle(radius){
//   return 3*radius*radius
// }
// console.log(areaOfCircle(prompt("eded daxil edin")));

// // Anonim yazilisi

// var areaOfCircle = r => 3*r*r;




// Duzbucaqlinin sahesi

// function duzbucaqli(a,b){
//     var a;
//     var b;
//     return  a*b;

// }

// console.log(duzbucaqli(prompt(),prompt()));




// Duzbucaqli paralelipipedin sahesi

// function paralelipiped(a,b,c){
//     var a;
//     var b;
//     var c;
//     return  2*(a*b+c*b+a*c);

// }

// console.log( paralelipiped(prompt(),prompt(),prompt()));





// Ucbucagin daxiline cekilmis cevrenin sahesi

// function ucbucaq(a,b,c,r){
//         var p=(Number(a)+Number(b)+Number(c))/2;
//         return p*r;
//     }

//     console.log(ucbucaq(prompt(),prompt(),prompt(),prompt()));





// Proqram ikirəqəmli ədədi oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir.

// function num(n) {
//     if (n > 9 && n < 100) {
//         var teklik = n % 10;
//         var onluq = (n - teklik) / 10;
//         return onluq + ' ' + teklik;
//     }
// }
// console.log(num(prompt()));




// Mənfi olmayan tam n ədədinin rəqəmlərinin sayını hesablayın.

// function number(num) {
//     if (num >= 0) {
//         say = 1;
//         while (num > 9) {
//             var teklik = num % 10;
//             num = (num - teklik) / 10;
//             say++;
//         }
//         console.log(say);
//     }
//     else {
//        console.log("wrong");
//     }

// }








// Verilmis string deyerinde verilmis char-in hansi index-de yerlesdiyini tapibb qaytaran funksiyani qurun
function findIndex(str,char){
    for (let i = 0; i< str.length; i++) {
        if(str[i]==char){
            return i;
        }
        else{
        }
    }
    return -1;
}
console.log(findIndex(prompt(),prompt()));
















