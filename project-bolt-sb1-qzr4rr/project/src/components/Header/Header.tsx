import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#131921] text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">amazon</h1>
          
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <input
                type="text"
                className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
                placeholder="Search products..."
              />
              <button className="bg-[#febd69] p-3 rounded-r-md hover:bg-[#f3a847]">
                <Search className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <button className="flex flex-col items-center hover:text-[#febd69]">
            <User className="h-6 w-6" />
            <span className="text-xs">Account</span>
          </button>
          
          <button className="flex items-center hover:text-[#febd69]">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#febd69] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </div>
            <span className="text-xs ml-1">Cart</span>
          </button>
        </nav>
      </div>
    </header>
  );
}