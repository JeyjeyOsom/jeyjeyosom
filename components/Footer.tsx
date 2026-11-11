import { Github, Linkedin, Mail } from "lucide-react"
import { TrackDashes } from "./Track"

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
    <footer id="footer" className="relative bg-ground px-6 pt-12 pb-10">
      {/* Track edge */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0">
        <div className="h-1 bg-dusk-700" />
        <TrackDashes className="mt-3" />
      </div>

      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-pixel font-bold text-lg tracking-wide text-cream-100">
            JUAN DEJON<span className="text-gold-400">.</span>
          </p>
          <p className="font-arcade text-[8px] tracking-wider text-cream-100">
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
              className="flex items-center gap-2 text-cream-100 hover:text-gold-400 transition-colors duration-300 focus-ring"
            >
              {social.icon}
              <span className="font-arcade text-[8px] tracking-wider hidden sm:inline-block">
                {social.label.toUpperCase()}
              </span>
            </a>
          ))}
        </div>

        {/* End credits */}
        <p className="font-arcade text-[8px] tracking-wider text-cream-100">
          THANKS FOR PLAYING
        </p>
      </div>
    </footer>
  )
}
