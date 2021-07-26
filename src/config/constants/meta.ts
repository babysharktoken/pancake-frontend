import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BabyShark Swap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BabyShark Swap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BabyShark Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BabyShark Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BabyShark Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BabyShark Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BabyShark Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BabyShark Swap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('BabyShark Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BabyShark Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BabyShark Swap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('BabyShark Swap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('BabyShark Swap')}`,
      }
    default:
      return null
  }
}
