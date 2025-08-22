import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Jasar Husain
          </h1>

          {/* Description */}
          <p className="text-white text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer with a passion for building scalable web
            applications. I specialize in Django-based development and strive to
            optimize user experiences.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-red-500 to-pink-400 text-black py-3 px-6 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-gradient-to-r from-red-500 to-pink-400 text-white py-3 px-6 rounded font-medium transition transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
