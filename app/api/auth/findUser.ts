import { prisma } from "@/lib/db";

export async function findUser(
  credentials?: Partial<Record<"username" | "password", unknown>>
) {
  const user = await prisma.user.findFirst({
    where: {
      username: credentials?.username as string,
      password: credentials?.password as string,
    },
  });
  return user;
}

findUser()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
