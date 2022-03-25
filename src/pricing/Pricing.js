import React from 'react'
import '../pricing/style/pricing.css'
function Pricing() {
  return (
    <main className=''>
       <div className='Price-main'>
            <div className='h-60 img-div'> </div>
             <article className='px-6'>
                 <Heading />
                 <Plan />
                 <BtnGroup />
             </article>
       </div>
    </main>
  )
}

export default Pricing

const Heading =() =>(
    <header className='text-center py-10'>
         <h3 className='Heading-h3'>Order Summary</h3>
         <p className='my-4 text-primary-200'>
             You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!.
         </p>
    </header>
   )

const Plan = () => (
    <article className='Plan-article'>
        <div className='flex items-center'>
           <aside className='h-10 w-10 rounded-full shadow'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fillRule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g></svg>
                  
           </aside>
           <section className='ml-4'>
              <h4 className='text-primary-200 font-bold'>Annual Plan</h4>
              <p className='text-primary-500'>$59.99/year</p>
           </section>
        </div>
        <p className='Plan-action'>Change</p>
    </article>
)

const BtnGroup = () => (
    <article className='my-10'>
        <button className='Btn'>Proceed to Payment</button>
        <p className='Btn-cancel'>Cancel Order</p>
    </article>
)