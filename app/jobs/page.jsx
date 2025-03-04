"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import ContentLayout from "../components/layout/ContentLayout";

export default function JobsPage() {
  return (
    <MainLayout>
      <ContentLayout
        title="CAREERS"
        subtitle="Join our passionate team of coffee enthusiasts"
        backgroundImage="https://picsum.photos/id/1040/1920/600"
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gray-100 p-4 rounded-full">
                <Mail size={32} className="text-gray-500" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-4">
              No Current Vacancies
            </h2>

            <p className="text-gray-600 text-center mb-6">
              Thank you for your interest in joining the Hilltop Coffee team.
              While we don't have any open positions at the moment, we're always
              on the lookout for talented and passionate individuals to join our
              growing family.
            </p>

            <p className="text-gray-600 text-center mb-8">
              If you'd like to be considered for future opportunities, please
              email your CV and a brief cover letter telling us why you'd like
              to work with us to{" "}
              <a
                href="mailto:careers@hilltop.coffee"
                className="text-black font-medium hover:underline"
              >
                careers@hilltop.coffee
              </a>
              .
            </p>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="font-bold mb-4">What We Look For</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Passion for specialty coffee and customer service</li>
                <li>• Attention to detail and commitment to quality</li>
                <li>• Positive attitude and team-oriented mindset</li>
                <li>• Willingness to learn and grow with our company</li>
                <li>
                  • Previous experience in specialty coffee is a plus, but not
                  required
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Life at Hilltop Coffee</h2>
            <div className="mb-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1060/800/600"
                  alt="Barista preparing coffee"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                At Hilltop Coffee, we believe that our team is the heart of our
                business. We strive to create a supportive, inclusive, and
                growth-oriented environment where everyone can thrive.
              </p>
              <p>
                We offer competitive compensation, ongoing training and
                development opportunities, and a friendly work atmosphere. Our
                team members enjoy staff discounts, flexible scheduling, and the
                chance to participate in coffee tastings and industry events.
              </p>
              <p>
                We're committed to ethical practices not just in our coffee
                sourcing, but also in how we treat our team members. We value
                work-life balance and foster a culture of mutual respect and
                collaboration.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">
                  How will I know if you have an opening?
                </h3>
                <p className="text-gray-600">
                  When positions become available, we'll reach out to candidates
                  whose CVs we have on file. We also post openings on our social
                  media channels and website.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">
                  Do I need barista experience to apply?
                </h3>
                <p className="text-gray-600">
                  While experience is valued, we're equally interested in your
                  passion, attitude, and willingness to learn. We provide
                  comprehensive training for all new team members.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">
                  What are your typical working hours?
                </h3>
                <p className="text-gray-600">
                  Our shop is open 7 days a week, with shifts typically ranging
                  from early morning to evening. We try to accommodate team
                  members' scheduling preferences when possible.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">
                  How long do you keep CVs on file?
                </h3>
                <p className="text-gray-600">
                  We keep CVs for six months. If you'd like to update your
                  information or confirm we still have your details, feel free
                  to email us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
}
