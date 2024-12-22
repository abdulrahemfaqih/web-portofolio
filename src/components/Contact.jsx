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
    <div className='bg-black text-white'>
      <div className="container mx-auto py-16" id='contact'>
        <h1 className="relative-effect text-4xl font-bold mb-12">KONTAK</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Mari Terhubung</h2>
            <p className="text-lg">
              Saya selalu terbuka untuk peluang baru dan proyek yang menarik. Mari terhubung!
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:faqih3935@gmail.com" className="hover:text-gray-400 transition-colors text-lg">
                  faqih3935@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Bangkalan, Madura, Indonesia</span>
              </div>
            </div>
          </div>

          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="relative group">
              <label className="absolute text-sm text-gray-400 transition-all duration-300 transform group-focus-within:-translate-y-6 group-focus-within:text-gray-200">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b border-gray-400 focus:border-gray-200 focus:border-b-2 outline-none transition-all duration-300 pt-4"
                required
                disabled={loading}
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div className="relative group">
              <label className="absolute text-sm text-gray-400 transition-all duration-300 transform group-focus-within:-translate-y-6 group-focus-within:text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b border-gray-400 focus:border-gray-200 focus:border-b-2 outline-none transition-all duration-300 pt-4"
                required
                disabled={loading}
                placeholder="Masukkan email Anda"
              />
            </div>

            <div className="relative group">
              <label className="absolute text-sm text-gray-400 transition-all duration-300 transform group-focus-within:-translate-y-6 group-focus-within:text-gray-200">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent border-b border-gray-400 focus:border-gray-200 focus:border-b-2 outline-none transition-all duration-300 pt-4 resize-none"
                required
                disabled={loading}
                placeholder="Tulis pesan Anda"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black px-6 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 mt-6"
            >
              {loading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;