import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import LoaderScreen from "./components/ui/loader";

/*
  App chooses slug from the URL and uses useStoryblok for
  preview/draft fetching. When Storyblok data is ready,
  it renders the top-level blok (likely a 'page' component).
*/
export default function App() {
  const path = window.location.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  const slug = path === "" ? "home" : path;
  const story = useStoryblok(slug, { version: "draft" });

  if (!story || !story.content) {
    return <LoaderScreen />
  }

  return <StoryblokComponent blok={story.content} />;
}
