import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from '../services/api';
import { UserIcon, EnvelopeIcon, LockClosedIcon, ExclamationCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const schema = z.object({
  username: z.string().min(3, "Usuario requerido (mínimo 3 caracteres)"),
  email: z.string().email("Email inválido").min(1, "Email requerido"),
  password: z.string().min(6, "Contraseña mínima 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await api.post('/auth/signup', { ...data, role: "user" });
      alert("Registro exitoso. Ahora inicia sesión.");
      window.location.href = '/login';
    } catch (error) {
      console.error('Error en el registro', error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-blue-600">
            <UserIcon className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-100 mt-4">Crear una cuenta</h2>
          <p className="mt-2 text-gray-400 text-sm">Completa el formulario para registrarte</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-300 mb-1">
              Nombre de usuario
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                {...register('username')}
                placeholder="Ej: usuario123"
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

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">
              Correo electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Ej: usuario@ejemplo.com"
                className="pl-10 py-2 w-full rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            {errors.email && (
              <p className="mt-2 flex items-center text-sm text-red-500">
                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-150 uppercase font-bold tracking-wide"
            >
              Registrarse
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
