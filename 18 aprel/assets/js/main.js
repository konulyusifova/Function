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








// Verilmis string deyerinde verilmis char-in hansi index-de yerlesdiyini tapibb qaytaran funksiyani qurun.

// function findIndex(str,char){
//     for (let i = 0; i< str.length; i++) {
//         if(str[i]==char){
//             return i;
//         }
//         else{
//         }
//     }
//     return -1;
// }
// console.log(findIndex(prompt(),prompt()));






// Ededlerden ibaret array verilib. Arrayin en kicik elementini geri qaytaran funksiya yazin.

// function findMin(n) {
//     min = n[0];
//     for (i = 1; i < n.length; i++) {
//         if (n[i] < min) {
//             min = n[i];
//         }
//     }
//     return min;
// }
// console.log(findMin([12, 23, 34, 45, 56, 67, 78, 233]));






// Ededlerden ibaret array verilib. Arrayin en boyuk elementini geri qaytaran funksiya yazin.

// function findMax(n) {
//     max= n[0];
//     for (i = 1; i < n.length; i++) {
//         if (n[i] > max) {
//             max = n[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([12, 23, 34, 45, 56, 67, 78, 233]));




// Cut yerde dayanan ededlerin cemini tap:

// function findEven(num){
//     var sum=0;
//     for(i=0; i<num.length; i+=2){
//         sum+=num[i];
//     }
//     return sum;
// }
// console.log(findEven([12,23,34,2354,344,566]));





// Tek yerde dayanan en balaca ededle, cut yerde dayanan en boyuk ededi cemle:

// function sumNumbers(num) {
//     var sum = 0;
//     var max=num[0];
//     var min=num[0]
//     for (i = 0; i < num.length; i++) {
//         if (num[i]%2==0) {
//             if(num[i]>max){
//                 max = num[i];
//             }
//         }
//         else {
//             if(num[i]<min){
//                 min = num[i];
//             }
//         }





//         sum = max + min;
//     }
//     return sum;
// }
// console.log(sumNumbers([12, 23, 34, 24, 344, 566, 1, 2446, 1244]));




// Verilen ededin 2-nin quvveti olub olmadigini yoxlayin, eger 2-nin quvvetidirse ekrana yazan funksiya

function twoPower(num) {
    for(i=0; i<num.length; i++){
        if(num%2===0 && num/2===1){
           console.log(num);
        }
    }
}
twoPower(64);