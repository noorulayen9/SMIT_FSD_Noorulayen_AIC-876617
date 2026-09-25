import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-[#D4CBC0] p-4 md:p-8">

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* LEFT SIDE - LOGIN */}
        <div className="flex w-full items-center justify-center bg-white px-8 py-16 md:w-1/2">

          <div className="w-full max-w-md">

            <Link
              to="/"
              className="text-sm font-bold tracking-[0.2em] text-[#B22222]"
            >
              SYNPOLISH
            </Link>

            <h1 className="mt-8 text-4xl font-black text-[#B22222] md:text-5xl">
              Welcome back!
            </h1>

            <p className="mt-3 text-gray-500">
              Login to continue to your account.
            </p>

            <form className="mt-10 space-y-6">

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Email address
                </label>

                <input
                  type="email"
                  className="w-full border-b-2 border-gray-200 bg-transparent px-1 py-3 outline-none transition focus:border-[#B22222]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Password
                </label>

                <input
                  type="password"
                  className="w-full border-b-2 border-gray-200 bg-transparent px-1 py-3 outline-none transition focus:border-[#B22222]"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#B22222] py-3.5 font-bold text-white shadow-lg transition hover:bg-[#8f1b1b]"
              >
                SIGN IN
              </button>

            </form>

            <div className="mt-5 text-center">
              <button className="text-sm font-medium text-[#B22222] hover:underline">
                Forgot your password?
              </button>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-[#B22222] to-[#211f1d] px-10 text-center md:flex">

          <div className="max-w-md text-white">

            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4CBC0] text-3xl font-black text-[#B22222]">
              S
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Don't have an account?
            </h2>

            <p className="mt-5 text-lg text-white/75">
              Start your journey with SYNPOLISH today.
            </p>

            <Link
              to="/register"
              className="mt-8 inline-block rounded-full border-2 border-white px-10 py-3 font-bold text-white transition hover:bg-white hover:text-[#B22222]"
            >
              SIGN UP
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
