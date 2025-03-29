export default function CVPreview() {
  return (
    <div className="max-w-[800px] mx-auto p-8 bg-white shadow-sm">
      <header className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-xl text-muted-foreground mt-1">Frontend Developer</p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-medium">Email:</span>
            <a href="mailto:john@example.com" className="text-primary hover:underline">
              john@example.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Phone:</span> +1 (555) 123-4567
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Location:</span> New York, NY
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Website:</span>
            <a
              href="https://johndoe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              johndoe.com
            </a>
          </div>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3">Professional Summary</h2>
        <p className="text-muted-foreground">
          Experienced frontend developer with 5+ years of experience in building responsive web applications. Proficient
          in JavaScript, React, and Next.js. Passionate about creating intuitive user interfaces and optimizing web
          performance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3">Work Experience</h2>

        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Senior Frontend Developer</h3>
              <p className="text-primary">Tech Solutions Inc.</p>
            </div>
            <p className="text-sm text-muted-foreground">Jan 2021 - Present</p>
          </div>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Led the frontend development of the company's flagship product</li>
            <li>Improved application performance by 40% through code optimization</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Frontend Developer</h3>
              <p className="text-primary">Web Innovators</p>
            </div>
            <p className="text-sm text-muted-foreground">Jun 2018 - Dec 2020</p>
          </div>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Developed responsive web applications using React and Redux</li>
            <li>Collaborated with designers to implement UI/UX improvements</li>
            <li>Integrated RESTful APIs and implemented state management</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3">Education</h2>

        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Bachelor of Science in Computer Science</h3>
              <p className="text-primary">University of Technology</p>
            </div>
            <p className="text-sm text-muted-foreground">Sep 2014 - May 2018</p>
          </div>
          <p className="mt-2 text-muted-foreground">
            Graduated with honors. Specialized in web development and software engineering.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Skills</h2>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">JavaScript</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">React</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Next.js</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">TypeScript</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">HTML5</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">CSS3</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Tailwind CSS</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Git</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Responsive Design</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">UI/UX</span>
        </div>
      </section>
    </div>
  )
}

