import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { Link, useLocation, useNavigate } from 'react-router'
import axios from 'axios'

function Register() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const { registerUser, signInWithGoogle, updateUserProfile } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleRegistration = (data) => {
    console.log(data)
    const profileImg = data.photo[0]
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user)
        const formData = new FormData()
        formData.append('image', profileImg)
        const imgURLAPI = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`
        axios.post(imgURLAPI, formData).then((res) => {
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          }
          updateUserProfile(userProfile)
            .then(() => {
              console.log('user profile updated')
              navigate(location?.state || '/')
            })
            .catch((error) => {
              console.log(error)
            })
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleGoogleRegistration = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user)
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
            alt="Register"
            className="w-56 rounded-2xl opacity-90"
          />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Create Account
          </h1>

          <form
            onSubmit={handleSubmit(handleRegistration)}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                {...register('name', { required: true })}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {errors.name?.type === 'required' && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            <div>
              <input
                type="file"
                {...register('photo', { required: true })}
                placeholder="Photo"
                className="file-input w-full h-13 px-4 py-3 border rounded-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {errors.name?.type === 'required' && (
                <p className="text-red-500 text-sm">Photo is required</p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {errors.email?.type === 'required' && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            <div>
              <input
                type="password"
                {...register('password', { required: true, minLength: 6 })}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-xl bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {errors.password?.type === 'required' && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-red-500 text-sm">
                  Password must be at least 6 letters
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition"
            >
              Register
            </button>

            <button
              onClick={handleGoogleRegistration}
              type="button"
              className="w-full py-3 bg-white border border-gray-300 rounded-xl font-semibold flex items-center justify-center gap-2 mt-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link
                state={location.state}
                to="/login"
                className="text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
