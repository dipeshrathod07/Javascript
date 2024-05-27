// age = 24;
// fullName = "Dipesh Rathod";
// radius = 14.2;
// x = null;
// y = undefined;


//The declration is done by three kind ;
//var v1 = 21;
//let v2 = 22;
// const v3 = 23;

const student ={
    name : "Dipesh Rathod",
    age : 21, 
    cgpa : 6.5,
    isPresent : true
};

//*variables//

let a = 8;
let b = 6;


//console.log(!(a<b));


//Conditional statement//

a = "dark";
let color;

if(a=="dark")
{
 color = "black";
}
else
{
    color = "white";
}


//Ternary operator//
// let age = 18;

// let result = age > 18?"you are lible":"you are not lible";
// console.log(result);    



//even or odd//

// let num = 20;

// if(num%2 === 0)
//     {
//         console.log(num,"It is even number");
//     }
//     else{
//         console.log(num," It is Odd number");
//     }


/*
File input can be taken by prompt here we take input and check which is divisible by 5 or not

let no = prompt("Enter the number:");

if(no % 5 === 0)
{
    console.log("Yes It is divisible by 5");
}
else{
    console.log("Not divisible by 5");
}
*/


//practise question : write a code which can gives grade acroding to there score;
//90 to 100 A
//70 to 89 B
//60 to 69 C
//50 to 59 D
// 0 to 49 F



//* Looping 1)for loop 2)while loop 3)dowhile loop

 //to count Number

// for(let count = 1; count <= 5 ; count++)
//     {
//         console.log('Ram');
//     }

 //calculate sum to n numbers;
// let n = prompt("Enter the number");
// let sum = 0;
// for(let i = 1 ; i <= n ; i++)
//     {
//         sum+=i;
//     }

//     console.log("Sum:",sum);

// let count = 1;
// while(count <= 5)
//     {
//         console.log(count);count++;
//     }

    // let count = 1;
    // do
    //     {
    //         console.log(count);count++;
    //     }while(count <= 5);

//*for-of-loop  String & Arrays
// let str = "DipeshRathod";
// for(let i of str)
//     {
//         console.log(i);

//     }

//*for-in-loop  Object&Arrays

// let student1 = {
//     name  :"Dipesh",
//     rollno : 21,
//     cgpa : 7.5,
//     isPass : true
// };

// for(let i in student1)
//     {
//        console.log("key", i , "value:",student1[i]);
//     }


//practise question : print all even number from 0 t0 100;

// for(let i = 0 ; i <= 100;i++)
//     {
//         if(i % 2 ===0)
//             {
//                 console.log(i);
//             }
//     }


// let numbers = 25;
// let guessnumber = prompt("Guess the number:");

// while(numbers != guessnumber)
//     {
//         console.log("You guessed the right number");
//     }

//     console.log("Wrong guess");



    //* Strings

    // let str = "Dipeshrathod";
    // console.log(str[0]);

    // let obj = {
    //     item:"pen",
    //     price:10
    // };
     
    // console.log(`this is ${obj["item"]} of price ${obj["price"]}rs`);

    // let specialString = `this is template literal`;
    // console.log(specialString);
 

    //practise question 
// let username = prompt("Enter the name");
// let name = "@"+username+username.length;
// console.log(name);

//* Loops 


let city = ["Vadodra","Pune","Mumbai","Kolkatta","Jamnagar","Nagpur","Delhi","Nashik","Hydrabad","Banglore","Noida",];

// for loop
// for(let i = 0 ; i < city.length ; i++)
//     {
//         console.log(city[i]);
//     }


//for-of loop

    // for(let x  of city)
    //     {
    //         console.log(x.toUpperCase());
    //     }


//Practice question to find avg of marks;
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let i of marks)
// {
//     sum += i;
// }

// console.log(`Average marks of students ${sum/marks.length}`);



//* Arrays methods.

let arr = [1,2,3,4,5,6,7];

    //arr.push(8);   this method will append the new element in given array and update it;
  //  arr.pop(); this method will delete from last in given array and update it;

    //  arr.toString(); this method convert value of array in entire string;
    // arr.unshift(0); this method will prepend the new element in given array and update it;
    // arr.shift();  this method will delete from first in given array and update it;


   // let result= arr.slice(2,4);  returns a piece of array;
   
   //arr.splice(2,0,222); // fro adding an element;
   //arr.splice(2,1);//for deleting an element;
  // arr.splice(2,1,132);//for replacing one element;
    let arr1 = [1,2,3,4,5];
    let arr2=[6,7,8,9];

 //  let result= arr.concat(arr2,arr1); this method is used to concat multiple arrays and return a new result;
    // for(let x of arr)
    //     {
    //         console.log(x);
    //     }


    //* functions

    function sum(a,b) {
        return a+b;
    }

    function mul(a,b)
    {
        return a*b;
    }
    sum();
  
//* arrow function 
    let arrowsum = (a,b) =>{
        return a+b;
    }

    //Practise question to count the number of vowel in a particular string;

    function countVowel(str)
    {
        let count = 0;
        for(let x of str)
            {
              
                if( x === "a"|| x ==="e" || x ==="i"|| x ==="o" || x ==="u"||
                x ==="A" ||  x ==="I" ||  x ==="O"||  x ==="U")
                {
                    count++;
                }
            }

            return count;
    } 


    //* for each method ; NOTE: It is higher order function are function which take function either as parameter or return function;

  //  callbackfunction : It is a function to execute each element in array

    // arr.forEach(callbackfn: (value: number, index: number, array: number[]) => {};
      let calculate = (value) =>
        {
            console.log(value);
        };
    arr.forEach((calculate));


    //* map method : this is same as for each method but minor difference is that it can store the value in new array;

  let newarr =  arr.map((val) =>{
        return val*2;
    });


    //* filter method: creates a new array of element that gives true condition/filter;

    let newarr1 = arr.filter((val) => {
            return val % 2 === 0;
    });


    //*reduce method : perform with a particular operation and reduce array to a single value. It returns that single value;

    const output =arr.reduce((res,curr) => 
        {
            return res+curr;
        });
        
        const output1 =arr.reduce((prev,curr) => 
            {
                return prev > curr?prev:curr;
            });
