import React, { useState } from 'react';

const faqs = [
  {
    question: 'Bagaimana cara bergabung dengan Android Developer Community?',
    answer: 'Kamu bisa bergabung dengan mengisi form pendaftaran di website resmi kami atau datang langsung ke event kami.'
  },
  {
    question: 'Apa keuntungan bergabung dengan Android Developer Community?',
    answer: 'Kamu akan mendapatkan akses ke workshop, mentoring, jejaring komunitas, dan berbagai sumber belajar Android Development.'
  },
  {
    question: 'Apakah bergabung dengan Android Developer Community berbayar?',
    answer: 'Tidak, bergabung dengan komunitas ini gratis dan terbuka untuk siapa saja yang tertarik di bidang Android.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-8">
        {/* Left image */}
        <div className="flex-1">
          <img
            src="https://i.imgur.com/2rLyoYE.png" // ganti dengan link dari screenshot atau lokal
            alt="FAQ Illustration"
            className="rounded-2xl w-full object-cover"
          />
        </div>

        {/* FAQ Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-black/20 rounded-xl transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between font-medium"
                >
                  <span className='text-sm'>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
