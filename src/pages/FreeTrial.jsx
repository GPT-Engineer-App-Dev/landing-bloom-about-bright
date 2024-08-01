import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FreeTrial = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the email to your backend
    console.log("Free trial requested for:", email);
    // Reset the form
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Start Your Free Trial</h1>
        <p className="text-xl text-blue-700 text-center mb-8">
          Enter your email to begin your 14-day free trial of CloudFlow.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Start Free Trial
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FreeTrial;
