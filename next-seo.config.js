/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "L RMN Shortin",
  titleTemplate: "%s",
  defaultTitle: "L RMN Shortin",
  description:
    "L RMN's personalized link shortener. (Made using tinyurl API)",
  canonical: "https://shortin.is-a.fun",
  openGraph: {
    url: "https://shortin.is-a.fun",
    title: "L RMN Shortin | Personalized Link Shortener",
    description:
      "L RMN's personalized link shortener. (Made using tinyurl API)",
    type: "website",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1091192083852828744/1108785976458879098/Screenshot_2023-05-18_at_22-59-15_L_RMN_Shortin_Personalized_Link_Shortener.png",
        alt: "shortin.is-a.fun og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "lrmn-shortin",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://image.flaticon.com/icons/png/512/1242/1242462.png",
    },
  ],
};

export default defaultSEOConfig;
