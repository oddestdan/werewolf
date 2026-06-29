export type Locale = 'uk' | 'en';

export const dictionaries = {
  uk: {
    title: 'Ultimate Werewolf: Інструкції',
    wakingOrder: 'Порядок пробудження',
    staticRoles: 'Статичні ролі',
    discussionTime: 'Час обговорення: 6 хвилин',
    roles: {
      werewolf: {
        name: 'Перевертень',
        card: 'Темні Тузи',
        description: 'Вночі Перевертні прокидаються і шукають інших Перевертнів. Якщо Перевертень один, він може подивитися одну карту в центрі.'
      },
      mason: {
        name: 'Масон',
        card: 'Світлі Тузи',
        description: 'Вночі Масони прокидаються і шукають інших Масонів. Якщо інших немає, значить друга карта Масона знаходиться в центрі.'
      },
      seer: {
        name: 'Провидець',
        card: 'Валет Бубон',
        description: 'Вночі Провидець може подивитися карту іншого гравця або дві карти в центрі.'
      },
      robber: {
        name: 'Грабіжник',
        card: 'Валет Треф',
        description: 'Вночі Грабіжник може обміняти свою карту на карту іншого гравця, а потім подивитися свою нову карту.'
      },
      troublemaker: {
        name: 'Бешкетниця',
        card: 'Валет Пік',
        description: 'Вночі Бешкетниця може поміняти місцями карти двох інших гравців, не дивлячись на них.'
      },
      insomniac: {
        name: 'Безсоння',
        card: 'Король Треф',
        description: 'Вночі Безсоння прокидається і дивиться на свою карту, щоб дізнатися, чи не поміняли її.'
      },
      tanner: {
        name: 'Таннер',
        card: 'Король Чирв',
        description: 'Таннер хоче померти. Він перемагає, якщо його вбивають. Грає сам за себе.'
      },
      hunter: {
        name: 'Мисливець',
        card: 'Валет Чирв',
        description: 'Якщо Мисливця вбивають, людина, на яку він вказує, також гине.'
      }
    }
  },
  en: {
    title: 'Ultimate Werewolf: Instructions',
    wakingOrder: 'Waking Order',
    staticRoles: 'Static Roles',
    discussionTime: 'Discussion Time: 6 minutes',
    roles: {
      werewolf: {
        name: 'Werewolf',
        card: 'Dark Aces',
        description: 'At night, Werewolves open their eyes and look for other Werewolves. If there is only one, they may look at one center card.'
      },
      mason: {
        name: 'Mason',
        card: 'Light Aces',
        description: 'At night, Masons wake up and look for the other Mason. If they do not see another, the other Mason card is in the center.'
      },
      seer: {
        name: 'Seer',
        card: 'Jack of Diamonds',
        description: 'At night, the Seer gets to look at another player\'s card or two of the cards in the center.'
      },
      robber: {
        name: 'Robber',
        card: 'Jack of Clubs',
        description: 'At night, the Robber may swap their card with another player\'s card, and then view their new card.'
      },
      troublemaker: {
        name: 'Troublemaker',
        card: 'Jack of Spades',
        description: 'At night, the Troublemaker may swap the cards of two other players without looking at them.'
      },
      insomniac: {
        name: 'Insomniac',
        card: 'King of Clubs',
        description: 'At night, the Insomniac wakes up and looks at their card to see if it has changed.'
      },
      tanner: {
        name: 'Tanner',
        card: 'King of Hearts',
        description: 'The Tanner wants to die. They only win if they die. The Tanner is on a team of their own.'
      },
      hunter: {
        name: 'Hunter',
        card: 'Jack of Hearts',
        description: 'If the Hunter is killed, the person they point at is also killed.'
      }
    }
  }
};
