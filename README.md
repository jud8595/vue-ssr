# vue-ssr

## Rendu côté serveur. 
Overview:
Basé sur le plugin vue-ssr-renderer qui fait essentiellement 2 choses:
 - Il prend en entrée un bundle json qui contient la création d'une application Vue et qui renvoie une instance Vue. Le plugin fait tout simplement un rendu en String de cette instance via createBundleRenderer.
 - Il construit le bundle json via le plugin webpack VueSSRServerPlugin

Stack:
 - Serveur node js: Ecoute juste une requête entrante et appelle le renderer qui génère du HTML
 - Renderer (bundle renderer): fourni par vue-server-renderer, il cherche une fonction (context) => Promise : app (Vue), dans le bundle généré par webpack
 - Webpack (entry-server.js): il génère le bundle qui renvoie l'application Vue (app.js) encapsulée dans une Promise
 
## Rendu côté client.
Overview:
L'application Vue peut être construite de 2 façons différentes:
 - Soit normalement à partir des fichiers webpack (si l'entry client contient réellement createApp())
 - Soit en mode client hydration à partir du html renvoyé par le serveur (le serveur ajoute alors l'attribut data-server-rendered="true" pour signifier à l'application Vue qu'elle doit se monter en hydration mode). L'application Vue va initialiser les propriétés de tous ses composants à partir du html.

Stack:
 - Webpack (entry-client.js): il génère un fichier js qui contient l'application Vue (app.js)
 
## Point commun entre les 2 rendus: le fichier app.js qui contient une fonction createApp qui renvoie { app , router, store }