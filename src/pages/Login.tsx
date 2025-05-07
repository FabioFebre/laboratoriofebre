import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { LockClosedIcon, UserIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const schema = z.object({
  username: z.string().min(3, "Usuario requerido"),
  password: z.string().min(6, "Contraseña mínima 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { login } = useAuth();

  const onSubmit = (data: FormData) => {
    login(data);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-blue-600">
            <LockClosedIcon className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-100 mt-4">Acceso Restringido</h2>
          <p className="mt-2 text-gray-400 text-sm">Identifícate para ingresar al sistema táctico</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-300 mb-1">
              Usuario
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                {...register('username')}
                placeholder="Ej: operador001"
                className="pl-10 py-2 w-full rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            {errors.username && (
              <p className="mt-2 flex items-center text-sm text-red-500">
                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                {errors.username.message}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                {...register('password')}
                placeholder="••••••••"
                className="pl-10 py-2 w-full rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            {errors.password && (
              <p className="mt-2 flex items-center text-sm text-red-500">
                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-150 uppercase font-bold tracking-wide"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
