import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-gray-400 mb-12 text-lg">Have a project in mind? Let's discuss it!</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-white">Email</h3>
            </div>
            <p className="text-gray-400">your.email@example.com</p>
            <p className="text-gray-500 text-sm mt-2">I'll respond within 24 hours</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-xl">
                <FaPhone />
              </div>
              <h3 className="text-xl font-bold text-white">Phone</h3>
            </div>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-500 text-sm mt-2">Available for calls on weekdays</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-xl">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold text-white">Location</h3>
            </div>
            <p className="text-gray-400">San Francisco, CA</p>
            <p className="text-gray-500 text-sm mt-2">Open to remote opportunities</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            
            {submitted ? (
              <div className="bg-green-500 text-white p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">Thank you for your message!</p>
                <p className="mt-2">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-blue-400 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-blue-400 focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-blue-400 focus:outline-none transition"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-blue-400 focus:outline-none transition resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Social Links & Additional Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-300 mb-6">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to get in touch!
                </p>

                <div className="flex gap-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition text-2xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition text-2xl"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
              <p className="text-white">
                I aim to respond to all inquiries within 24 hours. For urgent matters, please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
