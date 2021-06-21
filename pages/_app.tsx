import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp


// import { builder, BuilderComponent } from '@builder.io/react'

// builder.init('cbc1a3a22a754e17be0c0507e7399068')

// export const getStaticProps = async (context) => {
//   const content = await builder.get('page', { url: context.resolvedUrl }).promise();

//   return { 
//     props: { content }, 
//     revalidate: true,
//     notFound: !content
//   }
// }

// export default const MyComponent = (props) => (
//   <BuilderComponent
//     content={props.content}
//     model="page" />
// )