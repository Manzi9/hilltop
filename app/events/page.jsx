"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  List,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";

// EventCalendar Component
const EventCalendar = ({ events, selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // Get first day of month and last day of month
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Get day of week for first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek;

    // Calculate total days to show (max 42 for 6 weeks)
    const totalDays = 42;

    // Generate array of day objects
    const days = [];

    // Add days from previous month
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();

    for (
      let i = prevMonthDays - daysFromPrevMonth + 1;
      i <= prevMonthDays;
      i++
    ) {
      days.push({
        date: new Date(year, month - 1, i),
        isCurrentMonth: false,
        hasEvent: false,
      });
    }

    // Add days from current month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const date = new Date(year, month, i);
      days.push({
        date,
        isCurrentMonth: true,
        hasEvent: events.some((event) => {
          const eventDate = new Date(event.date);
          return (
            eventDate.getDate() === i &&
            eventDate.getMonth() === month &&
            eventDate.getFullYear() === year
          );
        }),
      });
    }

    // Add days from next month
    const remainingDays = totalDays - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        hasEvent: false,
      });
    }

    return days;
  };

  const days = generateCalendarDays();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const goToPrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const formatMonth = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{formatMonth(currentMonth)}</h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekdays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(day.date)}
            className={`
              h-12 flex items-center justify-center rounded-full text-sm
              ${!day.isCurrentMonth ? "text-gray-400" : ""}
              ${day.hasEvent ? "font-bold" : ""}
              ${
                isSameDay(day.date, selectedDate)
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }
              ${
                day.hasEvent && !isSameDay(day.date, selectedDate)
                  ? "border-2 border-black"
                  : ""
              }
            `}
          >
            {day.date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

// EventCards Component
const EventCards = ({ events, selectedDate, setSelectedEvent }) => {
  // Filter events for selected date
  const filteredEvents = selectedDate
    ? events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getDate() === selectedDate.getDate() &&
          eventDate.getMonth() === selectedDate.getMonth() &&
          eventDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    : events;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    return timeString;
  };

  return (
    <div className="space-y-6">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-600">{formatDate(event.date)}</p>
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Clock size={16} className="mr-2" />
                <span>{formatTime(event.time)}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl font-bold mb-2">No Events Found</h3>
          <p className="text-gray-600">
            {selectedDate
              ? `No events scheduled for ${selectedDate.toLocaleDateString(
                  "en-US",
                  { weekday: "long", month: "long", day: "numeric" }
                )}`
              : "No events match your current filters"}
          </p>
        </div>
      )}
    </div>
  );
};

