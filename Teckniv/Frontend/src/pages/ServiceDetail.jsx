import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = siteConfig.services.find(s => String(s.id) === String(serviceId));

  if (!service) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary-600 hover:underline inline-flex items-center"><ArrowLeft className="mr-2" />Back to Services</Link>
      </div>
    );
  }

  const details = service.details;

  return (
    <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
      <Link to="/services" className="text-primary-600 hover:underline inline-flex items-center mb-6"><ArrowLeft className="mr-2" />Back to Services</Link>
      <div className="bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{service.description}</p>
        {details && (
          <>
            <div className="mb-8">
              <p className="text-base text-gray-700 whitespace-pre-line">{details.intro}</p>
            </div>
            {details.sections && details.sections.map((section, idx) => (
              <div key={section.title} className="mb-10">
                <h2 className="text-2xl font-semibold text-primary-700 mb-4">{section.title}</h2>
                {section.content && section.content.map((block, i) => (
                  <div key={block.subtitle} className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{block.subtitle}</h3>
                    <ul className="list-disc ml-6 text-gray-700">
                      {block.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {section.industries && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Industries Served:</h4>
                    <ul className="list-disc ml-6 text-gray-700">
                      {section.industries.map((ind, k) => (
                        <li key={k}>{ind}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail; 