import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "Dan Shalev | Cybersecurity B2B Marketing Executive",
    }),
    defineField({
      name: "description",
      type: "text",
      initialValue:
        "Cybersecurity B2B marketing executive helping companies articulate their security story.",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      description: "Default Open Graph image for social sharing.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
