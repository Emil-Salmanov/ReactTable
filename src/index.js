import ReactDOM from "react-dom/client";
import App from "./App";

// let arr = [
//   20,
//   45,
//   105,
//   46,
//   72
// ]

// for(let i = 0;i<arr.length;i++){
//   console.log(arr[i++]);
// }

// for(let i in arr){
//   console.log(arr[i]);
// }

// for(let i of arr){
//   console.log(i);
// }
// let obj = {
//   name:"Ali",
//   surname:"Aghayev"
// }
// for(let i in obj){
//   // console.log(obj[i]);
//   // console.log(obj[i]);
// }

// console.time();
// let arr = [20,35,42,30];
// let newArr = arr.filter((a)=>{
//   return a % 2 == 0
// });
// console.log(newArr);
// console.timeEnd();
// console.log(newArr);
// let newArr = arr.map((a)=>{
//   // return a + 1;
// });
// let forArr = arr.forEach((a)=>{
//   console.log(a);
//   return "Salam";
// })

// console.log(forArr);
// console.log(newArr);

// const arr = [20,12,195,37,35,42];
// let b = arr.every((i) => i % 1 == 0);
// console.log(b);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
