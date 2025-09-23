export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-gray-700">
          © {new Date().getFullYear()} Alan Zhao. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="text-blue-600 hover:underline"
          >
            Email
          </a>
        </div>
      </footer>
    );
  }
  