# TODO portfolio

Objectif : un site qui sonne humain et qui montre un profil full stack capable d'être tech lead / PO, en route vers engineering manager.

Repère : en local (`npm start`), tout ce qui manque s'affiche en grisé « à compléter ». Sur le site publié, les blocs vides sont simplement cachés.

---

## 1. Captures d'écran (priorité n°1)

Un projet n'a pas de page détail tant qu'il n'a pas au moins une capture.

- [ ] Kalisport : vue principale, écran tournoi, messagerie, dashboard fédération
- [ ] FCGM Champions League : programme & résultats, carte du site, phases & classement
- [ ] Kanban : boards, roadmap client, login, détail d'un board
- [ ] Gestion de mariage : dashboard mariés, site invités, planning, RSVP

Comment faire : déposer les images dans `src/assets/projects/<projet>/`, puis ajouter `src` sur l'image dans `src/app/services/projects.data.ts` :

```ts
{ ratio: 'piz-1', label: 'Vue principale', src: 'assets/projects/kalisport/home.png' },
```

## 2. Études de cas (`src/app/services/projects.data.ts`, champ `caseStudy`)

Le plus important pour un profil lead : le **pourquoi** des décisions, pas seulement le quoi.

- [ ] **Kalisport**
  - [ ] Taille de l'équipe, avec qui tu travailles (produit, clients, fédérations)
  - [ ] Les arbitrages que tu as portés (ex. pourquoi RabbitMQ, pourquoi des builds marque blanche)
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

La section n'apparaît en ligne qu'à partir de 2 étapes complètes (période + titre).

- [ ] Ingénierie du son : dates, poste, structure(s), ce que ce métier t'a appris et que tu réutilises
- [ ] Reconversion : dates, formation (école, diplôme, autodidacte), pourquoi ce choix
- [ ] Kalisport : date d'arrivée exacte, évolution du poste (dev → lead ?) — faire 2 étapes si c'est le cas
- [ ] La suite : ce que tu vises et pourquoi (laisser la période vide pour ne pas l'afficher)

## 4. Textes à réécrire avec tes mots

- [ ] **Intitulé Kalisport cohérent partout** : « Lead développement & déploiement » (projet) vs « Développeur Full Stack » (Parcours, À propos)
- [ ] **À propos** : vérifier que les APIs Kalisport sont bien en PHP (j'ai déduit ça de la stack)
- [ ] **À propos** : ajouter une anecdote vraie (un incident, une décision difficile, un retour utilisateur)
- [ ] **À propos** : rendre concret « comprendre un système dans son ensemble » (lien son → code)
- [ ] **Citation** « Le plus difficile n'est pas… – c'est… » : structure typique d'IA, et redondante avec « la clarté vaut mieux que la complexité » du hero. Garder une seule des deux, ou aucune
- [ ] **Tirets « – »** partout dans les textes : remplacer par des virgules, deux-points ou des phrases
- [ ] **Expressions creuses** à remplacer : « de bout en bout », « sans friction », « pensée comme un vrai produit »
- [x] **« Travaillons ensemble »** apparaissait deux fois : remplacé par un titre « Contact » et un bouton CV
- [x] **Chiffres de l'À propos** : grille de statistiques supprimée (redondante avec le hero, les projets et le texte)
- [ ] **Kalisport (page détail)** : « Monitoring Grafana / Prometheus, standards OWASP (Prêt mais non utilisé) » à expliquer ou à retirer
- [ ] **Positionnement PHP / Java** : les intros Kanban et mariage insistent beaucoup sur Spring Boot, à adoucir si PHP passe devant
- [ ] **Nom de Mark** : « Mark by @Kalisport » dans l'À propos, « Mark » ailleurs, choisir une forme
- [ ] **Hero** : relire la phrase « Développeur full stack, orienté produit et équipe. » et la description, que ce soit ta voix

## 5. Technique (Claude peut s'en charger)

- [x] **Menu mobile** : bouton « Menu » avec panneau déroulant
- [x] **CV** : bouton « Télécharger mon CV » ajouté dans l'À propos
  - [ ] Vérifier que le PDF est à jour avec le nouveau positionnement (Angular / TypeScript / PHP / Java)
- [ ] **`<html lang="en">`** alors que le site est en français (`src/index.html`)
- [ ] **Mélange anglais / français** dans les libellés restants
- [ ] **Pages projet** : seulement les nouvelles couleurs et polices, mise en page encore en police code majuscules (à reprendre avant d'ajouter les captures)
- [ ] **Nettoyage** :
  - [ ] Feuille Devicon chargée dans `index.html` mais jamais utilisée
  - [ ] `ThemeService` jamais utilisé
  - [ ] Variables en double dans `styles.scss` (`--orange`, `--s1`, `--muted`… utilisées par la page projet)
  - [ ] Variables inutilisées dans `_variables.scss` (échelle de z-index, ombres…)
- [ ] **Avertissements de build** : styles des pages projets au-dessus du budget de 4 kB
- [ ] **`package-lock.json`** modifié avant cette session : vérifier si c'est voulu

## 6. Avant de publier

- [ ] Relire le site en local sur ordinateur et sur mobile
- [ ] Vérifier qu'aucune mention « à compléter » n'apparaît dans la version publiée (`npm run build:prod`)
- [ ] Commit, puis `npm run deploy`
