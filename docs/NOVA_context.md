# Contexte du Projet NOVA

Le projet **NOVA** est une initiative stratégique visant à harmoniser, moderniser et accélérer le développement des solutions numériques au sein des différentes **filiales et entités du groupe**. Dans un environnement où les projets techniques sont multiples, hétérogènes et souvent redondants, NOVA a pour vocation de devenir un **socle commun**, une **référence technique** et un **accélérateur de cohérence** à l’échelle du groupe.

## Vision

NOVA fournit une **base unifiée**, évolutive et documentée, permettant à chaque filiale de construire ses applications en s'appuyant sur un cadre solide, éprouvé et maintenu collectivement. Le projet s'articule autour d'une approche modulaire, pensée pour être adoptée progressivement et adaptée aux besoins locaux sans compromettre la cohérence globale.

## Périmètre Fonctionnel du Projet

NOVA repose sur **quatre piliers majeurs**, destinés à couvrir tout le cycle de conception, développement, maintenance et documentation d’un produit numérique.

### 1. Modèle de données commun
- Définition d’un **domaine métier partagé** sous forme déclarative (YAML/JSON).
- Cohérence structurelle et sémantique entre les services et applications.
- Génération automatique du code métier et des schémas de base de données dans plusieurs langages (TypeScript, C#, PHP).
- Mise en place d’un **schema-registry** centralisé avec versioning modulaire.

### 2. Design System unifié
- Un langage visuel unique, moderne et cohérent pour l’ensemble du groupe.
- Bibliothèque de composants UI standardisés et générés automatiquement à partir de maquettes Figma.
- Déclinaisons multi-framework (React, Storybook, Web Components).
- Documentation et guidelines UX/UI pour une meilleure qualité produit.

### 3. Infrastructure de référence
- Modèles d’architecture prêts à l’emploi (VM, containers, services managés).
- Standards pour les environnements cloud, CI/CD, observabilité, sécurité.
- Templates réutilisables permettant une mise en production rapide et conforme aux bonnes pratiques.
- Alignement sur une philosophie « infra-as-code » modulaire.

### 4. Littérature technique et Documentation
- Guides complets pour l’architecture, les bonnes pratiques, l’UX, la qualité logicielle et la sécurité.
- Documentation générée automatiquement depuis les définitions du domaine, des composants et des interfaces.
- Portail central regroupant documentation, guides d’onboarding, changelogs et best practices.

## Enjeux et Objectifs

### Uniformiser les pratiques entre les filiales  
Éviter les divergences techniques inutiles et réduire la fragmentation des architectures, des modèles de données et des interfaces.

### Accélérer les nouveaux projets  
Offrir un environnement prêt à l’emploi permettant de démarrer un produit en quelques heures plutôt qu’en plusieurs semaines.

### Garantir la cohérence métier  
Faire du modèle de données une **source de vérité unique**, versionnée et gouvernée collectivement.

### Améliorer la qualité produit  
Homogénéiser l’expérience utilisateur, sécuriser les implémentations et renforcer la maintenabilité des solutions.

### Optimiser les ressources  
Réduire les coûts de développement, de maintenance et de formation grâce à une base technique commune.

## Gouvernance et Contribution

NOVA s’appuie sur une **Core Team** transverse garantissant :
- la cohérence du modèle de données,
- l’évolution du design system,
- la maintenance du générateur et des outils,
- le respect des bonnes pratiques infra.

Les filiales peuvent proposer des évolutions via un processus de contribution formalisé (Pull Request, RFC, review technique et métier). Chaque module évolue selon un **versioning indépendant**, permettant une adoption progressive.

## Ambition à Long Terme

NOVA deviendra :
- **le standard technique du groupe**,  
- **un accélérateur d’innovation**,  
- **un référentiel métier et UX**,  
- **un socle commun pour toutes les futures plateformes**.

Cette initiative vise à moderniser les pratiques internes, renforcer la cohérence et améliorer la capacité d’évolution des produits du groupe.
