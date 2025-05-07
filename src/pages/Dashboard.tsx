import { useAuth } from "../hooks/useAuth";
import { ShieldCheckIcon, TruckIcon, ClipboardDocumentListIcon, WrenchIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">
        
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-3">Panel de Control</h1>
          <p className="text-lg text-gray-300">
            ¡Bienvenido, <span className="text-yellow-300 font-semibold">{user?.username}</span>! Gestiona tus operaciones tácticas aquí.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Stock disponible */}
          <div className="bg-gray-700 p-6 rounded-2xl shadow-xl border border-yellow-500 hover:scale-105 transition-transform">
            <div className="flex items-center">
              <div className="p-4 bg-yellow-400 rounded-full mr-5">
                <ShieldCheckIcon className="h-7 w-7 text-gray-800" />
              </div>
              <div>
                <p className="text-sm font-medium text-yellow-300">Stock Disponible</p>
                <p className="text-2xl font-bold">150 unidades</p>
              </div>
            </div>
          </div>

          {/* Órdenes pendientes */}
          <div className="bg-gray-700 p-6 rounded-2xl shadow-xl border border-green-500 hover:scale-105 transition-transform">
            <div className="flex items-center">
              <div className="p-4 bg-green-400 rounded-full mr-5">
                <TruckIcon className="h-7 w-7 text-gray-800" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-300">Órdenes Pendientes</p>
                <p className="text-2xl font-bold">23 envíos</p>
              </div>
            </div>
          </div>

          {/* Nuevos productos */}
          <div className="bg-gray-700 p-6 rounded-2xl shadow-xl border border-blue-500 hover:scale-105 transition-transform">
            <div className="flex items-center">
              <div className="p-4 bg-blue-400 rounded-full mr-5">
                <ClipboardDocumentListIcon className="h-7 w-7 text-gray-800" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-300">Nuevos Productos</p>
                <p className="text-2xl font-bold">8 modelos</p>
              </div>
            </div>
          </div>

          {/* Servicios técnicos */}
          <div className="bg-gray-700 p-6 rounded-2xl shadow-xl border border-red-500 hover:scale-105 transition-transform">
            <div className="flex items-center">
              <div className="p-4 bg-red-400 rounded-full mr-5">
                <WrenchIcon className="h-7 w-7 text-gray-800" />
              </div>
              <div>
                <p className="text-sm font-medium text-red-300">Servicios Técnicos</p>
                <p className="text-2xl font-bold">5 solicitudes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 p-8 rounded-2xl shadow-xl border border-gray-600">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Actividad Reciente</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-600 pb-4">
              <p className="text-xs text-gray-400">Hoy, 08:30 AM</p>
              <p className="text-md font-medium">Despachaste 10 kits tácticos</p>
            </div>
            <div className="border-b border-gray-600 pb-4">
              <p className="text-xs text-gray-400">Ayer, 5:45 PM</p>
              <p className="text-md font-medium">Nuevo proveedor agregado: Equipamientos Militares S.A.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Lunes, 11:00 AM</p>
              <p className="text-md font-medium">Se actualizaron los precios de chalecos antibalas</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
