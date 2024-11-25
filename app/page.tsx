'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";

export default function Home() {
  const [showBiography, setShowBiography] = useState(false);

  return (
    // Contêiner Principal
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4">
      <div className={`flex flex-col items-center bg-white px-8 pt-8 rounded-lg shadow-md w-full max-w-md ${ showBiography ? "pb-8" : "pb-0"}`}>
        {/* Seção de Perfil */}
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full"
            src="/profile_dra_paty_viola.png"
            alt="Dra. Paty Viola"
            width={150}
            height={150}
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            Dra. Paty Viola
          </h1>
          <p className="text-gray-600">Farmacêutica Especialista em Botox®</p>
        </div>

        {/* Seção de Ícones Sociais */}
        <div className="flex flex-row items-center justify-center space-x-4 mt-6">
          <Link
            href="https://www.facebook.com/drapatriciaviola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              size={24}
              className="text-gray-500 hover:text-gray-800 transition duration-200"
            />
          </Link>
          <Link
            href="https://www.instagram.com/drapatyviola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              size={24}
              className="text-gray-500 hover:text-gray-800 transition duration-200"
            />
          </Link>
        </div>

        {/* Seção de Botões de Link */}
        <div className="flex flex-col w-full space-y-4 mt-8">
          <Link
            href="https://wa.me/5519996698398"
            className="bg-orange-700 text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-800 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Consulta
          </Link>
          <Link
            href="https://wa.me/c/5519996698398"
            className="bg-orange-700 text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-800 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Catálogo de Procedimentos
          </Link>
          <button
            onClick={() => setShowBiography(!showBiography)}
            className="bg-orange-700 text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-800 hover:shadow-lg"
          >
            Sobre Mim
          </button>
        </div>

        {/* Seção de Biografia */}
        <div
          className={`mt-8 bg-white rounded-lg shadow-md w-full max-w-md transition-all duration-500 ease-in-out ${
            showBiography ? "opacity-100 max-h-full p-4" : "opacity-0 max-h-0 overflow-hidden p-0"
          }`}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">Biografia</h2>
          <p className="text-gray-600">
            A Dra. Paty Viola é uma farmacêutica renomada, especialista em procedimentos estéticos como o Botox®. Com anos de experiência no setor, ela se dedica a proporcionar o melhor cuidado e resultados excepcionais para seus pacientes. Sua abordagem personalizada e atenção aos detalhes fazem dela uma referência na área.
          </p>
        </div>
      </div>
    </div>
  );
}
