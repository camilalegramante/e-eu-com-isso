# CLAUDE.md — E eu com isso?

## 1. Visão do projeto

**Nome:** E eu com isso?

**Idioma:** Português brasileiro (pt-BR).

**Tipo:** Aplicação web responsiva e acessível.

**Objetivo:** Ajudar pessoas a entender como as propostas documentadas de candidatos à Presidência do Brasil podem afetar sua vida cotidiana, usando exemplos concretos, linguagem simples e fontes verificáveis.

A experiência deve aproximar política do cotidiano, respondendo à pergunta: **“O que essa proposta pode mudar na minha vida?”**

O produto não deve dizer ao usuário em quem votar. Deve fornecer informações claras, contextualizadas e verificáveis para que cada pessoa forme sua própria opinião.

## 2. Contexto de desenvolvimento

- O projeto será desenvolvido por uma única pessoa, com auxílio do Claude Code.
- O prazo inicial para construir e publicar um MVP é de três dias.
- O uso do Claude Code não tem limite prático de interações para este projeto.
- O repositório pode estar vazio ou conter apenas arquivos de instruções no início.
- A prioridade é lançar uma experiência funcional, confiável e apresentável, sem tentar construir uma plataforma completa.
- O planejamento deve ser concluído antes de começar a implementação.
- Depois que o planejamento for aprovado, trabalhe em incrementos pequenos e verificáveis.

Considere o prazo como uma restrição real. Prefira soluções simples, tecnologias familiares e bibliotecas consolidadas. Evite infraestrutura que não seja indispensável ao MVP.

## 3. Público-alvo

O produto deve ser útil principalmente para pessoas que:

- Não gostam de acompanhar política ou não têm tempo para isso.
- Têm dificuldade para entender programas de governo, termos técnicos e notícias políticas.
- Querem compreender os possíveis impactos de propostas na sua renda, trabalho, família e rotina.
- Desejam comparar candidatos sem depender exclusivamente de propaganda eleitoral, influenciadores ou opiniões de terceiros.
- Querem compartilhar informações úteis com amigos e familiares.

Não presuma que o usuário conhece termos políticos, econômicos ou jurídicos.

## 4. Princípios editoriais obrigatórios

### 4.1. Imparcialidade metodológica

- Não recomendar candidatos.
- Não atribuir notas, pontuações, rankings ou porcentagens de compatibilidade entre candidatos e usuários.
- Não classificar candidatos como bons, ruins, melhores ou piores.
- Não favorecer nem prejudicar partidos, ideologias ou candidaturas.
- Aplicar os mesmos critérios de verificação, apresentação e detalhamento a todos os candidatos.
- Não selecionar ou omitir informações com a intenção de influenciar o voto.
- Não confundir imparcialidade com falsa equivalência: diferenças documentadas entre propostas devem ser apresentadas com clareza.

### 4.2. Rastreabilidade das informações

Toda afirmação factual relevante sobre uma proposta deve ter uma fonte identificável.

Priorize fontes nesta ordem, conforme a informação procurada:

1. Programas de governo e documentos oficiais de candidaturas.
2. Legislação, órgãos públicos, dados oficiais e documentos institucionais pertinentes.
3. Estudos técnicos e pesquisas de instituições reconhecidas.
4. Jornalismo profissional e veículos com práticas editoriais transparentes, especialmente para contextualização e checagem.

Quando possível, disponibilize o link direto para o documento ou trecho que sustenta a afirmação.

Não invente propostas, citações, números, documentos, URLs ou referências.

Não trate uma declaração de intenção como política já implementada. Diferencie claramente:

- Proposta oficialmente documentada.
- Declaração pública de candidato.
- Política já existente.
- Interpretação ou possível consequência.
- Informação ainda não confirmada.

Se não for possível verificar uma informação, não a apresente como fato confirmado.

### 4.3. Explicação dos impactos

Ao explicar como uma proposta pode afetar a vida de alguém:

- Separe o conteúdo explícito da proposta das possíveis consequências.
- Explique os mecanismos pelos quais o impacto poderia acontecer.
- Identifique condições necessárias para a implementação, quando relevantes.
- Considere limitações legais, orçamentárias, administrativas e institucionais quando forem pertinentes.
- Apresente incertezas e possíveis efeitos diferentes entre grupos sociais.
- Evite afirmações categóricas sobre resultados futuros.
- Não atribua causalidade sem sustentação.
- Use exemplos cotidianos concretos, sem inventar números ou situações que pareçam fatos reais.

Quando necessário, use expressões como “poderia afetar”, “dependeria de”, “a proposta não especifica” e “não é possível concluir apenas com as informações disponíveis”.

## 5. Experiência principal do usuário

A experiência planejada para o MVP deve permitir:

