import Link from 'next/link';

export default function StoryPage() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">My Journey</h1>
            <p className="text-xl text-muted-foreground">
              From displacement to digital empowerment
            </p>
          </div>

          <div className="bg-card border rounded-xl p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                My story begins not with borders, but with the universal human desire for safety, 
                dignity, and opportunity. Displaced in 2017, I discovered that while physical 
                borders can separate us, technology has the power to connect us.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Through the challenges of displacement, I found my voice in digital storytelling. 
                What started as a means of preserving my own narrative evolved into a platform 
                for amplifying the stories of millions who remain unheard.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Today, I use digital platforms to bridge cultural divides, advocate for refugee 
                rights, and demonstrate how technology can be a tool for empowerment rather than 
                a barrier. My work focuses on creating accessible digital education and 
                opportunities for displaced communities worldwide.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">My Mission</h3>
                <p className="text-blue-800">
                  "To transform the narrative around displacement from one of victimhood to 
                  one of resilience, innovation, and potential. Every refugee carries not just 
                  a story of loss, but a story of incredible strength and untapped potential."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/advocacy" className="inline-flex items-center text-primary hover:underline">
              Learn about my advocacy work
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}