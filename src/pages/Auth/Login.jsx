import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const { login, signInWithGoogle } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handlelogin = (data) => {
    console.log(data)
    login(data.email, data.password)
      .then((result) => {
        console.log(result.user)
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user)
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffe9ec,#e8f3ff,#f4fff0,#fff6e5)] backdrop-blur-xl bg-opacity-60 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white/50 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden flex">
        <div className="w-1/2 hidden md:flex items-center justify-center p-8">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200"
            alt="Login"
            className="w-56 rounded-2xl opacity-90"
          />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(handlelogin)} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your email"
                {...register('email', { required: true })}
              />
              {errors.email?.type === 'required' && (
                <p className="text-red-500" role="alert">
                  Email is required
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your password"
                {...register('password', { required: true })}
              />
              {errors.password?.type === 'required' && (
                <p className="text-red-500" role="alert">
                  Password is required
                </p>
              )}
            </div>

            <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition">
              Login
            </button>

            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full py-2 bg-white border border-gray-300 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>

            <p className="text-center text-gray-600 text-sm mt-2">
              Don't have an account?{' '}
              <Link state={location.state} to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
