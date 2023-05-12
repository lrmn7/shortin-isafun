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
        url: "https://og.yehezgun.com/api/base?description=The%20URL%20is%20too%20long%3F%20Make%20it%20short%21&logo=https%3A%2F%2Fwww.google.com%2Furl%3Fsa%3Di%26url%3Dhttps%253A%252F%252Fwww.pngwing.com%252Fen%252Ffree-png-aazqj%26psig%3DAOvVaw2PaWJ6-AxCGxWODitGgt11%26ust%3D1683964846301000%26source%3Dimages%26cd%3Dvfe%26ved%3D0CBEQjRxqFwoTCMDh0oio7_4CFQAAAAAdAAAAABAF&logoWidth=0&siteName=shortin.is-a.fun&templateTitle=SHORTIN&theme=dark",
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
