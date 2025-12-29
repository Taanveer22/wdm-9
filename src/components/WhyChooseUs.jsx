import { ShieldCheck, MapPin, Users } from "lucide-react";

const WhyChooseUs = () => {
  const valuePropositions = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Safety First",
      description:
        "Our certified guides prioritize your safety above all else, ensuring a secure and thrilling adventure.",
    },
    {
      id: 2,
      icon: Users,
      title: "Expert Local Guides",
      description:
        "Explore with passionate and knowledgeable local experts who know the terrain inside and out.",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Eco-Friendly Travel",
      description:
        "We are committed to sustainable tourism, minimizing our impact on the beautiful environments we visit.",
    },
  ];

  return (
    <section className="py-12 bg-gray-200 rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6 animate__animated animate__flash animate__infinite">
          Why Choose Us
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {valuePropositions.map((item) => (
            <div key={item.id} className="w-full h-64">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full">
                {/* Icon Component (customize size and color) */}
                <item.icon className="w-12 h-12 mx-auto text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
