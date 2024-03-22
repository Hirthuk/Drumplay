var a = document.querySelectorAll(".drum").length;
for (let index = 0; index <a; index++) {
   
    document.querySelectorAll("button")[index].addEventListener("click",function handclick(){
        //     this.style.color = "red";
            // var audio = new Audio("sounds/tom-1.mp3");
            // audio.play();
    
            // We have to use different sound for different button like different case so have to use swithc statment
            // This keyword here working for normal function like without name enterting into even listener
            var buttonINNERHTML = this.innerHTML;
            makeevent(buttonINNERHTML);
            addAnimation(buttonINNERHTML);
        });
    }

    // Keydown is used to check the event of clicking keyboard
    // Lets create a function that denoted making keypress
    // adding this even function in to that function as parameter will used to take keyborad key
    document.addEventListener("keydown",function(event){
        makeevent(event.key);
        addAnimation(event.key);
    })
function makeevent(event) {
    switch (event) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
         case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "k":
            var tom4= new Audio("sounds/tom-4.mp3"); 
            tom4.play();   
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        default:
            console.log(buttonINNERHTML);
            break;
    }
    
}
function addAnimation(currentkey){
    // Already Angela created a class for keys with .w,.s so that event adding this currentkey+. class will denote  to class having that drum
    // don't use queryselectorall since it will bring it is as array
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    // Once we done with this thing that applied pressed class animation gets stopped
    // we have stop that added pressed class to activebutton after some seconds
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
    // console.log(activeButton);

}

// Higher Order function in the sense we can add another fucntion in that addtion to Parameters(par1,par22,function);
// var num1=0;
// var num2=0;
// function add (num1,num2){
//     return num1+num2;
// }
// function sub (num1, num2){
//     return num1-num2;c
// }

// function multi(num1,num2){
//     return num1*num2;
// }

// function divi(num1,num2){
//     return num1/num2;
// }


// function opera (num1,num2,operat){
//    return operat(num1,num2);
// }

//  const result = opera(34,54,add);
//  console.log(result);

// //  Constructor Function
// // construct function used to create same set of objects with new
// // constructor fucntion should start with Capital case
// function HouseKeeper(name,age,expereiencedYears,work,salary,wishTowork) {
//     this.name=name;
//     this.age=age;
//     this.expereiencedYears=expereiencedYears;
//     this.work=work;
//     this.salary=salary;
//     this.clearArea= function (){
//         alert("Cleaning in progress");
//     }
// }

// // TO enter details inside constructor function we have to used object type new keyword

// var houseKeeper1 = new HouseKeeper("Thangam",54,25,"Cleaning","25k",["HouseCleaning","BathroomCleaning","Dishwashing"]);

// houseKeeper1.clearArea();
// // Since it is  not an property it is an function so we have to use parenthesis
// // 



