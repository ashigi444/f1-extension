# 🏎️ F1 Live Standings

Extension Chrome pour suivre le classement de la Formule 1 en temps réel.

lien : https://chromewebstore.google.com/detail/f1-live-standings/onpncnkpcmfokopeiepicgmkkafoeeee?hl=fr

![Version](https://img.shields.io/badge/version-1.0-red)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Fonctionnalités

- 📊 **Classement pilotes** en temps réel
- 🏁 **Classement constructeurs** avec photos des voitures
- 🗓️ **Prochain Grand Prix** avec tracé du circuit
- 🔔 **Notifications** automatiques après chaque course
- 🎨 **Design moderne** inspiré de l'identité visuelle F1
- 🌍 **Drapeaux nationaux** pour chaque pilote
- 📸 **Photos officielles** des pilotes et équipes

## 🚀 Installation

### Depuis Chrome Web Store

https://chromewebstore.google.com/detail/f1-live-standings/onpncnkpcmfokopeiepicgmkkafoeeee?hl=fr

### Installation manuelle (développeurs)

1. Clone ce repository :
```bash
git clone https://github.com/ashigi444/f1-extension.git
```

2. Ouvre Chrome et va dans `chrome://extensions/`

3. Active le "Mode développeur" (en haut à droite)

4. Clique sur "Charger l'extension non empaquetée"

5. Sélectionne le dossier du projet

## 💻 Utilisation

1. Clique sur l'icône F1 dans la barre d'outils Chrome
2. Le panneau s'ouvre automatiquement avec :
   - Le prochain Grand Prix
   - Le classement des pilotes
   - Le classement des constructeurs
3. Clique sur un pilote pour voir plus de détails
4. Clique sur une équipe pour voir ses pilotes

## 🛠️ Technologies utilisées

- **Manifest V3** (dernière version Chrome Extensions)
- **API Ergast F1** via Jolpi.ca
- **Vanilla JavaScript** (pas de framework)
- **CSS3** avec animations
- **Chrome Storage API** pour les notifications

### API utilisée
L'extension utilise l'API Ergast F1 (miroir Jolpi) :
```javascript
https://api.jolpi.ca/ergast/f1/current/driverStandings.json
https://api.jolpi.ca/ergast/f1/current/constructorStandings.json
https://api.jolpi.ca/ergast/f1/current/next.json
```

### Modifications

Pour modifier l'extension :
1. Édite les fichiers sources
2. Va dans `chrome://extensions/`
3. Clique sur le bouton de rechargement 🔄

## 📝 To-Do / Améliorations futures

- [ ] Mode sombre/clair
- [ ] Historique des courses
- [ ] Statistiques détaillées par pilote
- [ ] Support multilingue (EN, ES, IT, DE)
- [ ] Widget pour nouvelle page d'onglet
- [ ] Comparaison de pilotes
- [ ] Notifications personnalisables

## 🐛 Bugs connus

- Doohan exclu temporairement (remplacé en 2025)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésite pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit tes changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**ashigi444 <3*
- GitHub: [@ashigi444](https://github.com/ashigi444)

## 🙏 Remerciements

- [Ergast API](http://ergast.com/mrd/) pour les données F1
- [Jolpi](https://api.jolpi.ca/) pour le miroir HTTPS
- [Formula1.com](https://www.formula1.com) pour les assets officiels
- La communauté F1 ! 🏁

---

⭐ **Si cette extension t'a plu, n'oublie pas de laisser une étoile !**
