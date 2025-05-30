import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const AdminPanel = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [rolSeleccionado, setRolSeleccionado] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/usuarios', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!response.ok) throw new Error('Error al cargar usuarios');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const eliminarUsuario = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) return;

    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!response.ok) throw new Error('Error al eliminar usuario');
      cargarUsuarios();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const eliminarPorFecha = async () => {
    if (!fechaSeleccionada) {
      alert('Por favor, selecciona una fecha');
      return;
    }

    if (!window.confirm('¿Estás seguro de que deseas eliminar los usuarios modificados después de esta fecha?')) return;

    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/fecha/${fechaSeleccionada}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!response.ok) throw new Error('Error al eliminar usuarios');
      cargarUsuarios();
      setFechaSeleccionada('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const eliminarPorRol = async () => {
    if (!rolSeleccionado) {
      alert('Por favor, selecciona un rol');
      return;
    }

    if (!window.confirm('¿Estás seguro de que deseas eliminar los usuarios con este rol?')) return;

    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/rol/${rolSeleccionado}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!response.ok) throw new Error('Error al eliminar usuarios');
      cargarUsuarios();
      setRolSeleccionado('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const eliminarInactivos = async () => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar todos los usuarios inactivos?')) return;

    try {
      const response = await fetch('http://localhost:8080/api/usuarios/inactivos', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!response.ok) throw new Error('Error al eliminar usuarios inactivos');
      cargarUsuarios();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Panel de Administración</h1>

      {/* Sección de Eliminación por Fecha */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Eliminar por Fecha de Modificación</h2>
        <div className="flex gap-4">
          <input
            type="datetime-local"
            value={fechaSeleccionada}
            onChange={(e) => setFechaSeleccionada(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={eliminarPorFecha}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>

      {/* Sección de Eliminación por Rol */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Eliminar por Rol</h2>
        <div className="flex gap-4">
          <select
            value={rolSeleccionado}
            onChange={(e) => setRolSeleccionado(e.target.value)}
            className="flex-1 p-2 border rounded"
          >
            <option value="">Seleccionar rol</option>
            <option value="ADMIN">Administrador</option>
            <option value="USUARIO">Usuario</option>
          </select>
          <button
            onClick={eliminarPorRol}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>

      {/* Sección de Eliminación de Inactivos */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Eliminar Usuarios Inactivos</h2>
        <button
          onClick={eliminarInactivos}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Eliminar Inactivos
        </button>
      </div>

      {/* Tabla de Usuarios */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Lista de Usuarios</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Rol</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Fecha Creación</th>
                <th className="px-4 py-2 text-left">Última Modificación</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id} className="border-b">
                  <td className="px-4 py-2">{usuario.id}</td>
                  <td className="px-4 py-2">{usuario.nombre}</td>
                  <td className="px-4 py-2">{usuario.email}</td>
                  <td className="px-4 py-2">{usuario.rol}</td>
                  <td className="px-4 py-2">{usuario.activo ? 'Activo' : 'Inactivo'}</td>
                  <td className="px-4 py-2">{new Date(usuario.fechaCreacion).toLocaleString()}</td>
                  <td className="px-4 py-2">{new Date(usuario.fechaModificacion).toLocaleString()}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => eliminarUsuario(usuario.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 