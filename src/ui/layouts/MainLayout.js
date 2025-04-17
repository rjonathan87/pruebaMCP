import Head from 'next/head';
import Link from 'next/link';

export default function MainLayout({ children, title = 'pruebaMCP' }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>{title} - MCP Project</title>
        <meta name="description" content="Proyecto MCP con Next.js y Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              pruebaMCP
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-blue-200 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-200 transition-colors">
                    Acerca de
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center">© {new Date().getFullYear()} pruebaMCP. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}