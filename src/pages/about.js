import MainLayout from '../ui/layouts/MainLayout';

export default function About() {
  return (
    <MainLayout title="Acerca de">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Acerca de pruebaMCP
        </h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            Este proyecto es una demostración de Next.js con Tailwind CSS 
            utilizando una estructura de directorios organizada con un layout principal.
          </p>
          <p className="text-gray-700">
            La aplicación utiliza una estructura donde los layouts están en src/ui/layouts,
            lo que permite una mejor organización y mantenimiento del código.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}