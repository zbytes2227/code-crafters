import React from 'react'

function About() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About The Community</h1>
            <p class="mb-8 leading-relaxed">Code Crafters is a community of students from Feroze Gandhi Polytechnic College, dedicated to the development of high-end coding projects. As a community of computer science and information technology students, Code Crafters members collaborate and share knowledge to enhance their skills in software development.

              The community aims to provide a platform for students to learn and practice coding skills, exchange ideas and knowledge, and build a supportive community. Code Crafters encourages its members to work on innovative projects, both individually and in groups, to develop practical skills and explore new technologies.</p>
            <div class="flex justify-center">
              <a href='/register' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join</a>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About