function MyGreetingsLogic(userStorages){
  // variables
  var greetedNames = userStorages || {};
  //var counter = 0;
  // var Names ='';
  var languages = "";

       function counting(everyName){
        if(everyName !== ""){
          if (greetedNames[everyName] === undefined){
          // Names = everyName;

         greetedNames[everyName] = 0;
         //counter++;
         }
        }

        // if(languages != ""){
        //   greetedNames[everyName] =0;
        // }

        if(userStorages){
          greetedNames = userStorages;
        }

      }

   function counterTotal(){
        return Object.keys(greetedNames).length
      }
      function forLocal(){
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

        function clearing(){
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
        clearing,
        forLocal,
        //userzz


        }

 }
