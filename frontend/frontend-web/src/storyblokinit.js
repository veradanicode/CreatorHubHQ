// Initialize Storyblok and register the React components mapping.
// Uses preview token defined in VITE_STORYBLOK_PREVIEW_TOKEN
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/storyblok/Page";
import Theme from "./components/storyblok/Theme";
import { LinkCard } from "./components/storyblok/LinkCard";
import { ProfileHeader } from "./components/storyblok/ProfileHeader";




// Register components so <StoryblokComponent blok={...} /> renders them.
storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu", // change if your space uses a different region
  },
  components: {
    page: Page,
    Theme : Theme,
    LinkCard : LinkCard,
    ProfileHeader : ProfileHeader,
  },
});
