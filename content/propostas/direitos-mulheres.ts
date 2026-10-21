import type { Proposta } from "@/lib/types";

// Tema: Direitos das mulheres. Status "aprovado" (revisado em 2026-10-21). Linguagem simples.
export const direitosMulheres: Proposta[] = [
  {
    id: "direitos-mulheres-flavio-brasil-por-elas",
    temaId: "direitos-mulheres",
    candidaturaId: "flavio",
    titulo: "Brasil por Elas: proteção, renda e creche",
    resumoFiel: `O plano reúne num programa chamado "Brasil por Elas" várias medidas para mulheres. Cita a Central da Mulher (um local e um aplicativo) com ajuda jurídica, psicológica, de saúde e de emprego, e juntar os canais de denúncia num só sistema. Promete tornozeleira para monitorar agressores com medida protetiva (numa página fala em todos, em outra nos de maior risco), que agressores de mulheres cumpram a pena inteira na prisão e mais abrigos para quem sofre violência. Fala também em internet grátis para usar esses serviços, ajuda para organizar as contas e conseguir crédito, apoio para pôr a casa no nome da mulher, cursos de trabalho, mais exames preventivos e mais creches, com um vale-creche para creche particular quando faltar vaga.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Mais creche poderia ajudar a mãe a trabalhar ou estudar, e juntar a denúncia com o monitoramento do agressor poderia dar um atendimento mais rápido em casos de violência. Depende da estrutura dos estados e das regras do vale.`,
    condicoes: [
      `Fazer parcerias com estados e cidades para abrir unidades e creches`,
      `Definir o valor e as regras do vale-creche`,
    ],
    incertezas: [
      `O plano não diz de onde viria o dinheiro da rede de cuidado`,
      `Não diz quantas creches ou vales seriam criados`,
    ],
    relevantePara: ["casa-familia", "autonomo-mei", "empresario", "estudante"],
    fontes: [
      {
        titulo: "Tolerância zero para o feminicídio",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 14,
      },
      {
        titulo: "Brasil por Elas / Central da Mulher",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 17,
      },
      {
        titulo: "Aplicativo Central da Mulher / ClarIA",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 18,
      },
      {
        titulo: "Denúncia facilitada / Orientação financeira",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 19,
      },
      {
        titulo: "Casa Segura / Escola Brasil por Elas / Mais Trabalho para Elas",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 20,
      },
      {
        titulo: "Creche garantida para toda criança / Saúde para Elas",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 21,
      },
    ],
    statusRevisao: "aprovado",
    revisadoEm: "2026-10-21",
  },
  {
    id: "direitos-mulheres-lula-pacto-feminicidio-igualdade-salarial",
    temaId: "direitos-mulheres",
    candidaturaId: "lula",
    titulo: "Pacto contra o feminicídio, Casas da Mulher e igualdade salarial",
    resumoFiel: `O plano quer continuar o Pacto contra o feminicídio (quando a mulher é morta por ser mulher). Afirma que o governo atual já reduziu de 16 para 3 dias o tempo para sair uma medida protetiva. Promete terminar 30 Casas da Mulher Brasileira (vários atendimentos num lugar só) e 15 Centros de Referência da Mulher, ampliar as Salas Lilás (salas de atendimento à mulher) e dar aos estados equipamentos para monitorar agressores. Quer obrigar as empresas onde houver diferença de salário entre homens e mulheres a seguir um plano com metas para reduzir essa diferença aos poucos. Fala em manter crédito para agricultoras e cursos como o Mulheres Mil. Na saúde, quer reforçar a entrega de absorventes e remédios para a menstruação (o plano diz que a Farmácia Popular já distribui absorventes), ampliar anticoncepcionais de longa duração no SUS e reduzir as mortes de mães no parto, com atenção às mulheres negras e da zona rural.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Mulheres em situação de violência poderiam achar atendimento mais fácil e rápido, e aos poucos a diferença de salário entre homens e mulheres poderia diminuir. Depende de terminar as obras e de como a fiscalização vai funcionar.`,
    condicoes: [
      `Terminar as 30 Casas da Mulher que o plano promete concluir`,
      `Criar as regras que tornam o plano de igualdade salarial obrigatório para as empresas`,
    ],
    incertezas: [
      `O plano não dá prazo para terminar as Casas da Mulher`,
      `Não diz que punição a empresa teria se não cumprir as metas de igualdade salarial`,
      `Não diz quanto isso custaria nem de onde viria o dinheiro`,
    ],
    relevantePara: ["clt", "servidor", "casa-familia", "autonomo-mei", "rural"],
    fontes: [
      {
        titulo: "Pacto contra o Feminicídio / Casas da Mulher / Lei de Igualdade Salarial / Mulheres Mil",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 21,
      },
      {
        titulo: "Empreendedorismo feminino e mulheres na ciência",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 22,
      },
      {
        titulo: "Maternidades / Farmácia Popular / Implanon",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 38,
      },
      {
        titulo: "Mortalidade materna e mulheres negras e rurais",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 39,
      },
      {
        titulo: "Obrigatoriedade de planos de ação de igualdade salarial",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 75,
      },
    ],
    statusRevisao: "aprovado",
    revisadoEm: "2026-10-21",
  },
];
