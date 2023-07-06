import {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';

import { AnimalCardList } from '@/components/cards/animal_cards/AnimalCardList';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

type Props = {
  // Add custom props here
};

export default function HomePage() {
  const { t } = useTranslation<any>('common');
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='mt-48 bg-white'>
          <AnimalCardList selectedTags={[]} />
        </section>
      </main>
    </Layout>
  );
}

// export async function getServerSideProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await getStaticPropsTranslations(locale)),
//     },
//   };
// }

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
