import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';
import { FiRotateCcw } from 'react-icons/fi';

import { ProjectCardList } from '@/components/cards/project_cards/ProjectCardList';
import { CardSourceFilter } from '@/components/filters/CardSourceFilter';
import { CardTypeFilter } from '@/components/filters/CardTypeFilter';
import { RequirementFilter } from '@/components/filters/RequirementFilter';
import { TagFilter } from '@/components/filters/TagFilter';
import { TextFilter } from '@/components/filters/TextFilter'; // make sure to import your TextFilter
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { CardOdometer } from '@/components/ui/CardOdometer';
import { Separator } from '@/components/ui/separator';

import { CardType } from '@/types/Card';
import { CardSource } from '@/types/CardSource';
import { Tag } from '@/types/Tags';

type Props = {
  // Add custom props here
};

export default function HomePage(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation('common');
  const [reset, setReset] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [selectedRequirements, setSelectedRequirements] = useState<Tag[]>([]);
  const [textFilter, setTextFilter] = useState<string>(''); // add this line
  const [selectedCardTypes, setSelectedCardTypes] = useState<CardType[]>([]);
  const [selectedCardSources, setSelectedCardSources] = useState<CardSource[]>(
    []
  );

  const [animalCardsCount, setAnimalCardsCount] = useState<number>(0);
  const [sponsorCardsCount, setSponsorCardsCount] = useState<number>(0);

  useEffect(() => {
    if (
      selectedCardTypes.length !== 0 &&
      !selectedCardTypes.includes(CardType.ANIMAL_CARD)
    ) {
      setAnimalCardsCount(0);
    }
    if (
      selectedCardTypes.length !== 0 &&
      !selectedCardTypes.includes(CardType.SPONSOR_CARD)
    ) {
      setSponsorCardsCount(0);
    }
  }, [selectedCardTypes]);

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  const resetAll = () => {
    setSelectedTags([]);
    setSelectedRequirements([]);
    setTextFilter('');
    setSelectedCardTypes([]);
    setSelectedCardSources([]);
    setAnimalCardsCount(0);
    setSponsorCardsCount(0);

    setReset(true);
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className=''>
          <div className='flex flex-col space-y-4 px-2 py-2 md:px-4'>
            <div className='flex flex-col md:flex-row'>
              <CardTypeFilter
                onFilterChange={setSelectedCardTypes}
                reset={reset}
              />
              <Separator orientation='vertical' className='mr-5 bg-zinc-900' />
              <CardSourceFilter
                onFilterChange={setSelectedCardSources}
                reset={reset}
              />
            </div>
            <TagFilter onFilterChange={setSelectedTags} reset={reset} />
            <RequirementFilter
              onFilterChange={setSelectedRequirements}
              reset={reset}
            />
            <div className='flex flex-row space-x-4'>
              <TextFilter onTextChange={setTextFilter} reset={reset} />
              <div
                onClick={resetAll}
                className='group flex w-auto items-center justify-between space-x-2 rounded-2xl rounded-md bg-zinc-600 px-4 py-2 text-lg font-medium text-zinc-100 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md hover:bg-zinc-500 hover:text-lime-400 focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80'
              >
                <FiRotateCcw className='' />
              </div>
            </div>

            <div className='flex flex-row space-x-4'>
              <CardOdometer
                value={animalCardsCount}
                name={t('Animal')}
                className='text-amber-500 hover:text-amber-600'
              />
              <CardOdometer
                value={sponsorCardsCount}
                name={t('Sponsor')}
                className='text-sky-600 hover:text-sky-700'
              />
            </div>
          </div>
          <div className='mb-8 md:mb-36'></div>
          <ProjectCardList onCardCountChange={setSponsorCardsCount} />
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'zh-CN', ['common'])),
  },
});
