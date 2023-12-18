const mongoose = require('mongoose');
const {Coffee} = require('./model/coffeeItemModel'); // Update with the correct path to your model
require('dotenv').config();

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CoffeeData = [
  {
    id: 'C1',
    name: 'Americano',
    description:
      "The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.",
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693689/americano/square/americano_pic_1_square_xsbnne.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693691/americano/portrait/americano_pic_1_portrait_iwcfby.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 0,
  },
  {
    id: 'C2',
    name: 'Americano',
    description:
      "The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.",
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693689/americano/square/americano_pic_2_square_afyhr2.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693689/americano/portrait/americano_pic_2_portrait_qwbam0.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 1,
  },
  {
    id: 'C3',
    name: 'Americano',
    description:
      "The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.",
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693690/americano/square/americano_pic_3_square_q3fkbf.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693690/americano/portrait/americano_pic_3_portrait_g2fuey.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 2,
  },
  {
    id: 'C4',
    name: 'Black Coffee',
    description:
      'Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693670/black_coffee/square/black_coffee_pic_1_square_pzi8js.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693669/black_coffee/portrait/black_coffee_pic_1_portrait_fcu4nu.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 3,
  },
  {
    id: 'C5',
    name: 'Black Coffee',
    description:
      'Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693668/black_coffee/square/black_coffee_pic_2_square_mxgynt.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693669/black_coffee/portrait/black_coffee_pic_2_portrait_fgvypn.png',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 4,
  },
  {
    id: 'C6',
    name: 'Black Coffee',
    description:
      'Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693670/black_coffee/square/black_coffee_pic_3_square_eels9b.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693668/black_coffee/portrait/black_coffee_pic_3_portrait_a5hskq.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 5,
  },
  {
    id: 'C7',
    name: 'Cappucchino',
    description:
      'Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693671/cappuccino/square/cappuccino_pic_1_square_hzwzpk.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693669/cappuccino/portrait/cappuccino_pic_1_portrait_sg5j7l.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 6,
  },
  {
    id: 'C8',
    name: 'Cappucchino',
    description:
      'Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693667/cappuccino/square/cappuccino_pic_2_square_c9ffeo.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693671/cappuccino/portrait/cappuccino_pic_2_portrait_af9mrf.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 7,
  },
  {
    id: 'C9',
    name: 'Cappucchino',
    description:
      'Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693668/cappuccino/square/cappuccino_pic_3_square_etkd07.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693671/cappuccino/portrait/cappuccino_pic_3_portrait_fnfehn.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 8,
  },
  {
    id: 'C10',
    name: 'Espresso',
    description:
      'Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693673/espresso/square/espresso_pic_1_square_kqgsdh.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693675/espresso/portrait/espresso_pic_1_portrait_k8mgwh.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 9,
  },
  {
    id: 'C11',
    name: 'Espresso',
    description:
      'Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693673/espresso/square/espresso_pic_2_square_pr3cco.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693675/espresso/portrait/espresso_pic_2_portrait_jawwip.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 10,
  },
  {
    id: 'C12',
    name: 'Espresso',
    description:
      'Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693673/espresso/square/espresso_pic_3_square_mvp70a.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693675/espresso/portrait/espresso_pic_3_portrait_cp96mh.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 11,
  },
  {
    id: 'C13',
    name: 'Latte',
    description:
      'A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693677/latte/square/latte_pic_1_square_rlxcle.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693678/latte/portrait/latte_pic_1_portrait_klvy6p.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 12,
  },
  {
    id: 'C14',
    name: 'Latte',
    description:
      'A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693678/latte/square/latte_pic_2_square_midxhd.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693678/latte/portrait/latte_pic_2_portrait_j8qobz.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 13,
  },
  {
    id: 'C15',
    name: 'Latte',
    description:
      'A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.',
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693679/latte/square/latte_pic_3_square_pdbzfr.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693680/latte/portrait/latte_pic_3_portrait_r3ecv6.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 14,
  },
  {
    id: 'C16',
    name: 'Macchiato',
    description:
      "The word 'macchiato' means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. ",
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693681/macchiato/square/macchiato_pic_1_square_b9a6ka.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693685/macchiato/portrait/macchiato_pic_1_portrait_yw1mch.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 15,
  },
  {
    id: 'C17',
    name: 'Macchiato',
    description:
      "The word 'macchiato' means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. ",
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693682/macchiato/square/macchiato_pic_2_square_r26kp5.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693687/macchiato/portrait/macchiato_pic_2_portrait_uciczo.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 16,
  },
  {
    id: 'C18',
    name: 'Macchiato',
    description:
      "The word 'macchiato' means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. ",
    roasted: 'Medium Roasted',
    imagelink_square:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693682/macchiato/square/macchiato_pic_3_square_nknfvl.png',
    imagelink_portrait:
      'https://res.cloudinary.com/deg8w4agm/image/upload/v1702693686/macchiato/portrait/macchiato_pic_3_portrait_uu5en4.png',
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '1.38', currency: '$'},
      {size: 'M', price: '3.15', currency: '$'},
      {size: 'L', price: '4.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Coffee',
    index: 17,
  },
];

const seedDB = async () => {
  await Coffee.deleteMany({}); // Clear existing data
  await Coffee.insertMany(CoffeeData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
