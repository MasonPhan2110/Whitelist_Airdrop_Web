import Script from 'next/script';

import AboutUsSection from '@/components/Home/AboutUsSection';
import HeroSection from '@/components/Home/HeroSection';
import ClaimAirdropSection from '@/components/Home/ClaimAirdropSection';
import { DefaultLayout } from '@/layouts/DefaultLayout/DefaultLayout';
import { Meta } from '@/layouts/Meta';

import CheckClaimSection from '@/components/Home/CheckClaimSection';
import type { NextPageWithLayout } from './_app';

const Index: NextPageWithLayout = () => {
  // const router = useRouter();

  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <CheckClaimSection />
      <ClaimAirdropSection />

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQV32NZ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-MQV32NZ');
        `}
      </Script>
    </>
  );
};

Index.getLayout = function getLayout(page) {
  return (
    <DefaultLayout
      meta={
        <Meta
          title="Claim Airdrop"
          description=""
        />
      }
      // meta={
      //   <Meta
      //     title="Next.js Boilerplate Presentation"
      //     description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      //   />
      // }
    >
      {page}
    </DefaultLayout>
  );
};

export default Index;
