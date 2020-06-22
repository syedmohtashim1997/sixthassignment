//Chapter 21 to 25
// Q no 1
// var a=prompt("Enter Firstname");
// var b=prompt("Enter Lastname");
// var fullname=a+" "+b;
// document.write("Your full name is "+fullname+"<br>");
//  Q no 2 
// var mobile=prompt("Enter your favourite mobile");
// document.write("My favourite mobile phone is "+mobile+"<br>");
// var length=mobile.length;
// document.write("Length of string is "+length+"<br>");

//Q no 3
// var string="Pakistani";
// document.write("String: "+string+"<br>");
// var length=string.indexOf('n');
// document.write("Index of 'n': "+length+"<br>");
// Q no 4
// var string="Hello World";
// document.write("String: "+string+"<br>");
// var length=string.lastIndexOf('l');
// document.write("Last Index of 'l' :"+length+"<br>");
//Q no 5
// var string="Pakistani";
// document.write("String: "+string+"<br>");
// var length=string.indexOf('i');
// document.write("Character at index "+length+" 'i' "+"<br>");
//Q no6
// var a=prompt("Enter Firstname");
// var b=prompt("Enter Lastname");
// document.write("Your fullname is "+a+" "+b+"<br>");
// Q no 7
// var city="Hyderabad";
// document.write("City: "+city+"<br>");
// var b=city.replace("Hyder","Islam");
// document.write("After Replacement :"+b+"<br>");
// //Q no 8
// var message ="Ali and Sami are best friends. They play cricket and football together."
// var  rep =message.replace(/and/g,"&");
// document.write(rep+"<br>");
//Q no 9
// var value="472";
// document.write("Type string "+value+"<br>");
// value=+value;
// document.write("Type Number "+value+"<br>");
//Q no 10
// var a=prompt("Enter any word here");
// var b=a.toUpperCase();
// document.write("Userinput "+a+"<br>");
// document.write("UpperCase "+b+"<br>");
//Q no 11

// var a=prompt("Enter word here");
// var b=a.slice(0,1);
// var c=a.slice(1);
// var b=b.toUpperCase();
// var c=c.toLowerCase();
// var merge=b+c;
// document.write(merge+"<br>");

//Q no 12
// var num="35.36";
// var res = num.replace(/\./g,' ');
// document.write("Number: "+num+"<br>")
// document.write("result: "+res+"<br>");

//Q NO 13
// var absolute=prompt("Enter any number here");
// document.write(Math.abs(absolute)+"<br>");
//Q NO 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var a=prompt("Welcome to our bakery.What do you want sir/maam");
// if(a==="cake"){
//     document.write("cake is available at index 0 "+"<br>");
// }
// else if(a==="apple pie"){
//     document.write("apple pie is available at index 1 "+"<br>");
// }
// else if(a==="cookie"){
//     document.write("cookie is available at index 2 "+"<br>");
// }
// else if(a==="chips"){
//     document.write("chips is available at index 2 "+"<br>");
// }
// else if(a==="patties"){
//     document.write("patties is available at index 3 "+"<br>");
// }
// else{
//     document.write("Sorry we dont have this item"+"<br>");
// }

//Q no 14

// var password=prompt("Enter password")
// if(password==="1234" ||password==="466" ||password==="0548"){
//     alert("Pasword cannot start with numbers")
// }

//Q no 16
// var university="University of karachi";
// var c=university.split("");
// document.write(c+"<br>");

//Q no 17
// var pak="pakistan";
// var b=pak.charAt(7);
// document.write("Input is "+pak+"<br>");
// document.write("Last character of input is "+b+"<br>");

//Assignment 26 to 30
//Q no1
// var float=prompt("Enter any decimal number here");
// document.write("Number is "+float+"<br>");
// if(float<=0){
//     alert("You cannot enter negative number and zero here ");
// }
// else{
// var round=Math.round(float);
// document.write("round off value is "+round+"<br>");
// var floor=Math.floor(float);
// document.write("floor value is "+floor+"<br>");
// var ceil=Math.ceil(float);
// document.write("ceil value is "+ceil+"<br>");
// }
//Q no2
// var negative=prompt("Enter negative float  value here");

