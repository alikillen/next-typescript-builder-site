import { builder, BuilderComponent } from '@builder.io/react'

builder.init('YOUR_KEY')

export default const MyComponent = (props) => (
  <>
    <YourHeader />
    {props.content ?
      <BuilderComponent
        content={props.content}
        model="page" />
     : <Your404Page />}
    <YourFooter />
  </>
)

// Get page data
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export const getStaticProps = async (context) => {
  const content = await builder.get('page', { url: context.resolvedUrl }).promise();

  return { 
    props: { content }, 
    revalidate: true,
    notFound: !content
  }
}

// List all Builder pages
// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths: GetStaticPaths = async () => {
  const results = await builder.getAll('page', {
    fields: 'data.url',
    key: 'all-pages',
    limit: 200,
    options: {
      noTargeting: true,
    },
  });

  return {
    paths: results.map((item) => ({
      params: {
        page: item.data.url.substr(1) // Remove preceeding slash
      },
    })),
    fallback: true,
  };
};