const questions=[{
    question: "1.Which is the largest animal in world",
    answers:[{text:"Shark" , correct:false},
        {text:"Blue Whale" , correct:true},
        {text:"Elephant" , correct:false},
        {text:"Giraffe" , correct:false}]
},{
    question: "2.Rainbow consist of how many colours?",
    answers:[{text:"Two" , correct:false},
        {text:"Five" , correct:false},
        {text:"Seveen" , correct:true},
        {text:"Nine" , correct:false}]
},{
    question: "3.Baby frog is known as",
    answers:[{text:"Tadpole" , correct:true},
        {text:"frog" , correct:false},
        {text:"fish" , correct:false},
        {text:"snile" , correct:false}]
},{
    question: "4.Which animal is known as king of jungle",
    answers:[{text:"Tiger" , correct:false},
        {text:"Cheetha" , correct:false},
        {text:"Fox" , correct:false},
        {text:"Lion" , correct:true}]
},{
    question: "5.Which is the largest animal in world",
    answers:[{text:"Rose" , correct:false},
        {text:"Lotus" , correct:true},
        {text:"Jasmine" , correct:false},
        {text:"Tulip" , correct:false}]
}];
let choice= Math.floor((Math.random() * 5) + 1);
console.log(choice);
let ques=document.querySelector(".ques");
let choicelist=document.querySelectorAll(".choicelist li");
let btnnxt=document.querySelector(".btn");


let makequiz=function(){
    ques.textContent=questions[choice-1]['question'];
    for(let i=0;i<4;i++)
    {
    choicelist[i].textContent=questions[choice-1]['answers'][i]['text']
    }
}
makequiz();
btnnxt.addEventListener('click',makequiz);