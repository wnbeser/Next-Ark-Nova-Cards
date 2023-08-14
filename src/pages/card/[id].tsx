import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import { BaseAnimalCard } from '@/components/cards/animal_cards/BaseAnimalCard';
import { AnimalModelCard } from '@/components/cards/animal_cards/models/AnimalModelCard';
import { BaseSponsorCard } from '@/components/cards/sponsor_cards/BaseSponsorCard';
import { Comments } from '@/components/comments/Comments';
// make sure to import your TextFilter
import Layout from '@/components/layout/Layout';

import { getAllCardIds } from '@/utils/GetAllCardIds';
import { getAnimalCardModel } from '@/utils/GetAnimalCardModel';
import { getCardById, getCardTypeById } from '@/utils/GetCardById';

import { AnimalCard as AnimalCardType } from '@/types/AnimalCard';
import { CardType } from '@/types/Card';
import { SponsorCard as SponsorCardType } from '@/types/SponsorCard';
type Props = {
  // Add custom props here
};

export default function Page(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();

  /* {router.query.id} 根据这个获得AnimalCard*/
  const { t } = useTranslation('common');
  if (typeof router.query.id !== 'string') return null;
  const card = getCardById(router.query.id);
  if (typeof card !== 'object') return null;
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      {/* <Seo /> */}
      <div className='flex flex-col'>
        <div className='flex flex-col items-center py-2 py-24 md:py-36 lg:pb-48 lg:pt-36'>
          {getCardTypeById(router.query.id) === CardType.ANIMAL_CARD ? (
            <div className='flex scale-150 flex-row md:scale-[2] lg:scale-[2.2]'>
              <div className='mr-3 flex-initial md:mr-10 lg:mr-20'>
                <BaseAnimalCard animal={card as AnimalCardType} />
              </div>
              <AnimalModelCard
                id={card.id}
                model={getAnimalCardModel(card as AnimalCardType)}
                showLink={false}
              />
            </div>
          ) : null}

          {getCardTypeById(router.query.id) === CardType.SPONSOR_CARD ? (
            <div className='flex scale-150 flex-row md:scale-[2] lg:scale-[2.2]'>
              <div className='mr-3 flex-initial md:mr-10 lg:mr-20'>
                <BaseSponsorCard sponsor={card as SponsorCardType} />
              </div>
            </div>
          ) : null}
        </div>

        <Comments cardId={router.query.id} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'zh-CN', ['common'])),
  },
});

// export async function getStaticPaths() {
//   const paths = getAllCardIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// should add locales to getStaticPaths
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function getStaticPaths({ locales }) {
  const ids = getAllCardIds();
  const paths = ids
    .map((id) =>
      locales.map((locale: string) => ({
        params: { id: id.toString() },
        locale, //locale should not be inside `params`
      }))
    )
    .flat(); // to avoid nested array
  return {
    paths,
    fallback: true,
  };
}