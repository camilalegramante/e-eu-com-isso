import type { Proposta } from "@/lib/types";

// Tema: Segurança pública. Status "aprovado" (revisado em 2026-10-21). Linguagem simples.
export const seguranca: Proposta[] = [
  {
    id: "seguranca-flavio-brasil-sem-medo",
    temaId: "seguranca",
    candidaturaId: "flavio",
    titulo: `Declarar "guerra ao crime organizado" e endurecer penas`,
    resumoFiel: `O plano quer declarar PCC, Comando Vermelho, milícias e outras facções como "organizações narcoterroristas" e bloquear o dinheiro delas. O texto diz que "bandido armado com fuzil na mão vai ser abatido pelas forças de segurança". Quer criar uma tropa das Forças Armadas para vigiar as fronteiras contra armas e drogas, e ocupar e vigiar portos e aeroportos. Promete 5 novos presídios de segurança máxima e meio milhão de novas vagas na prisão em 4 anos, junto com os estados. Apoia baixar de 18 para 16 anos a idade para responder como adulto, e punir a partir de 14 anos quem cometer crimes graves. Quer acabar com a progressão de regime (passar para uma prisão mais branda antes do fim da pena) em crimes hediondos (os mais graves) e aumentar a pena para quem furta ou revende celular. Promete dobrar o dinheiro federal para segurança e instalar mais de 1 milhão de câmeras com reconhecimento facial.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Poderia haver mais forças de segurança em áreas dominadas pelo crime, nas fronteiras e em portos. Se o Congresso aprovar, jovens de 16 e 17 anos (e de 14 e 15 anos, em crimes graves) poderiam passar a responder como adultos. Quem for condenado poderia ficar mais tempo preso.`,
    condicoes: [
      `Fazer acordos com estados e cidades, inclusive para as novas vagas nas prisões`,
      `Mudar a Constituição para baixar a idade penal (precisa do Congresso)`,
    ],
    incertezas: [
      `O plano não diz de onde viria todo o dinheiro`,
      `Não detalha prazos nem como as câmeras e a tropa de fronteira funcionariam`,
    ],
    relevantePara: ["casa-familia", "estudante", "rural", "autonomo-mei"],
    fontes: [
      {
        titulo: "Brasil sem Medo",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 13,
      },
      {
        titulo: "Mais presídios, menos bandidos soltos",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 14,
      },
      {
        titulo: "Menos verbo, mais verba / Muralha Brasileira",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 15,
      },
      {
        titulo: "Crimes hediondos e roubo de celular",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 16,
      },
    ],
    statusRevisao: "aprovado",
    revisadoEm: "2026-10-21",
  },
  {
    id: "seguranca-lula-susp-ministerio",
    temaId: "seguranca",
    candidaturaId: "lula",
    titulo: "Juntar forças contra o crime e criar um Ministério da Segurança",
    resumoFiel: `O plano quer aprovar a PEC da Segurança, já enviada ao Congresso. Ela muda a Constituição para dar mais papel ao governo federal na segurança, junto com estados e cidades. Se a PEC for aprovada, promete criar um Ministério da Segurança Pública. Promete manter a Lei Antifacção (já aprovada em 2026) e reforçar o programa Brasil Contra o Crime Organizado (já existente), que prevê R$ 10 bilhões para estados e cidades investirem em equipamentos e estrutura. Quer reforçar os presídios federais para isolar chefes de facção e manter o controle de armas. Promete ampliar o incentivo para policiais usarem câmeras no uniforme, manter as Forças Armadas na fronteira da Amazônia e ampliar o Celular Seguro (programa que já existe contra roubo de celular).`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Se a PEC for aprovada, polícias e governos poderiam trocar mais informações e agir juntos contra facções na sua cidade. Policiais com câmera no uniforme poderiam ficar mais comuns, se os estados aderirem.`,
    condicoes: [
      `O Congresso precisa aprovar a PEC da Segurança`,
      `Depende de estados e cidades trabalharem juntos e do uso dos R$ 10 bilhões`,
    ],
    incertezas: [
      `O plano não diz quando a PEC e o novo ministério sairiam`,
      `Não dá para saber, só pelo texto, o tamanho do efeito na violência`,
    ],
    relevantePara: ["casa-familia", "estudante", "rural", "autonomo-mei"],
    fontes: [
      {
        titulo:
          "Proteger a vida com uma segurança pública mais eficiente e integrada",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 26,
      },
      {
        titulo: "PEC enviada, Lei Antifacção e Programa Brasil Contra o Crime Organizado",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 27,
      },
      {
        titulo: "Sistema prisional e controle de armas",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 28,
      },
      {
        titulo: "Fronteira na Amazônia e Celular Seguro",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 29,
      },
      {
        titulo: "Ministério da Segurança Pública e câmeras corporais",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 30,
      },
    ],
    statusRevisao: "aprovado",
    revisadoEm: "2026-10-21",
  },
];
