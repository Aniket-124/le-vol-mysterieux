const storyExcerpts = [
  {
    excerpt: `You arrive at the opulent mansion of the esteemed art collector, Mr. Beaumont. 
    As you step inside, you notice the remnants of a shattered display case—the theft has undoubtedly taken place. 
    While examining the scene, you overhear one of the house staff murmuring about a secret safe room where the most valuable treasures were stored. 
    You must uncover the hidden word, the entry code to the safe room, and discover what lies within.`,
    scenes: [
      {
        bg: '/media/scenes/scene1.jpeg',
        text: 'You arrive at the opulent mansion of the esteemed art collector, Mr. Beaumont.',
      },
      {
        bg: '/media/scenes/scene2.jpeg',
        text: 'As you step inside, you notice the remnants of a shattered display case—the theft has undoubtedly taken place.',
      },
      {
        bg: '/media/scenes/scene3.jpeg',
        text: `While examining the scene, you overhear one of the house staff murmuring about a secret safe room where the most valuable treasures were stored.`,
      },
      {
        bg: '/media/scenes/scene4.jpeg',
        text: `You must uncover the hidden word, the entry code to the safe room, and discover what lies within.`,
      },
    ],
    form: {
      input: { type: 'text', name: 'ans', required: true, placeholder: 'Guess the word', hint: 'M__T_RM__D' },
      button: { type: 'submit', required: true, placeholder: 'Submit' },
    },
    ans: 'MASTERMIND'
  },
  {
    excerpt: `With the safe room code in hand, you descend into the depths of the mansion, following a hidden passage. 
    The air grows colder as you enter an underground chamber—a hideout of the criminal mastermind. 
    Dust-covered blueprints and encrypted notes litter the room, hinting at their grand scheme. 
    Your eyes are drawn to a particular word etched into the wall—a clue that may lead you closer to the truth. 
    Decipher it to reveal the location of this secret lair.`,
    scenes: [
      {
        bg: '/media/scenes/scene5.jpeg',
        text: 'With the safe room code in hand, you descend into the depths of the mansion, following a hidden passage.',
      },
      {
        bg: '/media/scenes/scene6.jpeg',
        text: 'The air grows colder as you enter an underground chamber—a hideout of the criminal mastermind.',
      },
      {
        bg: '/media/scenes/scene7.jpeg',
        text: `Dust-covered blueprints and encrypted notes litter the room, hinting at their grand scheme. Your eyes are drawn to a particular word etched into the wall—a clue that may lead you closer to the truth.`,
      },
      {
        bg: '/media/scenes/scene8.jpeg',
        text: `Decipher it to reveal the location of this secret lair.`,
      },
    ],
    form: {
      input: { type: 'text', name: 'ans', required: true, placeholder: 'Can you decipher?', hint: 'L____N' },
      button: { type: 'submit', required: true, placeholder: 'Submit' },
    },
    ans: 'LONDON'
  },
  {
    excerpt: `While investigating the underground hideout, you come across a flight-ticket lying on the floor left by the criminal. With this information you may know where to find him`,
    scenes: [
      {
        bg: '/media/scenes/scene9.jpeg',
        text: 'While investigating the underground hideout, you come across a flight-ticket lying on the floor left by the criminal.',
      },
      {
        bg: '/media/scenes/scene10.jpeg',
        text: 'With this information you may know where to find him',
      },
    ],
    form: {
      input: { type: 'text', name: 'ans', required: true, placeholder: 'Where should you go now?', hint: '_O_____' },
      button: { type: 'submit', required: true, placeholder: 'Submit' },
    },
    ans: 'NOWHERE',
    deadend: 'TORONTO'
  },
  {
    excerpt: `Unveiling the criminal mastermind behind the heist becomes your mission. Whispers guide you to an infamous, mysterious name. Guess the hidden word to confirm their identity. Stay vigilant, uncover truth, and justice prevails. As faint presence emerges from the crime scene, connecting enigmatic clues. Decrypt secrets in cryptic messages, follow shadowy trails, expose the orchestrator. `,
    scenes: [
      {
        bg: '/media/scenes/scene11.jpeg',
        text: 'That previous clue appeared significant but it was a deliberate attempt to divert your attention. Unveiling the criminal mastermind behind the heist becomes your mission.',
      },
      {
        bg: '/media/scenes/scene12.jpeg',
        text: 'Whispers guide you to an infamous, mysterious name. Guess the hidden word to confirm their identity. Stay vigilant, uncover truth, and justice prevails.',
      },
      {
        bg: '/media/scenes/scene13.jpeg',
        text: 'Decrypt secrets in cryptic messages, follow Shadowy trails, expose the orchestrator.',
      },
    ],
    form: {
      input: { type: 'text', name: 'ans', required: true, placeholder: 'Can you guess the theif\'s name?', hint: '_HA_O_' },
      button: { type: 'submit', required: true, placeholder: 'Submit' },
    },
    ans: 'SHADOW'
  }
]

const failure = {
  excerpt: `As the detective followed the twists and turns of the investigation, a sinking feeling started to settle in their gut. Every lead turned cold, every clue led to dead ends. The elusive thief slipped through their fingers like smoke, leaving behind only a sense of frustration and defeat. With a heavy heart, the detective realized that this time, the thief had managed to outwit them. The criminal vanished into the night, leaving behind a void that seemed impossible to fill. The streets whispered tales of the mastermind's escape, a testament to their cunning and audacity.The detective, left with unanswered questions and a bitter taste of failure, vowed to continue the pursuit, knowing that their encounter with this formidable adversary was far from over.`,
  scenes: [
    {
      bg: '/media/scenes/faulure.jpeg',
      text: `As the detective followed the twists and turns of the investigation, a sinking feeling started to settle in their gut. Every lead turned cold, every clue led to dead ends. The elusive thief slipped through their fingers like smoke, leaving behind only a sense of frustration and defeat. With a heavy heart, the detective realized that this time, the thief had managed to outwit them. The criminal vanished into the night, leaving behind a void that seemed impossible to fill. The streets whispered tales of the mastermind's escape, a testament to their cunning and audacity.The detective, left with unanswered questions and a bitter taste of failure, vowed to continue the pursuit, knowing that their encounter with this formidable adversary was far from over.`,
    },
  ],
  form: {
    button: { type: 'submit', required: true, placeholder: 'Submit' },
  }
}

const success = {
  excerpt: `With each clue deciphered, you piece together the puzzle, unravel the mystery, and expose the criminal mastermind. The stolen treasures are recovered, and the city breathes a sigh of relief. Your exceptional detective skills and unwavering determination have once again prevailed, ensuring that justice is served.`,
  scenes: [
    {
      bg: '/media/scenes/success.jpeg',
      text: `With each clue deciphered, you piece together the puzzle, unravel the mystery, and expose the criminal mastermind. The stolen treasures are recovered, and the city breathes a sigh of relief. Your exceptional detective skills and unwavering determination have once again prevailed, ensuring that justice is served.`,
    },
  ],
}


export { storyExcerpts, failure, success };