import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">About Cloudflow</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At CloudFlow, we're on a mission to revolutionize the way businesses manage their workflows. 
              We believe in the power of simplicity, efficiency, and collaboration to drive success in the 
              modern workplace.
            </p>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2020, CloudFlow emerged from a simple idea: that managing complex business processes 
              shouldn't be complex itself. Our team of dedicated professionals has worked tirelessly to create 
              a SaaS solution that addresses the real needs of businesses across industries.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose CloudFlow?</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Intuitive user interface designed for ease of use</li>
              <li>Powerful automation features to save time and reduce errors</li>
              <li>Seamless integration with popular business tools</li>
              <li>Robust security measures to protect your data</li>
              <li>Dedicated customer support team</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Join Us</h2>
            <p className="text-gray-700 mb-6">
              We're always looking for talented individuals to join our team. If you're passionate about 
              creating innovative solutions and want to make a difference, we'd love to hear from you.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
              View Careers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
