import { PostLink } from "@/features/blog/components/PostLink";
import type { BlogPostSource } from "@/features/blog/data/posts";
import { asset } from "@/shared/lib/asset";

export const programarPorDiversao: BlogPostSource = {
  slug: "programar-por-diversao",
  title: "O motivo que me fez programar de novo por diversão",
  summary:
    "Larguei o gamedev achando que era tempo perdido, até descobrir o Phaser e a Ebitengine e ver que dava pra fazer jogo nas stacks que eu já uso.",
  date: "2026-05-18",
  featured: false,
  Content: () => (
    <>
      <p>
        Por muito tempo eu criei uns joguinhos usando engine mais padrão, tipo
        Unity e GameMaker. Só que em algum momento decidi manter o gamedev só
        como hobby, umas coisinhas pequenas e protótipos no tempo livre, porque
        gosto muito de jogos, e fui focando mais nos meus projetos pessoais como
        engenheiro de software mesmo. Aí entrei num probleminha que hoje eu vejo
        que deve ser bem comum: ficava naquele dilema de "crio um jogo ou crio
        um projeto usando as stacks que eu uso no trabalho", e quase sempre
        acabava indo pro projeto pessoal, porque sentia que o tempo gasto com
        jogo não ia fazer diferença nenhuma no meu portfólio, já que não tinha
        nada a ver com o que eu foco hoje em dia.
      </p>
      <p>
        Isso foi me desanimando aos poucos, o que é meio irônico, porque foram
        justamente os jogos que me fizeram entrar na programação, então tipo,
        larguei a própria razão de eu estar aqui, kkkkkkkk.
      </p>
      <p>
        Há mais ou menos um ano fui pesquisar outras formas de criar jogos, e
        caí num universo do gamedev pelo YouTube onde me encontrei bastante. Vi
        que muito dev passa por esse mesmo dilema meu, e vários acabam começando
        a fazer jogo browser-based usando HTML, CSS e JavaScript. Fiz uns
        joguinhos simples assim e minha animação foi voltando aos poucos.
      </p>
      <p>
        Foi aí que descobri o Phaser. Pra quem não conhece, é um framework em
        JavaScript (e hoje já com bom suporte a TypeScript) feito
        especificamente pra criar jogo 2D que roda no navegador, usando Canvas e
        WebGL por baixo dos panos. Ele já vem com física, tween, câmera, sistema
        de partícula, tudo isso pronto, e tem integração direta com framework
        tipo React, Vue e Next. Isso foi ótimo pra mim porque comecei a criar
        uns joguinhos com mecânica mais complexa usando o React, uma das minhas
        stacks principais, e inclusive um dos meus protótipos atuais é feito com
        ele.
      </p>

      <p>
        Mas o que realmente foi uma virada de chave pra eu voltar a focar nos
        meus jogos de verdade foi descobrir a Ebitengine. É uma engine open
        source pra criar jogo 2D usando Go, feita pelo Hajime Hoshi, com aquele
        lema de ser "dead simple", já que a API dela é bem enxuta, praticamente
        tudo se resume a desenhar imagem sobre imagem. Ela roda em desktop
        (Windows, macOS, Linux), mobile (Android e iOS), web via WebAssembly, e
        até em console tipo Nintendo Switch. E apesar de simples, ela não é
        brinquedo não, tem jogo comercial de verdade feito com ela, tipo o
        Fishing Paradiso, que já passou de 2 milhões de downloads.
      </p>

      <figure>
        <img
          src={asset("images/blog/fishingparadiso.webp")}
          alt="Cena do jogo Fishing Paradiso, feito com a Ebitengine."
          width={1600}
          height={800}
          loading="lazy"
        />
      </figure>

      <p>
        Um dos maiores "problemas" que sempre falam dela é que é focada em 2D.
        Só que pra mim isso nem foi problema nenhum, porque mesmo quando eu
        usava Unity ou GameMaker eu só fazia jogo 2D mesmo, então foi bem
        tranquilo migrar. E como os jogos feitos nela são praticamente inteiros
        em Go, que é a stack que eu mais estou focado em me especializar hoje,
        comecei a sentir de novo que aquele tempo criando jogo não é tempo
        perdido. Ao mesmo tempo que eu me divirto desenvolvendo, eu tô
        aprimorando meu próprio uso de Go.
      </p>
      <p>
        Acho que depois que a IA virou parte do meu fluxo de trabalho eu não me
        animava muito mais com projeto de desenvolvimento. Não me entenda mal,
        com IA eu consegui criar muito projeto pessoal que antes ia levar um
        tempão e provavelmente ia ficar pela metade, mas ao mesmo tempo isso foi
        meio que me desanimando de um jeito estranho. Só que descobrir esse
        mundo da Ebitengine e do Phaser fez a programação voltar a brilhar meus
        olhos, do mesmo jeito que foi quando vi ela pela primeira vez. Hoje,
        quando tenho um tempo livre, até tô gostando de estudar Aseprite pra
        deixar meus jogos cada vez mais bonitos.
      </p>
      <p>
        Então fica a dica: se você também entrou na programação por causa do
        gamedev, mas foi abandonando isso pra focar só nos projetos pessoais com
        sua stack, vale muito a pena pesquisar sobre isso. Tem bastante conteúdo
        no YouTube, e no itch.io dá pra achar um monte de dev fazendo jogo com
        esse tipo de engine. Pegar uma ideia de mecânica e implementar ela na
        sua própria stack te melhora muito como programador. Você vai bater a
        cabeça várias vezes, mas boa parte das formas que eu uso pra resolver
        esses probleminhas no jogo eu acabo reaproveitando em projeto pessoal ou
        até profissional depois. Usando a Ebitengine, por exemplo, entendi muito
        melhor questão de performance e otimização, coisa que provavelmente vai
        te ajudar a virar um dev melhor no geral também.
      </p>
      <p>
        Hoje tô com dois protótipos rodando ao mesmo tempo. Um deles é um
        shooter 2D feito em Phaser, focado em mecânica de movimentação. E o
        principal, que é o que mais tô dedicando tempo, é um jogo de plataforma
        com elemento de metroidvania feito na Ebitengine, bem mais complexo e
        maior que qualquer coisa que eu já mexi antes. Vai ser meu primeiro jogo
        com narrativa de verdade, ainda tô terminando de escrever a história,
        mas as mecânicas já estão bem encaminhadas e sendo construídas.
      </p>

      <PostLink
        href="https://joaovictorvm.itch.io"
        label="joaovictorvm.itch.io"
        description="Meu perfil, com os protótipos e jogos que já publiquei."
      />

      <p>
        Se ficou curioso pra ver como esses protótipos estão indo, fica à
        vontade pra dar uma passada lá no meu itch.io. Assim que eu finalizar
        algum dos dois, prometo que posto por lá.
      </p>
    </>
  ),
};
