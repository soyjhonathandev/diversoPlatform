import { Toaster } from '@components/ui/toaster';
import { NextIntlClientProvider } from 'next-intl';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import '../styles/global.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: JSX.Element | any) {
  const queryClient = new QueryClient();
  const router = useRouter();
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.svg"
        />
      
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <NextIntlClientProvider
            locale={router.locale}
            timeZone="America/Caracas"
            messages={pageProps.messages}
          >
            <Component {...pageProps} />
            <Toaster />
          </NextIntlClientProvider>
        </Hydrate>
      </QueryClientProvider>
      {/* <Toaster /> */}
    </>
  );
}

export default MyApp;
