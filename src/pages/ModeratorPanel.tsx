import { useAuth } from "../hooks/useAuth";

const ModeratorPanel = () => {
  const { user } = useAuth();

  return (
    <section className="p-8 bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">Panel de Moderador</h1>
        <p className="text-lg text-gray-300 mb-6">
          ¡Hola <strong className="text-yellow-400">{user?.username}</strong>! Desde aquí puedes moderar
          comentarios, publicaciones y reportes de usuarios.
        </p>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl text-white">Comentarios</h3>
            <p className="text-gray-400">Revisa y aprueba o rechaza comentarios de los usuarios.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl text-white">Publicaciones</h3>
            <p className="text-gray-400">Gestiona las publicaciones que los usuarios han creado.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl text-white">Reportes de Usuarios</h3>
            <p className="text-gray-400">Revisa los reportes generados por los usuarios para asegurar la calidad del contenido.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModeratorPanel;