1. Conhecer o propósito do site em uma landing page simples.
2. Selecionar características relevantes do próprio perfil e interesses cotidianos.
3. Revisar as escolhas antes de continuar.
4. Receber um relatório personalizado com explicações sobre propostas relevantes para seu perfil.
5. Comparar o que os candidatos documentaram sobre os mesmos assuntos.
6. Consultar as fontes originais e entender as limitações de cada análise.
7. Compartilhar um link para o relatório ou um resumo visual.

A personalização deve priorizar quais informações são exibidas e como são explicadas. Ela não deve alterar os fatos, ocultar informações relevantes ou produzir uma recomendação eleitoral.

Os campos de perfil e interesses ainda precisam ser definidos no planejamento. Colete somente as informações necessárias para entregar valor.

## 6. Escopo do MVP

### Essencial

- Landing page com proposta de valor clara.
- Fluxo simples para selecionar perfil e interesses.
- Página de revisão das escolhas.
- Relatório personalizado.
- Comparação de propostas por tema e candidatura.
- Fontes e links verificáveis.
- Explicação das limitações e incertezas.
- Compartilhamento de resultados por URL.
- Cartões ou resumos adequados para compartilhamento, se viáveis no prazo.
- Design responsivo, priorizando dispositivos móveis.
- Estados de carregamento, erro e ausência de informações.
- Acessibilidade básica e navegação por teclado.
- Metadados essenciais para SEO e compartilhamento social.
- Testes das funcionalidades mais importantes.
- Instruções de execução local e publicação.

### Fora do escopo inicial

Não implemente sem justificativa explícita no planejamento:

- Login, cadastro ou contas de usuário.
- Banco de dados ou backend próprios.
- Geração de análises políticas em tempo real por IA.
- Chatbot político.
- Painel administrativo completo.
- Coleta automatizada de dados de múltiplas fontes.
- Sistema complexo de recomendação.
- Pontuação de candidatos ou compatibilidade eleitoral.
- Aplicativos nativos para celular.
- Infraestrutura paga ou serviços externos desnecessários.
- Funcionalidades que não contribuam diretamente para validar a proposta central.

Se uma funcionalidade desejável ameaçar o prazo, proponha uma alternativa mais simples.

## 7. Conteúdo e dados

O conteúdo político deve ser tratado como um conjunto de dados estruturados, separado da interface.

O planejamento deve definir um modelo simples que permita representar, no mínimo, quando aplicável:

- Candidato ou candidatura.
- Tema.
- Título e descrição da proposta.
- Texto ou resumo fiel do compromisso documentado.
- Data e contexto do documento.
- Fonte e URL.
- Tipo de fonte.
- Explicação do possível impacto cotidiano.
- Condições, limitações e incertezas.
- Status de verificação editorial.
- Data da última revisão.

A estrutura definitiva deve ser escolhida durante o planejamento, considerando o framework e a arquitetura selecionados.

Prefira conteúdo estático e revisado manualmente para o MVP. Não gere afirmações políticas factuais em tempo real com IA.

Se houver conteúdo fictício para demonstrar a interface durante o desenvolvimento, identifique-o explicitamente como exemplo ou conteúdo demonstrativo. Nunca apresente propostas fictícias como se fossem reais.

O site deve deixar claro o período eleitoral e a data de atualização das informações utilizadas. Não presuma candidaturas confirmadas, programas publicados ou informações atualizadas sem verificar.

## 8. Privacidade e segurança

- Evite coletar dados pessoais desnecessários.
- Não solicite nome, CPF, endereço, renda exata ou outras informações sensíveis para gerar o relatório, salvo justificativa indispensável aprovada explicitamente.
- Prefira opções de perfil amplas, sem identificação individual.
- Não armazene as respostas do usuário em serviços externos sem necessidade e transparência.
- Se o perfil for codificado na URL compartilhável, não inclua informações pessoais identificáveis.
- Avalie se o conteúdo da URL pode revelar informações que o usuário não deseja compartilhar.
- Não inclua segredos, tokens ou credenciais no código ou nos arquivos versionados.
- Valide entradas, evite injeção de conteúdo e mantenha dependências razoavelmente atualizadas.
- Explique de forma clara qualquer uso de armazenamento local, cookies ou analytics.

## 9. Diretrizes de UX e design

A interface deve transmitir clareza, confiança, curiosidade e proximidade.

- Use português brasileiro natural.
- Prefira linguagem cotidiana e frases curtas.
- Explique termos técnicos quando forem inevitáveis.
- Evite estética partidária, símbolos de campanhas ou cores que associem visualmente a experiência a uma candidatura específica.
- Não imite a identidade visual de partidos ou candidatos.
- Não use interfaces com aparência de pesquisa eleitoral ou teste de personalidade.
- Não transforme informações complexas em conclusões simplistas.
- Mostre fontes e ressalvas sem prejudicar a leitura.
- Priorize leitura em telas pequenas, hierarquia visual e bom contraste.
- Garanta foco visível, rótulos claros e alternativas textuais para conteúdo visual.
- Evite animações, efeitos e dependências que não acrescentem valor.

