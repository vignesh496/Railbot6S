import React from 'react';
/*import homeImg from './path/to/home.png';
import aboutImg from './path/to/about.png';
// Import other images similarly*/

const services = [
  { imgSrc: 'https://via.placeholder.com/24?text=contact', url: 'https://www.irctc.co.in/nget/train-search', title: 'Ticket Booking' },
  { imgSrc: 'https://via.placeholder.com/24?text=contact', url: 'https://enquiry.indianrail.gov.in/', title: 'Train Enquiry' },
  { imgSrc: 'https://via.placeholder.com/24?text=contact', url: 'http://www.indianrail.gov.in/', title: 'Reservation Enquiry' },
  { imgSrc: 'https://via.placeholder.com/24?text=Support', url: 'https://rr.irctc.co.in/#/home', title: 'Retiring Room Booking' },
  { imgSrc: 'https://via.placeholder.com/24?text=Privacy', url: 'http://www.indianrailways.gov.in/', title: 'Indian Railways' },
  { imgSrc: 'https://via.placeholder.com/24?text=Terms', url: 'https://play.google.com/store/apps/details?id=com.cris.utsmobile&hl=en_IN', title: 'UTS Ticketing' },
  { imgSrc: 'https://via.placeholder.com/24?text=Payment', url: 'https://www.fois.indianrail.gov.in/RailSAHAY/index.jsp', title: 'Freight Business' },
  { imgSrc: 'https://via.placeholder.com/24?text=contact', url: 'https://parcel.indianrail.gov.in/', title: 'Railway Parcel Website' },
];

const OtherServices = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Other Services</h2>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-6 h-6 object-contain"
            />
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {service.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherServices;
