import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Try = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Try CloudFlow Free</h1>
        <p className="text-xl text-blue-700 text-center mb-8">
          Experience the power of CloudFlow with our free trial. No credit card required.
        </p>
        <div className="max-w-md mx-auto">
          <Link to="/free-trial">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Try;
