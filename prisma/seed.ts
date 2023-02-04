import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.createMany({
    data: [
      {
        title: "Do some cool stuff",
        description: "This is cool",
      },
      {
        title: "Task 1",
        description: "Description for Task 1",
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
      },
      {
        title: "Task 3",
        description: "Description for Task 3",
      },
      {
        title: "Task 4",
        description: "Description for Task 4",
      },
    ],
  });
  console.log(" Database seed complete ✅✅");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
