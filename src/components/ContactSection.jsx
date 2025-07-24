import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-6 text-left">
          {/* Email */}
          <div className="flex items-center gap-x-4 justify-center">
            <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:henil5519@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                henil5519@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-x-4 justify-center">
            <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+16473350484"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 647-335-0484
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-x-4 justify-center">
            <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">Waterloo, ON, Canada</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-x-4 justify-center">
            <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/henil-17-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Connect with me on LinkedIn!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
