import type { BlogPostSource } from "@/features/blog/data/posts";

export const postDeExemplo: BlogPostSource = {
  slug: "post-de-exemplo",
  title: "Post de exemplo",
  summary:
    "Um exemplo de post para validar o layout da leitura antes de escrever de verdade.",
  date: "2026-08-18",
  featured: false,
  Content: () => (
    <>
      <p>
        Este é um post de exemplo. Ele existe para você ver como o corpo do
        texto fica com os tokens do site — tipografia, links, listas e blocos de
        código — antes de escrever o conteúdo real.
      </p>

      <h2>Parágrafos e ênfase</h2>
      <p>
        O texto usa a mesma cor e a mesma coluna estreita do restante do
        portfólio. Dá para destacar com <strong>negrito</strong>, usar{" "}
        <em>itálico</em> e apontar para fora com um{" "}
        <a href="https://htmx.org" target="_blank" rel="noreferrer">
          link externo
        </a>
        .
      </p>

      <h2>Listas</h2>
      <ul>
        <li>Um item da lista.</li>
        <li>Outro item, um pouco mais longo, para ver como a linha quebra.</li>
        <li>E um terceiro.</li>
      </ul>

      <h3>Um subtítulo</h3>
      <p>
        Trechos curtos de código aparecem inline assim: <code>go run .</code>.
        Blocos maiores ficam com borda e rolagem horizontal quando precisam:
      </p>

      <pre>
        <code>{`func main() {
	mux := http.NewServeMux()
	mux.Handle("GET /", templ.Handler(pages.Home()))
	http.ListenAndServe(":8080", mux)
}`}</code>
      </pre>

      <blockquote>
        Citações usam a linha lateral tokenizada e o tom secundário do tema.
      </blockquote>

      <p>
        Quando o conteúdo real entrar no lugar deste, nada além deste arquivo
        precisa mudar.
      </p>
    </>
  ),
};
