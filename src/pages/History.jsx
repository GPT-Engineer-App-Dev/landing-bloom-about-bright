import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const historyData = [
  { year: 2020, event: "CloudFlow founded" },
  { year: 2021, event: "Launch of first product version" },
  { year: 2022, event: "Reached 1000 customers milestone" },
  { year: 2023, event: "Expanded to international markets" },
  { year: 2024, event: "Introduced AI-powered features" },
];

const History = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">CloudFlow History</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {historyData.map((item) => (
            <Button
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              variant={selectedYear === item.year ? "default" : "outline"}
              className="text-lg"
            >
              {item.year}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {historyData.map((item) => (
              <Card key={item.year} className={selectedYear === item.year ? "border-blue-500 border-2" : ""}>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-blue-800">{item.year}</h3>
                  <p className="text-gray-700">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <img src="/placeholder.svg" alt="CloudFlow timeline" className="mx-auto object-cover w-full h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
