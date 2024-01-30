/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let age= +prompt("âge?");
function checkAge(age) {age > 18? true : confirm("did thy parents allow thee?")};
function checkAge(age) {age > 18 || confirm("did thy parents allow thee?")};
checkAge(age);