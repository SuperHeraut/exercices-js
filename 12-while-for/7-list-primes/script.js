/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let n = +prompt("quelle valeur de n?");
for (let a =2; a <= n; a++) {
      let prime = true;
      for (let b = 2; b < a; b++){
            if (a % b == 0){
                  prime = false;
            }
      }
      if (prime) {
            console.log(a);
      }

}