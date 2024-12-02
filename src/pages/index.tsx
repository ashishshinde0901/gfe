import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomeFeaturedEventsPage = dynamic(() => import('../components/home/events'))
const DynamicHomeVideos = dynamic(() => import('../components/home/videos'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))
const DynamicHomeInfoform = dynamic(() => import('../components/home/infoform'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeFeaturedEventsPage />
      <DynamicHomeFeature />
      <DynamicHomeVideos />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter />
      <DynamicHomeInfoform />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
