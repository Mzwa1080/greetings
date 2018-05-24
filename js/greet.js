function MyGreetingsLogic(userStorages){
  // variables
  var greetedNames = {};
  var counter = 0;
  // var Names ='';
  var languages = "";

       function counting(everyName){
        if(everyName !== ""){
          if (greetedNames[everyName] === undefined){
          // Names = everyName;
          //console.log(Names);
         greetedNames[everyName] = 0;
         //counter++;
         }
        }

        if(userStorages){
          greetedNames = userStorages;
        }
      }




      function counterTotal(){
        return Object.keys(greetedNames).length
      }
      function forLocal(userStorages){
        return greetedNames;
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
          greetedNames = {}
        }
        function forNames(){
          return Names;
        }

        return{
        //counting,
        greeting,
        counterTotal,
        langGreetings,
        clear,
        forLocal,
        //userzz


        }

 }
