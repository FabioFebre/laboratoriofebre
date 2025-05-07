import { useAuth } from "../hooks/useAuth";
import { ShieldCheckIcon, TruckIcon, ClipboardDocumentListIcon, WrenchIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">
        
       
      
      
        

        

        {/* Sección de productos destacados */}
        <div className="bg-gray-700 p-8 rounded-2xl shadow-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 hover:scale-105 transition-transform">
              <img src="/Chaleco Táctico.jpeg"  alt="Producto 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-100">Chaleco Táctico</h3>
              <p className="text-sm text-gray-400">Resistente y ligero, ideal para misiones en el campo.</p>
              <p className="text-lg font-bold text-yellow-400">$120.00</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 hover:scale-105 transition-transform">
            <img src="/Botas Tácticas.jpeg" alt="Botas Tácticas" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-100">Botas Tácticas</h3>
              <p className="text-sm text-gray-400">Comodidad y durabilidad para largas caminatas.</p>
              <p className="text-lg font-bold text-yellow-400">$85.00</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 hover:scale-105 transition-transform">
              <img src="/Guantes de Protección.jpeg"  alt="Producto 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-100">Guantes de Protección</h3>
              <p className="text-sm text-gray-400">Protección y confort en condiciones extremas.</p>
              <p className="text-lg font-bold text-yellow-400">$30.00</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 hover:scale-105 transition-transform">
              <img src="/Mochila Táctica.jpeg"  alt="Producto 4" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-100">Mochila Táctica</h3>
              <p className="text-sm text-gray-400">Gran capacidad y resistencia para el transporte de equipo.</p>
              <p className="text-lg font-bold text-yellow-400">$65.00</p>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Dashboard;
