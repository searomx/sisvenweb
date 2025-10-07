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
import imgDjrDjalmas from "../../public/images/djr-djalmas.png";
import imgDjrNorthon from "../../public/images/djr-northon.png";
// import { ImTruck } from "react-icons/im";

export default function Home() {
  return (
    <div className="container sm:max-w-screen mx-auto bg-neutral-950 dark:bg-neutral-900">
      <div
        id="topo"
        className="min-w-full mx-auto backdrop-opacity-10 backdrop-invert relative"
      >
        <div className="flex w-full h-full justify-center mt-1 p-1 shadow-2xl shadow-cyan-300 bg-background overflow-hidden">
          <AutoplayVideo />
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
            <div className="flex h-full dark:bg-gray-800 p-1 flex-col">
              <div className="flex items-center justify-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium lg:z-50">
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
                <span className="text-gray-300 dark:text-gray-400 text-lg">
                  Nossas equipe é composta por jovens talentosos tanto no
                  desenvolvimento de novas idéias quanto no relacionamento com o
                  cliente. Fazemos a diferença.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full sm:max-w-sm lg:w-full h-auto m-auto shadow-xl shadow-cyan-300 bg-background">
            <div className="flex h-full dark:bg-gray-800 p-1 flex-col">
              <div className="flex items-center justify-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium lg:z-50">
                  Criando inovação
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
                <span className="text-gray-300 dark:text-gray-400 text-lg">
                  A todo momento estamos discutindo novas tecnologias para estar
                  sempre atualizados fazendo com que nossos clientes estejam
                  sempre na vanguarda.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full sm:max-w-sm lg:w-full h-auto m-auto shadow-xl shadow-cyan-300 bg-background">
            <div className="flex h-full dark:bg-gray-800 p-1 flex-col">
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
                <span className="text-gray-300 dark:text-gray-400 text-lg">
                  Através de nossas reuniões semanais, trocamos experiências e
                  aprendemos uns com os outros, para que possamos sempre
                  melhorar e crescer juntos.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-5 mb-8 max-w-screen-2xl justify-center mt-1 lg:gap-x-2 shadow-2xl shadow-cyan-300 bg-background p-5">
          <div className="flex flex-col items-center mb-3">
            <span className="text-amber-400 text-shadow-lg/30 text-shadow-amber-100 max-[600px]:text-3xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
              O que nós podemos fazer por você hoje?
            </span>
            <span className="text-gray-300 max-[600px]:text-2xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
              Juntos, vamos conectar seus clientes com suas representadas.
            </span>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <span className="text-gray-300 max-[600px]:text-2xl italic text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
              Nosso aplicativo foi elaborado para dar agilidade na conversão de
              negócios em seus clientes, ou seja, o necessário, somente o
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
        className="gap-y-2 max-w-screen-xl justify-center mt-1 lg:flex-wrap lg:gap-x-2 lg:m-auto"
      >
        <div className="items-center mb-3 p-2">
          <div className="flex p-1 bg-slate-50 w-full justify-center items-center">
            <span className="text-zinc-600 max-[600px]:text-xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium flex text-wrap lg:text-wrap text-center">
              Como funciona o SGV
            </span>
          </div>
          <span className="text-gray-300 text-shadow-lg/30 max-[600px]:text-3xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
            Dashboard Intuitivo
          </span>

          <div className="flex flex-col gap-y-2 w-full justify-center mt-1 lg:gap-x-2 shadow-xl shadow-cyan-300 bg-background">
            <div className="flex flex-col min-h-auto overflow-hidden bg-background object-cover p-1">
              <Image
                src="/images/img-dash-1.png"
                alt="img-dashboard"
                width={1000}
                height={500}
                priority={true}
                sizes="100vw"
                className="object-cover w-full max-w-full"
              />

              <span className="text-gray-300 max-[600px]:text-2xl italic text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium text-wrap lg:text-wrap text-center">
                Você administra de forma eficiente, visual e em tempo real, o
                desempenho de sua equipe.
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
        <span className="text-zinc-300 text-3xl lg:text-1xl md:text-xl font-medium flex text-wrap lg:text-wrap text-center">
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
            <span className="text-gray-300 text-sm p-1">
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

                  <span className="text-gray-300 text-sm p-1">
                    Acompanhe em tempo real o desempenho de cada fábrica e tome
                    decisões rápidas.
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
          <div className="rounded overflow-hidden flex flex-col shadow-2xl shadow-cyan-300 bg-background">
            <Image
              src={imgGraph4}
              alt="img-grafico-barras"
              width={1200}
              height={800}
              priority={true}
            />
            <span className="text-gray-300 text-sm p-1">
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
            <span className="text-gray-300 text-sm p-1">
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
            <span className="text-gray-300 text-sm p-1">
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
            <span className="text-gray-300 text-sm p-1">
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
            <span className="text-gray-300 text-sm p-1">
              Faturamento distribuido por atividade do cliente no mês corrente.
            </span>
          </div>
          <div>
            <div className="rounded overflow-hidden shadow-2xl shadow-cyan-300 bg-background h-full w-auto">
              <Image
                src={imgGraph9}
                alt="img-grafico-barras"
                sizes="100vw"
                priority={true}
              />
              <span className="text-gray-300 text-sm p-1">
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
        {/* Fim da Terceira Pagina*/}

        {/* Início da Quarta Pagina*/}
        <div
          id="depoimentos"
          className="flex p-1 bg-slate-50 w-full h-5 justify-center items-center"
        ></div>
        <div className="grid grid-cols-3 gap-4 pb-5 gap-y-2 max-w-screen-xl h-auto justify-center mt-10 lg:gap-x-2">
          <span className="text-gray-300 p-1 col-span-3 text-3xl sm:text-2xl lg:text-2xl md:text-xl font-medium flex text-wrap lg:text-wrap text-center">
            O que dizem nossos clientes.
          </span>
          <div className="flex mb-3 p-2 h-auto w-full shadow-2xl shadow-cyan-300 bg-background">
            <Image
              src={imgDjrDjalmas}
              alt="img-djalmas-djr"
              sizes="100vw"
              priority={true}
              className="m-auto object-cover"
            />
          </div>
          <div className="items-center  shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 col-span-2 h-auto sm:overflow-y-scroll sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
            <p className="text-gray-300">
              &quot;Há duas décadas, quando decidimos implementar o SGV Gestão de
              Vendas em nossa empresa, não imaginávamos o impacto transformador
              que essa decisão teria. Na época, enfrentávamos dificuldades para
              organizar nossos processos comerciais, acompanhar o desempenho da
              equipe e entender com clareza os números do nosso negócio. O SGV
              chegou como uma solução completa, intuitiva e eficiente, que
              revolucionou a forma como gerenciamos nossas vendas.
            </p>
            <p className="text-gray-300">
              Com o passar dos anos, o SGV evoluiu junto com a nossa empresa. A
              cada atualização, novas funcionalidades foram incorporadas, sempre
              alinhadas às necessidades do mercado e às exigências do nosso
              crescimento. Hoje, temos uma visão estratégica em tempo real,
              conseguimos tomar decisões com base em dados concretos e nossa
              equipe comercial atua com muito mais agilidade e precisão. Graças
              ao SGV, nossas vendas cresceram de forma consistente, e
              conseguimos expandir nossa atuação para novos mercados.
            </p>
            <p className="italic text-amber-600">
              O software não é apenas uma ferramenta — é um parceiro de
              negócios.
            </p>
            <p className="text-gray-300">
              Se estamos onde estamos hoje, com uma empresa sólida e em
              constante evolução, muito se deve à confiança e ao suporte que o
              SGV nos proporcionou ao longo desses 20 anos.&quot;
            </p>
            <p className="text-gray-300">- Dejalmas de Oliveira </p>
            <p>- Djr Representações Comerciais</p>
            <p>- Chapecó - SC</p>
          </div>
          <div className="flex mb-3 p-2 h-auto w-full shadow-2xl shadow-cyan-300 bg-background">
            <Image
              src={imgDjrNorthon}
              alt="img-northon-djr"
              sizes="100vw"
              priority={true}
              className="m-auto  object-cover"
            />
          </div>
          <div className="items-center  shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 col-span-2 h-auto sm:overflow-y-scroll sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
            <p className="text-gray-300">
              &quot;Trabalhamos com representação comercial há mais de 25 anos, e
              posso dizer com tranquilidade que o SGV Gestão de Vendas foi um
              divisor de águas na nossa operação. Desde que adotamos o sistema,
              conseguimos transformar completamente nossa abordagem de
              prospecção e conversão de vendas.
            </p>
            <p className="text-gray-300">
              Antes do SGV, o processo de identificar leads qualificados era
              lento e pouco eficiente. Hoje, com os recursos de segmentação,
              histórico de contatos e acompanhamento de oportunidades,
              conseguimos mapear com precisão os clientes com maior potencial.
              Isso nos permite agir de forma estratégica, com ofertas
              personalizadas e no momento certo. Além disso, o SGV nos dá uma
              visão clara do funil de vendas, facilitando o acompanhamento de
              cada etapa e otimizando o tempo da equipe.
            </p>
            <p className="text-gray-300">
              A taxa de conversão aumentou significativamente, e conseguimos
              ampliar nossa carteira de clientes sem perder o controle da
              operação.
            </p>
            <p className="text-gray-300">
              O SGV não é apenas um software — é uma ferramenta inteligente que
              trabalha junto com a gente.
            </p>
            <p className="text-gray-300">
              Ele nos ajuda a enxergar oportunidades onde antes víamos
              obstáculos. Para a DJR Representações, é sinônimo de crescimento
              sustentável e vendas com propósito&quot;
            </p>
            <p className="text-gray-300">- Northon - Gerente Comercial </p>
            <p>- DJR Representações Comerciais</p>
            <p>- Chapecó - SC</p>
          </div>
        </div>

        <div
          id="segmentos"
          className="flex p-1 bg-slate-50 w-full justify-center items-center"
        >
          <span className="text-zinc-600 max-[600px]:text-xl text-5xl lg:text-2xl md:text-xl sm:text-sm font-medium flex text-wrap lg:text-wrap text-center">
            Segmentos Atendidos
          </span>
        </div>
        <div className="flex gap-2 max-w-screen-xl justify-center mt-1 shadow-2xl shadow-cyan-300 bg-background">
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
    </div>
  );
}
