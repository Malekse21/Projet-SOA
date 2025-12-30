# 🌐 Projet SOA : Gestion des Etudiants

Bienvenue sur le dépôt de notre projet SOA !
Ce projet a été réalisé dans le cadre du module **SOA (Service Oriented Architecture)**. L'objectif était de créer une interface web capable de dialoguer avec notre backend Java (JAX-RS) développé précédemment.

## 💡 À propos du projet
L'idée est simple : offrir une interface graphique pour gérer une base de données de personnes (CRUD).

Le défi principal était de respecter une séparation stricte **Client / Serveur** :
*   Le Frontend ne touche jamais à la base de données.
*   Il communique exclusivement avec le serveur Tomcat via des échanges **HTTP** et des données au format **JSON**.

## 🛠 La Stack Technique
Pour rester léger et performant sans dépendances complexes, nous avons choisi :
*   **HTML5** : Pour la structure.
*   **Bootstrap 5** : Pour avoir un design propre, responsive et des composants modernes (modales, alertes) sans réinventer la roue.
*   **JavaScript (Vanilla)** : Toute la logique est gérée en JS pur.
*   **Fetch API** : Pour gérer les appels asynchrones (GET, POST, PUT, DELETE) vers l'API.

## ✨ Fonctionnalités
L'application couvre toutes les fonctionnalités demandées :
*   📋 **Lister** : Affiche le tableau des personnes dès le chargement.
*   ➕ **Ajouter** : Un formulaire avec validation pour créer une nouvelle entrée.
*   ✏️ **Modifier** : On clique, les champs se pré-remplissent, et on met à jour.
*   🗑️ **Supprimer** : Avec une alerte de confirmation pour éviter les erreurs.
*   🔍 **Rechercher** : Une barre de recherche intelligente qui détecte si vous tapez un Nom ou un ID.

## 🚀 Comment lancer le projet ?

### Prérequis
Assurez-vous que votre Backend (le projet JAX-RS sur Eclipse) tourne bien sur **Tomcat (port 8082)**.
*   *URL de l'API attendue :* `localhost:8082/projetSOA/api/persons`

### Installation rapide
Pour éviter les blocages de sécurité des navigateurs (erreurs CORS), je recommande de lancer le frontend directement depuis le serveur :

1.  Clonez ce dépôt :
    ```bash
    git clone https://github.com/Malekse21/Projet-SOA.git
    ```
2.  Prenez les fichiers `index.html` et `app.js`.
3.  Collez-les dans le dossier `src/main/webapp` de votre projet Backend sur Eclipse.
4.  Lancez (ou redémarrez) le serveur Tomcat.
5.  Ouvrez votre navigateur sur :
    👉 `localhost:8082/projetSOA/`

## 🎥 Démo Vidéo
J'ai enregistré une courte vidéo pour montrer le code et tester toutes les fonctionnalités en direct :
 **[Lien](https://drive.google.com/file/d/1zWF8_mp6au_Zt6ZRFpMY-cJxPpIVdfSG/view?usp=sharing)**

---
**Réalisé par :**
*   Sandra Abbes | TP6
*   Malek Setti | TP8
