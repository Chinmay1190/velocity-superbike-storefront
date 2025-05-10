
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import { Product } from '@/types';
import { BadgeIndianRupee } from 'lucide-react';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts().slice(0, 3));
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        
        <div className="container relative z-20 h-full flex items-center">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Find Your Perfect <span className="text-primary">SuperBike</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium motorcycles with cutting-edge technology and performance. Shop from over 58 models.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block w-1/2 hero-bike-container">
            <div className="hero-bike animate-bike-pulse">
              <img 
                src="/placeholder.svg" 
                alt="Featured superbike" 
                className="w-full max-w-md ml-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Bikes</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our selection of premium superbikes, carefully chosen for their exceptional performance and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/products">View All Bikes</Link>
          </Button>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bike Categories</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our range of motorcycles across different categories to find what suits your riding style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sport */}
            <Link to="/products" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:translate-y-[-5px]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Sport Bikes" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sport Bikes</h3>
                  <p className="text-muted-foreground mb-4">
                    Track-focused machines delivering maximum performance and speed.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center">
                    Explore <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Naked */}
            <Link to="/products" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:translate-y-[-5px]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Naked Bikes" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Naked Bikes</h3>
                  <p className="text-muted-foreground mb-4">
                    Stripped-down, aggressive street fighters with minimal fairings.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center">
                    Explore <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Adventure */}
            <Link to="/products" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:translate-y-[-5px]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Adventure Bikes" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Adventure Bikes</h3>
                  <p className="text-muted-foreground mb-4">
                    Versatile machines built to handle both on-road and off-road terrain.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center">
                    Explore <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SuperBikes India</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We provide the best motorcycle shopping experience with exceptional service and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🏆",
              title: "Premium Quality",
              description: "We offer only the finest motorcycles with world-class performance."
            },
            {
              icon: "🔒",
              title: "Secure Payments",
              description: "Multiple payment options with secure transaction processing."
            },
            {
              icon: "🚚",
              title: "Free Shipping",
              description: "Complimentary shipping across India on all motorcycle purchases."
            },
            {
              icon: "🔧",
              title: "Excellent Support",
              description: "Dedicated customer service and technical support team."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BadgeIndianRupee size={48} className="mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Bike?</h2>
            <p className="text-xl mb-8 opacity-90">
              Browse our extensive collection of premium superbikes and find the perfect match for your riding style.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
