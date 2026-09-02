import { CodeBlock } from "@/features/blog/components/CodeBlock";
import type { BlogPostSource } from "@/features/blog/data/posts";
import { asset } from "@/shared/lib/asset";

export const nestjsObserve: BlogPostSource = {
  slug: "nestjs-observe",
  title: "Testando o NestJS Observe",
  summary:
    "Instalei a ferramenta de observabilidade do próprio time do Nest num projeto pessoal pra ver se ela poupa mesmo a tarde inteira de montar OpenTelemetry, Grafana e companhia.",
  date: "2026-09-02",
  featured: true,
  Content: () => (
    <>
      <p>
        Se você já tentou botar observabilidade de verdade numa aplicação
        NestJS, sabe a dor: abre um tutorial, aí vem OpenTelemetry, depois
        Prometheus, depois Grafana, depois Loki, talvez um Jaeger no meio do
        caminho, e no fim da tarde você tem um dashboard bonito, mas ainda não
        sabe por que aquela rota específica trava toda terça feira às 15h.
      </p>
      <p>
        Foi exatamente esse tipo de dor que vi o pessoal por trás do próprio
        NestJS resolver atacar de frente com uma ferramenta nova chamada NestJS
        Observe. Vi o post de lançamento circulando, achei a proposta
        interessante e resolvi instalar no meu projeto pra ver se era só mais
        uma promessa bonita ou se realmente resolvia alguma coisa. Como eu já
        curto trabalhar com Nest no dia a dia, fazia sentido dar uma chance.
        Passei os últimos dias mexendo, quebrando algumas coisas de propósito só
        pra ver o que aparecia no dashboard, e resolvi compartilhar o que achei.
      </p>

      <h2>O que é essa parada, afinal</h2>
      <p>
        Em resumo, o NestJS Observe é uma solução de observabilidade feita sob
        medida pro ecossistema Nest. A ideia é bem direta: instrumentação
        automática, sem você precisar sair criando span manualmente ou decorando
        a ordem certa de inicializar o SDK do OpenTelemetry antes do módulo
        principal subir (quem já fez isso sabe que é fácil errar essa parte).
      </p>
      <p>
        O diferencial é que ela foi feita pelo próprio criador do NestJS, então
        em teoria conhece as entranhas do framework melhor do que qualquer
        instrumentação genérica de terceiros.
      </p>

      <figure>
        <img
          src={asset("images/blog/dashboardnest.webp")}
          alt="Dashboard do NestJS Observe, com o panorama das requisições da aplicação."
          width={1728}
          height={851}
          loading="lazy"
        />
        <figcaption>
          Fonte: documentação oficial do NestJS Observe (
          <a
            href="https://docs.nestjs.com/observability/dashboard"
            target="_blank"
            rel="noreferrer"
          >
            docs.nestjs.com/observability/dashboard
          </a>
          ).
        </figcaption>
      </figure>

      <h2>O setup</h2>
      <p>
        Achei o processo de instalação bem tranquilo. Rodei o comando de
        instalação, adicionei a configuração inicial no bootstrap da aplicação e
        em poucos minutos já estava vendo requisições chegando no painel.
      </p>

      <CodeBlock language="shell" code="npm i @nestjs/observe" />

      <CodeBlock
        code={`// app.module.ts
import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY,
      appSecret: process.env.OBSERVE_APP_SECRET,
      serviceId: 'meu-servico',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`}
      />

      <CodeBlock
        code={`// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  await app.listen(3000);
}
bootstrap();`}
      />

      <p>
        Não precisei ficar montando exporter, configurando collector, nem
        escolhendo entre OTLP HTTP ou gRPC feito nas outras vezes que fiz isso
        na mão. Foi só instalar e o negócio já começou a aparecer.
      </p>

      <h2>O que realmente me chamou atenção</h2>
      <p>
        Depois de uns dias usando (nao usei por completo, mas dei uma boa
        testada), separei os pontos que mais me impressionaram:
      </p>
      <p>
        <strong>Tracing automático de ponta a ponta.</strong> Ele consegue
        acompanhar uma requisição desde o controller até a chamada no banco,
        passando por serviços intermediários, sem eu precisar decorar nada
        manualmente. Numa rota que chama três serviços internos, consegui ver
        exatamente qual etapa estava puxando o tempo pra baixo.
      </p>

      <figure>
        <img
          src={asset("images/blog/tracesnest.webp")}
          alt="Visualização de trace distribuído no NestJS Observe, com o tempo de cada etapa de uma requisição."
          width={1728}
          height={851}
          loading="lazy"
        />
        <figcaption>
          Fonte: documentação oficial do NestJS Observe (
          <a
            href="https://docs.nestjs.com/observability/distributed-tracing"
            target="_blank"
            rel="noreferrer"
          >
            docs.nestjs.com/observability/distributed-tracing
          </a>
          ).
        </figcaption>
      </figure>

      <p>
        <strong>Self time vs total time por classe e método.</strong> Isso aqui
        foi o que mais me surpreendeu. Separando o tempo que o próprio código
        gastou do tempo que ele ficou esperando outra coisa responder. Isso mexe
        na forma de debugar gargalo.
      </p>
      <p>
        <strong>Logs correlacionados com o trace.</strong> Todo log já vem
        linkado com a requisição que gerou ele.
      </p>
      <p>
        <strong>Erros agrupados como defeitos, não como eventos soltos.</strong>{" "}
        Em vez de ficar rolando uma lista infinita de "erro X aconteceu 400
        vezes", ele agrupa tudo numa entrada só, já com a linha exata do código
        que estourou e os usuários afetados.
      </p>
      <p>
        <strong>Métricas de fila e job agendado.</strong> Como uso BullMQ em
        alguns projetos, curti bastante ver retry, tempo de espera na fila e
        falha de job direto no painel, sem precisar montar um exporter separado
        só pra isso.
      </p>
      <p>
        <strong>A parte de IA.</strong> Confesso que fiquei com o pé atrás no
        começo, mas testei e funciona bem: dá pra copiar uma falha inteira, já
        formatada com contexto, stack trace e timings, pronta pra colar direto
        no Claude Code ou no Cursor. Tem também a opção de conectar via MCP e
        deixar o próprio agente investigar o erro. Pra quem já usa IA no fluxo
        de debug.
      </p>

      <h2>Onde fiquei com pé atrás</h2>
      <ul>
        <li>
          É uma ferramenta nova, lançada há pouquíssimos dias, então ainda não
          tem muito histórico de gente rodando em produção pesada pra eu
          confiar.
        </li>
        <li>
          O free tier tem limite de eventos por mês, então se sua aplicação gera
          muito volume de requisição.
        </li>
        <li>
          Por ser tão amarrado ao ecossistema Nest, se um dia você migrar de
          framework, provavelmente vai precisar trocar de ferramenta de
          observabilidade também.
        </li>
      </ul>

      <h2>Vale a pena trocar o que você já usa?</h2>
      <p>
        Se você já tem um stack de observabilidade rodando redondo com
        OpenTelemetry, Grafana e companhia, talvez não valha a pena sair
        trocando tudo agora só por novidade. Mas se você está começando um
        projeto novo em Nest, ou se sempre adiou colocar observabilidade "pra
        depois", o NestJS Observe parece ser um jeito bem mais rápido de já
        nascer com isso resolvido.
      </p>
      <p>
        No meu caso, pretendo continuar usando no projeto pessoal que testei e
        ver como ele se comporta com mais tempo de uso. Se rolar alguma
        surpresa, boa ou ruim, atualizo por aqui.
      </p>
    </>
  ),
};
