"use client";

import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper>
      <section id="about" className="py-32 px-10">
        <h2 className="text-3xl font-semibold">About Me</h2>

        <p className="mt-6 text-gray-400 max-w-2xl">
          I am a Software Engineer based in South Africa 
          with hands-on experience in Java, Python, 
          and web development. Skilled in designing, building, 
          and maintaining scalable applications.
          Strong foundation in object-oriented programming,
          data engineering fundamentals, and problem-solving.
          Adept at working in teams, learning new technologies 
          quickly, and delivering clean, efficient, and reliable code.
        </p>

        {/* SKILLS SECTION */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Java</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <ul className="space-y-2 text-gray-400">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Git</li>
              <li>Docker</li>
              <li>Microsoft Office</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Data Engineering</li>
              <li>Web Design</li>
              <li>Graphic Design</li>
              <li>Figma</li>
              <li>Photogranpy & Videography</li>
            </ul>
          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}