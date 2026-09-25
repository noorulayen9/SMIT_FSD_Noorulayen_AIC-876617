import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-[#D4CBC0] p-4 md:p-8">

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* LEFT */}
        <div className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-[#211f1d] to-[#B22222] px-10 text-center text-white md:flex">

          <div className="max-w-md">

            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4CBC0] text-3xl font-black text-[#B22222]">
              S
            </div>

            <h2 className="text-4xl font-black">
              Already have an account?
            </h2>

            <p className="mt-5 text-lg text-white/75">
              Welcome back. Login to continue your journey.
            </p>

            <Link
              to="/login"
              className="mt-8 inline-block rounded-full border-2 border-white px-10 py-3 font-bold hover:bg-white hover:text-[#B22222]"
            >
              SIGN IN
            </Link>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex w-full items-center justify-center px-8 py-12 md:w-1/2">

          <div className="w-full max-w-md">

            <Link
              to="/"
              className="text-sm font-bold tracking-[0.2em] text-[#B22222]"
            >
              SYNPOLISH
            </Link>

            <h1 className="mt-7 text-4xl font-black text-[#B22222]">
              Create account
            </h1>

            <p className="mt-3 text-gray-500">
              Start your journey with SYNPOLISH.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border-b-2 border-gray-200 px-1 py-3 outline-none focus:border-[#B22222]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border-b-2 border-gray-200 px-1 py-3 outline-none focus:border-[#B22222]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full border-b-2 border-gray-200 px-1 py-3 outline-none focus:border-[#B22222]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full border-b-2 border-gray-200 px-1 py-3 outline-none focus:border-[#B22222]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#B22222] py-3.5 font-bold text-white hover:bg-[#8f1b1b]"
              >
                CREATE ACCOUNT
              </button>

            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already registered?{" "}
              <Link
                to="/login"
                className="font-bold text-[#B22222]"
              >
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;
