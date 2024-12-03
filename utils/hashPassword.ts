import bcrypt from 'bcryptjs';

export async function hashPassword(pass: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(pass, saltRounds);
  return hashedPassword;
}
