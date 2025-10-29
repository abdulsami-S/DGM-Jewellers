import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Sparkles, Gem, Calculator, Download } from 'lucide-react';

const Billing = () => {
  const [rates, setRates] = useState({ gold: 6500, silver: 85 });
  const [metalType, setMetalType] = useState('gold');
  const [weight, setWeight] = useState('');
  const [makingCharges, setMakingCharges] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [breakdown, setBreakdown] = useState({
    metalCost: 0,
    makingCost: 0,
    subtotal: 0,
    gst: 0,
    total: 0
  });

  useEffect(() => {
    // Load rates from localStorage
    const savedRates = localStorage.getItem('metalRates');
    if (savedRates) {
      setRates(JSON.parse(savedRates));
    }
  }, []);

  useEffect(() => {
    calculatePrice();
  }, [metalType, weight, makingCharges, rates]);

  const calculatePrice = () => {
    if (!weight || !makingCharges) {
      setTotalPrice(0);
      setBreakdown({
        metalCost: 0,
        makingCost: 0,
        subtotal: 0,
        gst: 0,
        total: 0
      });
      return;
    }

    const metalRate = metalType === 'gold' ? rates.gold : rates.silver;
    const weightNum = parseFloat(weight) || 0;
    const makingNum = parseFloat(makingCharges) || 0;

    // Calculate costs
    const metalCost = metalRate * weightNum;
    const makingCost = makingNum * weightNum;
    const subtotal = metalCost + makingCost;
    const gst = subtotal * 0.03; // 3% GST
    const total = subtotal + gst;

    setBreakdown({
      metalCost: metalCost.toFixed(2),
      makingCost: makingCost.toFixed(2),
      subtotal: subtotal.toFixed(2),
      gst: gst.toFixed(2),
      total: total.toFixed(2)
    });
    setTotalPrice(total.toFixed(2));
  };

  const handleReset = () => {
    setMetalType('gold');
    setWeight('');
    setMakingCharges('');
    setTotalPrice(0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Jewelry Price Calculator</h1>
            <p className="text-xl text-gray-600">Calculate accurate jewelry pricing with live metal rates</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="border-2 border-gray-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Calculator className="mr-2 w-6 h-6" />
                  Calculate Price
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {/* Metal Type Selection */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold">Metal Type</Label>
                  <Select value={metalType} onValueChange={setMetalType}>
                    <SelectTrigger className="h-12 text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gold" className="text-lg">
                        <div className="flex items-center">
                          <Sparkles className="w-5 h-5 mr-2 text-[#D4AF37]" />
                          Gold (₹{rates.gold}/g)
                        </div>
                      </SelectItem>
                      <SelectItem value="silver" className="text-lg">
                        <div className="flex items-center">
                          <Gem className="w-5 h-5 mr-2 text-gray-400" />
                          Silver (₹{rates.silver}/g)
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">
                    Current Rate: ₹{metalType === 'gold' ? rates.gold : rates.silver} per gram
                  </p>
                </div>

                {/* Weight Input */}
                <div className="space-y-3">
                  <Label htmlFor="weight" className="text-lg font-semibold">Weight (grams)</Label>
                  <Input 
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    min="0"
                    step="0.01"
                    placeholder="Enter weight in grams"
                    className="h-12 text-lg"
                  />
                </div>

                {/* Making Charges Input */}
                <div className="space-y-3">
                  <Label htmlFor="making" className="text-lg font-semibold">Making Charges (₹ per gram)</Label>
                  <Input 
                    id="making"
                    type="number"
                    value={makingCharges}
                    onChange={(e) => setMakingCharges(e.target.value)}
                    min="0"
                    step="0.01"
                    placeholder="Enter making charges per gram"
                    className="h-12 text-lg"
                  />
                </div>

                <Button 
                  onClick={handleReset}
                  variant="outline"
                  className="w-full border-2 border-gray-300 hover:border-[#D4AF37]"
                >
                  Reset Calculator
                </Button>
              </CardContent>
            </Card>

            {/* Price Breakdown */}
            <Card className="border-2 border-[#D4AF37] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#3d2817] to-[#5a3d2b] text-white">
                <CardTitle className="text-2xl">Price Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                {/* Breakdown Items */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Metal Cost:</span>
                    <span className="text-lg font-semibold">₹{breakdown.metalCost}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Making Charges:</span>
                    <span className="text-lg font-semibold">₹{breakdown.makingCost}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="text-lg font-semibold">₹{breakdown.subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">GST (3%):</span>
                    <span className="text-lg font-semibold text-[#D4AF37]">₹{breakdown.gst}</span>
                  </div>
                  
                  {/* Total Price */}
                  <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] p-6 rounded-xl mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-xl font-bold">Total Price:</span>
                      <span className="text-white text-3xl font-bold">₹{totalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Formula Explanation */}
                <Card className="mt-6 bg-blue-50 border-2 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-gray-800 mb-2">💡 Calculation Formula:</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Total</strong> = [(Metal Rate + Making Charge) × Weight] + 3% GST
                    </p>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handlePrint}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold"
                  size="lg"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Print Bill
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <Card className="mt-8 border-2 border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">1</div>
                  <h4 className="font-bold text-gray-800 mb-2">Select Metal Type</h4>
                  <p className="text-gray-600">Choose between gold or silver with live rates updated daily</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">2</div>
                  <h4 className="font-bold text-gray-800 mb-2">Enter Details</h4>
                  <p className="text-gray-600">Input weight in grams and making charges per gram</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">3</div>
                  <h4 className="font-bold text-gray-800 mb-2">Get Instant Price</h4>
                  <p className="text-gray-600">Total price calculated automatically with 3% GST included</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Billing;

