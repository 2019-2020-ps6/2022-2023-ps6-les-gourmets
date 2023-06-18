##   Avancement:

Étape 1 : Done

Étape 2 : Done

Étape 3 : Done

Étape 4 : Abandonnée

## Healthcheck

Pour le healthcheck du front-end on fait une requete à l'aide de la commande curl sur le port 80 qui fonctionne si le site est fonctionnelle tandis que pour le backend on fait une requete sur la route des users pour vérifier si il obtient bien l'accès à la base de donnée.

## User

Les services du front-end et back-end utilise l'utilisateur node tandis que le service playright n'utilise pas de user (le user pwuser n'avait pas les droits pour partager le dossier playwright-report dans le volume donc nous l'avons retirer)

## ports et urls

Pour utiliser le site il faut aller sur le port 8080 (http://localhost:8080) de la machine en cas de production et sur le port 8081 dans le cas d'un lancement avec la database de test (http://localhost:8081)

## Script .sh

Nous n'avons pas pu tester les .sh (problème de vm linux et wsl) donc si ils ne fonctionnent pas lancer la commande dans les .sh (docker compose)
