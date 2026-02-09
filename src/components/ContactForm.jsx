import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    website_hp: '' // Honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // TODO: Replace with your actual Apps Script URL if different
  const APPS_SCRIPT_URL = `https://script.google.com/macros/s/AKfycbxSntn34ihwM_64BusZGi_QWcHPapx5qvqo_CS5c09ro6LKaFwz417g46lq6aDZRjtubQ/exec`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.result === 'success') {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
          website_hp: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError('Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={`${compact ? '' : 'min-h-screen '}bg-gradient-to-b from-primary to-primary/90 ${compact ? 'py-12' : 'py-20'} px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center ${compact ? 'mb-6' : 'mb-12'}`}>
          <h1 className={`${compact ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'} font-bold text-white ${compact ? 'mb-2' : 'mb-4'}`}>
            Let's Work Together
          </h1>
          <p className={`${compact ? 'text-base' : 'text-xl'} text-gray-300 max-w-2xl mx-auto`}>
            Tell us about your project. Our team will get back to you within 24 hours.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 ${compact ? 'gap-4' : 'gap-6'} items-start`}>
          <div className={`bg-white rounded-2xl shadow-xl ${compact ? 'p-6' : 'p-8'}`}>
            <form onSubmit={handleSubmit} className={`${compact ? 'space-y-3' : 'space-y-5'}`}>
              <div>
                <label className={`block ${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700 mb-1`}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full border border-gray-300 rounded-md px-3 ${compact ? 'py-1.5' : 'py-2'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
              </div>

              <div>
                <label className={`block ${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700 mb-1`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full border border-gray-300 rounded-md px-3 ${compact ? 'py-1.5' : 'py-2'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
              </div>

              <div>
                <label className={`block ${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700 mb-1`}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full border border-gray-300 rounded-md px-3 ${compact ? 'py-1.5' : 'py-2'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
              </div>

              <div>
                <label className={`block ${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700 mb-1`}>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full border border-gray-300 rounded-md px-3 ${compact ? 'py-1.5' : 'py-2'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block ${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700 mb-1`}>Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full border border-gray-300 rounded-md px-3 ${compact ? 'py-1.5' : 'py-2'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                  >
                    <option value="">Select</option>
                    <option value="Product Development">Product Development</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={`block ${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700 mb-1`}>Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full border border-gray-300 rounded-md px-3 ${compact ? 'py-1.5' : 'py-2'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                  >
                    <option value="">Select</option>
                    <option value="$1k-$5k">$1k-$5k</option>
                    <option value="$5k-$20k">$5k-$20k</option>
                    <option value="$20k-$50k">$20k-$50k</option>
                    <option value="$50k+">$50k+</option>
                  </select>
                </div>
              </div>

              {!compact && (
                <div>
                  <label className={`block ${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700 mb-1`}>Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full border border-gray-300 rounded-md px-3 ${compact ? 'py-1.5' : 'py-2'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                  ></textarea>
                </div>
              )}
              {compact && (
                <div>
                  <label className={`block ${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700 mb-1`}>Message</label>
                  <textarea
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full border border-gray-300 rounded-md px-3 ${compact ? 'py-1.5' : 'py-2'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                  ></textarea>
                </div>
              )}

              {/* Honeypot */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {error && <div className="text-red-600 text-sm">{error}</div>}
              {submitted && <div className="text-green-600 text-sm">Thanks! We will reach out shortly.</div>}

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-secondary text-primary font-bold ${compact ? 'py-2' : 'py-3'} rounded-md hover:bg-secondary/90 disabled:opacity-60`}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>

          <div className={`text-white ${compact ? 'space-y-3' : 'space-y-6'}`}>
            <div className="flex items-start gap-4">
              <Mail className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} text-secondary`} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-300">hello@greycellstech.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} text-secondary`} />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-300">+91 98807 74315</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} text-secondary`} />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-300">Bangalore, India</p>
              </div>
            </div>
            {!compact && (
              <div className="bg-white/10 rounded-xl p-6">
                <p className="font-semibold mb-2">Response Time</p>
                <p className="text-gray-300">We usually respond within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