// EventFilters Component
const EventFilters = ({ categories, activeFilters, toggleFilter }) => {
  return (
    <div className="mb-8">
      <h3 className="font-bold mb-4">Event Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleFilter(category)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilters.includes(category)
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// EventDetailModal Component
const EventDetailModal = ({ event, onClose }) => {
  if (!event) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="relative h-64 w-full">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">{event.title}</h2>
                <p className="text-gray-600">{formatDate(event.date)}</p>
              </div>
              <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                {event.category}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold mb-2">Details</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Tickets</h3>
                <p className="text-gray-600 mb-2">{event.price}</p>
                <p className="text-sm text-gray-500">{event.ticketInfo}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">About This Event</h3>
              <p className="text-gray-700">{event.description}</p>
              {event.longDescription && (
                <p className="text-gray-700 mt-2">{event.longDescription}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// BookingForm Component
const BookingForm = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-gray-50 px-4 py-3 border-b flex justify-between items-center">
            <h3 className="text-lg font-bold">Book Event: {event.title}</h3>
            <button onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="tickets" className="block mb-2 font-medium">
                  Number of Tickets
                </label>
                <select
                  id="tickets"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block mb-2 font-medium">
                  Special Requests
                </label>
                <textarea
                  id="notes"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Complete Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Events Page
export default function EventsPage() {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'calendar'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const eventCategories = [
    "Workshop",
    "Tasting",
    "Music",
    "Community",
    "Special",
  ];

  const events = [
    {
      id: 1,
      title: "Coffee Brewing Workshop",
      date: "2023-06-15",
      time: "10:00 AM - 12:00 PM",
      location: "Hilltop Coffee - Covent Garden",
      category: "Workshop",
      description:
        "Learn the art of pour-over coffee brewing from our expert baristas.",
      longDescription:
        "Join us for an immersive workshop where you'll learn various pour-over techniques, bean selection tips, and how to bring out the best flavors in your coffee. All equipment and beans provided.",
      price: "£35 per person",
      ticketInfo: "Includes all materials and a bag of coffee to take home",
      image: "https://picsum.photos/id/1060/800/600",
    },
    {
      id: 2,
      title: "Live Jazz Day",
      date: "2023-06-18",
      time: "12:00 PM - 10:00 PM",
      location: "Hilltop Coffee - Covent Garden",
      category: "Music",
      description:
        "Enjoy an afternoon of live jazz music while sipping on our signature coffee cocktails.",
      longDescription:
        "Our monthly jazz day features local musicians in an intimate setting. The perfect way to unwind with friends while enjoying our special menu of coffee-based cocktails and small plates.",
      price: "£10 entry",
      ticketInfo: "First drink included with entry",
      image: "/images/jazz-poster.jpg",
    },
    {
      id: 3,
      title: "Single Origin Tasting",
      date: "2023-06-22",
      time: "6:00 PM - 8:00 PM",
      location: "Hilltop Coffee - Covent Garden",
      category: "Tasting",
      description:
        "Sample our latest collection of single-origin coffees from around the world.",
      longDescription:
        "This guided tasting will take you through five distinct single-origin coffees. Learn about the regions, processing methods, and flavor profiles that make each coffee unique.",
      price: "£25 per person",
      ticketInfo: "Includes tasting of 5 coffees and small bites",
      image: "https://picsum.photos/id/431/800/600",
    },
    {
      id: 4,
      title: "Community Clean-Up Day",
      date: "2023-06-25",
      time: "9:00 AM - 12:00 PM",
      location: "Meet at Hilltop Coffee - Covent Garden",
      category: "Community",
      description:
        "Join us as we clean up our local neighborhood. Coffee and pastries provided!",
      longDescription:
        "Give back to our community by participating in our quarterly clean-up day. We'll provide all cleaning supplies, plus free coffee and pastries for volunteers. A great way to meet neighbors and make a difference.",
      price: "Free",
      ticketInfo: "Registration required",
      image: "/images/cleaning.jpg",
    },
    {
      id: 5,
      title: "Latte Art Masterclass",
      date: "2023-06-29",
      time: "6:30 PM - 8:30 PM",
      location: "Hilltop Coffee - Covent Garden",
      category: "Workshop",
      description:
        "Learn how to create beautiful latte art from our award-winning baristas.",
      longDescription:
        "This hands-on workshop will teach you the fundamentals of latte art. You'll practice techniques for creating hearts, rosettas, and tulips. Suitable for beginners and intermediate levels.",
      price: "£40 per person",
      ticketInfo: "All equipment provided",
      image: "/images/latte-art-1.jpg",
    },
  ];

  const toggleFilter = (category) => {
    setActiveFilters((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Filter events based on active filters
  const filteredEvents =
    activeFilters.length > 0
      ? events.filter((event) => activeFilters.includes(event.category))
      : events;

  return (
    <MainLayout>
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-64 w-full mb-12">
          <Image
            src="https://picsum.photos/id/1060/1920/600"
            alt="Events at Hilltop Coffee"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">EVENTS</h1>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* View Toggle and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center px-4 py-2 rounded-full ${
                  viewMode === "grid"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <List size={18} className="mr-2" />
                List View
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={`flex items-center px-4 py-2 rounded-full ${
                  viewMode === "calendar"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <Calendar size={18} className="mr-2" />
                Calendar View
              </button>
            </div>

            <div className="w-full md:w-auto">
              <EventFilters
                categories={eventCategories}
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
              />
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`grid ${
              viewMode === "calendar"
                ? "grid-cols-1 lg:grid-cols-3 gap-8"
                : "grid-cols-1"
            }`}
          >
            {/* Calendar (shown in calendar view) */}
            {viewMode === "calendar" && (
              <div className="lg:col-span-1">
                <EventCalendar
                  events={filteredEvents}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </div>
            )}

            {/* Event Cards */}
            <div className={viewMode === "calendar" ? "lg:col-span-2" : ""}>
              <EventCards
                events={filteredEvents}
                selectedDate={viewMode === "calendar" ? selectedDate : null}
                setSelectedEvent={setSelectedEvent}
              />
            </div>
          </div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <EventDetailModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}

        {/* Booking Form */}
        {showBookingForm && (
          <BookingForm
            event={selectedEvent}
            onClose={() => setShowBookingForm(false)}
          />
        )}
      </div>
    </MainLayout>
  );
}
