import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed your database here
  await prisma.task.createMany({
        data: [
      { title: 'Préparer la réunion', description: 'Slides + ordre du jour',completed: false, userId:2, createdAt: new Date("2022-01-09T10:00:00Z") },
      { title: 'Corriger le bug #42', description: 'Erreur 500 sur /login',completed: false , userId:3, createdAt: new Date("2024-01-10T10:00:00Z")},
      { title: 'Mettre à jour la doc', description: 'Ajout API tasks',completed: false , userId:2, createdAt: new Date("2012-01-11T10:00:00Z")},
    ],
  });
  // await prisma.user.createMany({
  //       data: [
  //     { email: 'Préparer la réunion', password: 'Slides + ordre du jour', createdAt: new Date("2022-01-09T10:00:00Z") },
  //     { email: 'Corriger le bug #42', password: 'Erreur 500 sur /login', createdAt: new Date("2024-01-10T10:00:00Z")},
  //     { email: 'Mettre à jour la doc', password: 'Ajout API tasks', createdAt: new Date("2012-01-11T10:00:00Z")},
  //   ],
  // });
  console.log('✅ Tasks seeded');
}   
    
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());