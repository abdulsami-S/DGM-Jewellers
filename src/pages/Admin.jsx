import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { Lock, Save, Eye, EyeOff } from 'lucide-react';

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rates, setRates] = useState({ gold: 6500, silver: 85 });
  const ADMIN_PASSWORD = '23BCS119';

  useEffect(() => {
    // Load existing rates from localStorage
    const savedRates = localStorage.getItem('metalRates');
    if (savedRates) {
      setRates(JSON.parse(savedRates));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome, Admin!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect password. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleRateUpdate = (e) => {
    e.preventDefault();
    
    // Save rates to localStorage
    localStorage.setItem('metalRates', JSON.stringify(rates));
    
    toast({
      title: "Rates Updated Successfully!",
      description: `Gold: ₹${rates.gold}/g | Silver: ₹${rates.silver}/g`,
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    toast({
      title: "Logged Out",
      description: "Admin session ended.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#3d2817] via-[#5a3d2b] to-[#2d1810] flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold">Admin Login</CardTitle>
            <p className="text-gray-500 mt-2">Enter password to access rate management</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold"
                size="lg"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Admin Panel</h1>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="border-2 border-gray-300 hover:border-red-500 hover:text-red-500"
            >
              Logout
            </Button>
          </div>

          {/* Rate Management Card */}
          <Card className="border-2 border-gray-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white">
              <CardTitle className="text-2xl">Metal Rate Management</CardTitle>
              <p className="text-white/80 mt-2">Update today's gold and silver rates (per gram)</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleRateUpdate} className="space-y-8">
                {/* Gold Rate */}
                <div className="space-y-3">
                  <Label htmlFor="gold" className="text-lg font-semibold">Gold Rate (₹ per gram)</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">₹</span>
                    <Input 
                      id="gold"
                      type="number"
                      value={rates.gold}
                      onChange={(e) => setRates({ ...rates, gold: Number(e.target.value) })}
                      min="0"
                      step="0.01"
                      required
                      className="pl-10 text-xl h-14"
                    />
                  </div>
                  <p className="text-sm text-gray-500">Current: ₹{rates.gold} per gram</p>
                </div>

                {/* Silver Rate */}
                <div className="space-y-3">
                  <Label htmlFor="silver" className="text-lg font-semibold">Silver Rate (₹ per gram)</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">₹</span>
                    <Input 
                      id="silver"
                      type="number"
                      value={rates.silver}
                      onChange={(e) => setRates({ ...rates, silver: Number(e.target.value) })}
                      min="0"
                      step="0.01"
                      required
                      className="pl-10 text-xl h-14"
                    />
                  </div>
                  <p className="text-sm text-gray-500">Current: ₹{rates.silver} per gram</p>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold text-lg"
                >
                  <Save className="mr-2 w-5 h-5" />
                  Save Updated Rates
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Instructions Card */}
          <Card className="mt-8 border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-800 mb-3 text-lg">📋 Instructions:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Update rates daily based on current market prices</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Rates are automatically displayed on the homepage</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Billing calculator uses these rates for price calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>All data is stored locally in browser (no backend required)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;

