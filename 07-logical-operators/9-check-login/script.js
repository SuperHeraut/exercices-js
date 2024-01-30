/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let a = prompt ("Who's there?");

if ( a === "Admin" ) {

      let b = prompt ("Show me your works.");
      
      if ( b === "TheMaster" ) {

            alert ( "Welcome home, my friend." );

      } else if ( b === null || b == "" ) {

            alert ( "ok, bye." );

      } else {

            alert ( "Amen, I never knew you. go away from me, you evildoer." );

      }

} else if ( a === null || a == "" ) {

      alert ( "ok, bye." );

} else {

      alert ( "Amen, I never knew you. go away from me, you evildoer." );

}