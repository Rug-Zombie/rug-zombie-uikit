import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: 'Graves',
    icon: 'GravesIcon',
    href: '/graves',
  },
  {
    label: 'Tombs',
    icon: 'TombsIcon',
    href: '/tombs',
  },
  {
    label: 'Spawning Pools',
    icon: 'SpawningPoolIcon',
    href: '/spawning_pools'
  },
  {
    label: 'Mausoleum (BETA)',
    icon: 'MausoleumIcon',
    href: '/mausoleum',
  },
  {
    label: 'Graveyard',
    icon: 'GraveyardIcon',
    href: '/graveyard'
  },
  {
    label: 'Catacombs',
    icon: 'CatacombsIcon',
    href: '/catacombs'
  },
  {
    label: 'Profile',
    icon: 'ProfileIcon',
    href: '/profile'
  },
  {
    label: 'Referral Program',
    icon: 'ReferralIcon',
    items: [
      {
        label: 'In development',
        href: '/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://rugzombie.gitbook.io/docs/feedback-suggestions-and-bug-bounty',
      },
      {
        label: 'Github',
        href: 'https://github.com/Rug-Zombie',
      },
      {
        label: 'Docs',
        href: 'https://rugzombie.gitbook.io/docs/',
      },
    ],
  },
]

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/RugZombie",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/RugZombie",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
