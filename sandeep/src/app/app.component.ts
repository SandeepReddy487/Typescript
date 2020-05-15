import { Component } from '@angular/core';
// import { Interface } from 'readline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' TypeScript Output print console';

  constructor(){
    // Number
  let first:number = 12
  console.log(first)
  let second:number = 0x37cf
  console.log(second)
  // string
  let name:string = "Sandeep Reddy"
  console.log(name)
  // Boolean
  let number:boolean = true
  console.log(number)
  // Array
  let arr:number[];
  arr = [1,2,3,4]
  console.log("Array[0]:"+arr[0]);
  console.log("Array[1]:"+arr[1])
  console.log(arr[2])
// String
  let uname = new String("Hello Vinod Kumar")
  console.log(uname);
  let Tuple = [101,"Sandeep Reddy",7,"Divya"]
  console.log(Tuple)
  var greeter = "hey hi";
  // var  
var times = 5;  
if (times > 3) {  
   var greeter = "Say Hello Typescript";   
}  
console.log(greeter) 
// Function
function display(){
  console.log('Santhosh Reddy')
}
display();
let myAdd = function(x:number,y:number):number{
  return x+y;
}
console.log(myAdd(5,3))


function sum(a: number, ...b: number[]): number {  
  let result = a;
  for(var i=0;i<b.length;i++){
    result += b[i]; 
   }
    return result;
  }
  let result1= sum (3,5);
  let result2= sum (3,5,7,9);
  console.log(result1+"\n"+result2);

// Arrow Function
  let Sum = (a:number,b:number)=>a+b;
  console.log("sum"+sum(5,15,25,33,44))

  // Inheritance

class Animal {   
    eat():void {   
        console.log("Eating")   
     }   
}   
class Dog extends Animal {   
   bark():void {   
      console.log("Barking")   
   }   
}  
class BabyDog extends Dog{   
    weep():void {   
        console.log("Weeping")   
     }  
}  
let obj = new BabyDog();   
obj.eat();  
obj.bark();  
obj.weep()  

// Interface
interface Person {   
  name:string    
}  
interface PersonDetail {   
   age:number  
   gender:string  
}  
interface Employee extends Person, PersonDetail {   
   empCode:number  
}  
let empObject = <Employee>{};   
empObject.name = "Sandeep"  
empObject.age = 24   
empObject.gender = "Male"  
empObject.empCode = 43  
console.log("Name: "+empObject.name);  
console.log("Employee Code: "+empObject.empCode);  

// Overloading
function add(a, b) {  
  return a + b;  
}  
console.log("Addition: " + add("Hello ", "Typescript"));  
console.log("Addition: " + add(30, 20));  

}
  }

