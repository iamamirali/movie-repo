'use server';

import { signIn } from '@/auth';

export const logInUser = async (formData: FormData) => {
  await signIn('credentials', {
    username: formData.get('username'),
    password: formData.get('password'),
    redirect: true,
    redirectTo: '/',
  });
};
