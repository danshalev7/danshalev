import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { sanityClient, isConfigured } from "./client";

const imageBuilder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source: SanityImageSource) {
  if (!imageBuilder) {
    return {
      url: () => "",
      format: () => ({ url: () => "" }),
    };
  }
  return imageBuilder.image(source);
}
