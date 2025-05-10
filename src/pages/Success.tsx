
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Success = () => {
  // Generate a random order number
  const orderNumber = React.useMemo(() => {
    return `SBI-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
  }, []);

  // If the page is refreshed, redirect to home (since we need to come from checkout)
  if (!orderNumber) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Check className="h-8 w-8 text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          <p className="mb-8 text-muted-foreground">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          <div className="border rounded-lg p-6 mb-8 bg-card">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-medium">Order Number:</dt>
                <dd>{orderNumber}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Date:</dt>
                <dd>{new Date().toLocaleDateString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Status:</dt>
                <dd className="text-green-600">Confirmed</dd>
              </div>
            </dl>
          </div>
          
          <p className="mb-6">
            We've sent the order confirmation to your email. 
            You can track your order status in the orders section.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
