## Installation Projet Frequencies
Tout d'abord, il faut récupérer le projet sur le repo github en clonant depuis cette adresse : 
[Repo GitHub Frequencies](https://github.com/FrequenciesProduction/sitewebfrequencies)

Ensuite, il faut installer les dépendances avec la commande suivante : 

    yarn install

Une fois les dépendances installées, vous pouvez lancer le serveur avec la commande suivante : 

    yarn dev

Celle-ci va lancer un serveur en local (par defaut, l'adresse est la suivante (elle sera également indiquée dans la console du serveur) : 

    http://localhost:3000

## Dossiers de structuration du projet
Ce projet à été migré depuis les version 2  de Nuxt et de Vuejs vers leur versions 3 respectives.
Il existe donc des dossiers avec chacun son périmètre : 

**.firebase**: Configuration et cache de firebase

**.nuxt**: Dossier créé suite au lancement du serveur local

**.output**: Dossier "public" qui sera déployé en ligne

**assets**: Ce dossier contient les différents styles des pages du site

**components**: Ce dossier contient tous les composants créés et utilisés dans le site, ainsi que leur style associés

**dist**: Ce dossier va etre généré suite à la génération du serveur pour l'environnement de production

** layouts**: CE dossier contient le style appliqué par défaut sur tout le site, il contien également la page d'accueil

** node_modules**: Contient toutes les dépendances du projet. Il est géré automatiquement par yarn

**pages**: Ce dossier contient les pages affichées lorsque l'on navigue sur le site. Chaque nom de fichier dans ce dossier correspond à une route

**public**: Contient toutes les images qui sont utilisées sur le site

** server**: Contient la configuration du serveur
## Fichiers racines
Les fichiers à la racines de ce projet ne doivent pas être modifiés à la main, il sont modifiés automatiquement lors de l'ajout/suppression de dépendances.

Seules exceptions : 

**firebase.js**: Fonctions utilisées de firebase
**firebase.json**: Paramétrage de firebase
** nuxt.config.js**: Paramétrage global de l'application

## Déploiement Firebase
Avant de déployer sur firebase, s'assurer que le site fonctionne avec l'émulateur de firebase: 

 1. Se placer dans le repertoire du projet avec un invite de commandes
 2. Executer ``yarn preprod``
 3. Executer ``yarn prod``
 4. Executer ``firebase emulators:start``

Pour déployer sur firebase, il faut suivre les étapes suivantes : 

 1. Se placer dans le repertoire du projet avec un invite de commandes
 2. Executer ``yarn preprod``
 3. Executer ``yarn prod``
 4. Executer ``firebase login --reath (Se connecter avec Developper@frequencies.fr)``
 5. Executer ``firebase deploy``
