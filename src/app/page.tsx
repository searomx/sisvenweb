"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import imgGraph1 from "../../public/images/grafico1.png";
import imgGraph2 from "../../public/images/grafico2.png";
import imgGraph6 from "../../public/images/graph10.png";
import imgGraph3 from "../../public/images/graph21.png";
import imgGraph4 from "../../public/images/graph4.png";
import imgGraph5 from "../../public/images/graph5.png";
import imgGraph7 from "../../public/images/graph7.png";
import imgGraph8 from "../../public/images/graph8.png";
import imgGraph9 from "../../public/images/graph9.png";
import imgGraph10 from "../../public/images/img-grafico-funil.png";
import imgEquipe from "../../public/images/img2.png";
import imgTeam from "../../public/images/team.png";
import imgWorkTeam from "../../public/images/work-team.png";
import imgDjrDjalmas from "../../public/images/djr-djalmas.png";
import imgDjrNorthon from "../../public/images/djr-northon.png";
import VideoCarousel from "@/components/VideoCarousel";
import { TextoDejalmas } from "@/components/textos/TextoDejalmas";
import { TextoNorthon } from "@/components/textos/TextoNorthon";

export default function Home() {
  const fonteTexto = "font-sans text-lg dark:text-gray-200 text-gray-600 sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap";
  return (
    <div className="container sm:max-w-screen mx-auto bg-neutral-950 dark:bg-neutral-900">
      <div
        id="topo"
        className="min-w-full mx-auto backdrop-opacity-10 backdrop-invert relative"
      >
        <div className="flex w-full h-full justify-center mt-1 p-1 shadow-2xl shadow-cyan-300 bg-background overflow-hidden">
          <VideoCarousel />
        </div>
      </div>

      {/* Primeira Pagina */}
      <div className="flex w-full flex-wrap items-center justify-center mt-10 m-auto lg:max-w-screen-xl">
        <div className="flex flex-col w-full items-center mb-3 text-start">
          <span className="max-[600px]:text-2xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
            O Que é o Sistema de Gerenciamento de Vendas - SGV.
          </span>
          <span className="text-zinc-300 max-[600px]:text-2xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
            Administração de vendas de maneira eficaz.
          </span>
          <span className="text-amber-500 text-shadow-lg/30 text-3xl lg:text-1xl md:text-xl font-medium flex text-wrap lg:text-wrap text-center">
            Tudo na palma da sua mão.
          </span>
        </div>
        <div className="flex flex-col pb-5 gap-y-2 max-w-screen-xl justify-center mt-1 lg:flex-row lg:flex-wrap lg:gap-x-2">
          <div className="w-full sm:max-w-sm lg:w-full md:w-full h-auto m-auto shadow-2xl shadow-cyan-300 bg-background">
            <div className="flex flex-col h-full dark:bg-gray-950 p-2 bg-gray-950">
              <div className="flex items-center justify-center mb-3">
                <h2 className="{fonteTexto} dark:text-white text-lg font-medium lg:z-50">
                  Work Team
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow object-cover">
                <Image
                  src={imgWorkTeam}
                  alt="img-team"
                  sizes="100vw"
                  priority={true}
                  className="object-cover"
                />
                <span className="{fonteTexto} dark:text-gray-400 text-lg">
                  Nosso time é TALENTOSO e ENGAJADO, tanto no desenvolvimento de
                  novas ideias quanto no relacionamento com o cliente. FAZEMOS A
                  DIFERENÇA!
                </span>
              </div>
            </div>
          </div>

          <div className="w-full sm:max-w-sm lg:w-full h-auto m-auto shadow-xl shadow-cyan-300 bg-background">
            <div className="flex flex-col h-full dark:bg-gray-950 p-2 bg-gray-950">
              <div className="flex items-center justify-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium lg:z-50">
                  Criando Inovação
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow object-cover">
                <Image
                  src={imgTeam}
                  alt="img-team"
                  sizes="100vw"
                  priority={true}
                  className="object-cover"
                />
                <span className="{fonteTexto} dark:text-gray-400 text-lg">
                  Estamos sempre ATUALIZADOS! A todo momento, discutimos novas
                  tecnologias que podem trazer ainda mais eficiência e resultado
                  aos nossos clientes, garantindo que estejam sempre na
                  vanguarda.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full sm:max-w-sm lg:w-full h-auto m-auto shadow-xl shadow-cyan-300 bg-background">
            <div className="flex flex-col h-full dark:bg-gray-950 p-2 bg-gray-950">
              <div className="flex items-center justify-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium lg:z-50">
                  Troca de Experiências
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4 object-cover">
                <Image
                  className="object-cover"
                  src={imgEquipe}
                  alt="img-equipe"
                  sizes="100vw"
                  priority={true}
                />
                <span className="{fonteTexto} dark:text-gray-400 text-lg">
                  Através de nossas reuniões semanais, compartilhamos
                  experiências e conhecimento. Assim, crescemos e avançamos
                  JUNTOS.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-5 gap-y-2 max-w-screen-xl shadow-xl shadow-cyan-300 justify-center mt-1 lg:flex-row lg:flex-wrap lg:gap-x-2">
          <div className="flex flex-col items-center bg-gray-950 mb-3">
            <span className="text-amber-400 bg-gray-950 max-[600px]:text-3xl text-5xl lg:text-2xl md:text-md sm:text-sm font-medium text-wrap lg:text-wrap text-center">
              O que nós podemos fazer por VOCÊ hoje?
            </span>
            <span className={`${fonteTexto} max-[600px]:text-2xl text-5xl lg:text-2xl md:text-sm sm:text-sm font-medium text-wrap lg:text-wrap text-center`}>
              Juntos, vamos conectar os seus clientes com as suas representadas,
              garantindo MAIS AGILIDADE NA CONVERSÃO DE NEGÓCIOS.
            </span>
          </div>
          <div className="flex flex-col justify-between bg-gray-950 flex-grow">
            <span className={`${fonteTexto} max-[600px]:text-2xl italic text-5xl lg:text-lg md:text-md sm:text-sm font-medium text-wrap lg:text-wrap text-center`}>
              Com uma interface INTUITIVA e ÁGIL, você pode focar no que
              realmente importa: &quot;Atender o máximo de clientes possível,
              DIRETO AO PONTO!&quot;
            </span>
            <span className="font-sans italic text-xl text-amber-400 text-center">
              e nós fazemos o resto.
            </span>
          </div>
        </div>
      </div>
      {/* Fim da Primeira Pagina */}

      {/* Segunda Pagina */}
      <div
        id="comofunc"
        className="gap-y-2 max-w-screen-xl justify-center mt-1 lg:flex-wrap lg:gap-x-2 lg:m-auto"
      >
        <div className="items-center mb-3 p-2">
          <div className="flex p-1 bg-slate-50 w-full justify-center items-center">
            <span className="text-zinc-600 max-[600px]:text-xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium flex text-wrap lg:text-wrap text-center">
              Como funciona o SGV
            </span>
          </div>
          <div className={`${fonteTexto} text-shadow-lg/30 max-[600px]:text-3xl items-center justify-center text-5xl lg:text-2xl md:text-md sm:text-sm font-medium text-wrap lg:text-wrap text-center`}>
            Dashboard Intuitivo
          </div>

          <div className="flex flex-col gap-y-2 w-full justify-center mt-1 lg:gap-x-2 shadow-xl shadow-cyan-300 bg-background">
            <div className="flex flex-col min-h-auto overflow-hidden bg-gray-950 object-cover p-1">
              <Image
                src="/images/img-dash-1.png"
                alt="img-dashboard"
                width={1000}
                height={500}
                priority={true}
                sizes="100vw"
                className="object-cover w-full max-w-full"
              />
              <span className={`${fonteTexto} max-[600px]:text-2xl italic text-5xl lg:text-2xl md:text-md sm:text-sm font-medium text-wrap lg:text-wrap text-center`}>
                Administre o desempenho da sua equipe de forma EFICIENTE, VISUAL
                e EM TEMPO REAL.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-screen-xl justify-center mt-1">
          <Link
            to="topo"
            smooth={true}
            duration={500}
            className="cursor-pointer mt-3 text-slate-300 dark:text-white hover:text-tomato inline-flex items-center"
          >
            Retornar ao topo
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      {/* Fim da Segunda Pagina */}

      {/* Terceira Pagina */}

      <div
        id="gestao"
        className="flex w-full flex-wrap justify-center p-1 items-center"
      >
        <span className={`${fonteTexto} text-2xl lg:text-3xl md:text-xl font-medium flex text-wrap lg:text-wrap text-center`}>
          Administre de maneira rápida e intuitiva através dos painéis de
          gestão.
        </span>
      </div>
      <div className="max-w-screen-xl w-auto h-auto mx-auto px-5 py-1 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col h-96 rounded overflow-hidden shadow-2xl shadow-cyan-300 bg-background">
            <Image
              src={imgGraph1}
              alt="img-grafico-barras"
              sizes="100vw"
              priority={true}
            />
            <span className={`${fonteTexto} text-sm p-1`}>
              Acompanhe o desempenho de sua equipe de vendas e compare com
              períodos anteriores.
            </span>
          </div>

          <div className="flex min-h-full flex-col items-center justify-center">
            <div className="group h-full w-full [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="flex flex-col h-auto absolute inset-0 rounded overflow-hidden  shadow-2xl shadow-cyan-300 bg-background">
                  <Image
                    src={imgGraph2}
                    alt="img-grafico-pizza"
                    sizes="100vw"
                    className="hover:transform-scale-x-100"
                    priority={true}
                  />

                  <span className={`${fonteTexto} text-sm p-1`}>
                    Acompanhe em tempo real o desempenho de cada fábrica e tome
                    decisões rápidas.
                  </span>
                  <span className="text-md italic p-1">
                    Posicione o mouse sobre a representada desejada para
                    visualizar os pedidos registrados no mês corrente.
                  </span>
                </div>
                <div className="absolute inset-0 h-full w-full rounded text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full min-w-full justify-center">
                    <Image
                      src={imgGraph3}
                      alt="img-graph3"
                      sizes="100vw"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden flex flex-col shadow-2xl shadow-cyan-300 bg-background">
            <Image
              src={imgGraph4}
              alt="img-grafico-barras"
              width={1200}
              height={800}
              priority={true}
            />
            <span className={`${fonteTexto} text-sm p-1`}>
              Acompanhe em tempo real a evolução de vendas x metas.
            </span>
          </div>
          <div className="rounded overflow-hidden shadow-2xl shadow-cyan-300 flex flex-col bg-background h-auto w-auto">
            <Image
              src={imgGraph5}
              alt="img-grafico-barras"
              sizes="100vw"
              priority={true}
            />
            <span className={`${fonteTexto} text-sm p-1`}>
              Acompanhe a evolução individual de vendas x metas
            </span>
          </div>
          <div className="rounded overflow-hidden shadow-2xl shadow-cyan-300 bg-background flex flex-col  h-auto w-auto">
            <Image
              src={imgGraph6}
              alt="img-grafico-barras"
              sizes="100vw"
              priority={true}
            />
            <span className={`${fonteTexto} text-sm p-1`}>
              Ranking de Clientes na Curva ABC.
            </span>
          </div>
          <div className="rounded overflow-hidden flex flex-col shadow-2xl shadow-cyan-300 bg-background">
            <Image
              src={imgGraph7}
              alt="img-grafico-barras"
              sizes="100vw"
              priority={true}
            />
            <span className={`${fonteTexto} text-sm p-1`}>
              Faturamento acumulado por fábrica no ano corrente.
            </span>
          </div>
          <div className="rounded overflow-hidden shadow-2xl shadow-cyan-300 bg-backgroundh-auto w-auto">
            <Image
              src={imgGraph8}
              alt="img-grafico-barras"
              sizes="100vw"
              priority={true}
            />
            <p className={`${fonteTexto} text-sm p-1`}>
              Faturamento distribuido por atividade do cliente no mês corrente.
            </p>
          </div>
          <div>
            <div className="rounded overflow-hidden shadow-2xl shadow-cyan-300 bg-background h-full w-auto">
              <Image
                src={imgGraph9}
                alt="img-grafico-barras"
                sizes="100vw"
                priority={true}
              />
              <p className={`${fonteTexto} text-sm p-1`}>
                Evolução de vendas diárias contrastando com a meta de vendas.
              </p>
            </div>
          </div>
          <div>
            <div className="rounded overflow-hidden shadow-2xl shadow-cyan-300 bg-background h-full w-auto">
              <Image
                src={imgGraph10}
                alt="img-grafico-funil-vendas"
                sizes="100vw"
                priority={true}
              />
              <p className={`${fonteTexto} text-sm p-1`}>
                Analise o funil de vendas e identifique oportunidades de
                melhoria em cada etapa do processo.
              </p>
            </div>
          </div>
        </div>
        <Link
          to="topo"
          smooth={true}
          duration={500}
          className="cursor-pointer mt-3 text-slate-300 dark:text-white hover:text-tomato inline-flex items-center"
        >
          Retornar ao topo
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      {/* Fim da Terceira Pagina*/}

      {/* Início da Quarta Pagina*/}
      <div id="depoimentos"></div>
      <div className="mb-1 p-1 h-auto w-full bg-background shadow-2xl shadow-cyan-300">
        <span
          className={`${fonteTexto} flex  p-1 
            text-3xl sm:text-md justify-center
            lg:text-2xl md:text-xl font-medium 
            text-wrap lg:text-wrap text-center`}
        >
          O que dizem os nossos clientes.
        </span>
      </div>
      <div className="max-w-screen-xl w-full h-auto mx-auto px-5 sm:p-10 md:p-16">
        <div className="mb-1 p-1 h-auto w-full shadow-2xl shadow-cyan-300 bg-background">
          <Image
            src={imgDjrDjalmas}
            alt="img-djalmas-djr"
            sizes="100vw"
            priority={true}
            className="m-auto object-cover"
          />
        </div>

        <div
          className={`items-center shadow-2xl
             shadow-cyan-300 bg-background mb-1 
             p-2 col-span-2 h-auto sm:overflow-y-scroll 
             sm:text-0.5sm md:text-lg lg:text-lg 
             lg:text-wrap sm:text-wrap`}
        >
          <TextoDejalmas />
        </div>
      </div>

      <div className="max-w-screen-xl w-full h-auto mx-auto px-5 py-1 sm:p-10 md:p-16">
        <div className="mb-1 p-2 h-auto w-full shadow-2xl shadow-cyan-300 bg-background">
          <Image
            src={imgDjrNorthon}
            alt="img-northon-djr"
            width={200}
            height={300}
            priority={true}
            className="m-auto object-cover"
          />
        </div>
        <div
          className={`items-center shadow-2xl
             shadow-cyan-300 bg-background
             mb-3 p-2 col-span-2 h-auto 
             sm:overflow-y-scroll sm:text-0.5sm 
             md:text-lg lg:text-lg lg:text-wrap sm:text-wrap`}
        >
          <TextoNorthon />
        </div>
      </div>

      {/* Segmentos Atendidos */}

      <div
        id="segmentos"
        className="flex p-1 bg-slate-50 w-full justify-center items-center"
      >
        <span className="text-zinc-600 max-[600px]:text-xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium flex text-wrap lg:text-wrap text-center">
          Segmentos Atendidos
        </span>
      </div>
      <div className={`${fonteTexto} flex mb-6 max-w-screen-xl max-h-full justify-center mt-1 shadow-2xl shadow-cyan-300 bg-background`}>
        <ul className={`list-disc list-inside text-lg p-5 sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap`}>
          <li>Indústrias de Auto Peças</li>
          <li>Indústrias de Alimentos e Bebidas</li>
          <li>Indústrias de Sapatos</li>
          <li>Indústrias de Materiais Elétricos</li>
          <li>Indústrias de Materiais de Construção</li>
          <li>Indústrias Farmacêuticas</li>
          <li>Distribuidoras em Geral</li>
          <li>Comércio Atacadista</li>
        </ul>
      </div>
      <div>
        <Link
          to="topo"
          smooth={true}
          duration={500}
          className="cursor-pointer mt-3 text-slate-300 dark:text-white hover:text-tomato inline-flex items-center"
        >
          Retornar ao topo
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      {/* Fim da Quarta pagina*/}
    </div>
  );
}
