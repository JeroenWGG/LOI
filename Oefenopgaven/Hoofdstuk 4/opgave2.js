function Person(firstname,lastname,age,eyecolor) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.eyecolor = eyecolor;
}

//Voorbeeld van shallow copy
let Jeroen = new Person("Jeroen","Wiersma","25","Green");
let JeroenShallowCopy = Jeroen;
document.querySelector(".result1").innerHTML = "Before changing the variable Jeroen is " + Jeroen.age;
document.querySelector(".result2").innerHTML = "Before changing the variable JeroenShallowCopy is " + JeroenShallowCopy.age;
Jeroen.age = "30"
document.querySelector(".result3").innerHTML = "After changing (Jeroen.age) Jeroen is " + Jeroen.age;
document.querySelector(".result4").innerHTML = "After changing (Jeroen.age) JeroenShallowCopy is " + JeroenShallowCopy.age;

//Voorbeeld van deep copy
let Jeroen2 = 2;
let Jeroen2DeepCopy = Jeroen2;
document.querySelector(".result5").innerHTML = "Before changing the variable Jeroen2 is " + Jeroen2;
document.querySelector(".result6").innerHTML = "Before changing the variable JeroenDeepCopy is " + Jeroen2DeepCopy;
Jeroen2 = 5;
document.querySelector(".result7").innerHTML = "After changing (Jeroen2) Jeroen2 is " + Jeroen2;
document.querySelector(".result8").innerHTML = "After changing (Jeroen2) JeroenDeepCopy is " + Jeroen2DeepCopy;
