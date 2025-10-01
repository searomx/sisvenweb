"use client";
import AutoplayVideo from "@/components/AutoPlayVideo";
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
import imgEquipe from "../../public/images/img2.png";
import imgTeam from "../../public/images/team.png";
import imgWorkTeam from "../../public/images/work-team.png";
// import { ImTruck } from "react-icons/im";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div
        id="topo"
        className="min-w-full mx-auto backdrop-opacity-10 backdrop-invert bg-white/30 relative"
      >
        <div className="flex w-full justify-center p-2 mt-1">
          <AutoplayVideo />
        </div>
        {/* Primeira Pagina */}
        <div className="flex w-full flex-wrap items-center justify-center px-10 p-2 mt-10 m-auto lg:max-w-screen-xl">
          <div className="flex flex-col w-full items-center mb-3 p-2 text-center">
            <span className="text-zinc-800 max-[600px]:text-2xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
              O Que é o Sistema de Gerenciamento de Vendas - SGV.
            </span>
            <span className="text-zinc-800 max-[600px]:text-2xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
              Administração de vendas de maneira eficaz.
            </span>
            <span className="text-amber-500 text-shadow-lg/30 text-3xl lg:text-1xl md:text-xl font-medium flex text-wrap lg:text-wrap text-center">
              Tudo na palma da sua mão.
            </span>
          </div>
          <div className="p-4 max-w-sm lg:w-1/3">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium lg:z-50">
                  Work Team
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <Image
                  src={imgWorkTeam}
                  alt="img-team"
                  sizes="100vw"
                  priority={true}
                />
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  Nossas equipe é composta por jovens talentosos tanto no
                  desenvolvimento de novas idéias quanto no relacionamento com o
                  cliente. Fazemos a diferença.
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 max-w-sm lg:w-1/3">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Criando inovação
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <Image
                  src={imgTeam}
                  alt="img-team"
                  sizes="100vw"
                  priority={true}
                />
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  A todo momento estamos discutindo novas tecnologias para estar
                  sempre atualizados fazendo com que nossos clientes estejam
                  sempre na vanguarda.
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 max-w-sm lg:w-1/3">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Troca de Experiências
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
                <Image
                  className="object-cover shadow-lg rounded-lg"
                  src={imgEquipe}
                  alt="img-equipe"
                  sizes="100vw"
                  priority={true}
                />
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  Através de nossas reuniões semanais, trocamos experiências e
                  aprendemos uns com os outros, para que possamos sempre
                  melhorar e crescer juntos.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-screen-xl justify-center mt-1">
            <div className="flex flex-col items-center mb-3">
              <span className="text-amber-400 text-shadow-lg/30 max-[600px]:text-3xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
                O que nós podemos fazer por você hoje?
              </span>
              <span className="text-zinc-800 max-[600px]:text-2xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
                Juntos, vamos conectar seus clientes com suas representadas.
              </span>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <span className="text-zinc-800 max-[600px]:text-2xl italic text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
                Nosso aplicativo foi elaborado para dar agilidade na conversão
                de negócios em seus clientes, ou seja, o necessário, somente o
                necessário de ações para que você possa focar no que realmente
                importa: &quot;Atender o máximo de clientes possível, direto ao
                ponto!&quot;.
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
          className="flex w-full flex-wrap justify-center p-5 mt-10 m-auto lg:max-w-screen-xl"
        >
          <div className="flex flex-col items-center mb-3 p-2">
            <div className="flex p-1 bg-slate-50 w-full justify-center items-center">
              <span className="text-zinc-600 max-[600px]:text-xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium flex text-wrap lg:text-wrap text-center">
                Como funciona o SGV
              </span>
            </div>
            <span className="text-zinc-800 text-shadow-lg/30 max-[600px]:text-3xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
              Dashboard Intuitivo
            </span>
            <span className="text-zinc-800 max-[600px]:text-2xl italic text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
              Você administra de forma eficiente, visual e em tempo real, o
              desempenho de sua equipe.
            </span>
            <div className="flex flex-col max-w-screen-xl justify-center mt-1">
              <Image
                src="/images/img-dash-1.png"
                alt="img-dashboard"
                width={1000}
                height={500}
                priority={true}
              />
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
        </div>
        {/* Fim da Segunda Pagina */}

        {/* Terceira Pagina */}

        <div
          id="gestao"
          className="flex w-full flex-wrap justify-center p-1 items-center"
        >
          <span className="text-zinc-800 text-3xl lg:text-1xl md:text-xl font-medium flex text-wrap lg:text-wrap text-center">
            Administre de maneira rápida e intuitiva através dos painéis de
            gestão.
          </span>
        </div>
        <div className="max-w-screen-xl w-auto h-auto mx-auto px-5 py-1 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col h-96 rounded overflow-hidden shadow-lg bg-teal-400">
              <Image
                src={imgGraph1}
                alt="img-grafico-barras"
                sizes="100vw"
                priority={true}
              />
              <span className="text-gray-700 text-sm p-1">
                Acompanhe o desempenho de sua equipe de vendas e compare com
                períodos anteriores.
              </span>
            </div>

            <div className="flex min-h-full flex-col items-center justify-center">
              <div className="group h-full w-full [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="flex flex-col h-auto absolute inset-0 rounded overflow-hidden shadow-lg bg-teal-400">
                    <Image
                      src={imgGraph2}
                      alt="img-grafico-pizza"
                      sizes="100vw"
                      className="hover:transform-scale-x-100"
                      priority={true}
                    />

                    <span className="text-gray-700 text-sm p-1">
                      Acompanhe em tempo real o desempenho de cada fábrica e
                      tome decisões rápidas.
                    </span>
                    <span className="text-md italic">
                      colocando o mouse sobre a fatia da fábrica, é retornado no
                      verso os pedidos relativos às vendas registradas no mês
                      corrente.
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
            <div className="rounded overflow-hidden shadow-lg flex flex-col bg-teal-400">
              <Image
                src={imgGraph4}
                alt="img-grafico-barras"
                width={1200}
                height={800}
                priority={true}
              />
              <span className="text-gray-700 text-sm p-1">
                Acompanhe em tempo real a evolução de vendas x metas.
              </span>
            </div>
            <div className="rounded overflow-hidden shadow-lg flex flex-col bg-teal-400">
              <Image
                src={imgGraph5}
                alt="img-grafico-barras"
                sizes="100vw"
                priority={true}
              />
              <span className="text-gray-700 text-sm p-1">
                Acompanhe a evolução individual de vendas x metas
              </span>
            </div>
            <div className="rounded overflow-hidden shadow-lg flex flex-col bg-teal-400">
              <Image
                src={imgGraph6}
                alt="img-grafico-barras"
                sizes="100vw"
                priority={true}
              />
              <span className="text-gray-700 text-sm p-1">
                Ranking de Clientes na Curva ABC.
              </span>
            </div>
            <div className="rounded overflow-hidden shadow-lg flex flex-col bg-teal-400">
              <Image
                src={imgGraph7}
                alt="img-grafico-barras"
                sizes="100vw"
                priority={true}
              />
              <span className="text-gray-700 text-sm p-1">
                Faturamento acumulado por fábrica no ano corrente.
              </span>
            </div>
            <div className="rounded overflow-hidden shadow-lg bg-teal-400 h-auto w-auto">
              <Image
                src={imgGraph8}
                alt="img-grafico-barras"
                sizes="100vw"
                priority={true}
              />
              <span className="text-gray-700 text-sm p-1">
                Faturamento distribuido por atividade do cliente no mês
                corrente.
              </span>
            </div>
            <div>
              <div className="rounded overflow-hidden shadow-lg bg-teal-400 h-full w-auto">
                <Image
                  src={imgGraph9}
                  alt="img-grafico-barras"
                  sizes="100vw"
                  priority={true}
                  quality={100}
                />
                <span className="text-gray-700 text-sm p-1">
                  Evolução de vendas diárias contrastando com a meta de vendas.
                </span>
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

          <div
            id="segmentos"
            className="flex p-1 bg-slate-50 w-full justify-center items-center"
          >
            <span className="text-zinc-600 max-[600px]:text-xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium flex text-wrap lg:text-wrap text-center">
              Segmentos Atendidos
            </span>
          </div>
          <div className="flex gap-2 max-w-screen-xl justify-center mt-1">
            <ul className="list-disc list-inside text-lg">
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
          {/* Fim da Terceira Pagina */}
        </div>
      </div>
    </div>
  );
}
