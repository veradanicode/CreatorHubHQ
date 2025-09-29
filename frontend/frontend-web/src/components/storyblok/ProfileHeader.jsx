import { Badge } from "../ui/badge"
import { SocialLinks } from "./SocialLinks"
import { Avatar , AvatarFallback, AvatarImage } from "../ui/avatar"



export function ProfileHeader({blok}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
   

        <div className="flex flex-col gap-2">

              <div className="flex items-center justify-center p-2 relative">
        <Avatar 
          className="w-28 h-28 rounded-full shadow-lg border border-border object-cover" >

          <AvatarImage
            src={blok.avatar?.filename ?? ""}
            alt={blok.name || "Avatar"}
            className="w-28 h-28 rounded-full shadow-lg border border-border object-cover"
          />        
          <AvatarFallback 
          className="w-28 h-28 rounded-full shadow-lg border border-border object-cover"
          
          >
            {blok.name?.charAt(0) || "A"}
          </AvatarFallback>
        </Avatar>
     {blok.category && (
          <Badge variant="secondary" className="text-xs absolute bottom-0 -right-2">
            {blok.category}
          </Badge>
        )}
   </div>

<h1 className="text-2xl font-bold">{blok.displayName}</h1>
        </div>


      <div className="flex flex-col items-center justify-center ">

      <h2 className="text-sm font-medium tracking-tight text-muted-foreground p-0 m-0">{blok.userName}</h2>
      <p className="text-muted-foreground text-pretty max-w-md mx-auto mb-4">{blok.bio}</p>

      <SocialLinks links={blok.socialLinks} />
      </div>

    </div>
  )
}
