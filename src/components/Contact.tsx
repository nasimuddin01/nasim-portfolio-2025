import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white/90">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:contact@example.com"
            className="flex items-center space-x-2 text-white/70 hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white/70 hover:text-primary transition-colors"
          >
            <Twitter className="w-6 h-6" />
            <span>Twitter</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white/70 hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white/70 hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;