// if(negative>=0){
//     alert("You can only use negative number here");
// }
// else{
// document.write("Negative  Number is "+negative+"<br>");
// var round=Math.round(negative);
// document.write("round off value is "+round+"<br>");
// var floor=Math.floor(negative);
// document.write("floor value is "+floor+"<br>");
// var ceil=Math.ceil(negative);
// document.write("ceil value is "+ceil+"<br>");
// }
//Q no4
// var a=Math.random()*6;
// var c=Math.random()*6;
// var d=Math.round(c);
// var b=Math.round(a);
// document.write("The value of dice 1 is equal to "+b+"<br>");
// document.write("The value of dice 2 is equal to "+d+"<br>");
//Q no 5
// var head=prompt("Enter 0 or 1 value");
// var tail=prompt("Enter 0 or 1 value");
// var toss=Math.random()*2;
// var floor=Math.floor(toss);
// if(floor===0 || floor===1){
// document.write(head+" Random coin value: Head "+"<br>");
// document.write(tail+" Random coin value: Tail "+"<br>");
// }
// else{
//  alert("Something went wrong"); 
// }
//Q no 6
    // var b=Math.random()*100;
    // var a=Math.round(b);
    // document.write(a+"<br>");
//Q no 7
// var a=prompt("Enter your weight");
// var b=Math.round(a);
// document.write("Your weight is "+b+"<br>");

//Q no 8
// var num=prompt("Enter number between 1 and 10");
// if(num==="5"){
//     alert("You have won");

// }
// else{
//     alert("Try again");
// }
//Chapter 31 to 34

//Q no 1
// var a=new Date();
// document.write(a+"<br>");
//Q no 2
// var c=a.getMonth();
// document.write("Index no of month is "+c+"<br>");
//Q no 3
// var d=a.getDay();
// document.write("Index no of day is "+d+"<br>");

//Q no 4
// var day=prompt("Enter any day name");
// var firstchar=day.slice(0,1);
// var otherchar=day.slice(1);
// firstchar=firstchar.toUpperCase();
// otherchar=otherchar.toLowerCase();
// var day=firstchar+otherchar;
// if(day==="Monday" || day==="Tuesday" || day==="Wednesday" ||day==="Thursday" ||day==="Friday"){
//     document.write("It's working day"+"<br>");
// }
// else if(day==="Saturday" || day==="Sunday"){
//     document.write("It's fun day today"+"<br>");
// }
// else{
//     alert("Something went wrong");
// }

//Q no 5
// var month=prompt("Enter any number between 1 to 30");
// if(month>0 || month<=15){
//     alert("First fifteen days of a month");
// }
// else if(month<=31 || month>15){
//     alert("Last fifteen days ofa month");
// }

//Q no 6
// var dob =new Date("Jan 1, 1997");
// var dobmilli=dob.getTime();
// document.write("Elapsed milliseconds since January 1 ,1997: "+dobmilli+"<br>")
// var minutes=dobmilli/(1000*60);
// document.write("Elapsed minutes since January 1 ,1997: "+minutes+"<br>");

//Q no 7
// var time=prompt("Enter time here")
// if(time<12){
//     document.write("It's AM time"+"<br>");
// }
// else if(time>12 || time<=24){
//     document.write("It's PM time"+"<br>");
// }
// else{
//     alert("Plz enter value of the given range");
// }

// Q no 9
// var ramadan=new Date("June 18, 2015 ");
// var current=new Date("June 20, 2020 ");
// var milli=ramadan.getTime();
// var anmilli=current.getTime();
// var difference=anmilli-milli;
// var day=difference/(1000*60*60*24);
// var floor=Math.floor(day);
// document.write("Total days passed since June 18, 2015  to june 20,2020 is "+floor+"<br>");

//Q no 10
// var ref=new Date("Jan 5,2015");
// var another=new Date("Dec 5,2015");
// var millisec=ref.getTime();
// var anmilli=another.getTime();
// var difference=anmilli-millisec;
// var totalsec=difference/(1000);
// document.write("Total seconds has passed since Jan 5,2015 to Dec 5,2015 "+totalsec+"<br>");

//Q no 11
// var currentdate=new Date();
// document.write("Current date "+currentdate+"<br>")

//Q no 13
// var agecal=new Date(prompt("Enter you date of birth"));
// var time=agecal.getTime();
// var today=new Date();
// var todaymili=today.getTime();
// var diff=todaymili-time;
// var year=diff/(1000*60*60*24*30*12);
// var fl=Math.floor(year);
// document.write("You are "+fl+" years old"+"<br>");
// document.write("Your birth year is "+agecal+"<br>");

