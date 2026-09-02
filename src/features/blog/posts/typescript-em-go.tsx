import type { BlogPostSource } from "@/features/blog/data/posts";
import { asset } from "@/shared/lib/asset";

export const typescriptEmGo: BlogPostSource = {
  slug: "typescript-em-go",
  title: "TypeScript em Go",
  summary:
    "Por que o compilador foi reescrito em Go e não em Rust, o que os ciclos do type checker têm a ver com isso, e os números de quem já migrou.",
  date: "2026-07-21",
  featured: true,
  Content: () => (
    <>
      <p>
        Desde que descobri que a versão 7 do TypeScript ia ter o compilador
        reescrito em Go eu fiquei bem hypado, porque essas são basicamente as
        minhas duas stacks principais, e como atualmente venha usando e
        estudando mais o Go eu já via um potencial gigante nessa mudança. Fui
        atrás pra entender direito o motivo de terem decidido fazer essa
        migração, porque às vezes quando uma ferramenta tá lenta o problema nem
        é tanto a linguagem em si, é mais código que foi crescendo torto ao
        longo dos anos, e só uma reescrita bem feita já resolveria boa parte. Só
        que, bem, a linguagem da qual a gente tá falando aqui é o JavaScript,
        então provavelmente tinha sim bastante problema estrutural mesmo,
        kkkkkkkk, e não só código malescrito.
      </p>
      <p>
        E foi exatamente isso que fui descobrindo. O TypeScript 6.0 serviu de
        ponte, foi anunciado como a última versão em cima do código velho,
        preparando terreno pra migração. Teve uma fase de preview rodando por
        baixo do nome <code>tsgo</code>, que dava pra instalar via npm e já
        sentir o gostinho antes da versão oficial sair. RC saiu em 18 de junho
        de 2026 e a versão estável mesmo, o TypeScript 7.0, foi lançada em 8 de
        julho de 2026.
      </p>

      <figure>
        <img
          src={asset("images/blog/typescriptemgo1.webp")}
          alt="Anúncio do TypeScript 7.0, com o compilador reescrito em Go."
          width={562}
          height={350}
          loading="lazy"
        />
      </figure>

      <p>
        Confesso que ainda nao cheguei a testar por conta de estar um pouco
        ocupado por conta de questoes da faculdade e tambem de alguns projetos
        pessoais que estou tocando, mas assim que tiver tempo com certeza vou
        pegar pra testar, mas li tanta coisa sobre esses últimos dias que já dá
        pra falar com propriedade do que rolou. E o motivo por trás da escolha
        do Go foi o que mais me prendeu, porque não foi só modinha, teve
        raciocínio de arquitetura de verdade envolvido.
      </p>
      <p>
        O cara que lidera o TypeScript (Anders Hejlsberg), explicou que
        escolheram Go por ser a linguagem de nível mais baixo que ainda dá
        suporte nativo completo em todas as plataformas, e que também é forte em
        concorrência. Mas o motivo mais interessante que achei foi outro: o
        compilador de TypeScript é cheio de estrutura cíclica, tipo
        referenciando tipo que volta pra ele mesmo, e o modelo de ownership do
        Rust simplesmente não curte ciclo sem um workaround grande. Ia
        significar reescrever o type checker do zero, muito trampo, com risco de
        mudar comportamento sutilmente. Go, por ter garbage collector e memória
        compartilhada, encaixou natural na arquitetura que já existia, ciclo não
        é problema, e as goroutines ainda dão paralelismo baratinho usando a
        mesma tabela de símbolo entre threads. Isso fez o port sair em cerca de
        um ano mantendo a semântica idêntica, em vez de virar um projeto de
        anos.
      </p>
      <p>
        E os número que a Microsoft divulgou realmente impressionam. O código do
        VS Code, uns 2,3 milhões de linhas, caiu de 125,7 segundos pra 10,6
        segundos, quase 12 vezes mais rápido. O Sentry foi de 139,8 pra 15,7
        segundos. O Playwright, que antes levava 11 segundos, passou a rodar em
        pouco mais de 1. Achei bem doido também a história do pessoal do Slack:
        antes eles nem conseguiam rodar o type check completo local, tinham que
        jogar tudo pro CI porque travava a máquina. Com a versão 7, isso voltou
        a rodar liso direto no computador do dev.
      </p>

      <figure>
        <img
          src={asset("images/blog/typescriptemgo2.webp")}
          alt="Comparativo de tempo de compilação entre o TypeScript antigo e a versão 7, em projetos como VS Code, Sentry e Playwright."
          width={1507}
          height={756}
          loading="lazy"
        />
        <figcaption>
          Fonte: Microsoft DevBlogs,{" "}
          <a
            href="https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/"
            target="_blank"
            rel="noreferrer"
          >
            Announcing TypeScript 7.0
          </a>
          .
        </figcaption>
      </figure>

      <p>
        E não é só velocidade não, o time reportou mais de 80% menos comando
        falho no language server e mais de 60% menos crash do servidor comparado
        com a 6.0, então o editor em si fica mais estável também, não só mais
        rápido pra compilar.
      </p>
      <p>
        Por ainda nao ter testando eu nao consegui encontrar problemas por conta
        propria, mas pelo que vi ainda tem alguns problemas. A versão 7.0 não
        tem API programática estável, só deve vir na 7.1, então se você depende
        disso em alguma ferramenta própria, ainda vai ter que segurar um pouco
        ou usar o pacote de compatibilidade que eles disponibilizaram. E o
        caminho recomendado de migração é passar pela 6.0 antes de ir direto pra
        7.0.
      </p>
      <p>
        No fim das contas, o que mais me marcou foi perceber que isso é parte de
        um movimento bem maior que já vinha rolando, esbuild em Go, SWC em Rust,
        Bun, Oxc, e agora até o próprio TypeScript entrando nessa. O ecossistema
        JS inteiro migrando pra fora do próprio JavaScript, e olha que engraçado
        isso. Sendo alguém que curte tanto Go quanto TS, foi bem satisfatório
        ver essas duas coisas se cruzando de um jeito tão direto, e o motivo
        técnico por trás, aquele papo de ciclo e goroutine, me deixou com
        vontade de estudar mais por dentro como um compilador desse tamanho é
        organizado.
      </p>
    </>
  ),
};
