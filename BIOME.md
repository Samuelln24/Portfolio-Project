# Linter et formateur

**IMPORTANT** - Avant de commencer les instructions, et si vous travaillez avec le terminal de vscode, assurez-vous d'être d'abord dans le sous-dossier `portfolio` !

Rappel pour installer pnpm : `npm install -g pnpm`

Un **Linter** (en français = déboulocheur) analyse notre code et nous souligne en rouge tout ce qu'il n'aime pas. En fait tout ce qu'on lui a dit de ne pas aimer : on definit nous meme les regles du linter dans un fichier de config.
On peut écrire nos regles à la main, en accord avec l'équipe de dev, ou utiliser des régles pré-écrites.  
-> Un linter très connu et utilisé : [eslint](https://eslint.org/)

Un **formateur** sert à formater le code dès qu'on sauvegarde le fichier. Contrairement aux linters, les formateurs ne détectent pas des erreurs ou des bugs, mais se concentrent uniquement sur la mise en forme du code (les tabulations, les espaces, les quotes..)  
-> Un formateur très connu et utilisé : [prettier](https://prettier.io/)

Nous on va utiliser biome qui est un formateur + linter : [https://biomejs.dev/](https://biomejs.dev/) facile à configurer.

## Installation de biome

- Suppression d'eslint (qui est installé par Vite à l'init d'un projet React)
  - Aller dans le fichier package.json et rechercher eslint
  - Supprimer toutes les dépendences et le script de lint

- Installer biome : `pnpm add --save-dev --save-exact @biomejs/biome`

- Initaliser biome : `pnpm biome init`

- Modifier le fichier de config biome.json en ajoutant

```json
{
"formatter": {
    "enabled": true,
    "indentStyle": "space"
},
}
```

- Créer le fichier de config de vscode `.vscode/settings.json`

```json
{
"editor.formatOnSave": true,
"editor.defaultFormatter": "biomejs.biome"
}
```

- Installer l'extension VScode biome
