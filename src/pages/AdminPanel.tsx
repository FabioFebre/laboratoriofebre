import { useAuth } from "../hooks/useAuth";
import { ShieldCheckIcon, UsersIcon, ChartBarIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-100 mb-2">Centro de Operaciones Tácticas</h1>
            <p className="text-lg text-gray-400">
              Bienvenido, <strong className="text-green-400">{user?.username}</strong>. Coordina y supervisa las misiones desde aquí.
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg">
            <ShieldCheckIcon className="h-5 w-5" />
            <span className="font-medium">Comandante</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-green-700 mr-4">
                <UsersIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Unidad de Operaciones</h3>
                <p className="text-sm text-gray-400 mt-1">Gestiona los miembros de las fuerzas especiales.</p>
              </div>
            </div>
            <button className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
              Ver detalles →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-yellow-700 mr-4">
                <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Configuración de Equipamiento</h3>
                <p className="text-sm text-gray-400 mt-1">Ajusta el armamento y recursos tácticos.</p>
              </div>
            </div>
            <button className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
              Configurar →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-blue-700 mr-4">
                <ChartBarIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Inteligencia y Reportes</h3>
                <p className="text-sm text-gray-400 mt-1">Consulta estadísticas y datos de misiones.</p>
              </div>
            </div>
            <button className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
              Ver reportes →
            </button>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Registro de Actividad Reciente</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Evento
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Operativo
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    10/05/2023 14:30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    Nueva unidad incorporada
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    unidad_alpha
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    09/05/2023 09:15
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    Equipamiento actualizado
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user?.username}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