//Q no 14
// document.write("<h1>");
// document.write("K Electric bill");
// document.write("</h1>");
// var customer=prompt("Enter customer name");
// var currentmonth=prompt("Enter current month");
// var nounits=prompt("Enter No of Units");
// var chargeunits=prompt("Enter Charges per Unit");
// document.write("Customer Name: "+customer+"<br>");
// document.write("Current Month: "+currentmonth+"<br>");
// document.write("No Of Units: "+nounits+"<br>");
// document.write("Charges per Unit: "+chargeunits+"<br>");
// var duedate=nounits*chargeunits;
// document.write("Net Amount Payable (with in due date) "+duedate+"<br>");
// document.write("Late payment charge is equal to 350"+"<br>");
// var late=duedate+350;
// document.write("Gross Amount payable after due date is "+late);
//Chapter 35 to 38:
//Q no 1
// function time(){
//     var a=new Date();
//     document.write(a+"<br>");
// }
// time();
//Q no 2
// var firstname=prompt("Enter firstname");
// var Lastname=prompt("Enter lastname");
// var greet=firstname+" "+Lastname;
// document.write("How are you "+greet+"?"+"<br>");
//Q no 3
// function add(){
//     var num1=prompt("Enter first number:");
//     var num2=prompt("Enter Second  number:");
//     var sum=(+num1)+(+num2);
//     document.write("Sum to two Numbers is "+sum+"<br>");
// }
// add();
//Q no 4
// function calculator(){
//     var num1=prompt("Enter first number:");
//     var operator=prompt("Enter Operator:");
//     var num2=prompt("Enter Second  number:");
//     if(operator==="+"){
//         var c=(+num1)+(+num2);
//         document.write("Sum to two Numbers is "+c+"<br>");
//     }
//     else if(operator==="-"){
//         var c=num1-num2;
//         document.write("Subtraction to two Numbers is "+c+"<br>");
//     }
//     else if(operator==="*"){
//         var c=num1*num2;
//         document.write("Multiplication to two Numbers is "+c+"<br>");
//     }
//     else if(operator==="/"){
//         var c=num1/num2;
//         document.write("Division to two Numbers is "+c+"<br>");
//     }
// else{
//     alert("Someting went wrong:")
// }
// }
// calculator();
//Q no 5
// function square(){
//     var i=prompt("Enter any number ");
//     var j=i*i;
//     document.write("Square of "+i+" is "+j+"<br>");
// }
// square();

//Q no 6
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = prompt("Enter value here");
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer+"<br>");
//   factorial(n);
//Q no 7
// function abc(){
//     var startnum=prompt("Enter start number");
//     var endnum=prompt("Enter last number");
//     for(i=startnum;i<=endnum;i++){
//         document.write(i+"<br>");
//     }
// }
// abc();

//Q NO 9
// i. Arguments as value 
// function area(lenght,width){
// document.write("Area of rectangle is "+lenght*width+"<br>");
// }
// area(10,6);

// ii. Arguments as variables 
// function anarea(lenght,breath){
//     var anarea=lenght*breath;
//     return anarea;

//     }
//    var a=anarea(15,5);
//    alert("Area of rectangle "+a);
//Q no 10
// function palindrom(){
// var word=prompt("Enter word");
// var check="";
// for(var i=word.length-1;i>=0;i--){
//     check+=word[i];
// }
// if(word===check){
//     alert(check+" is palindrome word");
// }
// else{
//     alert(check+" not palindrome");
// }
// }
// palindrom();

//Q no 11
// function sentence()
// {
// var sent=prompt("Enter sentence here");
// var firstchar=sent.slice(0,1);
// var otherchar=sent.slice(1);
// firstchar=firstchar.toUpperCase();
// otherchar=otherchar.toLowerCase();
// result=firstchar+otherchar;
// document.write(result+"<br>");
// }
// sentence();

//Q no 14
// Circumference of circle 
// function Circumference(){
//    var  r=3;
//    var pi=3.142;
//     var  c=2*pi*r;
//     document.write("Circumference of circle "+c+"<br>");
// }
// Circumference();
//  Area of circle 
// function Area(){
//     var  r=3;
//     var pi=3.142;
//      var  a=pi*r*r;
//      document.write("Area of circle "+a+"<br>");
//  }
//  Area();