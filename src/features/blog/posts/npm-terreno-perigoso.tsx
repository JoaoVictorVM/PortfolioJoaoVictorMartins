import { CodeBlock } from "@/features/blog/components/CodeBlock";
import type { BlogPostSource } from "@/features/blog/data/posts";
import { asset } from "@/shared/lib/asset";

export const npmTerrenoPerigoso: BlogPostSource = {
  slug: "npm-terreno-perigoso",
  title: "Problemas de segurança no npm",
  summary:
    "Conta de mantenedor sequestrada, malware que se espalha sozinho e um monte de projeto sendo gerado por IA sem ninguém olhar as dependências.",
  date: "2026-06-27",
  featured: false,
  Content: () => (
    <>
      <p>
        Fiquei sabendo dessa onda de ataque no npm primeiro pelo pessoal do time
        Web aqui do trabalho, que ficou passando notícia atrás de notícia num
        canal nosso. Depois, num vídeo do Mano Deyvin, vi o assunto sendo puxado
        de um jeito que me fez parar tudo e ir pesquisar por conta própria. E
        quanto mais eu lia, mais foi ficando claro que isso não é um caso
        isolado, é tipo um padrão que se repete e vem crescendo desse um tempo
        pra cá.
      </p>
      <p>
        Resolvi juntar aqui o que aprendi, sem enrolação de relatório chato, só
        o papo mesmo de alguém que ficou puto ao descobrir o tamanho da bagunça.
      </p>

      <h2>O que descobri de fato</h2>
      <p>
        Basicamente, gente mal intencionada tá conseguindo invadir conta de
        mantenedor de pacote popular no npm (geralmente via phishing) e publicar
        uma versão maliciosa do pacote direto pro mundo. Isso já rolou com o
        Axios, biblioteca HTTP que praticamente todo projeto JS usa em algum
        momento. Em março desse ano, alguém sequestrou a conta e publicou uma
        versão que baixava um trojan de acesso remoto pra máquina de quem
        instalasse. O Axios recebe algo em torno de 100 milhões de downloads por
        semana, então dá pra imaginar a bagunça que ficou nas poucas horas até
        alguém perceber e reverter.
      </p>
      <p>
        E não parou por aí. Rolou também o caso do keyv (uma lib de cache bem
        usada), onde a mesma manobra aconteceu de novo em agosto, dessa vez
        afetando mais de mil versões de pacote diferentes com um alcance
        gigante. O nome que aparece muito no meio disso tudo é Shai-Hulud, um
        malware que se espalha sozinho: ele rouba token e credencial da máquina
        infectada e usa isso pra publicar automaticamente mais pacote malicioso,
        numa bola de neve.
      </p>
      <p>
        Vi um número da Sonatype que ainda não saiu da minha cabeça: só em 2025
        foram identificados mais de 454 mil pacotes maliciosos novos no
        ecossistema open source, um salto de 75% comparado ao ano anterior. E
        2026 tá vindo pior ainda.
      </p>

      <figure>
        <img
          src={asset("images/blog/npmvulnerabilidades.webp")}
          alt="Gráfico mostrando o crescimento anual de pacotes maliciosos publicados em ecossistemas open source, com salto acentuado em 2025."
          width={2048}
          height={1143}
          loading="lazy"
        />
        <figcaption>
          Fonte: Phoenix Security,{" "}
          <a
            href="https://phoenix.security/accelerating-supply-chain-attacks-npm-pypi-vsx-ai-enabled-2026/"
            target="_blank"
            rel="noreferrer"
          >
            Supply Chain Attacks 2026: npm, PyPI, VS Code, AI Agents
          </a>
          .
        </figcaption>
      </figure>

      <h2>E aí entra o problema dos Vibe Coders</h2>
      <p>
        Essa é a parte que mais me incomodou de verdade, e que acho que pouca
        gente tá comentando. A gente vive numa era em que muita gente pede pra
        uma IA "cria um sistema pra mim" ou "resolve esse problema aqui", sem
        entender nada do que tá rolando por baixo do capô. E adivinha só o que
        praticamente toda IA faz quando vai montar um projeto em JavaScript ou
        Node? Instala um punhado de pacote do npm.
      </p>
      <p>
        O problema é que o vibe coder nem sabe que aquilo é uma dependência
        externa, muito menos que existe risco nenhum ali. Pra ele, o código
        rodou, a tela apareceu bonitinha, então "tá tudo certo". Não tem noção
        de auditar pacote, de olhar lockfile, de desconfiar de instalação,
        porque ele nunca aprendeu que isso é algo que precisa ser feito. Antes,
        pelo menos, quem escrevia o código tinha alguma familiaridade mínima com
        o ecossistema. Agora, o cara só confia cegamente no que a IA cuspiu,
        publica em produção, e segue a vida.
      </p>
      <p>
        Isso deixa a superfície de ataque gigante, porque cada vez mais projeto
        tá sendo criado por gente que não vai nunca rodar um{" "}
        <code>npm audit</code> ou parar pra pensar se aquele pacote ali é
        confiável. É um público inteiro novo de vítima em potencial que nem sabe
        que precisa se proteger.
      </p>

      <CodeBlock
        language="shell"
        code={`# um exemplo bobo de comando que qualquer vibe coder deveria
# pelo menos rodar de vez em quando, mesmo sem entender tudo
npm audit
npm ls --all`}
      />

      <h2>O que fica de lição</h2>
      <p>
        Não acho que a solução seja parar de usar IA pra codar, isso já é meio
        inevitável hoje em dia. Mas acho que precisa ter mais gente falando
        sobre isso, tipo esse post aqui mesmo, pra pelo menos plantar a pulga
        atrás da orelha de quem tá começando agora e nem sabe que essa camada de
        risco existe. Se você tá usando IA pra gerar projeto, vale pelo menos
        entender que toda aquela dependência instalada automaticamente é código
        de terceiro rodando na sua máquina, e que checar isso de vez em quando
        não é luxo de dev paranoico, é básico.
      </p>
      <p>
        Eu, na prática, passei a prestar mais atenção em lockfile, rodar{" "}
        <code>npm ci</code> em vez de <code>npm install</code> no CI, e dar uma
        esperada antes de atualizar dependência pra versão mais nova (porque boa
        parte desses ataques cai rápido depois de descoberto).
      </p>
    </>
  ),
};
