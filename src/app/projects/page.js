export default function ProjectsPage() {
    return (
      <main className="min-h-screen p-10 bg-white text-black dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg mb-6">Here are some of the projects I have built recently:</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 border rounded shadow-md dark:border-gray-700">
            <h2 className="text-xl font-semibold">AI Resume Analyzer</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">React, Flask, Python</p>
            <p className="mt-2">A tool to help users optimize their resumes using NLP techniques.</p>
          </div>
  
          <div className="p-4 border rounded shadow-md dark:border-gray-700">
            <h2 className="text-xl font-semibold">Real-Time Chat App</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Angular, Firebase</p>
            <p className="mt-2">A real-time chat platform with responsive UI and Firebase backend.</p>
          </div>
        </div>
      </main>
    );
  }
  