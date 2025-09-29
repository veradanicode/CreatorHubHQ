import React from "react";
import { storyblokEditable } from "@storyblok/react";

export default function Theme({ blok, children }) {
  // Determine background style
  let backgroundStyle = {};

  if (blok.background_type === "color" && blok.background_color?.color) {
    backgroundStyle.background = blok.background_color.color;
  }

  if (blok.background_type === "gradient" && blok.gradient_from?.color && blok.gradient_to?.color) {
    backgroundStyle.background = `linear-gradient(to right, ${blok.gradient_from.color}, ${blok.gradient_to.color})`;
  }

  if (blok.background_type === "image" && blok.background_image?.filename) {
    backgroundStyle.backgroundImage = `url(${blok.background_image.filename})`;
    backgroundStyle.backgroundSize = "cover";
    backgroundStyle.backgroundPosition = "center";
  }

  return (
    <div
      {...storyblokEditable(blok)}
      style={{
        minHeight: "100vh",
        width: "100%",
        ...backgroundStyle,
      }}
    >
      {children}
    </div>
  );
}
