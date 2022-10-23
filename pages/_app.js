import App from "next/app"
import Head from "next/head"
import { PageTransition } from 'next-page-transitions'
import Footer from "../components/meta/footer"
import "../assets/css/style.css"
import "../assets/css/font.css"
import "../assets/css/color.css"
import "../assets/css/screen-sizes.css"
import 'jquery/dist/jquery.min.js'

const Harbour = ({ Component, router, pageProps }) => {

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WFZ41F550Q"></script>
         <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WFZ41F550Q');
         </script>
      </Head>
      {/* header here*/}
        <PageTransition timeout={450} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 450ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 450ms;
          }
        `}</style>
    </>
  )
}

export default Harbour
