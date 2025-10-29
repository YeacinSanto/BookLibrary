import React from "react";
import { BookOpen, Users, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-6 py-16 text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-primary mb-4">About This Library</h1>
      <p className="text-base-content/70 max-w-2xl mb-10">
        This is a cozy space for book lovers. Discover new books, create
        personalized reading lists, and connect with a community of passionate
        readers — all in one place.
      </p>

      {/* Info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        <div className="card bg-base-200 shadow-sm hover:shadow-md transition-all">
          <div className="card-body items-center text-center">
            <BookOpen className="text-primary mb-2" size={32} />
            <h2 className="card-title text-lg">Discover Books</h2>
            <p className="text-sm text-base-content/70">
              Explore thousands of titles across genres.
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-sm hover:shadow-md transition-all">
          <div className="card-body items-center text-center">
            <Heart className="text-secondary mb-2" size={32} />
            <h2 className="card-title text-lg">Wishlist</h2>
            <p className="text-sm text-base-content/70">
              Save books you love for later.
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-sm hover:shadow-md transition-all">
          <div className="card-body items-center text-center">
            <Users className="text-accent mb-2" size={32} />
            <h2 className="card-title text-lg">Community</h2>
            <p className="text-sm text-base-content/70">
              Share and discuss with fellow readers.
            </p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-sm hover:shadow-md transition-all">
          <div className="card-body items-center text-center">
            <Globe className="text-info mb-2" size={32} />
            <h2 className="card-title text-lg">Read Anywhere</h2>
            <p className="text-sm text-base-content/70">
              Access your books anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-base-content/60">
        Made with ❤️ for book lovers by <span className="font-medium text-primary">Books Library</span>.
      </p>
    </div>
  );
};

export default About;
