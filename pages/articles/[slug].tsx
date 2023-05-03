import ArticleMeta from '@/components/ArticleMeta';
import Layout from '@/components/Layout';
import { ArticleProps, Params } from '@/types/types';
import { fetchBlocksByPageId, fetchPage } from '@/utils/notion';
import { sampleCards } from '@/utils/sample';
import { GetStaticProps, NextPage } from 'next';

const Article: NextPage<ArticleProps> = ({ page }) => {
  return (
    <Layout>
      <article className='w-full'>
        {/* meta section */}
        <div className='my-12'>
          <ArticleMeta page={page} />
        </div>

        {/* article */}
        <div className='my-12'>article {page.content}</div>
      </article>
    </Layout>
  );
};

export default Article;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params;
  const { results } = await fetchPage({ slug });
  const page = results[0];
  const pageId = page.id;

  const { results: blocks } = await fetchBlocksByPageId(pageId);

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 10,
  };
};
