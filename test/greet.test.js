describe('The Greet function', function(){
  it('should be able to greet in Afrikaans', function(){

    var greetInLanguage = MyGreetingsLogic();
    assert.equal("Goeie dag, Shawn", greetInLanguage.greeting("Afrikaans", "Shawn"))
  })
  it('should be able to greet in Isixhosa', function(){

    var greetInLanguage = MyGreetingsLogic();
    assert.equal("Molo, Lihle", greetInLanguage.greeting("Isixhosa", "Lihle"))
  })
  it('should be able to greet in English', function(){

    var greetInLanguage = MyGreetingsLogic();
      assert.equal("Good day, Andre", greetInLanguage.greeting('English', 'Andre'))
  })
  it('should keep a unique user greet count', function(){

    var greetInLanguage = MyGreetingsLogic();
      greetInLanguage.greeting("Isixhosa", 'Andre')
      greetInLanguage.greeting("Isixhosa", 'Andre')
      greetInLanguage.greeting("Isixhosa", 'Andre')
      assert.equal(1, greetInLanguage.counterTotal())
  })
  it('should keep a count of all the users greeted', function(){

    var greetInLanguage = MyGreetingsLogic()
    greetInLanguage.greeting('Isixhosa', 'James')
    greetInLanguage.greeting('Afrikaans', 'Mzwa')
    greetInLanguage.greeting("English", 'Andre')
    greetInLanguage.greeting("Isixhosa", 'Andre')
    greetInLanguage.greeting("Isixhosa", 'Andre')
    greetInLanguage.greeting("Isixhosa", 'Andre')

    assert.equal(3, greetInLanguage.counterTotal())
  })

  it('should return Zero if there\'s no one greeted in the localStorage', function(){
    var greetInLanguage = MyGreetingsLogic({});
    console.log(greetInLanguage.greetedNames);
    assert.equal(0, greetInLanguage.counterTotal())
  })

  it('should count the number of people in the localStorage', function(){
    var greetInLanguage = MyGreetingsLogic({"Steve": 1, "Nick":1, "Shawn":1});
    console.log(greetInLanguage.greetedNames);
    assert.equal(3, greetInLanguage.counterTotal())
  })

})
