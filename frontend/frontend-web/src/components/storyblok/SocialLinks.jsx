
import { Button } from "../ui/button"

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitch,
  FaLinkedin,
  FaSpotify,
  FaGithub,
  FaGlobe
} from "react-icons/fa";      // ensure this import exists
import { SiApplemusic } from "react-icons/si";      // ensure this import exists
import { BsTwitterX } from "react-icons/bs";
const getSocialIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case "instagram":
      return FaInstagram
    case "twitter":
      return BsTwitterX
    case "youtube":
      return FaYoutube
    case "linkedin":
      return FaLinkedin
    case "github":
      return FaGithub
    case "spotify":
      return FaSpotify
    case "apple-music":
      return SiApplemusic
    case "facebook":
      return FaFacebookF
    case "twitch":
      return FaTwitch
    default:
      return FaGlobe
}}

export function SocialLinks({ links }) {
  console.log(links)
  if (!links.length) return null

  return (
    <div className="flex justify-center bg-background rounded-full backdrop-blur-2xl ">
      {links.map((link, index) => {
        const Icon = getSocialIcon(link.platform)
        return (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className="w-10 h-10 p-0 rounded-full bg-muted/50 hover:bg-muted"
            onClick={() => window.open(link.url.cached_url, "_blank", "noopener,noreferrer")}
          >
            <Icon className="w-4 h-4" />
          </Button>
        )
      })}
    </div>
  )
}
