import type { Messages } from '../types'

const fr: Messages = {
  "meta": {
    "title": "VistaCast — Surveillance du cloud par caméra AI basée sur un plugin",
    "description": "Vision de l'industrie sur les caméras que vous possédez déjà. Plugins de scène pour les magasins, les entrepôts et les soins. Optique de ligne pour les pièces manquantes et la soudure. RTSP / ONVIF entrée, WebRTC aperçu sortie.",
    "ogTitle": "VistaCast",
    "ogDescription": "Une vision unique pour les magasins, les entrepôts et les lignes de production. Connectez les caméras que vous possédez déjà ; modules personnalisés pour les nouveaux sites."
  },
  "brand": {
    "subtitle": "视界云遥"
  },
  "nav": {
    "architecture": "Ce que ça fait",
    "plugins": "Où ça aide",
    "techstack": "Reste en local",
    "roadmap": "Écosystème",
    "download": "Télécharger",
    "login": "Se connecter",
    "github": "GitHub",
    "docs": "Documents"
  },
  "header": {
    "drawerTitle": "VistaCast"
  },
  "hero": {
    "badge": "Magasins · Entrepôts · Lignes",
    "title": "Intelligence de scène · Optique de ligne",
    "titleGradient": "Une plateforme de vision pour vos caméras",
    "tagline": "Magasins, entrepôts et lignes de production. Un logiciel.",
    "description": "Les caméras déjà sur place se connectent via RTSP / ONVIF. Les nouveaux postes peuvent utiliser un module de caméra professionnel personnalisé. La vue en direct est WebRTC.",
    "ctaPrimary": "Parler à travers une scène",
    "ctaSecondary": "Documents",
    "archCanvas": "De la caméra à la personne qui a besoin de savoir",
    "input": "Connecter",
    "coreEngine": "Comprendre",
    "pluginPipeline": "Vous obtenez",
    "inputSource": "Vos caméras",
    "coreTitle": "VistaCast",
    "coreNote": "Lit l'image et en parle à la bonne personne"
  },
  "plugins": {
    "kicker": "Plugin",
    "retail": {
      "name": "Vente au détail",
      "status": "Passage · heures"
    },
    "warehouse": {
      "name": "Entrepôt",
      "status": "Nuit · périmètre"
    },
    "industrial": {
      "name": "Sécurité industrielle",
      "status": "Zone dangereuse"
    },
    "aoi": {
      "name": "Optique de ligne",
      "status": "Soudure · manquante"
    },
    "legendDeployed": "Magasins, entrepôts, lignes et usines. Un logiciel.",
    "legendPlanned": "Livré par scène",
    "legendLatency": "WebRTC aperçu en direct"
  },
  "strategy": {
    "title": "Ce qui change une fois allumé",
    "subtitle": "Le gérant du magasin voit la fréquentation d’aujourd’hui. Une entrée de nuit dans l'entrepôt parvient à la personne de garde. La station de ligne détecte les pièces manquantes et les problèmes de soudure. L'usine, la maison et la cour sont aménagées pour votre étage.",
    "tabRetail": "Vente au détail",
    "tabWarehouse": "Entrepôt",
    "tabIndustrial": "Sécurité industrielle",
    "coreCapabilities": "Vous obtenez",
    "businessGoal": "Ce que cela signifie pour vous",
    "scenarios": [
      {
        "tab": "Vente au détail",
        "lead": "Le manager n'a pas besoin de rembobiner l'enregistrement pour compter les têtes. Ils peuvent voir combien de personnes sont entrées, quelles heures ont été les plus chargées et où les gens se sont rassemblés. Occupé et calme restent séparés, et le changement va au chat que vous utilisez déjà, donc le personnel et les stocks suivent la journée.",
        "tag": "Magasin",
        "scene": "Salons de thé, QSR et chaînes de magasins",
        "capabilities": [
          "Fréquentation à l'entrée",
          "Comparaison des périodes",
          "Zones chaudes et séjour",
          "Alertes sur les outils que vous utilisez déjà"
        ],
        "goal": "Les gestionnaires voient l'évolution du trafic, au lieu de se contenter de relire la vidéo."
      },
      {
        "tab": "Entrepôt",
        "lead": "Personne n’est obligé de regarder l’écran toute la nuit. Si quelqu'un entre dans l'entrepôt, une allée ou une zone fermée, la personne de service reçoit une notification dans le groupe et peut voir de quelle caméra il s'agit. Les heures suivent le changement : les mouvements diurnes restent silencieux et l'alerte retentit quand il le faut.",
        "tag": "Entrepôt",
        "scene": "Entrepôts et surveillance de nuit",
        "capabilities": [
          "Zones réglementées en dehors des heures d'ouverture",
          "Alertes d'allée et de périmètre",
          "Horaires basés sur les équipes",
          "Alertes dans le canal de service"
        ],
        "goal": "Quand quelqu'un entre la nuit, la personne de service le sait immédiatement."
      },
      {
        "tab": "Optique de ligne",
        "lead": "Les pièces manquantes, les mauvaises pièces, les décalages et les problèmes de soudure apparaissent à la station lorsqu'ils se produisent, avant que l'ensemble du lot ne doive être retravaillé. Les ponts, les vides, les joints froids, les codes-barres et les étiquettes se trouvent dans le même logiciel. L'inspection reste sur la ligne que vous utilisez déjà.",
        "tag": "Doubler",
        "scene": "PCB, assemblage, étiquettes et chemins de perles",
        "capabilities": [
          "Pièces manquantes, erronées et décalées",
          "Soudure : pont, vide et joint froid",
          "Présence de code-barres et d’étiquettes",
          "Fonctionne sur un PC de station normal"
        ],
        "goal": "L'inspection optique reste sur la station que vous possédez déjà."
      },
      {
        "tab": "Sécurité industrielle",
        "lead": "Si quelqu'un entre dans une zone que vous avez dessinée, ou si l'image montre une chute ou de la fumée, les personnes qui ont besoin de le savoir en sont informées immédiatement. Vous dessinez vous-même la zone et l'avis est envoyé dans le système que vous utilisez déjà. On n'attend pas la fin du quart de travail pour le retrouver dans un enregistrement.",
        "tag": "Usine",
        "scene": "Zones dangereuses et ateliers",
        "capabilities": [
          "Personne dans une zone dangereuse",
          "Alertes de chute et de fumée",
          "Régions dessinées sur le cadre",
          "Alertes dans les systèmes existants"
        ],
        "goal": "Une personne se trouvant dans la zone dangereuse déclenche une alerte maintenant, et non lors d'un enregistrement ultérieur."
      },
      {
        "tab": "Soins à domicile",
        "lead": "Une chute à la maison ou un mouvement nocturne qui ne devrait pas se produire est transmis à la famille dans l'ordre que vous avez défini. Vous choisissez qui entend en premier et qui entend si la première personne ne répond pas. Une personne décide de la prochaine étape. Le logiciel n'appelle pas les services d'urgence à votre place.",
        "tag": "Soins",
        "scene": "Sécurité à domicile et soins aux personnes âgées",
        "capabilities": [
          "Alertes d'automne",
          "Activité nocturne insolite",
          "Prévenir la famille afin",
          "Une personne décide de la prochaine étape"
        ],
        "goal": "Lorsque quelque chose arrive à la maison, une personne est avertie et choisit quoi faire."
      },
      {
        "tab": "Périmètre du chantier",
        "lead": "Si quelqu'un traverse le périmètre de la cour ou si une caméra tombe hors ligne, la personne de service sait où cela s'est produit. L'avis emprunte le même chemin que l'entrepôt et va directement à celui qui veille. On ne garde pas un deuxième système juste pour la clôture.",
        "tag": "Périmètre",
        "scene": "Périmètre du site et caméra hors ligne",
        "capabilities": [
          "Alertes d'entrée de périmètre",
          "Alertes hors ligne de la caméra",
          "Mêmes alertes que le pack entrepôt",
          "Dans le flux de travail de service"
        ],
        "goal": "Un périmètre franchi et une caméra morte deviennent tous deux des événements que quelqu'un peut gérer."
      }
    ]
  },
  "techstack": {
    "title": "Il fonctionne dans votre propre immeuble",
    "subtitle": "Les photos et les enregistrements restent sur place. Les alertes sont envoyées aux outils que votre équipe utilise déjà.",
    "items": [
      {
        "title": "Passerelle de streaming principale",
        "description": "L'ingestion et la redirection WebRTC restent sur le réseau du site. Il n’est pas nécessaire que l’aperçu soit d’abord installé dans un cloud public."
      },
      {
        "title": "Cœur de métier de l'entreprise",
        "description": "Aligné sur les langages frontend. Effacez les modules pour que les modifications de l'IA restent locales. Aucune garantie de compréhension rapide."
      },
      {
        "title": "Base de données fiable",
        "description": "Modèle relationnel standard pour les événements spatiaux structurés. Migration et mise à l'échelle faciles. Extension de série chronologique TimescaleDB prise en charge."
      },
      {
        "title": "Image en direct",
        "description": "L'aperçu préfère une connexion directe WebRTC et peut revenir aux trames lorsque le réseau en a besoin."
      }
    ],
    "deployLabel": "Déploiement local en un clic",
    "tagSetup": "30 minutes de configuration",
    "tagSovereignty": "Les données restent sur site",
    "tagLicense": "Licence non commerciale Polyform"
  },
  "features": {
    "title": "Plus qu'un enregistreur",
    "subtitle": "Quand quelque chose doit être vu, la bonne personne en entend alors parler.",
    "items": [
      {
        "title": "Comment les caméras se connectent",
        "description": "Les caméras déjà installées se connectent via RTSP / ONVIF. Les nouveaux postes peuvent utiliser un module de caméra professionnel personnalisé."
      },
      {
        "title": "Moteur de règles ouvert",
        "description": "Dessinez des formes de retour sur investissement arbitraires et composez des déclencheurs de temps + d'espace + d'action de manière flexible."
      },
      {
        "title": "Modèles d'IA enfichables",
        "description": "Noyau découplé des algorithmes. Hot-swap YOLO, RT-DETR et plus encore — pas de dépendance vis-à-vis d'un fournisseur."
      },
      {
        "title": "Déploiement Docker one-liner",
        "description": "Démarrez localement un centre de calcul vidéo IA complet en 30 minutes. Souveraineté des données garantie."
      },
      {
        "title": "Confidentialité dès la conception",
        "description": "Bord flou du visage, surveillance des employés désactivée par défaut. Position de confidentialité prête pour le RGPD."
      },
      {
        "title": "Résultats de l’écosystème ouvert",
        "description": "Webhook et MQTT intégrés — intégrez Feishu, DingTalk ou des passerelles industrielles en quelques secondes."
      }
    ]
  },
  "ecosystem": {
    "title": "Après avoir vu quelque chose, qui d'autre peut l'aider",
    "subtitle": "Rapports, équipement ou personne devant effectuer une surveillance à distance. VistaCast transforme l'image en un avis et un enregistrement.",
    "youAreHere": "Vous êtes ici",
    "synergyTitle": "Synergies techniques",
    "products": [
      {
        "subtitle": "Orchestration visuelle",
        "role": "Orchestrer"
      },
      {
        "subtitle": "Ingestion de l'IoT",
        "role": "Ingérer"
      },
      {
        "subtitle": "Analyse BI",
        "role": "Analyser"
      },
      {
        "subtitle": "Vision de l'IA",
        "role": "Percevoir"
      },
      {
        "subtitle": "Intervention à distance",
        "role": "Intervenir"
      },
      {
        "subtitle": "Réseau de valeur",
        "role": "Valeur"
      }
    ],
    "synergies": [
      {
        "desc": "Données structurées des flux VistaCast à DataLuminary pour les tableaux de bord spatiaux générés automatiquement."
      },
      {
        "desc": "Les alertes à haut risque déclenchent SyncroBrain pour actionner le matériel physique – automatisation du logiciel au monde."
      },
      {
        "desc": "Réveil VistaRemote en un clic pour une confirmation humaine et un contrôle en temps réel pour boucler la boucle."
      }
    ],
    "baseNote": "Construit sur un écosystème TypeScript/NestJS unifié : six produits partagent des types, des conventions de modules et des normes de déploiement."
  },
  "comparison": {
    "title": "On regarde le sol. On laisse une personne intervenir.",
    "subtitle": "VistaCast regarde les caméras. VistaRemote permet à une personne de le manipuler à distance.",
    "columnDimension": "Dimension",
    "columnVistacast": "VistaCast",
    "columnVistaremote": "VistaRemote",
    "rows": [
      {
        "dimension": "Support physique",
        "vistacast": "Caméras de sécurité fixes (ONVIF / RTSP)",
        "vistaremote": "Mobile/ordinateur de bureau/robots (WebRTC)"
      },
      {
        "dimension": "Valeur fondamentale",
        "vistacast": "Perception de l'IA, données spatiales structurées, alertes automatiques",
        "vistaremote": "Intervention humaine à distance, contrôle bidirectionnel, enregistrement d'audit"
      },
      {
        "dimension": "Logique de synergie",
        "vistacast": "Détecter les anomalies spatiales, émettre des signaux (source d'automatisation)",
        "vistaremote": "Réception des signaux, prise de contrôle à distance (exécution et fermeture)"
      }
    ],
    "synergyTitle": "Scénario de synergie typique :",
    "synergyBody": "VistaCast détecte un intrus la nuit dans l'entrepôt → alerte à Feishu → le personnel de service se réveille VistaRemote → communication et enregistrement par haut-parleur bidirectionnel. Ensemble : perception automatisée + intervention humaine."
  },
  "cta": {
    "badge": "Commencez par votre sol",
    "title": "Que doivent regarder vos caméras",
    "description": "Un magasin, un entrepôt, une ligne ou une maison. Les caméras que vous possédez déjà peuvent se connecter. Les nouveaux postes peuvent utiliser un module professionnel.",
    "perks": [
      "Connectez les caméras dont vous disposez",
      "Voir la photo telle qu'elle se produit",
      "Installé pour votre sol",
      "Les données restent avec vous"
    ],
    "primary": "Parler à travers une scène",
    "secondary": "Étoile sur GitHub",
    "finePrint": "Parlez d'abord dans l'étage · les données restent sur place · pas besoin de remplacer les caméras dont vous disposez"
  },
  "footer": {
    "docs": "Documents",
    "github": "GitHub",
    "ecosystem": "LuminaryWorks Écosystème",
    "privacy": "Confidentialité et conformité",
    "copyright": "Alimenté par LuminaryWorks",
    "privacyNote": "La technologie pour le bien : surveillance du comportement des employés désactivée par défaut. La confidentialité est notre position par défaut, pas une fonctionnalité."
  },
  "download": {
    "metaTitle": "Télécharger VistaCast",
    "metaDescription": "Téléchargez le poste magasin VistaCast (Windows / macOS) et l’APK compagnon Android. Les installeurs pointent toujours vers la dernière version.",
    "ogAlt": "Télécharger VistaCast",
    "title": "Télécharger VistaCast",
    "latest": "Dernière {{version}} :",
    "lead": "Poste magasin pour Windows et macOS, plus un APK Android en sideload (facultatif). Les boutons pointent toujours vers le dernier installeur.",
    "hostedBefore": "Les installeurs sont hébergés dans le dépôt public",
    "hostedAfter": " (le dépôt des sources reste privé).",
    "unsigned": "Les installeurs ne sont ni signés ni notariés. Sous Windows SmartScreen, choisissez « Exécuter quand même ». Sous macOS, clic droit sur l’app puis Ouvrir. Android exige d’autoriser les sources inconnues.",
    "workstation": "Poste magasin",
    "workstationBody": "Application Electron : shell local Detect / Admin. Admin et client-infer doivent être joignables sur cette machine ou le réseau local.",
    "winSetup": "Installeur Windows (NSIS)",
    "winPortable": "Windows portable",
    "macDmg": "DMG macOS",
    "android": "Compagnon Android",
    "androidBody": "APK en sideload (pas sur le Play Store). Si cette version n’a pas encore d’APK, utilisez Expo Go ou attendez un build ultérieur.",
    "apk": "Télécharger l’APK",
    "backHome": "← Retour à l’accueil",
    "deviceDocs": "Documentation d’accès des appareils"
  }
}

export default fr
