
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/data/products';
import { Product, Category, Brand } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Initialize products
  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = products;
    
    // Search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Price range filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category as Category)
      );
    }
    
    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter(product => 
        selectedBrands.includes(product.brand as Brand)
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, priceRange, selectedCategories, selectedBrands, products]);

  // Get unique categories and brands
  const categories = Array.from(new Set(products.map(p => p.category))) as Category[];
  const brands = Array.from(new Set(products.map(p => p.brand))) as Brand[];

  // Handle category toggle
  const toggleCategory = (category: Category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Handle brand toggle
  const toggleBrand = (brand: Brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 3000000]);
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  // Format price for display
  const formatPriceLabel = (value: number) => {
    return `₹${(value / 100000).toFixed(1)}L`;
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Shop Superbikes</h1>
        
        {/* Search and filter controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for bikes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            variant="outline" 
            onClick={() => setFiltersVisible(!filtersVisible)}
            className="lg:hidden"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className={`
            lg:w-64 lg:block lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto
            ${filtersVisible ? 'block' : 'hidden'}
          `}>
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Reset
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden"
                onClick={() => setFiltersVisible(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <Slider
                value={priceRange}
                min={0}
                max={3000000}
                step={10000}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm">
                <span>{formatPriceLabel(priceRange[0])}</span>
                <span>{formatPriceLabel(priceRange[1])}</span>
              </div>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox 
                      id={`category-${category}`} 
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label htmlFor={`category-${category}`} className="ml-2">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Brands */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Brands</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center">
                    <Checkbox 
                      id={`brand-${brand}`} 
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <Label htmlFor={`brand-${brand}`} className="ml-2">
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <div className="text-sm text-muted-foreground mb-4">
                  Showing {filteredProducts.length} products
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-2">No products found</h2>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
