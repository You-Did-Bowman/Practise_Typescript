// Ich lege hier fest, dass "greetings" nur den type "string" akzeptiert und den Wert "Hello Judith" hat
var greetings = "Hello Judith";
// Wir können keine number "greetings" zu weisen, weil wir bereits gesagt haben, dass es ein string ist
// greetings = 6;
var myNum = 4;
// Das geht nicht weil "toUpperCase()" ist eine string method und kann nicht auf eine number angwendet werden. 
// myNum.toUpperCase()
// ------------ NUMBER ------------
// bei Number erkennt TypeScript von selber, dass es eine Nummer ist, wenn die Variable auch direkt einen Wert erhält. Von daher könnte man hier auch ": number" weglassen.
var userId = 334455;
// Wenn ich den Namen der Variablen eingebe, wird mir dirket angezeigt, welche Methoden mit diesem Type funktionieren
userId.toFixed();
// ------------ BOOLEAN -----------
var isLoggedIn = false;
// ------------  ------------
console.log(greetings);
