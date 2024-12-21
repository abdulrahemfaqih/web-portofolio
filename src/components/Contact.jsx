import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("4lJ9di3ic_7HIYZOZ");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading('Mengirim pesan...');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Faqih',
      };

      const response = await emailjs.send(
        'service_qp8zite',
        'template_co6ew1s',
        templateParams,
        '4lJ9di3ic_7HIYZOZ'
      );

      if (response.status === 200) {
        toast.success('Pesan terkirim!', { id: toastId });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error details:', error);
      toast.error('Gagal mengirim pesan. Silakan coba lagi.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-16" id='contact'>
      <h1 className="relative-hover-effect text-4xl font-bold mb-8">KONTAK</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Mari Terhubung</h2>
          <p className="text-gray-600">
            Saya selalu terbuka untuk peluang baru dan proyek yang menarik. Mari terhubung!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:faqih3935@gmail.com" className="hover:text-blue-500 transition-colors">
                faqih3935@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Bangkalan, Madura, Indonesia</span>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
            disabled={loading}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
            disabled={loading}
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;