/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let browser = prompt ( "browser" )

if (browser == "Edge") {
    alert( "You've got the Edge!" );
} else if ( browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
    alert( 'Okay we support that browser too' );
} else {
    alert( 'We hope that this page looks ok!' );
}