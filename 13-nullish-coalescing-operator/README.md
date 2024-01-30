# Nullish coalescing operator '??'


## Quelle est la valeur de retour ce code ? Pomme

```js
let banane;

alert(banane ?? "pomme");

```

## Quelle est la valeur de retour ce code ? Trop bon

```js
let banane = "Trop bon";

alert(banane ?? "pomme");

```

# Comparison with "||" Trop bon !

```js
let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon.");
```


## Après avoir effectué les exercices précédent pouvez vous dire:

### Ce que retourne, par définition, l'opérateur "||" ? pas vraiment

### Ce que retourne, par définition, l'opérateur "??" ? guère plus


# Precedence

### Des deux opérateurs du dessus, lequelle à la plus grande précédence (priorité) ? je ne sais pas


### Faut il:
 #### utiliser ?? avec tous les autres opérateurs ?
 #### ne jamais utiliser ?? avec tous les autres opérateurs ?
 #### quelques fois utiliser ?? avec les autres opérateurs ?

oui.

### Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

```js
let fruit = "poire" && "pomme" ?? "banane"
```
log: Uncaught SyntaxError: cannot use ?? unparenthesized within || and && expressions


```js
let fruit = ("poire" && "pomme") ?? "banane"

alert(fruit)
```
pomme