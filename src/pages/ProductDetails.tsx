
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatCurrency } from '@/lib/utils';
import { Check, ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/products')}>Back to Products</Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    const color = selectedColor || product.colors[0];
    addToCart(product, quantity, color);
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border aspect-square bg-muted">
              <img 
                src={product.images[activeImage] || product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center mt-2">
                <p className="text-lg font-semibold text-muted-foreground">{product.brand}</p>
                <span className="mx-2">•</span>
                <p className="text-muted-foreground">{product.category}</p>
                <span className="mx-2">•</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-4xl font-bold">₹{formatCurrency(product.price)}</p>
            
            <p className="text-muted-foreground">{product.description}</p>
            
            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`
                      flex items-center justify-center h-10 px-3 rounded-md border
                      ${selectedColor === color ? 'border-primary bg-primary/10' : 'border-muted'}
                    `}
                    onClick={() => setSelectedColor(color)}
                  >
                    <span>{color}</span>
                    {selectedColor === color && <Check className="ml-1 h-4 w-4" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {product.stock} units available
              </p>
            </div>

            {/* Add to Cart Button */}
            <Button 
              size="lg" 
              className="w-full" 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>

            {/* Product Details Tabs */}
            <Tabs defaultValue="specs" className="w-full mt-6">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="pt-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Engine</span>
                        <span className="font-medium">{product.specs.engine}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Power</span>
                        <span className="font-medium">{product.specs.power}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Torque</span>
                        <span className="font-medium">{product.specs.torque}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Top Speed</span>
                        <span className="font-medium">{product.specs.topSpeed}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Weight</span>
                        <span className="font-medium">{product.specs.weight}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">Shipping Policy</h4>
                    <p className="text-sm text-muted-foreground">
                      All bikes are shipped within 15-30 days of purchase. Delivery times may vary 
                      based on your location. We offer free delivery across India. International 
                      shipping is currently not available.
                    </p>
                    <h4 className="font-medium mb-2 mt-4">Return Policy</h4>
                    <p className="text-sm text-muted-foreground">
                      If you're not completely satisfied, returns are accepted within 7 days of 
                      delivery. The product must be in its original condition and packaging.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews" className="pt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                        ))}
                      </div>
                      <span>({product.rating} out of 5)</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      Reviews for this product will appear here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
