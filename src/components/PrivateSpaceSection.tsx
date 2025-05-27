
import React from 'react';

const PrivateSpaceSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-medium text-gray-900 mb-20 text-center">
          A Private Space for Real Change
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-playfair font-medium text-gray-900 mb-8">
              What This Is
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>• A return to what matters</li>
              <li>• Permission to stop performing</li>
              <li>• Space to breathe and reflect</li>
              <li>• An invitation to lead from presence</li>
              <li>• Work that honors who you are</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-playfair font-medium text-gray-900 mb-8">
              What This Isn't
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Another performance optimization</li>
              <li>• A quick fix or life hack</li>
              <li>• Therapy or traditional coaching</li>
              <li>• Available to everyone</li>
              <li>• About doing more</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto text-balance">
            This work is by invitation only. Those ready for this conversation 
            will find their way here through the right connections at the right time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivateSpaceSection;
