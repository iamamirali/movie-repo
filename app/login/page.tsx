'use client';

import Link from 'next/link';
import { signInUser } from '../actions/auth';
import { Button, Input } from '../components';
import { AuthPageImage } from '../components/layout';

export default function Login(): JSX.Element {
  return (
    <main className="bg-neutral-700 w-full h-full flex flex-col overflow-auto">
      <div className="w-full p-6 flex flex-col justify-center lg:flex-row-reverse lg:justify-between lg:h-full">
        <AuthPageImage authType="login" />

        <div className="lg:min-h-[600px] lg:w-3/5 lg:flex lg:items-center lg:justify-center lg:flex-col">
          <form
            className="flex flex-col gap-8 py-8 lg:w-2/3 xl:w-1/2"
            action={signInUser}
          >
            <div className="w-full">
              <h1 className="text-xl font-bold sm:text-2xl">
                Welcome to Movie Repo
              </h1>
              <h2 className="text-sm mt-4 font-medium text-neutral-50 sm:text-base">
                Enter your details in order to sign in
              </h2>
            </div>
            <div>
              <Input
                label="Username"
                name="username"
                className="mb-6"
                labelClassName="sm:!text-base"
              />
              <Input
                label="Password"
                name="password"
                labelClassName="sm:!text-base"
              />
            </div>
            <Button
              title="Sign In"
              type="submit"
              className="rounded-xl !h-12 !p-3 !text-base text-neutral-900 w-full bg-yellow-400 hover:bg-yellow-200 active:bg-yellow-50"
            />
          </form>
          <div className="text-sm lg:w-2/3 xl:w-1/2 sm:text-base sm:font-medium">
            Don`t have an account?{' '}
            <Link
              href="/"
              className="text-yellow-400 transition hover:text-yellow-200 active:text-yellow-50"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
