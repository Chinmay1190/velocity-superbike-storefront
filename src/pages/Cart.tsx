
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { X, ShoppingCart, CreditCard } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const { state: cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="text-center max-w-md mx-auto">
            <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="mb-8 text-muted-foreground">Looks like you haven't added any superbikes to your cart yet.</p>
            <Button onClick={() => navigate('/products')}>Browse Products</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div key={`${item.id}-${item.selectedColor}`} className="flex flex-col sm:flex-row border rounded-lg p-4 bg-card animate-fade-in">
                <div className="sm:w-40 h-40 sm:h-auto mb-4 sm:mb-0 overflow-hidden rounded-md bg-muted flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 sm:ml-6 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                      <p className="text-sm mt-1">Color: {item.selectedColor}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </Button>
                    </div>
                    <div className="font-semibold">₹{formatCurrency(item.price * item.quantity)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="border rounded-lg p-6 bg-card sticky top-20">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({cart.totalItems} items)</span>
                  <span>₹{formatCurrency(cart.totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (18% GST)</span>
                  <span>₹{formatCurrency(cart.totalAmount * 0.18)}</span>
                </div>
              </div>
              
              <div className="border-t pt-2 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{formatCurrency(cart.totalAmount * 1.18)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                size="lg" 
                onClick={() => navigate('/checkout')}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Checkout
              </Button>
              
              <div className="mt-4 text-center">
                <Link to="/products" className="text-sm text-primary hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
