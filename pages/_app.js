import '../styles/globals.css'
import Head from 'next/head';
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
    </>
    
  );
}

export default MyApp