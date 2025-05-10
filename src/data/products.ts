import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Panigale V4",
    brand: "Ducati",
    category: "Sport",
    price: 2350000,
    description: "The Panigale V4 is the most powerful production superbike from Ducati. It features a MotoGP-derived Desmosedici Stradale V4 engine and cutting-edge electronics.",
    specs: {
      engine: "1103cc, V4",
      power: "214 HP",
      torque: "124 Nm",
      topSpeed: "300+ km/h",
      weight: "175 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: true,
    colors: ["Red", "Black", "White"],
    stock: 3,
    rating: 4.9
  },
  {
    id: "2",
    name: "S 1000 RR",
    brand: "BMW",
    category: "Sport",
    price: 2050000,
    description: "The BMW S 1000 RR is a race-oriented sport bike initially made by BMW Motorrad to compete in the 2009 Superbike World Championship.",
    specs: {
      engine: "999cc, Inline 4",
      power: "207 HP",
      torque: "113 Nm",
      topSpeed: "299 km/h",
      weight: "197 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: true,
    colors: ["Blue", "Red", "Black"],
    stock: 5,
    rating: 4.8
  },
  {
    id: "3",
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    category: "Sport",
    price: 1550000,
    description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki.",
    specs: {
      engine: "998cc, Inline 4",
      power: "203 HP",
      torque: "115 Nm",
      topSpeed: "299 km/h",
      weight: "207 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Green", "Black", "White"],
    stock: 7,
    rating: 4.7
  },
  {
    id: "4",
    name: "CBR 1000RR-R Fireblade",
    brand: "Honda",
    category: "Sport",
    price: 2375000,
    description: "The Honda CBR1000RR-R Fireblade SP is a superbike with track-focused power and handling.",
    specs: {
      engine: "999cc, Inline 4",
      power: "217 HP",
      torque: "113 Nm",
      topSpeed: "299 km/h",
      weight: "201 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Red", "Black", "Blue"],
    stock: 4,
    rating: 4.8
  },
  {
    id: "5",
    name: "YZF-R1",
    brand: "Yamaha",
    category: "Sport",
    price: 2050000,
    description: "The Yamaha YZF-R1 is a 1,000 cc class sports motorcycle made by Yamaha.",
    specs: {
      engine: "998cc, Inline 4",
      power: "200 HP",
      torque: "113 Nm",
      topSpeed: "293 km/h",
      weight: "200 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Blue", "Black", "Red"],
    stock: 6,
    rating: 4.7
  },
  {
    id: "6",
    name: "GSX-R1000R",
    brand: "Suzuki",
    category: "Sport",
    price: 1920000,
    description: "The Suzuki GSX-R1000 is a sport bike from Suzuki's GSX-R series of motorcycles.",
    specs: {
      engine: "999.8cc, Inline 4",
      power: "202 HP",
      torque: "117 Nm",
      topSpeed: "299 km/h",
      weight: "202 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Blue", "Black", "Yellow"],
    stock: 5,
    rating: 4.6
  },
  {
    id: "7",
    name: "RC 390",
    brand: "KTM",
    category: "Sport",
    price: 320000,
    description: "The KTM RC 390 is a small displacement sport bike known for its aggressive styling and performance.",
    specs: {
      engine: "373.2cc, Single",
      power: "43 HP",
      torque: "37 Nm",
      topSpeed: "179 km/h",
      weight: "155 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Orange", "Black", "White"],
    stock: 10,
    rating: 4.5
  },
  {
    id: "8",
    name: "Street Triple RS",
    brand: "Triumph",
    category: "Naked",
    price: 1150000,
    description: "The Triumph Street Triple RS is a naked sport bike with a powerful three-cylinder engine.",
    specs: {
      engine: "765cc, Inline 3",
      power: "123 HP",
      torque: "79 Nm",
      topSpeed: "260 km/h",
      weight: "166 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Silver", "Black", "White"],
    stock: 6,
    rating: 4.7
  },
  {
    id: "9",
    name: "RSV4 Factory",
    brand: "Aprilia",
    category: "Sport",
    price: 2300000,
    description: "The Aprilia RSV4 is a super bike manufactured by Aprilia, designed for racing in competitions.",
    specs: {
      engine: "1099cc, V4",
      power: "217 HP",
      torque: "125 Nm",
      topSpeed: "301 km/h",
      weight: "199 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: true,
    colors: ["Black", "Red", "Silver"],
    stock: 3,
    rating: 4.8
  },
  {
    id: "10",
    name: "F4 RR",
    brand: "MV Agusta",
    category: "Sport",
    price: 2650000,
    description: "The MV Agusta F4 RR is a high-performance superbike with a distinctive design and premium components.",
    specs: {
      engine: "998cc, Inline 4",
      power: "201 HP",
      torque: "111 Nm",
      topSpeed: "302 km/h",
      weight: "190 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Red", "Silver", "Black"],
    stock: 2,
    rating: 4.9
  },
  {
    id: "11",
    name: "Monster 1200",
    brand: "Ducati",
    category: "Naked",
    price: 1750000,
    description: "The Ducati Monster 1200 is a powerful naked bike with aggressive styling and excellent handling.",
    specs: {
      engine: "1198cc, L-Twin",
      power: "147 HP",
      torque: "124 Nm",
      topSpeed: "250 km/h",
      weight: "187 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Red", "Black", "Grey"],
    stock: 5,
    rating: 4.7
  },
  {
    id: "12",
    name: "Brutale 1000 RR",
    brand: "MV Agusta",
    category: "Naked",
    price: 2700000,
    description: "The MV Agusta Brutale 1000 RR is one of the most powerful naked bikes ever made.",
    specs: {
      engine: "998cc, Inline 4",
      power: "208 HP",
      torque: "116 Nm",
      topSpeed: "302 km/h",
      weight: "186 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Silver", "Red", "Black"],
    stock: 2,
    rating: 4.8
  },
  {
    id: "13",
    name: "Hypermotard 950",
    brand: "Ducati",
    category: "Naked",
    price: 1200000,
    description: "The Ducati Hypermotard 950 is an exciting supermoto-style motorcycle designed for pure riding enjoyment.",
    specs: {
      engine: "937cc, L-Twin",
      power: "114 HP",
      torque: "96 Nm",
      topSpeed: "210 km/h",
      weight: "178 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Red", "Black", "White"],
    stock: 4,
    rating: 4.6
  },
  {
    id: "14",
    name: "Z H2",
    brand: "Kawasaki",
    category: "Naked",
    price: 1950000,
    description: "The Kawasaki Z H2 is a supercharged naked bike with incredible power and acceleration.",
    specs: {
      engine: "998cc, Inline 4 Supercharged",
      power: "200 HP",
      torque: "137 Nm",
      topSpeed: "290 km/h",
      weight: "239 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Green", "Black", "Grey"],
    stock: 3,
    rating: 4.7
  },
  {
    id: "15",
    name: "1290 Super Duke R",
    brand: "KTM",
    category: "Naked",
    price: 1850000,
    description: "The KTM 1290 Super Duke R is known as 'The Beast' for its aggressive styling and enormous power.",
    specs: {
      engine: "1301cc, V-Twin",
      power: "180 HP",
      torque: "140 Nm",
      topSpeed: "270 km/h",
      weight: "189 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Orange", "Black", "White"],
    stock: 4,
    rating: 4.8
  },
  {
    id: "16",
    name: "Panigale V2",
    brand: "Ducati",
    category: "Sport",
    price: 1785000,
    description: "The Ducati Panigale V2 is the middle-weight superbike that represents the entry point to the Panigale family, featuring a 955cc Superquadro engine.",
    specs: {
      engine: "955cc, V2",
      power: "155 HP",
      torque: "104 Nm",
      topSpeed: "270 km/h",
      weight: "176 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Red", "White", "Black"],
    stock: 6,
    rating: 4.6
  },
  {
    id: "17",
    name: "MT-10",
    brand: "Yamaha",
    category: "Naked",
    price: 1480000,
    description: "The Yamaha MT-10 is a powerful naked bike with an aggressive design and crossplane engine derived from the YZF-R1.",
    specs: {
      engine: "998cc, Inline 4",
      power: "160 HP",
      torque: "111 Nm",
      topSpeed: "261 km/h",
      weight: "210 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Blue", "Black", "Grey"],
    stock: 4,
    rating: 4.7
  },
  {
    id: "18",
    name: "CB1000R",
    brand: "Honda",
    category: "Naked",
    price: 1450000,
    description: "The Honda CB1000R is a neo-sports cafe naked bike with minimalist styling and a powerful inline-four engine.",
    specs: {
      engine: "998cc, Inline 4",
      power: "143 HP",
      torque: "104 Nm",
      topSpeed: "240 km/h",
      weight: "212 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Black", "Silver", "Red"],
    stock: 5,
    rating: 4.6
  },
  {
    id: "19",
    name: "F3 800",
    brand: "MV Agusta",
    category: "Sport",
    price: 1850000,
    description: "The MV Agusta F3 800 is a middleweight sport bike known for its beautiful design and advanced electronics.",
    specs: {
      engine: "798cc, Inline 3",
      power: "148 HP",
      torque: "88 Nm",
      topSpeed: "269 km/h",
      weight: "173 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Red", "Silver", "Black"],
    stock: 3,
    rating: 4.8
  },
  {
    id: "20",
    name: "GSX-S1000",
    brand: "Suzuki",
    category: "Naked",
    price: 1280000,
    description: "The Suzuki GSX-S1000 is a naked street bike with an engine derived from the legendary GSX-R1000 K5.",
    specs: {
      engine: "999cc, Inline 4",
      power: "152 HP",
      torque: "106 Nm",
      topSpeed: "260 km/h",
      weight: "214 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Blue", "Black", "Grey"],
    stock: 7,
    rating: 4.6
  },
  {
    id: "21",
    name: "R18",
    brand: "BMW",
    category: "Cruiser",
    price: 2150000,
    description: "The BMW R18 is a premium cruiser motorcycle with the largest boxer engine ever built by BMW, offering a blend of nostalgia and modern technology.",
    specs: {
      engine: "1802cc, Boxer Twin",
      power: "91 HP",
      torque: "158 Nm",
      topSpeed: "180 km/h",
      weight: "345 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Black", "White", "Blue"],
    stock: 4,
    rating: 4.7
  },
  {
    id: "22",
    name: "Diavel V4",
    brand: "Ducati",
    category: "Cruiser",
    price: 2480000,
    description: "The Ducati Diavel V4 combines the performance of a maxi-naked with the ergonomics of a muscle cruiser, featuring the new V4 Granturismo engine.",
    specs: {
      engine: "1158cc, V4",
      power: "168 HP",
      torque: "126 Nm",
      topSpeed: "250 km/h",
      weight: "211 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: true,
    colors: ["Red", "Black", "Grey"],
    stock: 3,
    rating: 4.9
  },
  {
    id: "23",
    name: "Tiger 900 Rally Pro",
    brand: "Triumph",
    category: "Adventure",
    price: 1580000,
    description: "The Triumph Tiger 900 Rally Pro is a premium adventure motorcycle designed for both on and off-road performance.",
    specs: {
      engine: "888cc, Inline 3",
      power: "95 HP",
      torque: "87 Nm",
      topSpeed: "201 km/h",
      weight: "201 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["White", "Green", "Black"],
    stock: 5,
    rating: 4.7
  },
  {
    id: "24",
    name: "Multistrada V4",
    brand: "Ducati",
    category: "Adventure",
    price: 2290000,
    description: "The Ducati Multistrada V4 is a versatile adventure bike with an innovative V4 engine and advanced electronics.",
    specs: {
      engine: "1158cc, V4",
      power: "170 HP",
      torque: "125 Nm",
      topSpeed: "250 km/h",
      weight: "215 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: true,
    colors: ["Red", "White", "Black"],
    stock: 4,
    rating: 4.8
  },
  {
    id: "25",
    name: "Gold Wing",
    brand: "Honda",
    category: "Touring",
    price: 3200000,
    description: "The Honda Gold Wing is the ultimate luxury touring motorcycle, offering unmatched comfort for long-distance riding.",
    specs: {
      engine: "1833cc, Flat-Six",
      power: "126 HP",
      torque: "170 Nm",
      topSpeed: "180 km/h",
      weight: "367 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Red", "Black", "Blue"],
    stock: 2,
    rating: 4.9
  },
  {
    id: "26",
    name: "Streetfighter V4",
    brand: "Ducati",
    category: "Naked",
    price: 2000000,
    description: "The Ducati Streetfighter V4 is a stripped-down superbike with the heart of a Panigale V4 and aggressive styling.",
    specs: {
      engine: "1103cc, V4",
      power: "208 HP",
      torque: "123 Nm",
      topSpeed: "280 km/h",
      weight: "178 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: true,
    colors: ["Red", "Dark Stealth", "Grey"],
    stock: 3,
    rating: 4.9
  },
  {
    id: "27",
    name: "Tuono V4 Factory",
    brand: "Aprilia",
    category: "Naked",
    price: 1950000,
    description: "The Aprilia Tuono V4 Factory is a high-performance naked bike derived from the RSV4 superbike with advanced electronics.",
    specs: {
      engine: "1077cc, V4",
      power: "175 HP",
      torque: "121 Nm",
      topSpeed: "270 km/h",
      weight: "209 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Black", "Red", "Silver"],
    stock: 4,
    rating: 4.8
  },
  {
    id: "28",
    name: "R 1250 GS Adventure",
    brand: "BMW",
    category: "Adventure",
    price: 2200000,
    description: "The BMW R 1250 GS Adventure is the definitive adventure motorcycle, built for global exploration with supreme capability.",
    specs: {
      engine: "1254cc, Boxer Twin",
      power: "136 HP",
      torque: "143 Nm",
      topSpeed: "200 km/h",
      weight: "249 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: true,
    colors: ["Blue", "White", "Black"],
    stock: 5,
    rating: 4.9
  },
  {
    id: "29",
    name: "Z900",
    brand: "Kawasaki",
    category: "Naked",
    price: 840000,
    description: "The Kawasaki Z900 is a middleweight naked bike combining aggressive styling with powerful performance.",
    specs: {
      engine: "948cc, Inline 4",
      power: "125 HP",
      torque: "98.6 Nm",
      topSpeed: "245 km/h",
      weight: "212 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Green", "Black", "Grey"],
    stock: 8,
    rating: 4.6
  },
  {
    id: "30",
    name: "Speed Triple 1200 RS",
    brand: "Triumph",
    category: "Naked",
    price: 1685000,
    description: "The Triumph Speed Triple 1200 RS is a premium performance naked bike with advanced electronics and aggressive styling.",
    specs: {
      engine: "1160cc, Inline 3",
      power: "180 HP",
      torque: "125 Nm",
      topSpeed: "260 km/h",
      weight: "198 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Silver", "Black", "Red"],
    stock: 4,
    rating: 4.7
  },
  {
    id: "31",
    name: "Brutale 800 RR",
    brand: "MV Agusta",
    category: "Naked",
    price: 1650000,
    description: "The MV Agusta Brutale 800 RR is a middleweight naked bike with beautiful Italian design and thrilling performance.",
    specs: {
      engine: "798cc, Inline 3",
      power: "140 HP",
      torque: "87 Nm",
      topSpeed: "244 km/h",
      weight: "175 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    colors: ["Red", "Silver", "Black"],
    stock: 3,
    rating: 4.7
  },
  {
    id: "32",
    name: "Rocket 3 R",
    brand: "Triumph",
    category: "Cruiser",
    price: 2150000,
    description: "The Triumph Rocket 3 R is a muscle roadster featuring the world's largest production motorcycle engine displacement.",
    specs: {
      engine: "2458cc, Inline 3",
      power: "167 HP",
      torque: "221 Nm",
      topSpeed: "220 km/h",
      weight: "291 kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: true,
    colors: ["Black", "Silver", "Red"],
    stock: 2,
    rating: 4.8
  },
];

// Get the first 58 products (could be extended with more products)
export const getAllProducts = (): Product[] => {
  return Array.from({ length: 58 }).map((_, index) => {
    if (index < products.length) {
      return products[index];
    }
    
    // Generate additional products based on existing templates
    const baseProduct = products[index % products.length];
    return {
      ...baseProduct,
      id: `extra-${index}`,
      name: `${baseProduct.name} Special Edition`,
      price: baseProduct.price + 50000 + (index * 10000),
      stock: Math.floor(Math.random() * 10) + 1,
      featured: index < 25 ? index % 5 === 0 : false
    };
  });
};

export const getFeaturedProducts = (): Product[] => {
  return getAllProducts().filter(product => product.featured);
};
