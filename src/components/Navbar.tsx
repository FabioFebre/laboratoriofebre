import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { HomeIcon, UserCircleIcon, CogIcon, ShieldCheckIcon, ChartBarIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center text-white shadow-lg">
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
          <HomeIcon className="h-6 w-6" />
          <span>MiAppTactical</span>
        </Link>
        
        {user && (
          <div className="flex space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <ChartBarIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            {user.role === 'admin' && (
              <Link to="/admin" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                <CogIcon className="h-5 w-5" />
                <span>Admin</span>
              </Link>
            )}
            {user.role === 'moderator' && (
              <Link to="/moderator" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                <ShieldCheckIcon className="h-5 w-5" />
                <span>Moderator</span>
              </Link>
            )}
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        {user ? (
          <button 
            onClick={logout} 
            className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Salir</span>
          </button>
        ) : (
          <>
            <Link to="/login" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <UserCircleIcon className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link to="/register" className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors">
              <span>Registro</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;