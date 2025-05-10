
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  specs: {
    engine: string;
    power: string;
    torque: string;
    topSpeed: string;
    weight: string;
  };
  images: string[];
  featured?: boolean;
  colors: string[];
  stock: number;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

export type Category = 'Sport' | 'Naked' | 'Cruiser' | 'Adventure' | 'Touring' | 'Custom';
export type Brand = 'Ducati' | 'BMW' | 'Kawasaki' | 'Honda' | 'Yamaha' | 'Suzuki' | 'KTM' | 'Triumph' | 'Aprilia' | 'MV Agusta';
