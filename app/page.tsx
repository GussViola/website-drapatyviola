"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  const [showBiography, setShowBiography] = useState(false);

  return (
    // Contêiner Principal
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4">
      <div
        className={`flex flex-col items-center bg-white px-8 pt-8 rounded-lg shadow-md w-full max-w-md ${
          showBiography ? "pb-8" : "pb-0"
        }`}
      >
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
            href="https://wa.me/5519996698398"
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
            href="https://wa.me/c/5519996698398"
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

          <button
            onClick={() => {
              setShowBiography(!showBiography);
              sendGTMEvent({
                event: "about-click",
                label: "drapatriciaviola",
              });
            }}
            id="about-link"
            className="bg-orange-700 text-white py-3 rounded-lg text-center font-semibold transition duration-200 hover:bg-orange-800 hover:shadow-lg"
          >
            Sobre Mim
          </button>
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
        {/* Seção de Biografia */}
        <div
          className={`mt-8 bg-white rounded-lg shadow-md w-full max-w-md transition-all duration-500 ease-in-out ${
            showBiography
              ? "opacity-100 max-h-full p-6"
              : "opacity-0 max-h-0 overflow-hidden p-0"
          }`}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Quem é a Dra. Paty Viola?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Dra. Paty Viola</strong> é farmacêutica bioquímica (
            <strong>CRF 73291</strong>), especialista em{" "}
            <strong>Farmácia Estética</strong>,{" "}
            <strong>Farmácia Clínica</strong> e
            <strong>Prescrição Farmacêutica</strong>. Com mais de{" "}
            <strong>10 anos de experiência clínica</strong>, dedica-se a
            transformar a beleza e a autoestima de seus pacientes por meio de{" "}
            <strong>procedimentos injetáveis</strong> e{" "}
            <strong>terapias tecnológicas avançadas</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            Reconhecida por sua expertise em <strong>Botox Full Face</strong> e
            protocolos personalizados, a Dra. Paty lidera a{" "}
            <strong>Clínica Dra. Paty Viola</strong>, um espaço onde ciência,
            inovação e atendimento humanizado se unem para oferecer tratamentos
            de excelência.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            Além disso, está à frente da <strong>Botica Viola</strong>, onde
            desenvolve fórmulas manipuladas exclusivas para potencializar os
            tratamentos estéticos e clínicos. Se você busca um atendimento
            seguro, moderno e personalizado, sua melhor versão começa aqui.
          </p>

          <p className="text-gray-700 font-medium mt-4">
            <strong>Agende sua consulta</strong> e descubra como a Dra. Paty
            Viola pode transformar sua beleza com segurança e excelência.
          </p>
        </div>
      </div>
    </div>
  );
}
