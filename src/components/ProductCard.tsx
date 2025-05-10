
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="overflow-hidden aspect-square relative">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="product-image w-full h-full object-cover bg-muted"
        />
        {product.stock < 5 && (
          <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-medium">
            Limited Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <div className="price-tag">
            ₹{formatCurrency(product.price)}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
