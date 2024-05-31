import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        name="description"
        content="Discover the ultimate API for riddles! Access a vast collection of brain-teasers, puzzles, math, mystery, funny, who am i and logical riddles to enhance your apps and websites. Perfect for developers, educators, and riddle enthusiasts. Try our Riddles API today and challenge your mind!"
      />
      <meta name="keywords" content="riddles-api, api, riddles" />
    </Head>
  );
}
