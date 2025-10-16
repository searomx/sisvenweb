"use client";
import Image from "next/image";
import imgMicroservicos from "../../../public/images/microservicos.png";
import imgIa from "../../../public/images/ia.png";
import imgSGV from "../../../public/images/logo-sgv.png";

export default function Produtos() {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex text-center items-center justify-center mb-5 mt-12 px-5">
        <h1 className="text-4xl font-bold mb-4">Produtos e Serviços</h1>
      </div>
      <div className="max-w-3xl mx-auto text-center mb-10 px-5">
        <p className="text-start sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          Explore nossa gama de produtos e serviços projetados para atender às
          suas necessidades. Desde soluções personalizadas até suporte dedicado,
          estamos aqui para ajudar você a alcançar seus objetivos.
        </p>
      </div>
      <div className="relative max-w-screen-xl w-full justify-center items-center h-auto mx-auto lg:py-0 sm:p-10 md:p-16 shadow-2xl shadow-cyan-300">
        <Image
          src={imgSGV}
          alt="img-sgv"
          width={90}
          height={90}
          priority={true}
          className="m-auto object-cover h-auto"
        />
      </div>
      <div
        className={`items-center justify-center shadow-2xl
                   shadow-cyan-300 bg-background mb-1 
                   p-2 col-span-2 h-auto 
                   sm:text-0.5sm md:text-lg lg:text-lg 
                   lg:text-wrap sm:text-wrap`}
      >
        <h3 className="text-center text-xl font-bold items-center justify-center mb-2 sm:text-[0.7rem] md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          GESTÃO INTELIGENTE DE VENDAS - REPRESENTANTES COMERCIAIS
        </h3>
        <div className="flex flex-col justify-center h-auto">
          <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
            Público-alvo: Representantes comerciais e distribuidores de diversos
            setores
          </p>
          <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
            Setores atendidos:
          </p>
          <div
            className={`text-start justify-center shadow-2xl
                   shadow-cyan-300 bg-background mb-1 lg:w-2/4 sm:w-full m-auto
                   p-2 h-auto
                   sm:text-0.5sm md:text-lg lg:text-lg 
                   lg:text-wrap sm:text-wrap`}
          >
            <ul className="list-disc list-inside">
              <li>Autopeças</li>
              <li>Materiais elétricos e hidráulicos</li>
              <li>Calçados e confecções</li>
              <li>Materiais de construção</li>
              <li>Distribuição em geral</li>
            </ul>

            <div className="mt-3">
              <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
                Gestão Comercial:
              </p>

              <ul className="list-disc list-inside">
                <li>Administração completa da carteira de clientes</li>
                <li>Cadastro e controle</li>
                <li>Histórico de compras</li>
                <li>Limites de crédito</li>
                <li>Condições comerciais</li>
                <li>múltiplas fábricas por representante</li>
                <li>Gestão de pedidos e comissões</li>
              </ul>
            </div>
            <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Organização de vendedores por:
            </p>

            <ul className="list-disc list-inside">
              <li>Representada</li>
              <li>Região</li>
              <li>Estado</li>
              <li>Mesorregião</li>
              <li>Cidade</li>
              <li>Clientes</li>
              <li>Ramo de atividade</li>
            </ul>

            <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Controle de Comissões
            </p>
            <ul className="list-disc list-inside">
              <li>Cálculo automático de comissões por:</li>
              <ul className="list-disc list-inside pl-6">
                <li>vendedor</li>
                <li>Relatórios detalhados por período</li>
                <li>região</li>
                <li>representada</li>
              </ul>
            </ul>
            <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Painel de Inteligência Comercial
            </p>
            <p>
              Dashboard interativo com gráficos em tempo real Indicadores de
              desempenho por vendedor, região e produto Acompanhamento de metas
              e evolução de vendas
            </p>
            <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Gestão de Metas
            </p>
            <p>
              Definição de metas personalizadas por vendedor ou equipe
              Monitoramento de progresso com alertas e comparativos
            </p>
            <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Gestão de Usuários
            </p>
            <p>
              Controle de acesso por nível de permissão Perfis distintos para
              administradores, representantes e vendedores
            </p>
            <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Diferenciais Competitivos
            </p>
            <p>
              Interface intuitiva e responsiva (ideal para uso em campo)
              Adaptável a diferentes segmentos industriais Otimizado para
              performance e escalabilidade Integração com sistemas ERP e
              ferramentas de BI (se aplicável) Suporte técnico e atualizações
              constantes
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-xl w-full justify-center items-center h-auto mx-auto lg:py-0 sm:p-10 md:p-16 shadow-2xl shadow-cyan-300">
        <Image
          src={imgIa}
          alt="img-ia"
          width={500}
          height={300}
          priority={true}
          className="m-auto object-cover h-auto"
        />
      </div>
      <h3 className="text-center text-xl font-bold items-center justify-center mb-2 sm:text-[0.7rem] md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
        INTELIGÊNCIA ARTIFICIAL
      </h3>
      <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
        O que faz:
      </p>
      <ul
        className={`list-disc list-inside text-start justify-center shadow-2xl
                   shadow-cyan-300 bg-background mb-1 lg:w-2/4 sm:w-full m-auto
                   p-2 h-auto
                   sm:text-0.5sm md:text-lg lg:text-lg 
                   lg:text-wrap sm:text-wrap`}
      >
        <li>Atendimento ao Cliente com Chatbots Inteligentes</li>
        <li>Análise Preditiva para Vendas e Marketing</li>
        <li>Automação de Processos com IA</li>
        <li>Personalização de Experiência do Usuário</li>
        <li>Detecção de Fraudes e Segurança</li>
        <li>Otimização de Cadeia de Suprimentos</li>
        <li>Reconhecimento de Imagens e Vídeos</li>
        <li>
          Responde dúvidas, resolve problemas e realiza atendimentos 24/7.
        </li>
      </ul>
      <p className="text-center text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
        Gestão de Estoque e Logística Preditiva - O que faz:
      </p>
      <ul
        className={`list-disc list-inside text-start justify-center shadow-2xl
                   shadow-cyan-300 bg-background mb-1 lg:w-2/4 sm:w-full m-auto
                   p-2 h-auto
                   sm:text-0.5sm md:text-lg lg:text-lg 
                   lg:text-wrap sm:text-wrap`}
      >
        <li>Analisa padrões de consumo e prevê demandas futuras.</li>
        <li className="text-amber-400">Benefícios:</li>
        <ul className="list-disc list-inside ml-6">
          <li>
            Evita rupturas de estoque, reduz desperdícios e otimiza rotas de
            entrega. Exemplo: IA que sugere reposição automática com base em
            histórico de vendas e sazonalidade.
          </li>
        </ul>
        <p className="text-amber-400 text-xl lg:text-lg sm:text-sm md:text-md">
          Automação de Processos Financeiros e Contábeis
        </p>
        <li>O que faz:</li>
        <ul className="list-disc list-inside ml-6">
          <li>
            Automatiza lançamentos, conciliações e relatórios financeiros.
          </li>
        </ul>
        <li className="text-amber-400">Benefícios:</li>
        <ul className="list-disc list-inside ml-6">
          <li>
            Classifica despesas, concilia contas, gera relatórios e detecta
            inconsistências. Benefícios: Minimiza erros humanos, acelera
            fechamentos contábeis e garante conformidade fiscal. Exemplo: IA que
            identifica lançamentos duplicados ou suspeitos em tempo real.
          </li>
          <li>
            Exemplo: IA que categoriza despesas automaticamente a partir de
            notas fiscais digitalizadas.
          </li>
        </ul>
      </ul>
      <div className="relative max-w-screen-xl w-full justify-center items-center h-auto mx-auto lg:py-0 sm:p-10 md:p-16 shadow-2xl shadow-cyan-300">
        <Image
          src={imgMicroservicos}
          alt="img-microservicos"
          width={500}
          height={200}
          priority={true}
          className="m-auto object-cover h-auto"
        />
      </div>
      <h3 className="text-center text-xl font-bold items-center justify-center mb-2 sm:text-[0.7rem] md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
        MICROSERVIÇOS
      </h3>
      <p className={`list-disc list-inside text-start justify-center shadow-2xl
                   shadow-cyan-300 bg-background mb-1 lg:w-2/4 sm:w-full m-auto
                   p-2 h-auto
                   sm:text-0.5sm md:text-lg lg:text-lg 
                   lg:text-wrap sm:text-wrap`}>
        Oferecemos uma arquitetura de microserviços que permite maior
        escalabilidade, flexibilidade e facilidade de manutenção para suas
        aplicações. Nossos microserviços são projetados para se integrarem
        perfeitamente com suas necessidades de negócios.
      </p>
      <div className="relative max-w-screen-xl w-full justify-center items-center h-16 mx-auto lg:py-0 sm:p-10 md:p-16">
      </div>
    </div>
    
  );
}
