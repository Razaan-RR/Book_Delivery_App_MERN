import { Link } from 'react-router-dom'
import { Facebook, Instagram, Github } from 'lucide-react'
import { SiX } from 'react-icons/si'

function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-200 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/books" className="hover:text-blue-500">Books</Link>
            <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p>Email: support@bookhive.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-500"><SiX size={24} /></a>
            <a href="#" className="hover:text-blue-500"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-500"><Instagram size={24} /></a>
            <a href="#" className="hover:text-blue-500"><Github size={24} /></a>
          </div>
        </div>

      </div>

      <div className="text-center mt-10 border-t border-gray-300 dark:border-gray-700 pt-4">
        © {new Date().getFullYear()} BookHive. All rights reserved by Razaan Reza.
      </div>
    </footer>
  )
}

export default Footer
