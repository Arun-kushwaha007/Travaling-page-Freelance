import React from 'react'
import Home from '../Home/Home'
import Travel from '../Home/Travel'
import Place from '../Home/Place'
import Memories from '../Home/Memories'
import Explore from '../Home/Explore'
import Testimonals from '../Home/Testimonals'
import Blogs from '../Home/Blogs'
import Navbar from '../Components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <section className='Home'><Home/> </section>
      <section className='Travel'><Travel/> </section>
      <section className='Place'><Place/> </section>
      <section className='Memories'> <Memories/> </section>
      <section className='Explore'> <Explore/> </section>
      <section className='Testimonals'><Testimonals/> </section>
      <section className='Blogs'><Blogs/> </section>
      <section className='Footer'> </section>
    </div>
  )
}

export default HomePage
