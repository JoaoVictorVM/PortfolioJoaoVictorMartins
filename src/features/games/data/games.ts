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
  summary: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  links?: GameLink[];
}

export const itchProfileUrl = "https://joaovictorvm.itch.io";

export const games: Game[] = [
  {
    id: "game-1",
    title: { pt: "Protótipo Auto-Battle", en: "Auto-Battler Prototype" },
    summary: {
      pt: "Protótipo de auto-battler roguelike com mecânicas de card game, onde heróis lutam automaticamente contra waves de inimigos enquanto você gerencia posicionamento, upgrades e merge de cartas.",
      en: "Roguelike auto-battler prototype with card game mechanics, where heroes fight automatically against waves of enemies while you manage positioning, upgrades and card merging.",
    },
    description: {
      pt: "Protótipo de auto-battler roguelike com mecânicas de card game, onde heróis lutam automaticamente contra waves de inimigos enquanto você gerencia posicionamento, upgrades e merge de cartas.",
      en: "Roguelike auto-battler prototype with card game mechanics, where heroes fight automatically against waves of enemies while you manage positioning, upgrades and card merging.",
    },
    links: [
      {
        label: { pt: "Jogar", en: "Play" },
        url: "https://joaovictorvm.itch.io/autobattle",
      },
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/Prototipo-AutoBattle",
      },
    ],
  },
  {
    id: "game-2",
    title: { pt: "Protótipo Shooter 2D", en: "2D Shooter Prototype" },
    summary: {
      pt: "Jogo de tiro por ondas construído com Phaser, onde o core da experiência é a movimentação e o game feel, com double jump, dash e efeitos de feedback para tornar a jogabilidade mais responsiva e satisfatória.",
      en: "Wave-based shooter built with Phaser, where movement and game feel are the core of the experience, featuring double jump, dash and feedback effects to make gameplay more responsive and satisfying.",
    },
    description: {
      pt: "Jogo de tiro por ondas construído com Phaser, onde o core da experiência é a movimentação e o game feel, com double jump, dash e efeitos de feedback para tornar a jogabilidade mais responsiva e satisfatória.",
      en: "Wave-based shooter built with Phaser, where movement and game feel are the core of the experience, featuring double jump, dash and feedback effects to make gameplay more responsive and satisfying.",
    },
    links: [
      {
        label: { pt: "Jogar", en: "Play" },
        url: "https://github.com/JoaoVictorVM/2d-Shooter",
      },
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/JoaoVictorVM/2d-Shooter",
      },
    ],
  },
];
