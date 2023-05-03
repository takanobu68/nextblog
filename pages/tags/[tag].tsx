import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { siteConfig } from '@/site.config';
import { IndexProps, Params } from '@/types/types';
import { fetchPages } from '@/utils/notion';
import { GetStaticProps, NextPage } from 'next';

const Tag: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className='pt-12'>
        <h1 className='text-5xl mb-8'>{siteConfig.title}</h1>
        <div className='grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12'>
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tag } = ctx.params as Params;
  const { results } = await fetchPages({ tag });

  return {
    props: {
      pages: results ? results : [],
      tag,
    },
    revalidate: 10,
  };
};

export default Tag;
