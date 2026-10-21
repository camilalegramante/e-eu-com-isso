# E eu com isso?

Aplicação web que traduz os planos de governo das candidaturas à Presidência
para o dia a dia das pessoas. Mostra, por tema, o que cada candidatura
documentou, o possível impacto cotidiano (rotulado como interpretação), as
condições e incertezas, e o link para a fonte original. **Não recomenda voto.**

- **Stack:** Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS · lucide-react · Vitest.
- **Sem backend e sem banco de dados.** O conteúdo é estático e versionado em `content/`.
- **Sem cadastro e sem dados pessoais.** A seleção do usuário vive só na URL (códigos de tema/perfil); nada fica guardado no navegador.

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
```

Em desenvolvimento, o conteúdo em `rascunho`/`em-revisao` aparece com o selo
**“Em revisão”**. Em produção, só aparece conteúdo com `statusRevisao: "aprovado"`.

Outros comandos:

```bash
npm run build   # build de produção
npm start       # serve o build
npm run test    # testes unitários (Vitest)
```

## Estrutura

```
app/            Rotas: / (landing), /comecar (onboarding), /relatorio, /sobre
components/     UI, onboarding, report, share, chrome do site
content/        Conteúdo editorial (temas, perfis, candidaturas, propostas) + guia
lib/            types, catalogs, url-state, personalization (puros e testados), site
public/fontes/  PDFs dos planos de governo (fontes primárias)
tests/          Vitest: url-state, personalization, integridade editorial
```

## Fluxo editorial (importante)

Todo conteúdo político está em `content/` e **nasce como `rascunho`**. Ele só
vai ao ar depois de revisão humana. Veja o checklist em
[`content/README.md`](content/README.md).

Para **publicar** uma proposta depois de revisada: mude seu
`statusRevisao` para `"aprovado"` e atualize `revisadoEm`. Para adicionar um
tema novo ao relatório, inclua-o em `TEMAS_COM_CONTEUDO` (em `content/temas.ts`).

O teste `tests/conteudo.test.ts` falha se um item publicado ficar sem fonte,
com URL malformada, ou se um tema perder a paridade entre as candidaturas.


## Publicar (Vercel)

1. Suba o repositório para o GitHub.
2. Importe o projeto em [vercel.com](https://vercel.com) (detecta Next.js automaticamente).
3. Defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` com a URL pública
   (usada para montar as pré-visualizações de compartilhamento/Open Graph).
4. Deploy. Cada push gera um preview; a branch de produção publica no domínio.

A imagem de compartilhamento (Open Graph) é gerada automaticamente em
`app/opengraph-image.tsx`.
