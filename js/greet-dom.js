// reference Dom elements
var textInputElem = document.querySelector('.textInput');
var counterElem = document.querySelector('.counter');
var languageRadioELem = document.querySelector('.languageRadio');
var displayGreeting = document.querySelector('.displayGreeting');
var greetBtn = document.querySelector('.greetButton');
var clearBtnElem = document.querySelector('.clear');


var storing = localStorage.getItem('users');
var userStorages = storing ? JSON.parse(storing) : {};

counterElem.innerHTML = Object.keys(userStorages).length;
var greetingInstance = MyGreetingsLogic(userStorages) //Instance


function greetingsWorking(){
  var everyName = textInputElem.value.toUpperCase();
// greetingInstance.counting(everyName);

  var checkedRadioBtn = document.querySelector("input[name='languageRadio']:checked");
    if (checkedRadioBtn){
      var languageType = checkedRadioBtn.value;
    }
   // languageType will know which language is it.
     greetingInstance.greeting(languageType, everyName);
     counterElem.innerHTML = greetingInstance.counterTotal();

  if(everyName !== ""){
     var languageGreeting = greetingInstance.langGreetings();
      displayGreeting.innerHTML = languageGreeting +' ' + "";
    }



    if(everyName == ""){
      displayGreeting.innerHTML = "Please Enter Your Name!"
    }

    if(!checkedRadioBtn){
      displayGreeting.innerHTML = "Please select a language!"
    }

    localStorage.setItem("users", JSON.stringify(greetingInstance.forLocal()))
  }

greetBtn.addEventListener('click', function(){
  greetingsWorking();



clearBtnElem.addEventListener('click', function(){
      greetingInstance.clearing();
      counterElem.innerHTML = 0;
      displayGreeting.innerHTML = "";
      //textInputElem.value;
      localStorage.clear();
      location.reload()

    })
});
