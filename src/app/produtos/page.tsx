import Image from "next/image";
import imgMicroservicos from "../../../public/images/microservicos.png";
import imgAuditoria from "../../../public/images/auditoria.png";
import imgErp from "../../../public/images/erp.png";
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
      <div className="grid grid-cols-3 sm:gap-1 items-start gap-4 pb-5 gap-y-2 max-w-screen-xl h-auto justify-center mt-12 p-2 lg:gap-x-2">
        <div className="items-center h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col  h-full ">
            <Image
              src={imgSGV}
              alt="img-logo-sgv"
              sizes="100vw"
              priority={true}
              className="m-auto object-cover w-full h-auto"
            />
          </div>
        </div>
        <div className="items-center col-span-2 h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-start justify-center h-auto">
            <h2 className=" text-2xl font-bold items-center justify-center mb-2 sm:text-[0.7rem] md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              GESTÃO INTELIGENTE DE VENDAS - REPRESENTANTES COMERCIAIS
            </h2>
            <p className="text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Público-alvo: Representantes comerciais e distribuidores de
              diversos setores
            </p>
            <p className="text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Setores atendidos:
            </p>
            <p>
              Autopeças, Materiais elétricos, Calçados e confecções, Materiais de
              construção, Distribuição em geral.
            </p>
            <p className="text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
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
             
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Organização de vendedores por:
            </p>
            <p>
              Fábrica Região Estado Mesorregião Cidade Ramo de atividade dos
              clientes
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Controle de Comissões
            </p>
            <p>
              Cálculo automático de comissões por vendedor Relatórios detalhados
              por período, região ou representada
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Painel de Inteligência Comercial
            </p>
            <p>
              Dashboard interativo com gráficos em tempo real Indicadores de
              desempenho por vendedor, região e produto Acompanhamento de metas
              e evolução de vendas
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Gestão de Metas
            </p>
            <p>
              Definição de metas personalizadas por vendedor ou equipe
              Monitoramento de progresso com alertas e comparativos
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Gestão de Usuários
            </p>
            <p>
              Controle de acesso por nível de permissão Perfis distintos para
              administradores, representantes e vendedores
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
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

      <div className="grid grid-cols-3 items-start sm:gap-1  gap-4 pb-5 gap-y-2 max-w-screen-xl h-auto justify-center mt-12 p-2 lg:gap-x-2">
        <div className="items-center h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-center justify-center h-full ">
            <Image
              src={imgIa}
              alt="img-ia"
              sizes="100vw"
              priority={true}
              className="m-auto object-cover w-full h-auto"
            />
          </div>
        </div>
        <div className="items-center col-span-2 h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-start justify-center h-auto">
            <h2 className="text-2xl font-bold items-center justify-center mb-2">
              INTELIGÊNCIA ARTIFICIAL
            </h2>
            <p className="text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Atendimento ao Cliente com Chatbots Inteligentes
            </p>
            <p className="text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              O que faz:
            </p>{" "}
            <p>
              Responde dúvidas, resolve problemas e realiza atendimentos 24/7.{" "}
            </p>
            <p className="text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Benefícios:{" "}
            </p>
            <p>
              Reduz tempo de espera, melhora a satisfação do cliente e libera a
              equipe humana para casos complexos. Exemplo: Chatbots treinados
              com IA generativa que entendem linguagem natural e aprendem com
              cada interação.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Gestão de Estoque e Logística Preditiva
            </p>
            <p>
              O que faz: Analisa padrões de consumo e prevê demandas futuras.
              Benefícios: Evita rupturas de estoque, reduz desperdícios e
              otimiza rotas de entrega. Exemplo: IA que sugere reposição
              automática com base em histórico de vendas e sazonalidade.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Automação de Processos Financeiros e Contábeis
            </p>
            <p>
              O que faz: Classifica despesas, concilia contas, gera relatórios e
              detecta inconsistências. Benefícios: Minimiza erros humanos,
              acelera fechamentos contábeis e garante conformidade fiscal.
              Exemplo: IA que identifica lançamentos duplicados ou suspeitos em
              tempo real.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Marketing Personalizado e Segmentação Inteligente
            </p>
            <p>
              O que faz: Analisa comportamento de clientes e cria campanhas sob
              medida. Benefícios: Aumenta conversões, reduz custo por aquisição
              e melhora o engajamento. Exemplo: Algoritmos que ajustam anúncios
              e e-mails com base em preferências individuais.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 items-start sm:gap-1  gap-4 pb-5 gap-y-2 max-w-screen-xl h-auto justify-center mt-12 p-2 lg:gap-x-2">
        <div className="items-center h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-center justify-center h-full ">
            <Image
              src={imgMicroservicos}
              alt="img-microservicos"
              sizes="100vw"
              priority={true}
              className="m-auto object-cover"
            />
          </div>
        </div>
        <div className="items-center col-span-2 h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-start justify-center h-auto">
            <h2 className="text-2xl font-bold items-center justify-center mb-2">
              Microserviços
            </h2>
            <p className="text-start sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Oferecemos uma arquitetura de microserviços que permite maior
              escalabilidade, flexibilidade e facilidade de manutenção para suas
              aplicações. Nossos microserviços são projetados para se integrarem
              perfeitamente com suas necessidades de negócios.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 items-start sm:gap-1  gap-4 pb-5 gap-y-2 max-w-screen-xl h-auto justify-center mt-12 p-2 lg:gap-x-2">
        <div className="items-center h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-center justify-center h-full ">
            <Image
              src={imgAuditoria}
              alt="img-auditoria"
              sizes="100vw"
              priority={true}
              className="m-auto object-cover w-full h-auto"
            />
          </div>
        </div>
        <div className="items-center col-span-2 h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-start justify-center h-auto">
            <h2 className="text-2xl font-bold items-center justify-center mb-2">
              Auditoria e Compliance
            </h2>
            <p className="text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Gestão Documental Integrada
            </p>
            <p>
              Armazena e organiza documentos como balancetes, diários, notas
              fiscais e relatórios. Permite anexar evidências e rastrear
              alterações com histórico completo.
            </p>

            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Rastreabilidade e Controle de Alterações
            </p>
            <p>
              Registra todas as modificações feitas nos dados e documentos.
              Garante transparência e facilita a identificação de
              inconsistências.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Relatórios Automatizados e Personalizáveis
            </p>
            <p>
              Gera relatórios de auditoria com base em dados reais e
              atualizados. Permite personalizar modelos conforme normas
              contábeis e exigências regulatórias.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Análise de Riscos e Conformidade
            </p>
            <p>
              Avalia riscos contábeis e fiscais com base em parâmetros
              definidos.
            </p>
            <p>
              Verifica aderência às normas como IFRS, CPC, SOX, entre outras.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Flexibilidade e Escalabilidade
            </p>
            <p>
              Adapta-se a diferentes tipos de auditoria: interna, externa,
              fiscal, operacional. Suporta múltiplos clientes, empresas e
              períodos contábeis.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 items-start sm:gap-1  gap-4 pb-5 gap-y-2 max-w-screen-xl h-auto justify-center mt-12 p-2 lg:gap-x-2">
        <div className="items-center h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-center justify-center h-full ">
            <Image
              src={imgErp}
              alt="img-erp"
              sizes="100vw"
              priority={true}
              className="m-auto object-cover w-full h-auto"
            />
          </div>
        </div>
        <div className="items-center col-span-2 h-auto shadow-2xl shadow-cyan-300 bg-background mb-3 p-2 sm:text-0.5sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
          <div className="flex flex-col items-start justify-center h-auto">
            <h2 className="text-2xl font-bold items-center justify-center mb-2">
              ERP (Enterprise Resource Planning)
            </h2>
            <p className="text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Integração Total dos Setores
            </p>
            <p>
              Conecta áreas como finanças, RH, vendas, estoque, produção e
              logística. Elimina silos de informação e melhora a comunicação
              interna.
            </p>

            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Automação de Processos
            </p>
            <p>
              Reduz tarefas manuais e repetitivas. Garante mais agilidade,
              precisão e economia de tempo.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Dados Centralizados e em Tempo Real
            </p>
            <p>
              Oferece uma única fonte de verdade para toda a empresa. Permite
              análises rápidas e decisões baseadas em dados confiáveis.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Escalabilidade e Flexibilidade
            </p>
            <p>
              Adapta-se ao crescimento da empresa e às mudanças de mercado.
              Permite personalizações conforme o setor ou modelo de negócio.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Segurança da Informação
            </p>
            <p>
              Controle de acesso por perfil de usuário. Criptografia, backups
              automáticos e conformidade com normas como LGPD.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Acesso Remoto e Mobilidade
            </p>
            <p>
              Funciona em nuvem e em dispositivos móveis. Ideal para equipes
              externas ou empresas com múltiplas unidades.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Inteligência Analítica e Relatórios Avançados
            </p>
            <p>
              Dashboards interativos e KPIs personalizados. Suporte à tomada de
              decisão estratégica com base em indicadores reais.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Integração com Outros Sistemas
            </p>
            <p>
              Conecta-se com CRMs, plataformas de e-commerce, sistemas fiscais e
              bancos. Evita retrabalho e garante fluidez nos processos.
            </p>
            <p className="mt-5 text-start text-amber-500 font-bold italic sm:text-sm md:text-lg lg:text-lg lg:text-wrap sm:text-wrap">
              Usabilidade e Suporte ao Usuário
            </p>
            <p>
              Interface intuitiva e fácil de navegar. Treinamentos, suporte
              técnico e atualizações constantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
