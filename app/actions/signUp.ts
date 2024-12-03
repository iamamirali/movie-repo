'use server';

import { prisma } from '@/lib/db';
import { TUser } from '@/types/user';
import { signIn } from '@/lib/auth';
import { hashPassword } from '@/utils';

export const signUpUser = async (formData: FormData) => {
  const name = (formData.get('name') as string) ?? 'User';
  const username = (formData.get('username') as string) ?? '';
  const password = (formData.get('password') as string) ?? '';

  const user: TUser = await prisma.user.create({
    data: {
      name,
      username,
      password: await hashPassword(password),
    },
  });
  if (user) {
    await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: true,
      redirectTo: '/',
    });
  }
};
