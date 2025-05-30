import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminNav = () => {
  const { user } = useAuth();

  if (!user || user.rol !== 'ADMIN') {
    return null;
  }

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Ecom Catalog
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="hover:text-gray-300">
            Panel de Administración
          </Link>
          <span className="text-sm">
            {user.nombre} ({user.email})
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminNav; 