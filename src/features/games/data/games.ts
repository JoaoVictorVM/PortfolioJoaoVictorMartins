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
    title: { pt: "Protótipo Auto-Battle", en: "Auto-Battler Prototype" },
    description: {
      pt: "Protótipo de auto-battler roguelike com mecânicas de card game, onde heróis lutam automaticamente contra waves de inimigos enquanto você gerencia posicionamento, upgrades e merge de cartas.",
      en: "Roguelike auto-battler prototype with card game mechanics, where heroes fight automatically against waves of enemies while you manage positioning, upgrades and card merging.",
    },
    links: [{ label: { pt: "Jogar", en: "Play" }, url: itchProfileUrl }],
  },
  {
    id: "game-2",
    title: { pt: "Protótipo Shooter 2D", en: "2D Shooter Prototype" },
    description: {
      pt: "Jogo de tiro por ondas construído com Phaser, onde o core da experiência é a movimentação e o game feel, com double jump, dash e efeitos de feedback para tornar a jogabilidade mais responsiva e satisfatória.",
      en: "Wave-based shooter built with Phaser, where movement and game feel are the core of the experience, featuring double jump, dash and feedback effects to make gameplay more responsive and satisfying.",
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
