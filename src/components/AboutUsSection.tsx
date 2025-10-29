import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2, Shield, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Success Rate",
    description: "Our expert team ensures every application meets requirements"
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Dedicated support throughout your entire visa journey"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Streamlined process to get your visa quickly and efficiently"
  }
];

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#edac23' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#267383' }}>
            Your Trusted Guide to Thailand
          </h2>
        </div>

        {/* Image Gallery - Full Width */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Image 1 - Large */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTY1NDUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Issa Compass team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Decorative corner accent */}
              <div 
                className="absolute top-0 right-0 w-24 h-24"
                style={{ 
                  background: 'linear-gradient(135deg, transparent 50%, #edac23 50%)',
                  opacity: 0.9
                }}
              />
            </div>

            {/* Image 2 */}
            <div className="col-span-1 relative rounded-xl overflow-hidden shadow-lg border-4 border-white group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNjMyMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern office"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Image 3 */}
            <div className="col-span-1 relative rounded-xl overflow-hidden shadow-lg border-4 border-white group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655722725332-9925c96dd627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMHZpc2ElMjB0cmF2ZWx8ZW58MXx8fHwxNzYxNjg5MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Passport and visa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Image 4 */}
            <div className="col-span-1 relative rounded-xl overflow-hidden shadow-lg border-4 border-white group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651670213051-4ced39e62eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbHMlMjBUaGFpbGFuZCUyMGNpdHl8ZW58MXx8fHwxNzYxNzEzNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy clients in Thailand"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Image 5 */}
            <div className="col-span-1 relative rounded-xl overflow-hidden shadow-lg border-4 border-white group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTY1NDUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content - Full Width */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by expats who experienced the challenges of navigating Thailand's visa system firsthand, 
              <span style={{ color: '#267383' }}> Issa Compass </span>
              was born from a simple mission: to make the visa process seamless and stress-free for everyone.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We understand that obtaining a visa is more than just paperwork – it's the gateway to 
              <span style={{ color: '#267383' }}> building the life you want in Thailand</span>. 
              Whether you're pursuing a career, starting a business, retiring in paradise, or continuing your education, 
              our team of experienced professionals is committed to guiding you every step of the way.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With years of expertise and a deep understanding of Thai immigration regulations, we've helped 
              thousands of foreigners successfully obtain their visas. Our commitment to 
              <span style={{ color: '#267383' }}> transparency, efficiency, and personalized service </span>
              sets us apart in the industry.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-lg mb-3" style={{ backgroundColor: '#267383' }}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2" style={{ color: '#267383' }}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#faf8f4] rounded-lg">
                <CheckCircle2 className="w-5 h-5" style={{ color: '#267383' }} />
                <span className="text-sm">Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#faf8f4] rounded-lg">
                <CheckCircle2 className="w-5 h-5" style={{ color: '#267383' }} />
                <span className="text-sm">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#faf8f4] rounded-lg">
                <CheckCircle2 className="w-5 h-5" style={{ color: '#267383' }} />
                <span className="text-sm">1000+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="relative mt-20">
          <div className="absolute bottom-0 left-0 w-64 h-1" style={{ backgroundColor: '#edac23', opacity: 0.3 }} />
          <div className="absolute bottom-0 right-0 w-48 h-1" style={{ backgroundColor: '#267383', opacity: 0.3 }} />
        </div>
      </div>
    </section>
  );
}
