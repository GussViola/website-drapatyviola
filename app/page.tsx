"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // Contêiner Principal
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4">
      <div
        className={`flex flex-col items-center bg-white p-8 rounded-lg shadow-md w-full max-w-md`}
      >
        {/* Seção de Perfil */}
        <div className="flex flex-col items-center text-center">
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
          <p className="text-gray-600">
            Farmacêutica Especialista em Procedimentos Estéticos
          </p>
        </div>

        {/* Seção de Ícones Sociais */}
        <div className="flex flex-row items-center justify-center space-x-4 mt-6">
          <Link
            href="https://www.facebook.com/drapatriciaviola"
            target="_blank"
            rel="noopener noreferrer"
            id="facebook-link"
            onClick={() =>
              sendGTMEvent({
                event: "facebook-click",
                label: "drapatriciaviola",
              })
            }
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
            id="instagram-link"
            onClick={() =>
              sendGTMEvent({
                event: "instagram-click",
                label: "drapatriciaviola",
              })
            }
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
            href="https://clini.site/clinica-viola?modal-action=booking-form"
            className="bg-orange-700 text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-800 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-link"
            onClick={() =>
              sendGTMEvent({
                event: "whatsapp-click",
                label: "drapatriciaviola",
              })
            }
          >
            Agendar Consulta
          </Link>
          <Link
            href="https://clini.site/clinica-viola#procedimentos"
            className="bg-orange-700 text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-800 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-catalog-link"
            onClick={() =>
              sendGTMEvent({
                event: "whatsapp-catalog-click",
                label: "drapatriciaviola",
              })
            }
          >
            Catálogo de Procedimentos
          </Link>
          <Link
            href="https://maps.app.goo.gl/KLn7ddjkw7B1L4dz5"
            className="bg-orange-700 text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-800 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
            id="address-link"
            onClick={() =>
              sendGTMEvent({
                event: "address-click",
                label: "drapatriciaviola",
              })
            }
          >
            Endereço
          </Link>

          <Link
            href="https://clini.site/clinica-viola"
            className="bg-orange-700 text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-800 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
            id="about-link"
            onClick={() => {
              sendGTMEvent({
                event: "about-click",
                label: "drapatriciaviola",
              });
            }}
          >
            Sobre Mim
          </Link>
          <div className="flex flex-col gap-4 p-2 border-2 border-[#de6a2c] rounded-lg">
            <div className="flex bg-slate-100 rounded-lg px-4 py-2 align-center items-center justify-center">
              <Image
                className="self-center"
                src="/Botica-Icon-Horizontal-Bigger.svg"
                alt="Farmácia"
                width={150}
                height={150}
              />
            </div>
            <Link
              href="https://www.boticaviola.com.br/solicitar-orcamento"
              className="bg-[#de6a2c] text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-600 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
              id="orcamento-link"
              onClick={() =>
                sendGTMEvent({
                  event: "orcamento-click",
                  label: "drapatriciaviola",
                })
              }
            >
              Faça seu orçamento na Botica Viola
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
