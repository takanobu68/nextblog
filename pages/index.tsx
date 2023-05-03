import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { siteConfig } from '@/site.config';
import { fetchPage } from '@/utils/notion';
import { sampleCards } from '@/utils/sample';
import { GetStaticProps } from 'next';

export default function Home({ pages }) {
  return (
    <Layout>
      <div className='pt-12'>
        <h1 className='text-5xl mb-8'>{siteConfig.title}</h1>
        <div className='grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12'>
          {/* Card */}
          {sampleCards.map((page) => (
            <Card page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPage();

  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};
