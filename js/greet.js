function MyGreetingsLogic(){
  // variables
  var greetedNames = {};
  var counter = 0;
  // var Names ='';
  var languages = "";

       function counting(everyName){
        if(everyName !== ""){
        //when the greet button is pressed check if this user was already greeted before
        //by looking if the userName exists in greetedNames if not increment this counter and update the screen
        if (greetedNames[everyName] === undefined){
          // Names = everyName;
          //console.log(Names);
        //add an entry for the user that was greeted in the Object Map
         greetedNames[everyName] = 0;
         //counter++;
         }
        }
      }

      function counterTotal(){
        return Object.keys(greetedNames).length
      }

      function langGreetings(){
        return languages;
      }


        function greeting(language, Names){
          //console.log(Names);
          counting(Names);
          if (language === "English"){
              // counting(name);
             return languages = 'Good day, ' + Names;
          }

          if (language === "Afrikaans"){
            // counting(name);
            return languages = 'Goeie dag, ' + Names ;
          }

          if (language === "Isixhosa"){
            // counting(name);
             return languages = 'Molo, '  + Names;
          }

        }

        function clear(){
          return greetedNames = {}
        }
        function forNames(){
          return Names;
        }

        return{
        //counting,
        greeting,
        counterTotal,
        langGreetings,
        clear

        }

 }
