import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">CloudFlow</h1>
          <p className="text-xl text-blue-700">Streamline Your Workflow with Our SaaS Solution</p>
        </header>
        
        <main>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">Transform Your Business</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Increase Productivity', 'Enhance Collaboration', 'Simplify Management'].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature}</h3>
                  <p className="text-gray-600">Experience the power of CloudFlow and take your business to new heights.</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="text-center">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">Ready to Get Started?</h2>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
              Try CloudFlow Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
