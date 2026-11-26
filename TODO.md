# TODO portfolio

Objectif : un site qui sonne humain et qui montre un profil full stack capable d'être tech lead / PO, en route vers engineering manager.

Repère : en local (`npm start`), tout ce qui manque s'affiche en grisé « à compléter ». Sur le site publié, les blocs vides sont simplement cachés.

---

## 1. Visuels des projets

- [x] Visuel FCGM (mockup + icône) à droite du projet, champ `visual`
- [x] Carrousel Kalisport (back-office + mobile) à droite du projet, champ `gallery`, avec plein écran
- [x] Vérifier que les noms visibles dans les captures Kalisport (clients de la boutique, « MALO Charlotte », photos de profil) sont des données de démo
- [ ] Visuels pour Kanban et Gestion de mariage (même format : PNG transparent, déposer dans `src/assets/projects/<projet>/`)

## 2. Études de cas (`src/app/services/projects.data.ts`, champ `caseStudy`)

Le plus important pour un profil lead : le **pourquoi** des décisions, pas seulement le quoi.

- [ ] **Kalisport**
  - [ ] Taille de l'équipe, avec qui tu travailles (produit, clients, fédérations)
  - [ ] Les arbitrages que tu as portés (ex. pourquoi une app pensée pour la marque blanche)
  - [ ] Accompagnement d'autres devs, revues de code, recrutement… s'il y en a
- [ ] **FCGM**
  - [ ] Qui a décidé quoi (toi, l'équipe, le client) et avec quelles contraintes (délai, budget)
  - [ ] Chiffres de l'étude d'impact (téléchargements, utilisateurs pendant le tournoi…)
- [ ] **Kanban**
  - [ ] Le pourquoi des choix techniques
  - [ ] Résultats : en ligne ? utilisé ? ce que tu en as appris
- [ ] **Gestion de mariage**
  - [ ] Pourquoi trois surfaces séparées, pourquoi NestJS plutôt que Spring Boot
  - [ ] Résultats : c'est pour ton mariage ? nombre d'invités, RSVP reçus, retours (c'est un super point d'accroche, à dire)

## 3. Parcours (`src/app/services/career.data.ts`)

- [x] Toutes les étapes remplies (son, Dior, Keolis, reconversion, alternance, Kalisport, objectif)
- [x] Mise en forme : étape actuelle mise en avant, objectif grisé, métiers hors tech en compact

## 4. Textes à réécrire

- [x] **Intitulé** : « Ingénieur logiciel full stack » dans le hero et l'À propos, « Ingénieur Logiciel » dans le Parcours
- [ ] **À propos** : « après une carrière dans l'ingénierie du son » oublie Dior et Keolis, à reformuler
- [ ] **À propos** : vérifier que les APIs Kalisport sont bien en PHP (j'ai déduit ça de la stack)
- [ ] **À propos** : ajouter une anecdote vraie (un incident, une décision difficile, un retour utilisateur)
- [ ] **À propos** : rendre concret « comprendre un système dans son ensemble » (lien son → code)
- [ ] **Citation** « Le plus difficile n'est pas… – c'est… » : structure typique d'IA, et redondante avec « la clarté vaut mieux que la complexité » du hero. Garder une seule des deux, ou aucune
- [ ] **Tirets « – »** partout dans les textes : remplacer par des virgules, deux-points ou des phrases
- [ ] **Expressions creuses** à remplacer : « de bout en bout », « sans friction », « pensée comme un vrai produit »
- [x] **« Travaillons ensemble »** apparaissait deux fois : remplacé par un titre « Contact » et un bouton CV
- [x] **Chiffres de l'À propos** : grille de statistiques supprimée (redondante avec le hero, les projets et le texte)
- [x] **Kalisport** : RabbitMQ et Grafana / Prometheus présentés comme des tentatives non abouties en production
- [x] **OWASP** : ajouté dans l'étude de cas et la page détail Kalisport
- [x] **FCGM** : n'est plus présentée comme une marque blanche de Kalisport (recréée de zéro, en standalone)
- [ ] **Positionnement PHP / Java** : les intros Kanban et mariage insistent beaucoup sur Spring Boot, à adoucir si PHP passe devant
- [ ] **Nom de Mark** : « Mark by @Kalisport » dans l'À propos, « Mark » ailleurs, choisir une forme
- [ ] **Hero** : relire la phrase « Développeur full stack, orienté produit et équipe. » et la description, que ce soit ta voix

## 5. Technique

- [x] **Menu mobile** : bouton « Menu » avec panneau déroulant
- [x] **CV** : bouton « Télécharger mon CV » ajouté dans l'À propos
  - [ ] Vérifier que le PDF est à jour avec le nouveau positionnement (Angular / TypeScript / PHP / Java)
- [ ] **`<html lang="en">`** alors que le site est en français (`src/index.html`)
- [ ] **Mélange anglais / français** dans les libellés restants
- [x] **Pages projet** : supprimées, tout le contenu est dans les études de cas de la liste (les anciennes adresses `/project/...` renvoient vers l'accueil)
- [ ] **Nettoyage** :
  - [ ] Feuille Devicon chargée dans `index.html` mais jamais utilisée
  - [ ] `ThemeService` jamais utilisé
  - [x] Variables en double dans `styles.scss` supprimées avec la page projet
  - [ ] Variables inutilisées dans `_variables.scss` (échelle de z-index, ombres…)
- [x] **Avertissements de build** : plus de dépassement de budget depuis la suppression des pages projet
- [ ] **`package-lock.json`** modifié avant cette session : vérifier si c'est voulu

## 6. Avant de publier

- [ ] Relire le site en local sur ordinateur et sur mobile
- [ ] Vérifier qu'aucune mention « à compléter » n'apparaît dans la version publiée (`npm run build:prod`)
- [ ] Commit, puis `npm run deploy`
