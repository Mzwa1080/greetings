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
      assert.equal(1, greetInLanguage.updateCounter())
  })
  it('should keep a count of all the users greeted', function(){

    var greetInLanguage = MyGreetingsLogic()
    greetInLanguage.greeting('Isixhosa', 'James')
    greetInLanguage.greeting('Isixhosa', 'Mzwa')
    greetInLanguage.greeting("Isixhosa", 'Andre')
    greetInLanguage.greeting("Isixhosa", 'Andre')
    greetInLanguage.greeting("Isixhosa", 'Andre')
    greetInLanguage.greeting("Isixhosa", 'Andre')

    assert.equal(3, greetInLanguage.updateCounter())
  })
})
