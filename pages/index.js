import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Proyecto MCP</title>
        <meta name="description" content="Proyecto MCP con Next.js y Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          ¡Bienvenido a pruebaMCP!
        </h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <p className="text-gray-700 mb-4">
            Este es un proyecto de Next.js con Tailwind CSS creado con éxito.
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
      </main>
    </div>
  );
}