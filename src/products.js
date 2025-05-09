const products = [
  {
    id: "001",
    category: "graphic element",
    name: "Bossa Moonraker",
    description: {
      bodyCopy1:
        "Named after one of the kitschiest, but also one of the most memorable James Bond films, the Bossa Moonraker sound system exhibits an aesthetic that wouldn’t look one bit out of place in a Bond villain’s lair.",
      bodyCopy2:
        "The retro-futuristic design comes by way of the California based loudspeaker designer and manufacturer Bossa,",
    },
    designer: "Bossa Moonraker",
    price: 3700,
    date: "2025-04-06",
    fileType: "PSD",
    previewImg: "product_001.jpg",
    productImages: ["product_001.jpg", "product_002.jpg", "product_003.jpg"],
    compatibility: "Photoshop",
  },
  {
    id: "002",
    category: "mockup",
    name: "Oculus",
    description: {
      bodyCopy1:
        "Specially designed for Displaying and Storing Oculus Rift VR Headset.",
      bodyCopy2:
        "VR Display Stand detachable design to be stored away and re-assemble easily. Put your VR Headset and Wireless Controller in VR Stand to make your desktop neat and spectacular.",
    },
    designer: "Oculus",
    price: 380,
    date: "2025-04-07",
    fileType: "PNG",
    previewImg: "product_002.jpg",
    productImages: ["product_002.jpg", "product_003.jpg", "product_004.jpg"],
    compatibility: "Figma",
  },
  {
    id: "003",
    category: "mockup",
    name: "RED5 Bluetooth",
    description: {
      bodyCopy1:
        "Get ready to crank up your audio experience with the Bluetooth Light Up Sound Bar by RED5 – the ultimate blend of sound and light magic!",
      bodyCopy2:
        "This dynamic duo of sound-reactive speakers isn’t just music to your ears; it's a visual feast that will elevate your setup to a whole new level of cool.",
    },
    designer: "Form Labs",
    price: 180,
    date: "2025-04-08",
    fileType: "PSD",
    previewImg: "product_003.jpg",
    productImages: ["product_003.jpg", "product_004.jpg", "product_005.jpg"],
    compatibility: "Photoshop",
  },
  {
    id: "004",
    category: "graphic element",
    name: "Minecraft Torch",
    description: {
      bodyCopy1:
        "Introducing a real life replica of the popular game 'Minecraft' from the American manufacturer Noble Collection, known for its life-size replica.",
      bodyCopy2:
        "This is a 3D model of the 'Minecraft' item with a height of 9.8 inches (25 cm).",
    },
    designer: "Lumen Design",
    price: 89,
    date: "2025-04-09",
    fileType: "SVG",
    previewImg: "product_004.jpg",
    productImages: ["product_004.jpg", "product_005.jpg", "product_006.jpg"],
    compatibility: "Figma",
  },
  {
    id: "005",
    category: "mockup",
    name: "GIVENCHY VR",
    description: {
      bodyCopy1:
        "This product, which contains the charm of Givenchy, can experience both VR and AR simultaneously. ",
      bodyCopy2:
        "Combining virtual reality and augmented reality allows you to enjoy content more realistically and look stylish when viewed from outside.",
    },
    designer: "Keystroke Studio",
    price: 1560,
    date: "2025-04-10",
    fileType: "PSD",
    previewImg: "product_005.jpg",
    productImages: ["product_005.jpg", "product_006.jpg", "product_007.jpg"],
    compatibility: "Photoshop",
  },
  {
    id: "006",
    category: "graphic element",
    name: "OpenSeed Meditation Pod",
    description: {
      bodyCopy1:
        "Meditation is all about silencing the mind and listening to the soul. Making that happen is a breeze with the Open Seed Meditation Pod. Improve your overall self with this Pod.",
      bodyCopy2:
        "Crafted with modern aesthetics, it\u2019s ideal for branding, portfolio showcases, and product campaigns.",
    },
    designer: "Visage Lab",
    price: 5600,
    date: "2025-04-11",
    fileType: "PNG",
    previewImg: "product_006.jpg",
    productImages: ["product_006.jpg", "product_007.jpg", "product_008.jpg"],
    compatibility: "Figma",
  },
  {
    id: "007",
    category: "mockup",
    name: "The Batmobile Desk Clock",
    description: {
      bodyCopy1:
        "Kross Studio and Warner Bros. Consumer Products team up to unveil a top-of-the-line Batman collectible: 1989 Batmobile X Kross Studio Desk Clock",
      bodyCopy2:
        "The ultimate combination of design, fine Swiss craftsmanship and high-end materials bring the desk clock to the next level.",
    },
    designer: "Sonic Grid",
    price: 560,
    date: "2025-04-12",
    fileType: "PSD",
    previewImg: "product_007.jpg",
    productImages: ["product_007.jpg", "product_008.jpg", "product_009.jpg"],
    compatibility: "Sketch",
  },
  {
    id: "008",
    category: "mockup",
    name: "Leica Watch ZM 1 Monochrom",
    description: {
      bodyCopy1:
        "The minimalist design of the Leica ZM Monochrom Edition removes all colour, with the exception of the Red Dot",
      bodyCopy2:
        "The Monochrom Edition watch strap is made of thick, black calf leather with a strong grain, which is identical to the leather cover of the Leica M11 Monochrom. ",
    },
    designer: "Echo Form",
    price: 16900,
    date: "2025-04-13",
    fileType: "PNG",
    previewImg: "product_008.jpg",
    productImages: ["product_008.jpg", "product_009.jpg", "product_010.jpg"],
    compatibility: "Photoshop",
  },
  {
    id: "009",
    category: "mockup",
    name: "Xbox Light Up Headphone Stand",
    description: {
      bodyCopy1:
        "Gamers and Xbox devotees will love this 23.5cm (9.3') tall Xbox Head Light.",
      bodyCopy2:
        "The light is powered by USB (cable included).",
    },
    designer: "Grip Creative",
    price: 35,
    date: "2025-04-14",
    fileType: "PNG",
    previewImg: "product_009.jpg",
    productImages: ["product_009.jpg", "product_010.jpg", "product_011.jpg"],
    compatibility: "Figma",
  },
  {
    id: "010",
    category: "motion",
    name: "Master & Dynamic ",
    description: {
      bodyCopy1:
        "We are thrilled to announce we’ve partnered once again with Leica Camera AG to introduce two new wireless sound tools to the “Master & Dynamic for 0.95” collection.",
      bodyCopy2:
        "Master & Dynamic And Leica Camera AG Continue Their Partnership With Their Latest Wireless Release",
    },
    designer: "Future Constructs",
    price: 1690,
    date: "2025-04-15",
    fileType: "MP4",
    previewImg: "product_010.jpg",
    productImages: ["product_010.jpg", "product_011.jpg", "product_012.jpg"],
    compatibility: "After Effects",
  },
  {
    id: "011",
    category: "mockup",
    name: "RED5 5M LED Strip Light ",
    description: {
      bodyCopy1:
        "Transform your space with the RED5 Sound Reactive Remote Controlled Strip Light! With an easy peel-and-stick adhesive backing",
      bodyCopy2:
        "Crafted with modern aesthetics, it\u2019s ideal for branding, portfolio showcases, and product campaigns.",
    },
    designer: "Glasshouse Studio",
    price: 45,
    date: "2025-04-16",
    fileType: "PSD",
    previewImg: "product_011.jpg",
    productImages: ["product_011.jpg", "product_012.jpg", "product_013.jpg"],
    compatibility: "Figma",
  },
  {
    id: "012",
    category: "mockup",
    name: "EXG Pro Launches Holder",
    description: {
      bodyCopy1:
        "EXG Pro has a new phone and controller holder featuring battle royale video game Fortnite.",
      bodyCopy2:
        "Fortnite has seen success since its release, attracting players eager to battle and build until only one remains.",
    },
    designer: "Persona",
    price: 105,
    date: "2025-04-17",
    fileType: "PNG",
    previewImg: "product_012.jpg",
    productImages: ["product_012.jpg", "product_013.jpg", "product_014.jpg"],
    compatibility: "Figma",
  },
  {
    id: "013",
    category: "sfx",
    name: "Lootbox",
    description: {
      bodyCopy1:
        "Efficiently charging all your family’s devices while trying to keep cable management to a minimum is almost an impossible task",
      bodyCopy2:
        "Crafted with modern aesthetics, it\u2019s ideal for branding, portfolio showcases, and product campaigns.",
    },
    designer: "Classic Console Co.",
    price: 280,
    date: "2025-04-18",
    fileType: "MP3",
    previewImg: "product_013.jpg",
    productImages: ["product_013.jpg", "product_014.jpg", "product_015.jpg"],
    compatibility: "All DAWs",
  },
  {
    id: "014",
    category: "mockup",
    name: "Porsche eBike ",
    description: {
      bodyCopy1:
        "Porsche is expanding its eBike range with two new models. ",
      bodyCopy2:
        "Crafted with modern aesthetics, it\u2019s ideal for branding, portfolio showcases, and product campaigns.",
    },
    designer: "Visual Hands",
    price: 13900,
    date: "2025-04-19",
    fileType: "PNG",
    previewImg: "product_014.jpg",
    productImages: ["product_014.jpg", "product_015.jpg", "product_001.jpg"],
    compatibility: "Figma",
  },
  {
    id: "015",
    category: "motion",
    name: "Wireless Pro Controller",
    description: {
      bodyCopy1:
        "Laser Cutter Loop is a high-fidelity digital asset designed to enhance your creative presentations and visuals.",
      bodyCopy2:
        "Crafted with modern aesthetics, it\u2019s ideal for branding, portfolio showcases, and product campaigns.",
    },
    designer: "Machina Works",
    price: 145,
    date: "2025-04-20",
    fileType: "MP4",
    previewImg: "product_015.jpg",
    productImages: ["product_015.jpg", "product_001.jpg", "product_002.jpg"],
    compatibility: "Blender",
  },
];

export default products;