A landing page deve explicar rapidamente o benefício do produto e conduzir o usuário à primeira ação.

## 10. Diretrizes técnicas

A stack tecnológica ainda não está definida. Escolha-a durante o planejamento, levando em conta:

- Velocidade de implementação.
- Familiaridade com tecnologias web modernas.
- Facilidade de desenvolvimento local.
- Facilidade de publicação em uma plataforma de hospedagem acessível.
- Bom desempenho em dispositivos móveis.
- SEO e metadados de compartilhamento.
- Testabilidade.
- Manutenção simples.
- Compatibilidade com o conteúdo estático e estruturado.

Não escolha uma tecnologia apenas por popularidade ou novidade.

Antes de adicionar uma dependência, avalie se ela é realmente necessária. Prefira ferramentas já disponíveis no ecossistema escolhido.

Mantenha responsabilidades claras entre componentes de interface, regras de personalização, dados editoriais e funções utilitárias.

Não crie abstrações complexas para problemas que o MVP ainda não tem.

## 11. Como o Claude Code deve trabalhar

### Antes de implementar

- Leia este arquivo integralmente.
- Inspecione o repositório, seus arquivos e o ambiente disponível.
- Não assuma que existe uma stack, estrutura ou configuração prévia.
- Identifique restrições reais antes de propor soluções.
- Produza primeiro um plano de execução completo e priorizado.
- Não crie a aplicação, não instale dependências e não modifique arquivos de implementação antes da aprovação explícita do plano.

### Durante o planejamento

- Diferencie requisitos confirmados de hipóteses.
- Identifique decisões que precisam ser tomadas e recomende uma opção padrão.
- Evite perguntas desnecessárias quando for possível tomar uma decisão reversível e justificá-la.
- Destaque riscos de conteúdo, escopo, prazo e publicação.
- Divida o trabalho em tarefas pequenas, ordenadas por dependência.
- Informe como validar cada tarefa.
- Inclua prompts de implementação específicos que possam ser executados individualmente no Claude Code.

### Depois da aprovação

- Implemente uma tarefa por vez ou em grupos pequenos e coerentes.
- Antes de editar arquivos, entenda o contexto existente.
- Prefira alterações focadas e fáceis de revisar.
- Não reescreva arquivos ou configurações sem necessidade.
- Execute os testes e verificações relevantes após cada etapa.
- Resolva erros introduzidos pelas próprias alterações antes de avançar.
- Informe claramente o que foi alterado, o que foi validado e o que ainda falta.
- Não declare que testes, builds ou deploys passaram sem executar as verificações correspondentes.
- Se algo falhar, apresente o erro real e a próxima ação recomendada.

### Quando houver dúvidas

- Não invente requisitos.
- Faça a menor suposição razoável e registre-a.
- Peça esclarecimento quando uma decisão puder alterar substancialmente o produto, sua imparcialidade, sua segurança ou seu prazo.
- Prefira soluções reversíveis e simples.

## 12. Critérios de qualidade

Uma implementação só deve ser considerada pronta quando:

- O fluxo principal pode ser concluído do início ao fim.
- O conteúdo exibido corresponde aos dados selecionados.
- Os links de fontes funcionam e levam aos documentos corretos.
- O relatório não inventa informações quando faltam dados.
- A personalização não altera o sentido das propostas.
- O layout funciona em telas pequenas e grandes.
- Os controles principais são utilizáveis por teclado.
- Os estados de erro e ausência de dados são compreensíveis.
- Não existem erros críticos conhecidos no console ou no build.
- Os testes essenciais foram executados.
- As instruções para executar e publicar o projeto estão documentadas.
- O resultado pode ser demonstrado a outra pessoa sem explicações técnicas adicionais.

## 13. Definição de sucesso do MVP

O MVP terá cumprido seu objetivo se uma pessoa que não acompanha política conseguir:

1. Entender o propósito do produto em poucos segundos.
2. Selecionar interesses sem esforço.
3. Descobrir o que candidaturas documentaram sobre temas relevantes para seu cotidiano.
4. Distinguir propostas, interpretações e incertezas.
5. Consultar as fontes originais.
6. Compartilhar a experiência com outra pessoa.
7. Fazer tudo isso sem receber uma recomendação de voto.

**Regra final:** priorize confiança, clareza e entrega funcional. É melhor publicar uma experiência pequena, útil e bem fundamentada do que uma plataforma extensa, incompleta ou editorialmente frágil.