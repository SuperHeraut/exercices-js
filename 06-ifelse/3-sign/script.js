/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.*/

let a = prompt ( "entrez une valeur" );

if ( a > 0 ) {
      alert ( "1" )
      location.reload();
} else if ( a == 0 ) {
      alert ( "0" )
      location.reload();
} else if ( a < 0 ) {
      alert ( "-1" )
      location.reload();
} else {
      alert ( "CE N'EST PAS UN NOMBRE!!!" );
      location.reload();
}
