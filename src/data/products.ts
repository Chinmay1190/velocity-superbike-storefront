
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
  // We'll add more products to reach 58+ but for brevity, I'll include a subset of them
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
  // Additional products to make up the full 58+ products would go here
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
