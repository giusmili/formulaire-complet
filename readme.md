# Formulaire complet
Training sur un formulaire de contact

## Installer Babel


* vérifier la version node js et npm puis

* npm init

* npm install --save-dev babel-cli babel-preset-env

* Ajouter dans le fichier jSon la ligne de code qui suit : "build": "babel --no-babelrc src -w -d js --preset=env"

* Puis cibler le dossier "SRC" et commande :npm run build

* Nota bene : pour installer le CLI faire d'abord npm init pour le package.json
```cmd
    npm init
    npm install --save-dev babel-cli babel-preset-env
    npm run build
```
*C'est quoi Babel?*
Traduit de l'anglais Babel est un transcompilateur JavaScript gratuit et open source 
qui est principalement utilisé pour convertir le code ECMAScript 2015 en une version rétrocompatible de Javascript pouvant être exécutée par des moteurs JavaScript plus anciens.
Pour l'installer utilisez les lignes de commande *NPM*.

[Wikipedia &raquo;](https://en.wikipedia.org/wiki/Babel_(transcompiler))




