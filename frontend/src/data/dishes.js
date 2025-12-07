export const dishes = {
  normal: {
    meals: [
      {
        id: 1,
        name: "Tofu Broccoli Brown Rice Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 630, protein: "40g", carbs: "70g", fat: "15g" },
        ingredients: ["tofu", "broccoli", "brown rice", "soy sauce", "sesame"]
      },
      {
        id: 2,
        name: "Paneer Zucchini Premium Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 640, protein: "38g", carbs: "68g", fat: "18g" },
        ingredients: ["paneer", "zucchini", "rice", "herbs"]
      },
      {
        id: 3,
        name: "Soya Chunks Power Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 620, protein: "42g", carbs: "72g", fat: "12g" },
        ingredients: ["soya chunks", "rice", "veggies", "seasoning"]
      },
      {
        id: 4,
        name: "Chickpea Cherry Tomato Rice Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 610, protein: "35g", carbs: "70g", fat: "14g" },
        ingredients: ["chickpeas", "cherry tomatoes", "rice", "olive oil"]
      },
      {
        id: 5,
        name: "Mushroom Paneer Lite Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 630, protein: "36g", carbs: "68g", fat: "16g" },
        ingredients: ["mushroom", "paneer", "rice", "spices"]
      },
      {
        id: 6,
        name: "Sweet Potato Rajma Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 630, protein: "35g", carbs: "75g", fat: "12g" },
        ingredients: ["sweet potato", "rajma", "rice", "spices"]
      },
      {
        id: 7,
        name: "VegOre Signature Green Protein Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 635, protein: "40g", carbs: "70g", fat: "15g" },
        ingredients: ["green veggies", "tofu/paneer", "rice", "protein mix"]
      },
    ],

    salads: [
      {
        id: 10,
        name: "Paneer Protein Crunch Salad",
        img: "/images/salad.jpg",
        price: 149,
        nutrition: { calories: 360, protein: "30g", carbs: "32g", fat: "12g" },
        ingredients: ["paneer", "lettuce", "veggies", "seeds"]
      },
      {
        id: 11,
        name: "Tofu Sesame Veg Salad",
        img: "/images/salad.jpg",
        price: 159,
        nutrition: { calories: 370, protein: "30g", carbs: "29g", fat: "14g" },
        ingredients: ["tofu", "sesame", "greens", "dressing"]
      },
      {
        id: 12,
        name: "Chickpea Greek Fresh Bowl",
        img: "/images/salad.jpg",
        price: 149,
        nutrition: { calories: 350, protein: "26g", carbs: "35g", fat: "10g" },
        ingredients: ["chickpeas", "cucumber", "tomato", "herbs"]
      },
      {
        id: 13,
        name: "Sprout + Quinoa Fusion Salad",
        img: "/images/salad.jpg",
        price: 149,
        nutrition: { calories: 340, protein: "28g", carbs: "34g", fat: "9g" },
        ingredients: ["sprouts", "quinoa", "veggies"]
      },
      {
        id: 14,
        name: "Soya Crunch VegOre Salad",
        img: "/images/salad.jpg",
        price: 149,
        nutrition: { calories: 330, protein: "32g", carbs: "30g", fat: "8g" },
        ingredients: ["soya chunks", "greens", "veggies"]
      },
      {
        id: 15,
        name: "Paneer Apple Energy Salad",
        img: "/images/salad.jpg",
        price: 159,
        nutrition: { calories: 360, protein: "27g", carbs: "33g", fat: "11g" },
        ingredients: ["paneer", "apple", "greens", "nuts"]
      },
      {
        id: 16,
        name: "VegOre Signature Green Salad",
        img: "/images/salad.jpg",
        price: 149,
        nutrition: { calories: 350, protein: "30g", carbs: "28g", fat: "12g" },
        ingredients: ["green veggies", "seeds", "herbs"]
      },
    ],

    smoothies: [
      {
        id: 20,
        name: "Chocolate Peanut Protein Smoothie",
        img: "/images/smoothies.jpg",
        price: 119,
        nutrition: { calories: 250, protein: "14g", carbs: "32g", fat: "8g" },
        ingredients: ["cocoa", "peanut butter", "milk", "protein powder"]
      },
      {
        id: 21,
        name: "Banana Oats Muscle Smoothie",
        img: "/images/smoothies.jpg",
        price: 109,
        nutrition: { calories: 240, protein: "12g", carbs: "28g", fat: "7g" },
        ingredients: ["banana", "oats", "milk", "protein"]
      },
      {
        id: 22,
        name: "Green High-Fiber Glow Smoothie",
        img: "/images/smoothies.jpg",
        price: 119,
        nutrition: { calories: 210, protein: "10g", carbs: "26g", fat: "6g" },
        ingredients: ["spinach", "apple", "chia", "lemon"]
      },
      {
        id: 23,
        name: "Protein Coffee Smoothie",
        img: "/images/smoothies.jpg",
        price: 129,
        nutrition: { calories: 230, protein: "12g", carbs: "25g", fat: "7g" },
        ingredients: ["coffee", "milk", "protein powder", "dates"]
      },
      {
        id: 24,
        name: "Beet-Oats Detox Smoothie",
        img: "/images/smoothies.jpg",
        price: 109,
        nutrition: { calories: 200, protein: "11g", carbs: "24g", fat: "5g" },
        ingredients: ["beetroot", "oats", "lemon", "water"]
      },
    ],
  },

  // --------------------------
  // VEGAN SECTION
  // --------------------------

  vegan: {
    meals: [
      {
        id: 30,
        name: "Tofu Broccoli Brown Rice Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 630, protein: "40g", carbs: "70g", fat: "15g" },
        ingredients: ["tofu", "broccoli", "brown rice"]
      },
      {
        id: 31,
        name: "Chickpea Cherry Tomato Rice Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 610, protein: "35g", carbs: "70g", fat: "14g" },
        ingredients: ["chickpeas", "cherry tomato", "rice"]
      },
      {
        id: 32,
        name: "Soya Chunks Power Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 620, protein: "42g", carbs: "72g", fat: "12g" },
        ingredients: ["soya chunks", "rice", "vegetables"]
      },
    ],

    salads: [
      {
        id: 40,
        name: "Tofu Sesame Veg Salad",
        img: "/images/salad.jpg",
        price: 159,
        nutrition: { calories: 370, protein: "30g", carbs: "29g", fat: "14g" },
        ingredients: ["tofu", "sesame", "greens"]
      },
      {
        id: 41,
        name: "Sprout + Quinoa Vegan Salad",
        img: "/images/salad.jpg",
        price: 149,
        nutrition: { calories: 340, protein: "28g", carbs: "34g", fat: "9g" },
        ingredients: ["quinoa", "sprouts", "veggies"]
      },
      {
        id: 42,
        name: "Soya Crunch Vegan Salad",
        img: "/images/salad.jpg",
        price: 149,
        nutrition: { calories: 330, protein: "32g", carbs: "30g", fat: "8g" },
        ingredients: ["soya chunks", "greens"]
      },
    ],

    smoothies: [
      {
        id: 50,
        name: "Banana Oats Vegan Smoothie",
        img: "/images/smoothies.jpg",
        price: 109,
        nutrition: { calories: 240, protein: "12g", carbs: "28g", fat: "7g" },
        ingredients: ["banana", "oats", "almond milk"]
      },
      {
        id: 51,
        name: "Green Vegan Detox Smoothie",
        img: "/images/smoothies.jpg",
        price: 119,
        nutrition: { calories: 210, protein: "10g", carbs: "26g", fat: "6g" },
        ingredients: ["spinach", "apple", "water", "chia seeds"]
      },
    ],
  },

  // --------------------------
  // JAIN SECTION
  // --------------------------

  jain: {
    meals: [
      {
        id: 60,
        name: "Jain Rajma Rice Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 620, protein: "28g", carbs: "72g", fat: "10g" },
        ingredients: ["rajma", "rice", "mild spices (no onion/garlic)"]
      },
      {
        id: 61,
        name: "Jain Paneer Veg Rice Bowl",
        img: "/images/meal.jpg",
        price: 150,
        nutrition: { calories: 640, protein: "32g", carbs: "70g", fat: "14g" },
        ingredients: ["paneer", "rice", "vegetables (Jain-friendly)"]
      },
    ],

    salads: [
      {
        id: 70,
        name: "Jain Fruit Power Salad",
        img: "/images/salad.jpg",
        price: 150,
        nutrition: { calories: 180, protein: "3g", carbs: "40g", fat: "1g" },
        ingredients: ["apple", "banana", "grapes"]
      },
      {
        id: 71,
        name: "Jain Sprout & Veg Salad",
        img: "/images/salad.jpg",
        price: 149,
        nutrition: { calories: 260, protein: "18g", carbs: "32g", fat: "6g" },
        ingredients: ["sprouts", "cucumber", "carrot"]
      },
    ],

    smoothies: [
      {
        id: 80,
        name: "Jain Banana Almond Smoothie",
        img: "/images/smoothies.jpg",
        price: 130,
        nutrition: { calories: 240, protein: "6g", carbs: "36g", fat: "7g" },
        ingredients: ["banana", "almonds", "milk"]
      },
      {
        id: 81,
        name: "Jain Peanut Protein Smoothie",
        img: "/images/smoothies.jpg",
        price: 119,
        nutrition: { calories: 230, protein: "9g", carbs: "28g", fat: "8g" },
        ingredients: ["peanuts", "milk", "dates"]
      },
    ],
  },
};
