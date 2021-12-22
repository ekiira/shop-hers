import Head from "next/head";

const Seo = ({ title, description, imagePath, favicon }) => {
  return (
    <Head>
      <title>{title}</title>

      <link rel="icon" href={favicon || imagePath} id="favicon" />
      <link rel="apple-touch-icon" href={imagePath} />

      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imagePath} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imagePath} />
    </Head>
  );
};

export default Seo;
