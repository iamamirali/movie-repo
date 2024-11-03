'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signInUser } from '../actions/auth';
import { Button, Input } from '../components';

export default function Login(): JSX.Element {
  return (
    <div className="w-full p-6 flex flex-col justify-center">
      <Image
        src="/asset/images/login/tape-small.svg"
        alt="tape"
        width={0}
        height={0}
        className="rounded-xl w-full h-32 object-cover"
      />
      <form className="flex flex-col gap-8 py-8" action={signInUser}>
        <div className="w-full">
          <h1 className="text-xl font-bold">Welcome to Movie Repo</h1>
          <h2 className="text-sm mt-4 font-medium text-neutral-50">
            Enter your details in order to sign in
          </h2>
        </div>
        <div>
          <Input label="Username" name="username" className="mb-6" />
          <Input label="Password" name="password" />
        </div>
        <Button
          title="Sign In"
          type="submit"
          className="rounded-xl !h-12 !p-3 !text-base text-neutral-900 w-full bg-yellow-400 hover:bg-yellow-200 active:bg-yellow-50"
        />
      </form>
      <div className="text-sm">
        Don`t have an account?{' '}
        <Link
          href="/"
          className="text-yellow-400 transition hover:text-yellow-200 active:text-yellow-50"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
