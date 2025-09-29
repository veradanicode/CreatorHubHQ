import { StoryblokComponent, storyblokEditable } from "@storyblok/react"
import Theme from "./Theme"


export default function Page({ blok }) {
  // Extract the theme blok if it exists
  const theme = blok.body?.find((b) => b.component === "theme")

  

  // filter out banner so it doesn’t render in the main loop
  const body = blok.body?.filter((b) => b.component !== "theme")



  return (
    <Theme
      blok={
        theme || {
          background_type: "color",
          background_color: { color: "#fff" }, // fallback if no theme is set
        }
      }
    >
      <main
        {...storyblokEditable(blok)}
        className="min-h-screen flex flex-col items-center justify-start px-4 py-8 text-foreground"
      >
    
      <div
  className="
    w-full max-w-xl flex flex-col space-y-6
    rounded-2xl border border-border 
    bg-card/80 backdrop-blur-sm
    shadow-xl
    p-2
  "
>
  {body.map((nested) => (
    <StoryblokComponent blok={nested} key={nested._uid} />
  ))}


  <p className="mt-16 text-xl text-center font-medium">
        Powered by{" "}
        <a href="https://www.storyblok.com" className=" font-bold">
          Storyblok
        </a>
      </p>
</div>


      </main>
    </Theme>
  )
}
