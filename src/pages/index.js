import MainLayout from '../ui/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout title="Inicio">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          ¡Bienvenido a pruebaMCP!
        </h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            Este es un proyecto de Next.js con Tailwind CSS creado con éxito. 
            Estamos utilizando un MainLayout centralizado para toda la aplicación.
          </p>
          <div className="flex justify-center">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Documentación de Next.js
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}