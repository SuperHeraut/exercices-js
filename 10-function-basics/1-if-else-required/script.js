/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let age= +prompt ("âge")
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}
checkAge(age)