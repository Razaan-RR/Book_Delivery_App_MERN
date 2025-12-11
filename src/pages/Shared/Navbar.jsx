// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'
// import logo from '../../assets/logo.png'

// function Navbar({ user }) {
//   const [open, setOpen] = useState(false)

//   const handleTheme = (checked) => {
//     const html = document.querySelector('html')
//     if (checked) {
//       html.setAttribute('data-theme', 'dark')
//     } else {
//       html.setAttribute('data-theme', 'light')
//     }
//   }

//   return (
//     <nav className="w-full shadow-md bg-white dark:bg-gray-900 dark:text-white">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2 font-bold text-xl">
//           <img src={logo} alt="logo" className="w-10 h-10" />
//           BookHive
//         </Link>

//         <div className="hidden md:flex items-center gap-6">
//           <Link to="/" className="hover:text-blue-500">
//             Home
//           </Link>
//           <Link to="/books" className="hover:text-blue-500">
//             Books
//           </Link>
//           <Link to="/dashboard" className="hover:text-blue-500">
//             Dashboard
//           </Link>

//           {!user ? (
//             <div className="flex items-center gap-3">
//               <Link
//                 to="/login"
//                 className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
//               >
//                 Register
//               </Link>
//             </div>
//           ) : (
//             <img
//               src={user.image || '/default.png'}
//               alt="profile"
//               className="w-10 h-10 rounded-full border"
//             />
//           )}
//           <input
//             onChange={(e) => handleTheme(e.target.checked)}
//             type="checkbox"
//             defaultChecked
//             className="toggle"
//           />
//         </div>

//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden flex flex-col px-6 pb-4 gap-3 bg-white dark:bg-gray-900 shadow">
//           <Link to="/" className="hover:text-blue-500">
//             Home
//           </Link>
//           <Link to="/books" className="hover:text-blue-500">
//             Books
//           </Link>
//           <Link to="/dashboard" className="hover:text-blue-500">
//             Dashboard
//           </Link>
//           {!user ? (
//             <div className="flex flex-col gap-2">
//               <Link
//                 to="/login"
//                 className="px-4 py-2 rounded-lg bg-blue-500 text-white text-center"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="px-4 py-2 rounded-lg bg-green-500 text-white text-center"
//               >
//                 Register
//               </Link>
//             </div>
//           ) : (
//             <div className="flex items-center gap-3 py-2">
//               <img
//                 src={user.image || '/default.png'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <p>{user.name}</p>
//             </div>
//           )}
//           <input
//             onChange={(e) => handleTheme(e.target.checked)}
//             type="checkbox"
//             defaultChecked
//             className="toggle"
//           />{' '}
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar


import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'

function Navbar({ user }) {
  const [open, setOpen] = useState(false)

  const handleTheme = (checked) => {
    const html = document.querySelector('html')
    if (checked) {
      html.setAttribute('data-theme', 'dark')
    } else {
      html.setAttribute('data-theme', 'light')
    }
  }

  return (
    <nav className="w-full shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <img src={logo} alt="logo" className="w-10 h-10" />
          BookHive
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/books" className="hover:text-blue-500">
            Books
          </Link>

          {user && (
            <Link to="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
          )}

          {!user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
              >
                Register
              </Link>
            </div>
          ) : (
            <img
              src={user.image || '/default.png'}
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
          )}
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked
            className="toggle"
          />
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-3 bg-white dark:bg-gray-900 shadow">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/books" className="hover:text-blue-500">
            Books
          </Link>

          {user && (
            <Link to="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
          )}

          {!user ? (
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-blue-500 text-white text-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-green-500 text-white text-center"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 py-2">
              <img
                src={user.image || '/default.png'}
                className="w-10 h-10 rounded-full"
              />
              <p>{user.name}</p>
            </div>
          )}
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked
            className="toggle"
          />
        </div>
      )}
    </nav>
  )
}

export default Navbar
