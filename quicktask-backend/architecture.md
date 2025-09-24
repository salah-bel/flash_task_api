quicktask-backend/
├─ src/
│  ├─ config/            # Configurations globales
│  ├─ controllers/       # Contrôleurs Express
│  ├─ services/          # Logique métier
│  ├─ routes/            # Routes Express
│  ├─ middlewares/       # Middlewares (auth, erreurs, etc.)
│  ├─ models/            # Interfaces/types TypeScript
│  ├─ errors/            # Classes d'erreurs personnalisées
│  ├─ utils/             # Helpers/validateurs
│  ├─ prisma/            # Client Prisma
│  └─ index.ts           # Entrée principale
├─ tests/                # Tests unitaires/intégration
├─ prisma/
│  └─ schema.prisma      # Schéma Prisma
├─ .env                  # Variables d'environnement
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ Dockerfile            # Pour le déploiement
