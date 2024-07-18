import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const snippet = await prisma.snippet.create({
    data: {
      title: "Hello World",
      code: "console.log('Hello World')",
    },
  });

  console.log(snippet); //{ id: 1, title: 'Hello World', code: "console.log('Hello World')" }
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => await prisma.$disconnect());
