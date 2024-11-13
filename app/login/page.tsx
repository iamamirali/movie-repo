'use client';

import { getImageProps } from 'next/image';
import Link from 'next/link';
import { signInUser } from '../actions/auth';
import { Button, Input } from '../components';

const {
  props: { srcSet: desktop },
} = getImageProps({
  width: 1069,
  height: 691,
  src: '/asset/images/login/tape-desktop.jpg',
  alt: 'tape',
});

const {
  props: { srcSet: mobile, ...rest },
} = getImageProps({
  width: 400,
  height: 150,
  placeholder: 'blur',
  blurDataURL: '/asset/images/login/tape-placeholder.jpg',
  src: '/asset/images/login/tape-mobile.jpg',
  alt: 'tape',
});

export default function Login(): JSX.Element {
  return (
    <div className="w-full p-6 flex flex-col justify-center lg:flex-row-reverse lg:justify-between lg:h-full">
      <picture className="lg:w-2/5">
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source media="(max-width: 639px)" srcSet={mobile} />
        <img
          alt="tape"
          {...rest}
          className="rounded-xl w-full lg:rounded-2xl lg:object-cover lg:h-full lg:min-h-[600px]"
        />
      </picture>

      <div className="lg:w-3/5 lg:flex lg:items-center lg:justify-center lg:flex-col">
        <form className="flex flex-col gap-8 py-8 lg:w-1/2" action={signInUser}>
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
        <div className="text-sm lg:w-1/2">
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
  );
}
