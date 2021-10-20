//!Callbacks function :

// function print(functionArg){
// return "Hello";
// functionArg();
// }

// print((functionArg()));

//!צרו אובייקט של פרומיס עם פונקציה ריקה, עם resolve reject.

let promiseOne = new Promise((resolve, reject) => {});

//!צרו אובייקט של פרומיס עם פונקציה שמחזירה את המילה "hello" במקרה של הצלחה.

let promiseTwo = new Promise((resolve, reject) => {
  if (true) {
    resolve("Hello");
  }
});

//!צרו אובייקט של פרומיס עם פונקציה שמחזירה את המילה "goodbye" במקרה של כישלון

let promiseThree = new Promise((resolve, reject) => {
  if (false) {
    reject("Goodbye");
  }
});

//!.צרו אובייקט של פרומיס עם פונקציה שמחזירה את המילה "yes" במקרה של הצלחה ואת המילה "no" במקרה של כישלון.

let promiseFour = new Promise((resolve, reject) => {
  if (true) {
    resolve("Yes");
  } else {
    reject("No");
  }
});

//!.צרו אובייקט של פרומיס עם פונקציה שמחזירה את המילה "yes" במקרה של הצלחה ואת המילה "no" במקרה של כישלון, הדפיסו את התוצאות של הפונקציה ללוג.

let x = 1 + 1;
// console.log(x);
let promiseFiv = new Promise((resolve, reject) => {
  if (x == 2) {
    resolve("Yes");
  } else {
    reject("No");
  }
});

promiseFiv
  .then((answer) => {
    console.log(answer);
  })
  .catch((rej) => {
    console.log(rej);
  });

function promiseFunction(params) {
  return (promiseSix = new Promise((resolve, reject) => {
    if (params) {
      resolve("Hello");
    } else {
      reject("Goodbye");
    }
  }));
}

promiseFunction(true)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((rej) => {
    console.log(rej);
  });




  //!צרו פונקציה שמקבלת מספר, הפונקציה מחזירה אובייקט של פרומיס, אם המספר גדול מ10 היא מחזירה "big" במקרה שהוא קטן מחזירה "small", הדפיסו את התוצאות של הפונקציה ללוג.


  function promiseLargerNum(num) {
      return numPromiseOne = new Promise((reject , resolve)=>{
          if(num > 10){
              resolve("BIGGER THEN 10")
          }
          else{
              reject("SMALLER THEN 10")
          }
      })
      
  }

  promiseLargerNum(8).then((solv)=>{console.log(solv);}).catch((rej)=>{console.log(rej);});



  function promiseFunctionTwo(num) {
      return numPromiseTwo= new Promise((resolve , reject)=>{
        num>20?resolve("BIGGER THEN 20"):reject("SMALLER THEN 20");
      })
  }

  promiseFunctionTwo(50).then((resolve)=>{console.log(resolve);}).catch((rej)=>{console.log(rej);})

//!צרו פונקציה שמקבלת שם, הפונקציה מחזירה אובייקט של פרומיס, אם השם ארוך מ4 תווים היא מחזירה "long name" במקרה שהוא קצר מחזירה "short name", הדפיסו את התוצאות של הפונקציה ללוג.


  function returnLongersStr(str) {
      return promise = new Promise((resolve , reject)=>{
        str.length>4?resolve("LONG NAME"):reject("SHORT NAME");
      })
  }

  returnLongersStr("wer").then((solv)=>{console.log(solv);}).catch((rej)=>{console.log(rej);});


  //!צרו פונקציה שמקבלת מערך שמות ושם, הפונקציה מחזירה אובייקט של פרומיס, אם השם מופיע היא מחזירה "name exist" במקרה שהוא לא מופיע מחזירה "  no name", הדפיסו את התוצאות של הפונקציה ללוג.


  function returnIfStrExist(str , array) {
      return promiseArrayAndStr = new Promise((resolve , reject)=>{
        array.indexOf(str)!= -1? resolve("name exist"):reject("No exist")
      })
  }

  let array=["eden", "yafit", "keren", "tikva"];
  returnIfStrExist("jhfehjhvds",array).then((reso)=>{console.log(reso);}).catch((rej)=>{console.log(rej);})