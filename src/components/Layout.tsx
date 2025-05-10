
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon, ShoppingCart, Menu, X, BadgeIndianRupee } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { state: cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BadgeIndianRupee size={24} className="text-primary" />
            <span className="font-bold text-xl">SuperBikes India</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Shop
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  {cart.totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden container py-4 bg-background border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/about" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">SuperBikes India</h3>
              <p className="text-sm text-muted-foreground">
                The ultimate destination for premium motorcycle enthusiasts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
                <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Shop</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Care</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
                <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground">Shipping</Link></li>
                <li><Link to="/returns" className="text-muted-foreground hover:text-foreground">Returns</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="text-sm text-muted-foreground not-italic">
                123 Biker's Way<br />
                Mumbai, 400001<br />
                India<br />
                <a href="tel:+91-1234567890" className="hover:text-foreground">+91 1234567890</a><br />
                <a href="mailto:info@superbikes.in" className="hover:text-foreground">info@superbikes.in</a>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SuperBikes India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
