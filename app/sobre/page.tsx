import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Icon } from "@/components/ui/Icon";
import { CANDIDATURAS_ORDENADAS } from "@/content/candidaturas";
import { CONGRESSO } from "@/content/congresso";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Metodologia, fontes, limitações e privacidade do E eu com isso?",
};

export default function SobrePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-readable px-5 py-12">
        <h1 className="font-display text-4xl font-semibold text-ink">
          Como funciona
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          O {SITE.nome} traduz planos de governo para o dia a dia, sem dizer em
          quem votar. Veja como o site funciona.
        </p>

        <Secao titulo="O que este site faz — e o que não faz">
          <ul className="space-y-2">
            <Item sim>Resume, com fidelidade, o que os planos de governo documentam.</Item>
            <Item sim>Mostra o possível impacto no cotidiano em “O que pode mudar pra você”: é uma leitura nossa, não uma promessa da candidatura.</Item>
            <Item sim>Liga cada informação à fonte original.</Item>
            <Item>Não recomenda voto, não dá notas e não cria ranking de candidatos.</Item>
            <Item>Não calcula “compatibilidade” entre você e uma candidatura.</Item>
          </ul>
        </Secao>

        <Secao titulo="De onde vêm as informações">
          <p>
            A fonte principal é o <strong>plano de governo registrado</strong>{" "}
            de cada candidatura. Quando necessário para contexto, podem ser
            citadas legislação, dados de órgãos públicos e jornalismo
            profissional — sempre com link. Os mesmos critérios de verificação e
            detalhamento valem para todas as candidaturas.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {CANDIDATURAS_ORDENADAS.map((c) => (
              <a
                key={c.id}
                href={c.planoDeGoverno.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl2 border border-line bg-surface px-4 py-3 text-sm text-ink-soft hover:text-ink"
              >
                <Icon name="FileText" className="h-4 w-4" />
                Plano de governo — {c.nome} ({c.partido})
              </a>
            ))}
          </div>
        </Secao>

        <Secao titulo="“Dá pra sair do papel?” — como a viabilidade é avaliada" id="viabilidade">
          <p>
            Muita proposta boa no papel esbarra na realidade. Por isso, cada
            proposta recebe uma leitura simples de 4 pontos — os{" "}
            <strong>mesmos para todas as candidaturas</strong>. É{" "}
            <strong>análise, não é nota nem comparação de quem é melhor</strong>.
          </p>
          <ul className="space-y-3">
            <li>
              <strong className="text-ink">Tem o dinheiro?</strong> O governo
              não pode simplesmente gastar: o recurso precisa estar previsto nas
              leis do orçamento (PPA, LDO e LOA), respeitar as regras fiscais e
              ter de onde sair se criar uma despesa que se repete.
            </li>
            <li>
              <strong className="text-ink">Passa no Congresso?</strong> O
              governo quase nunca tem maioria garantida. Para votar uma
              mudança, precisa negociar com partidos e comissões — e mudar a
              Constituição (PEC) é ainda mais difícil.
            </li>
            <li>
              <strong className="text-ink">Dá pra executar?</strong> É preciso
              ter servidores, sistemas de tecnologia, logística e licitações
              funcionando para a medida sair do papel.
            </li>
            <li>
              <strong className="text-ink">Está dentro da lei?</strong> A
              proposta não pode ferir a Constituição nem leis maiores, sob risco
              de ser questionada pelo Ministério Público e suspensa pela Justiça
              (como o STF) ou pelos tribunais de contas (como o TCU).
            </li>
          </ul>
          <p>
            O ponto “Passa no Congresso?” leva em conta a bancada eleita em
            2026. No relatório há um painel com a composição do Congresso:
            somando as bancadas da Câmara, a base de Flávio reúne cerca de 291
            deputados e a de Lula, 124 (o MDB está dividido; PSD e PSDB liberaram
            apoio). No Senado, são cerca de 50 senadores com Flávio e 15 com
            Lula. Lembrando: lei comum precisa de maioria simples (257 de 513 e
            41 de 81), e mudar a Constituição precisa de 3/5 (308 e 49) — em dois
            turnos nas duas Casas.
          </p>
        </Secao>

        <Secao titulo="“O histórico combina com a proposta?”" id="historico">
          <p>
            Proposta não é garantia. Às vezes, o que o candidato já fez ou
            disse vai em outra direção do que o plano promete. Quando isso
            acontece, mostramos os dois fatos lado a lado, com as fontes. Quem
            decide se há contradição é você.
          </p>
          <p>Um ponto só entra se cumprir todas estas regras, iguais para todas as candidaturas:</p>
          <ul className="space-y-2">
            <Item sim>É algo que o <strong>próprio candidato</strong> fez ou disse: um voto, um projeto de lei ou uma homenagem que ele propôs, um ato do governo dele ou uma declaração pública registrada. O que parentes, aliados ou o partido fizeram não conta.</Item>
            <Item sim>Tem relação direta com uma proposta do plano, no mesmo tema.</Item>
            <Item sim>Tem fonte que dá para conferir: órgãos oficiais ou veículos de jornalismo profissional.</Item>
            <Item sim>Quando o candidato explicou publicamente o que fez, a explicação aparece junto.</Item>
          </ul>
          <p>
            A lista <strong>não é completa</strong>. Se não aparece nenhum
            ponto, isso não quer dizer que o histórico combina com a proposta.
            Pessoas também mudam de ideia: um voto antigo não prova o que alguém
            fará no futuro.
          </p>
        </Secao>

        <Secao titulo="Transparência eleitoral">
          <p>
            É o período do 2º turno das {SITE.eleicao.toLowerCase()}, marcado
            para <strong>{SITE.segundoTurno}</strong>. Este é um produto
            informativo e apartidário. Uma proposta documentada é uma intenção,
            não uma política já em vigor: muitas dependem de aprovação no
            Congresso, de orçamento e de prazos. Conteúdo atualizado em{" "}
            {SITE.atualizadoEm}.
          </p>
        </Secao>

        <Secao titulo="Limitações">
          <ul className="space-y-2">
            <Item>Resumir um plano exige simplificar; por isso a fonte fica sempre à mão.</Item>
            <Item>Nem todo tema é tratado por todas as candidaturas — nesses casos a informação aparece marcada como não localizada.</Item>
            <Item>Não é possível prever com certeza o efeito futuro de uma medida.</Item>
          </ul>
        </Secao>

        <Secao titulo="Privacidade">
          <p>
            O site não pede cadastro nem dados pessoais. Suas escolhas ficam no
            seu navegador e, ao compartilhar, vão apenas como códigos de tema e
            perfil no link — sem nome, e-mail ou qualquer identificação. Essas
            respostas não servem para te identificar.
          </p>
          <p>
            Usamos ferramentas da Vercel para contar visitas, saber quais
            páginas são mais vistas e medir se o site carrega rápido. Elas não
            usam cookies e não identificam quem visita. Suas escolhas de perfil
            e temas não são enviadas.
          </p>
        </Secao>

        <Secao titulo="Fontes dos dados">
          <p>
            Todas as fontes usadas no site ficam reunidas aqui, para conferir
            quando quiser.
          </p>
          <div className="mt-2">
            <p className="text-sm font-semibold text-ink">Planos de governo</p>
            <ul className="mt-2 space-y-1.5">
              {CANDIDATURAS_ORDENADAS.map((c) => (
                <li key={c.id}>
                  <a
                    href={c.planoDeGoverno.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 text-sm underline hover:text-ink"
                  >
                    <Icon
                      name="ExternalLink"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    />
                    {c.planoDeGoverno.titulo} (TSE)
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold text-ink">
              Composição do Congresso (2027)
            </p>
            <ul className="mt-2 space-y-1.5">
              {CONGRESSO.fontes.map((f) => (
                <li key={f.url}>
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 text-sm underline hover:text-ink"
                  >
                    <Icon
                      name="ExternalLink"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    />
                    {f.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm text-ink-faint">
            Cada proposta também traz, na seção “Fontes”, o link direto para a
            página do plano de governo onde ela aparece.
          </p>
        </Secao>

        <div className="mt-12">
          <Link
            href="/comecar"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-paper hover:bg-ink-soft"
          >
            Montar meu relatório
            <Icon name="ArrowRight" className="h-5 w-5" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Secao({
  titulo,
  id,
  children,
}: {
  titulo: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-10 scroll-mt-24 border-t border-line pt-8">
      <h2 className="font-display text-2xl font-semibold text-ink">{titulo}</h2>
      <div className="mt-3 space-y-3 text-ink-soft">{children}</div>
    </section>
  );
}

function Item({
  children,
  sim = false,
}: {
  children: React.ReactNode;
  sim?: boolean;
}) {
  return (
    <li className="flex items-start gap-2">
      <Icon
        name={sim ? "Check" : "X"}
        className={`mt-1 h-4 w-4 shrink-0 ${sim ? "text-candA" : "text-ink-faint"}`}
      />
      <span>{children}</span>
    </li>
  );
}
