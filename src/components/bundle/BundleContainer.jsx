import React from 'react'
import NavTop from '../top-nav/NavTop'
import BundleMiddleNav from './bundlemiddlena/BundleMiddleNav'
import BottoMiddleNav from './BottoMiddleNav'
import Bundle from './Bundle'
import BundleBodyContainer from './bundlebodycontainer/BundleBodyContainer'
import Footer from '../footer/Footer'

function BundleContainer() {
  return (
    <>
    <NavTop />
    <BundleMiddleNav />
    <Bundle />
    <BottoMiddleNav />
    <BundleBodyContainer/>
    <Footer/>

    </>
  )
}

export default BundleContainer
