// MASSIVLARNING ITERATE METODLARI

// 1-forEach

// let arr =[1,2,3,4,5,6]
// arr.forEach(function(value){
//     console.log(value);

// })

// 2.map

// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.map(function(value) {
//     return value*2;
// });
// console.log(res);

// 3.filter

// let arr = [1, 2, 3, 4, 5, 6];


// FOR EACH  UCHUN MASALALAR

// 1.Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.
// ==================================================
// let arr = [1,2,3,4,5,6,7,8]
// arr.forEach(function(value){
//     console.log(value);
// })


// 2.Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring.
// ==================================================
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach(function(value){
//     console.log(value**2);
// })

// 3.Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.
// ==================================================
// let arr = [1,2,3,4,5,6];
// let res = [];
// arr.forEach(function(value){
//       res.push(value*2)
// })
// console.log(res);

// 4.Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.
// ==================================================
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach(function(value){
//     if (value>5) {
//        console.log(value);
        
//     }
// })

// 5.Har bir elementga 10 qo'shib, yangi massivga saqlang.
// ==================================================
// let arr = [1,2,3,4,5,6,7]
// let res = [];
// arr.forEach(function(value){
//     res.push(value+10)
// })
// console.log(res);


// 6.Massivdagi barcha juft sonlarni ekranga chiqaring.
// ==================================================
// let arr = [1,2,3,4,5,6,7,8]
// arr.forEach(function(value){
//     if(value%2==0){
//         console.log(value);
//     }
// })

// 7.Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).
// ==================================================
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(function(value){
//     arr.reverse()
// })
// console.log(arr);


// 8.Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).
// ==================================================
// let arr = ['Doston', 'Abbos','Bahrom', 'Sobir', 'Mahmud', 'Said'];
// arr.forEach(function(value){
//     if (value = a) {
//         arr.includes(value)
//         console.log(value);
        
//     }
// })
// console.log(arr);


// 9.Massivdagi har bir elementni yangi massivga indexOf orqali indeks bilan birlashtiring.
// ==================================================
// let arr = [1,2,3,2,4,5,6,7];
// let res = []
// arr.forEach(function(value,index){
//    res.push(arr.indexOf(value,index))

// })
//  console.log(res);


// 10.Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).
// ==================================================
// let arr = [1,2,3,4,5,6,7];
// let res;
// arr.forEach(function(value){
//     res = arr.join(',')
// })
// console.log(res);

// 11.Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).
// ==================================================
// let arr = ["salom", "uzbek", "hayr", "osmon"];
// arr.forEach(function(value){
//     const res =value.slice(0,3)
//     console.log(res);
    
// })

// 12.Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing.
// ==================================================
// let arr = ['salom', 'uzbek', 'hayr', 'osmon']
// let res = []
// arr.forEach(function(index){
//     res.push(index.at(index.length - 1))
// })
// console.log(res);


// 13.Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).
// ==================================================
// let arr = [1,5,3,6,2,9,-1,-4,4,7];
// arr.forEach(function(value){
//     arr.sort(function sum(a,b) {
//       return a-b;
//     })
    
// })
// console.log(arr);


// 14.Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.
// ==================================================
// let arr = ["salom", "uzbek", "hayr", "osmon"];
// let res =[]
// arr.forEach(function(value){
//    res.push(value + '!')
// })
// console.log(res);


// 15.Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.
// ==================================================
// let arr = ["Salom", "Uzbek", "Hayr", "Olov", "Asal","Do'st"];
// arr.forEach(function(value){
//     console.log(value.toLowerCase());
// })



// MAP UCHUN MASALALAR

// 1.Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.
// ==================================================
// let arr = [1,2,3,4,5,6,7]
// let res =[]
// arr.map(function(value){
//    res.push (value*2)
//    return res
// })
// console.log(res);


// 2.Har bir elementning kvadratini hisoblab yangi massivga saqlang.
// ==================================================
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = []
// arr.map(function(value){
//    res.push(value**2)
//    return res
// })
// console.log(res);

// 3.Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).
// ==================================================
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = []
// arr.map(function(value){
// return res.push(arr.reverse(value))
   
// })
// console.log(arr);

// 4.Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan).
// ==================================================
// let arr = ['hello','goodbye','world']
// let res = []
// arr.map(function(value){
//     res.push(value.slice(value.length-3))
//     return res
// })
// console.log(res);



// 5.Har bir elementni katta harf bilan yozib yangi massivga saqlang.
// ==================================================
// let arr = ['salom','hayr','uzbek','osmon','nur'];
// let res = []
// arr.map(function(value){
//    return res.push( value.toUpperCase())
// })
// console.log(res);


// 6.Har bir elementga "Hello, " qo'shib yangi massivga saqlang.
// ==================================================
// let arr = ["salom", "hayr", "uzbek", "osmon", "nur"];
// let res = []
// arr.map(function(value){
//    return res.push(value + 'Hello')
// })
// console.log(res);


// 7.Har bir elementni ikki marta takrorlang va yangi massivga saqlang.
// ==================================================
// let arr = ["salom", "hayr", "uzbek", "osmon", "nur"];
// let res = []
// arr.map(function(value){
//    return res.push(value,value)
// })
// console.log(res);

// 8.Har bir elementning uzunligini aniqlang va yangi massivga saqlang.
// ==================================================
// let arr = ["salom", "hayr", "uzbek", "osmon", "nur"];
// let res = []
// arr.map(function(indeks){
//    return res.push(indeks.length)
// })
// console.log(res);

// 9.Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).
// ==================================================
// let arr = [1, 2, 3, 4, 5, 6];
// let res =[]
// arr.map(function(value,index){
//     res.push(arr.indexOf(value))
//    return 
// })
// console.log(res);

// 10.Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).
// ==================================================
// tushunmaddim

// 11.Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).
// ==================================================
// let arr = ['salom','dunyo','osmon',]
// let res = arr.map(function(value,index){
//     return (value.slice(1,value.length-1))
// })
// console.log(res);

// 12.Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).
// ==================================================
// let arr = [9,1,2,4,8,6,7,3]
// let res = []
// arr.map(function(value){
//     res.push(arr.sort())
//     return res
// })
// console.log(res);

// 13.Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.
// ==================================================
// let arr = ['a','v','c','w','bye','hi']
// let res = []
// arr.map(function(value){
//     res.push(value.toUpperCase())
//     return res
// })
// console.log(res);


// 14.Har bir elementning uzunligi 5 dan katta yoki kichik ekanligini belgilang va yangi massivga saqlang.
// ==================================================
// let arr = ['hi','bye','daftar','goodbye']
// let res = []
// arr.map(function(value){
//     res.push((value.length)<5)
//     return res
// })
// console.log(res);

// 15.Har bir elementdan faqat sonlarni olib yangi massivga saqlang.
// ==================================================
// let arr =[]


// FILTER UCHUN MASALALAR

// 1.Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.
// ==================================================
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let res = []
// arr.filter(function(value){
//     return res.push(value%2==0)
// })
// console.log(res);


// 2.Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.
// ==================================================
// let arr = [1, -2, -3, 4, -5, 6, -7, 8,]
// let res = []
// arr.filter(function(value){
//     return res.push(value<0)
// })
// console.log(res);



// 3.Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).
// ==================================================
// let arr = ['Olma', 'Nok', 'Anor','Banan','Tarvuz'];
// let res = []
// arr.filter(function(value){
//      res.push(value.includes('a'))
// })
// console.log(res);


// 4.Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.
// ==================================================
// let arr = ['banan','qulupnay','tarvuz','olma'];
// let res = arr.filter (function(value) {
//    return (value.length > 5);
// });
// console.log(res);

// 5.Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.
// ==================================================
// let arr = ["world", "testflight", "hi", "avtotest"];
// let res = arr.filter((value)=>value.includes('test')
// )
// console.log(res);



// 6.Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).
// ==================================================
// let arr = [1,2,3,4,5,6]
// let res = arr.filter(function(value){
//     return res.push(arr.reverse(value))
// })
// console.log(arr);
// qanday qilish kerrak

// 7.Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.
// ==================================================
// let arr = [1,-3, 2, 3,-5, 4, 5,-4,-7, 6];
// let res =arr.filter(function(value){
//     return value > 0
// })
// console.log(res);


// 8.Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.
// ==================================================


// 9.Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.
// ==================================================
// let arr = ["banan", "qulupnay", "tarvuz", "olma"];
// let res = arr.filter(value => value.length<3)
// console.log(res);

// 10.Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.
// ==================================================
// qanday qilishni chunmadim unli harflarni 


// 11.Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
// ==================================================
// let arr = ['abcAlif','abcFilter','map','foreach']
// let res = arr.filter(function(value){
//    return value.slice('abs')
// })
// console.log(res);


// 12.Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
// ==================================================
// chunmadm

// 13.Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.
// ==================================================
// let arr = [1, 2, 3, 4,5 ,12,123,19,21];
// let res = arr.filter(function(value){
//     return value < 10
// })
// console.log(res);


// 14.Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).
// ==================================================
// let arr = ["world", "testflight", "hi", "avtotest","bye"];
// let res = arr.filter((value) => value.includes('test'));
// console.log(res);

// 15.Faqat uzunligi eng uzun bo‘lgan elementlarni olib yangi massivga saqlang.
// ==================================================
// qanday qilishni blmadim
