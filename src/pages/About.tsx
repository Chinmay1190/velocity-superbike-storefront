
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About SuperBikes India</h1>
          
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <img 
              src="/placeholder.svg" 
              alt="SuperBikes India Team" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              SuperBikes India is the premier destination for motorcycle enthusiasts looking for 
              high-performance superbikes. Founded in 2015, we've been serving the Indian market 
              with the best selection of premium motorcycles from leading global manufacturers.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
            <p>
              Our mission is to provide motorcycle enthusiasts with access to the world's best 
              superbikes and offer exceptional customer service throughout the buying journey. 
              We strive to cultivate a community of passionate riders who share our love for 
              performance, technology, and the thrill of the ride.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extensive selection of premium motorcycles</li>
              <li>Expert knowledge and guidance</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Comprehensive warranty and service packages</li>
              <li>Nationwide delivery across India</li>
              <li>Dedicated after-sales support</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Our Brands</h2>
            <p>
              We carefully select our inventory from the world's leading motorcycle manufacturers, 
              including Ducati, BMW, Kawasaki, Honda, Yamaha, Suzuki, KTM, Triumph, Aprilia, 
              and MV Agusta. Each bike in our collection represents the pinnacle of engineering, 
              performance, and design.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Our Team</h2>
            <p>
              Our team consists of motorcycle enthusiasts who are passionate about superbikes and 
              committed to providing excellent service. With decades of combined experience in the 
              motorcycle industry, our staff can offer expert advice on choosing the right bike for 
              your needs, handling the paperwork, and maintaining your motorcycle for years of 
              enjoyable riding.
            </p>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Ready to find your dream superbike?</h3>
              <Button asChild>
                <Link to="/products">Browse Our Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
