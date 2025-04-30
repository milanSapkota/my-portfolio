export default function ContactPage() {
    return (
      <main className="min-h-screen p-10 bg-white text-black dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg mb-6">Feel free to reach out for job opportunities, collaborations, or just to connect.</p>
  
        <form className="space-y-4 max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>
    );
  }
  