/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let  message;

let login = prompt ( "Login" );

login == "Employee" ? message = "Hello" :
login == "Director" ? message = "Greetings, dear Director" :
login == "" ? message = "no login" :
message = "access denied";

alert (message);