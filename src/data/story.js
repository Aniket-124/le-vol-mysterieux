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
        text: `While examining the scene, you overhear one of the house staff murmuring about a secret safe room where the most valuable treasures were stored.
        
        You must uncover the hidden word, the entry code to the safe room, and discover what lies within.`,
      },
      {
        bg: '/media/scenes/scene4.jpeg',
        text: `TODO: Riddle`,
        form: [
          { element: 'input', type: 'text', name: 'ans', required: true, placeholder: 'Guess the word' },
          { element: 'btn', type: 'submit', required: true, placeholder: 'Submit' },
        ]
      },
    ]
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
        form: [
          { element: 'input', type: 'text', name: 'ans', required: true, placeholder: 'Guess the word' },
          { element: 'btn', type: 'submit', required: true, placeholder: 'Submit' },
        ]
      },
    ]
  },
]


export default storyExcerpts;