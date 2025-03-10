import Navbar from '../../Components/ui/Navbar';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://placehold.co/600x800" 
                alt="Profile" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Hello, I'm [Your Name]</h2>
              <p className="text-gray-700 mb-4">
                I'm a passionate web developer with expertise in React, Tailwind CSS, and modern JavaScript. 
                With [X] years of experience, I've worked on a variety of projects ranging from small business 
                websites to complex web applications.
              </p>
              <p className="text-gray-700 mb-4">
                My approach to design and development focuses on creating intuitive, accessible, and 
                performant web experiences that help businesses achieve their goals.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'UI/UX Design', 'Responsive Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-4">
                <h3 className="text-xl font-bold">Senior Web Developer</h3>
                <p className="text-gray-600">Company Name • 2020 - Present</p>
                <p className="mt-2">
                  Led development of responsive web applications using React and modern JavaScript.
                  Collaborated with designers to implement pixel-perfect UI components.
                </p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h3 className="text-xl font-bold">Web Developer</h3>
                <p className="text-gray-600">Previous Company • 2018 - 2020</p>
                <p className="mt-2">
                  Developed and maintained client websites. Implemented responsive designs
                  and optimized site performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}