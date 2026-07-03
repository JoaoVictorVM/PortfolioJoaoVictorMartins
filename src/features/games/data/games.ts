export interface GameLink {
  label: {
    pt: string;
    en: string;
  };
  url: string;
}

export interface Game {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  links?: GameLink[];
}

export const itchProfileUrl = "https://itch.io";

export const games: Game[] = [
  {
    id: "game-1",
    title: { pt: "Jogo de Exemplo 1", en: "Sample Game 1" },
    description: {
      pt: "Platformer 2D criado para experimentar movimentação e level design. Descrição provisória a ser substituída pelo conteúdo real.",
      en: "2D platformer built to experiment with movement and level design. Placeholder description to be replaced with real content.",
    },
    links: [{ label: { pt: "Jogar", en: "Play" }, url: itchProfileUrl }],
  },
  {
    id: "game-2",
    title: { pt: "Jogo de Exemplo 2", en: "Sample Game 2" },
    description: {
      pt: "Puzzle focado em mecânicas simples e progressão gradual. Descrição provisória a ser substituída pelo conteúdo real.",
      en: "Puzzle focused on simple mechanics and gradual progression. Placeholder description to be replaced with real content.",
    },
    links: [{ label: { pt: "Jogar", en: "Play" }, url: itchProfileUrl }],
  },
  {
    id: "game-3",
    title: { pt: "Jogo de Exemplo 3", en: "Sample Game 3" },
    description: {
      pt: "Arcade de pontuação com foco em ritmo e dificuldade crescente. Descrição provisória a ser substituída pelo conteúdo real.",
      en: "Score-based arcade focused on pace and rising difficulty. Placeholder description to be replaced with real content.",
    },
    links: [{ label: { pt: "Jogar", en: "Play" }, url: itchProfileUrl }],
  },
  {
    id: "game-4",
    title: { pt: "Jogo de Exemplo 4", en: "Sample Game 4" },
    description: {
      pt: "Experimento top-down explorando exploração e narrativa curta. Descrição provisória a ser substituída pelo conteúdo real.",
      en: "Top-down experiment exploring exploration and short narrative. Placeholder description to be replaced with real content.",
    },
    links: [{ label: { pt: "Jogar", en: "Play" }, url: itchProfileUrl }],
  },
];
