import React from 'react'
import farmer from '../assests/farmer.png'
import "../components/Main.css"

const Hero = () => {
  return (
    <div>
      <section class="bg-white mt-0 ">
        <div class="flex ml-36 mr-36 ">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl ">YOU SOW, <br></br>WE HELP TO GROW </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                    Get started
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  ">
                    Call us !
                </a> 
            </div>
            <div class="hidden mb-32  lg:mt-0 lg:col-span-5 lg:flex">
                <img className='rounded-lg ' src={farmer} alt="mockup"/>
            </div>                
        </div>
    </section>

    <section className='flex justify-center items-center'>
    
    <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Connect with Expert</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        
        <h3>Ask your queries</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Call support </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>

    </section>


 

    </div>
  )
}

export default Hero