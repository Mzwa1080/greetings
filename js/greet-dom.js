var greetingInstance = MyGreetingsLogic(); //Instance
// reference Dom elements
var textInputElem = document.querySelector('.textInput');
var counterElem = document.querySelector('.counter');
var languageRadioELem = document.querySelector('.languageRadio');
var displayGreeting = document.querySelector('.displayGreeting');
var greetBtn = document.querySelector('.greetButton');
var clearBtnElem = document.querySelector('.clear')


function greetingsWorking(){
var everyName = textInputElem.value;
greetingInstance.counting(everyName);

//update the DOM to display the counter
counterElem.innerHTML = greetingInstance.updateCounter();


var checkedRadioBtn = document.querySelector("input[name='languageRadio']:checked");
if (checkedRadioBtn){
var languageType = checkedRadioBtn.value;
   // languageType will know which language is it.
     greetingInstance.greeting(languageType, everyName);
}

if(everyName !== ""){
  var languageGreeting = greetingInstance.langGreetings();
  displayGreeting.innerHTML = languageGreeting +' ' + '!';
}

}

greetBtn.addEventListener('click', function(){
  greetingsWorking();
  if(textInputElem.value  = ""){
    textInputElem.value = "";
  }

clearBtnElem.addEventListener('click', function(){
    greetingInstance.clear();
    counterElem.innerHTML = 0;

})
});
