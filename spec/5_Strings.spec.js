describe("String", function(){
  var str = "hello world";

  it("charAt", function(){
    expect(str.charAt(0)).toBe('h');
    expect(str.charAt(1)).toBe('e');
    expect(str.charAt(5)).toBe(' ');
    expect(str.charAt(10)).toBe('d');
  });

  it("concat", function(){
    expect(str.concat("!")).toBe("hello world!");
    expect(str + "!").toBe("hello world!");
  });

  it("indexOf", function(){
    expect(str.indexOf("hello")).toBe(0);
    expect(str.indexOf("hi")).toBe(-1);
  });

  it("toUpper", function(){
    expect(str.toUpperCase()).toBe("HELLO WORLD");
  });

  it("toLower", function(){
    expect(str.toUpperCase().toLowerCase()).toBe("hello world");
  });

  it("regex", function(){
    var regex = "[a-z0-9._%+-]+@(?:[a-z0-9-]+\.)+[a-z]{2,4}";
    var email = "brenoferreira@lambda3.com.br";
    var resultado = email.match(regex);
    expect(resultado[0]).toBe(email);
  });

  it("replace", function(){
    expect(str.replace("world", "planet")).toBe("hello planet");
  });

  it("substring", function(){
    expect(str.substring(0, 5)).toBe("hello");
    expect(str.substring(6, 11)).toBe("world");
  });
});