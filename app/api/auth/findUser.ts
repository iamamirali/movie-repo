import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';

export async function findUser(
  credentials?: Partial<Record<'username' | 'password', unknown>>
) {
  const user = await prisma.user.findUnique({
    where: {
      username: credentials?.username as string,
    },
  });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(
    credentials?.password as string,
    user.password
  );
  if (isMatch) {
    return user;
  } else {
    return null;
  }
}
