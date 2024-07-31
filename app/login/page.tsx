import Image from "next/image";
import Link from "next/link";

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
      <form className="flex flex-col gap-8 py-8">
        <div className="w-full">
          <h1 className="text-xl font-bold">Welcome to Movie Repo</h1>
          <h2 className="text-sm mt-4 font-medium text-neutral-50">
            Enter your details in order to sign in
          </h2>
        </div>
        <div>
          <label htmlFor="username" className="text-sm">
            Username
            <br />
            <input
              id="username"
              type="text"
              placeholder="test"
              className="text-base mt-4 mb-6 w-full h-12 rounded-xl p-3 text-neutral-0 bg-neutral-400 focus:outline-none border-solid border border-neutral-400 transition hover:border-neutral-50 focus:border-yellow-400 placeholder:text-neutral-100"
            />
          </label>
          <label htmlFor="password" className="text-sm">
            Password
            <br />
            <input
              id="password"
              type="text"
              placeholder="test"
              className="text-base mt-4 w-full h-12 rounded-xl p-3 text-neutral-0 bg-neutral-400 focus:outline-none border-solid border border-neutral-400 transition hover:border-neutral-50 focus:border-yellow-400 placeholder:text-neutral-100"
            />
          </label>
        </div>
        <button
          type="submit"
          className="rounded-xl h-12 p-3 text-base text-neutral-900 font-semibold w-full bg-yellow-400 transition hover:bg-yellow-200 active:bg-yellow-50"
        >
          Sign In
        </button>
      </form>
      <div className="text-base">
        Don’t have an account?{" "}
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
