const mushrooms = {
  mushroom1: {
    name: 'Button',
    image:
      'https://grocycle.com/wp-content/uploads/2019/04/Growing-Button-Mushrooms.jpg',
    desc:
      'Button mushrooms are by far the most common type of mushroom that you’re almost guaranteed to find in grocery stores.',
    id: 1,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },

  mushroom2: {
    name: 'Cremini',
    image:
      'https://grocycle.com/wp-content/uploads/2019/04/Cremini-Mushrooms.jpg',
    desc:
      'Part of the same species as button mushrooms (Agaricus bisporus), but are a brown variation with a slightly deeper flavour.',
    id: 2,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },

  mushroom3: {
    name: 'Portobello',
    image:
      'https://grocycle.com/wp-content/uploads/2019/04/Portobello-Mushrooms.jpg',
    desc:
      'These mushrooms are much larger than cremini or button mushrooms and have a more meaty texture, but still retain a mild flavor.',
    id: 3,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },

  mushroom4: {
    name: 'Oyster',
    image:
      'https://grocycle.com/wp-content/uploads/2019/04/Oyster-Mushrooms-2.jpg',
    desc:
      'They might look like oysters, but they don’t taste like them.',
    id: 4,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },

  mushroom5: {
    name: 'King Oyster',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61S%2BnhF-%2BQL._AC_SL1160_.jpg',
    desc:
      'They’re a large mushroom, and normally come 4 or 5 to a tray. They have a very firm meaty texture compared to regular oyster mushrooms.',
    id: 5,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },

  mushroom6: {
    name: 'Chanterelle',
    image:
      'https://grocycle.com/wp-content/uploads/2020/01/What-Are-Chanterelle-Mushrooms.jpg',
    desc:
      'Chanterelle mushrooms have a distinctive bright yellow color. They’ve got a sweet and peppery flavor that goes well with eggs.',
    id: 6,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },

  mushroom7: {
    name: 'Morel',
    image:
      'https://grocycle.com/wp-content/uploads/2020/02/Where-Do-Morel-Mushrooms-Grow.jpg',
    desc:
      'Morels have a nutty, earthy flavor. They have a meaty texture but they’re still tender.',
    id: 7,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },

  mushroom8: {
    name: 'Enoki',
    image:
      'https://grocycle.com/wp-content/uploads/2019/04/Enoki-Mushrooms.jpg',
    desc:
      'These mushrooms are most commonly used in Asian cooking. They come in large clusters of tiny mushrooms with very long stems and small caps.',
    id: 8,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },

  mushroom9: {
    name: 'Maitake',
    image:
      'https://grocycle.com/wp-content/uploads/2020/02/How-To-Grow-Maitake-Mushrooms.jpg',
    desc:
      'These mushrooms are too tough to eat once they reach any reasonable size. However, they’re used for their medicinal properties.',
    id: 9,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  mushroom10: {
    name: 'Shiitake',
    image:
      'https://grocycle.com/wp-content/uploads/2019/04/Shiitake-Mushrooms.jpg',
    desc:
      'Shiitake mushrooms have a meaty texture much like portobellos. They have a more smoky, earthy flavor when cooked.',
    id: 10,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  mushroom11: {
    name: 'Reishi',
    image:
      'https://grocycle.com/wp-content/uploads/2019/04/reishi-mushrooms-4.jpg',
    desc:
      'The reishi or lingzhi mushroom is often considered the gold standard when it comes to medicinal mushrooms.',
    id: 11,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  mushroom12: {
    name: 'Giant Puffball',
    image:
      'https://grocycle.com/wp-content/uploads/2020/03/How-To-Forage-For-Puffball-Mushrooms.jpg',
    desc:
      'Puffball mushrooms can grow to huge sizes. Up to 20 kg or 44 lbs in weight! However, they’re picked while still small and immature for culinary use.',
    id: 12,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  mushroom13: {
    name: 'Porcini',
    image: 'https://www.almagourmet.com/store/images/fresh-porcini-s.jpg',
    desc:
      'They’ve got a distinctive taste that some people compare to sourdough bread, with slightly creamy and nutty flavors.',
    id: 13,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  mushroom14: {
    name: 'Poison Mushroom',
    image:
      'https://i.pinimg.com/originals/97/0b/cf/970bcf1060e6999b9ac188fa3ebc7de7.png',
    desc: "You eat one of these it's game over bub. Unless you have an extra life.",
    id: 14,
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  mushroom15: {
    name: 'Death Cap',
    image:
      'https://cdn.britannica.com/s:800x1000/79/145379-050-4461FF66/Death-cap-mushroom.jpg',
    desc:
      'Perhaps the deadliest of all mushrooms, consumption can lead to coma and death in more than 50 percent of the incidents',
    id: 15,
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  mushroom16: {
    name: 'Webcaps',
    image:
      'https://cdn.britannica.com/s:800x1000/66/180666-050-FED69BBD/webcaps-Europe-Ingestion-mushrooms-symptoms.jpg',
    desc:
      'These mushrooms feature a poison known as orellanin, which initially causes symptoms similar to the common flu.',
    id: 16,
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  mushroom17: {
    name: 'Destroying Angels',
    image:
      'https://cdn.britannica.com/s:800x1000/08/5508-004-E3F081AB/angel.jpg',
    desc:
      'Yeah these are bad, they could kill you, but honestly what a dramatic name.',
    id: 17,
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  mushroom18: {
    name: 'Psilocybin Shrooms',
    image:
      'https://post.healthline.com/wp-content/uploads/sites/3/2020/02/308850_2200-1200x628.jpg',
    desc: 'Pretty trippy dude',
    id: 18,
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  mushroom19: {
    name: 'Hedgehog',
    image:
      'https://themushroomforager.com/wp-content/uploads/2012/09/IMG_2135-1024x682.jpg',
    desc:
      'They have a sweet, nutty taste and offer a crunchy texture if cooked right. They can be sauteed, pickled, or simmered in milk or stock.',
    id: 19,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  mushroom20: {
    name: 'Black Trumpet',
    image:
      'https://4.bp.blogspot.com/-2S5ODlbBMsA/WLK0NDbL7vI/AAAAAAAACug/3xcsodP_KqAN63qXFgr6TTiSbrCqmWNrACPcBGAYYCw/s640/blogger-image-99202412.jpg',
    desc:
      'People describe the flavor as rich and smoky. When allowed to dry, their flavor even takes on hints of black truffle.',
    id: 20,
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
};

export default mushrooms;
