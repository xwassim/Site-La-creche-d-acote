import React from 'react'

const Section4 = () => {
  return (
  <>
  <section class=" bg-[#720f32]">
    <h2 className='text-center mb-5 pt-5 text-3xl text-white font-semibold'>Quelques statistiques</h2>
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl class="grid max-w-screen-md gap-8 mx-auto sm:grid-cols-3 text-white">
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">+1000</dt>
              <dd class="font-light text-xl  text-white">Creches</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">+12000</dt>
              <dd class="font-light text-xl  text-white">Utilisateurs</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">+348</dt>
              <dd class="font-light text-xl  text-white">Parent satisfait</dd>
          </div>
      </dl>
  </div>
</section>
  </>
  )
}

export default Section4