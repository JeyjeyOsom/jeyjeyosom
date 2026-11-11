import { Github, Linkedin, Mail } from "lucide-react"

const SOCIALS = [
  {
    href: "https://github.com/JeyjeyOsom",
    icon: <Github className="w-4 h-4" aria-hidden="true" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jeyjey0som96/",
    icon: <Linkedin className="w-4 h-4" aria-hidden="true" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:jrodejon@gmail.com",
    icon: <Mail className="w-4 h-4" aria-hidden="true" />,
    label: "Email",
  },
]

// The World's ground closes the page, echoing the Title Screen's track.
export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#0E0721] px-6 pt-12 pb-10">
      {/* Track edge */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0">
        <div className="h-1 bg-dusk-700" />
        <div className="mt-3 flex gap-8 px-4 overflow-hidden">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} className="w-6 h-1 bg-dusk-700 shrink-0" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-pixel font-bold text-lg tracking-wide text-cream-100">
            JUAN DEJON<span className="text-gold-400">.</span>
          </p>
          <p className="font-arcade text-[8px] tracking-wider text-mist-300">
            © {new Date().getFullYear()} — ENGINEERING WITH PURPOSE
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-8">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-mist-300 hover:text-gold-400 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-4"
            >
              {social.icon}
              <span className="font-arcade text-[8px] tracking-wider hidden sm:inline-block">
                {social.label.toUpperCase()}
              </span>
            </a>
          ))}
        </div>

        {/* End credits */}
        <p className="font-arcade text-[8px] tracking-wider text-dusk-600">
          THANKS FOR PLAYING
        </p>
      </div>
    </footer>
  )
}
