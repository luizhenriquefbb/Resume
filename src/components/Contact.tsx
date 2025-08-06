export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="text-center py-12 section-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Get In Touch</h2>
      <p className="text-slate-600 mb-6">Feel free to reach out via email or connect with me on social media.</p>
      <div className="flex justify-center items-center space-x-6 text-slate-600">
        <a
          href="mailto:luizhenriquefbb@gmail.com"
          className="hover:text-teal-500 transition-colors duration-300"
          title="Email me"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <span className="sr-only">Email</span>
        </a>
        <a
          href="https://github.com/luizhenriquefbb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-500 transition-colors duration-300"
          title="Visit my GitHub profile"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/luizhenriquefbb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-500 transition-colors duration-300"
          title="Connect with me on LinkedIn"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.248H8.014V8.04h2.553v1.17h.036c.355-.675 1.227-1.387 2.52-1.387 2.7 0 3.198 1.778 3.198 4.091v4.614zM5.337 6.881a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zM6.617 8.04H4.075V16.338h2.542V8.04zM18 0H2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
      <div className="mt-8 text-sm text-slate-500">
        <p>&copy; {currentYear} Luiz Barros. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
