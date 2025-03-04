"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    quote:
      "Hilltop Coffee has the best atmosphere and coffee in town. I come here every morning for my daily brew and it never disappoints.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    quote:
      "The attention to detail in every cup is remarkable. Their Ethiopian pour-over changed my perspective on what coffee can be.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    quote:
      "Not only is the coffee exceptional, but the staff is incredibly knowledgeable and friendly. It's my favourite spot to work remotely.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          WHAT OUR CUSTOMERS SAY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-8 rounded-lg">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Name */}
              <p className="font-bold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
