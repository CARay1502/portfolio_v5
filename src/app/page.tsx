import SocialIcons from "./components/SocialIcons";
import ProjectCards from "./components/ProjectCards";
import "./globals.css";

export default function Home() {
  return (
    <main className="container mx-auto px-auto sm:px-0 lg:px-8">
      {/* intro section */}
      <section>
        <div className="hero bg-base-200 min-h-screen flex flex-col items-center lg:flex-row lg:justify-center p-6">
        <div className="indicator rounded-box h-72 sm:h-96 w-full max-w-xs lg:max-w-md">
          <span
            className="indicator-item indicator-bottom indicator-center badge badge-secondary">Scroll For More!</span>
            <div className="carousel carousel-vertical rounded-box h-72 sm:h-96 w-full max-w-xs lg:max-w-md border-accent">
            <div className="carousel-item h-full">
              <video
                src="/videos/Weight Predictor Ai.mp4" 
                className="w-full h-full rounded-lg object-cover" 
                autoPlay 
                loop 
                muted
              />
            </div>
            <div className="carousel-item h-full">
              <video
                  src="/videos/Blinker Device.mp4" 
                  className="w-full h-full rounded-lg object-cover" 
                  autoPlay 
                  loop 
                  muted
                />
            </div>
          </div>
        </div>
          
          
          <div className="card shadow-xl w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 ">
            <div className="card-body text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl font-bold mt-4 lg:ml-2">Hey, I'm Christian ✌️</h1>
              <p className="py-4  text-xl sm:py-6 ">Computer Science Student and Content Creator.</p>

              {/* stats section -> will make automated in the future. */}
              <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center gap-4">
                <div className="stat flex flex-col lg:text-left ">
                  <div className="stat-title">Total Likes</div>
                  <div className="stat-value text-primary">4,106</div>
                  <div className="stat-desc">as of 3/29/2025</div>
                </div>
                <div className="stat flex flex-col lg:text-left">
                  <div className="stat-title">Content Views</div>
                  <div className="stat-value text-secondary">203,954</div>
                  <div className="stat-desc">across all platforms</div>
                </div>
                <div className="stat flex flex-col lg:text-left">
                  <div className="stat-title">Total Followers</div>
                  <div className="stat-value text-accent">374</div>
                  <div className="stat-desc text-secondary">100K goal 2025</div>
                </div>
              </div>   

              {/* social links */}
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>

      {/* project section */}
      <section className="my-8 p-4">
        <h2 className="text-2xl sm:text-3xl text-center mb-2 text-primary">My Projects</h2>
        <p className="text-lg sm:text-xl text-center mb-6">Some of my most recent projects</p>
        <ProjectCards />
      </section>
      {/* Social Links Section */}
      
    </main>
  );
}
