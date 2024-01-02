<script setup lang="ts">
useHead({
  title: "Courses",
})
</script>

<template>
  <NuxtLayout>

    <!--Hero-->
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-24 py-6 md:py-12 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        <div class="flex flex-col items-center">
          <h1 class="text-5xl font-serif font-semibold text-gray-700">Courses</h1>
          <p class="text-lg text-gray-600 text-center">
            Discover our course offerings & sign up for classes.
          </p>
        </div>
        <img src="/images/graphics/languages.png" class="w-8/12 md:w-6/12 lg:w-4/12" />
      </div>

      <!--Additional info-->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-9/12 lg:w-8/12 max-w-5xl gap-6 mt-8 md:mt-16 ">
        <div class="flex flex-col justify-between text-left border border-gray-300 shadow-sm rounded-md p-6">
          <div>
            <Icon name="tabler:clock-hour-4" class="text-4xl text-sky-500"></Icon>
            <h3 class="font-semibold font-serif text-gray-700 text-lg mt-2">Class schedule</h3>
            <p class="text-sm">See class dates & times.</p>
          </div>
          <div class="mt-2">
            <a href="https://docs.google.com/document/d/14NUJ00GCcFt_nCjutOQwPJfqDptpoW36A9W7_N6VmEs/edit?usp=sharing"
              class="text-gray-600 text-sm underline font-medium">
              <h5>View schedule ↗</h5>
            </a>
          </div>
        </div>
        <div class="flex flex-col justify-between text-left border border-gray-300 shadow-sm rounded-md p-6">
          <div>
            <Icon name="tabler:calendar-time" class="text-4xl text-brand-500"></Icon>
            <h3 class="font-semibold font-serif text-gray-700 text-lg mt-2">Session info</h3>
            <p class="text-sm">Our 2024 Winter session will run for 7 weeks in total, with one week off for spring break.
              Classes will start
              March 2nd and end April 14th.</p>
          </div>
        </div>
        <div class="flex flex-col justify-between text-left border border-gray-300 shadow-sm rounded-md p-6">
          <div>
            <Icon name="tabler:help-hexagon" class="text-4xl text-rose-500"></Icon>
            <h3 class="font-semibold font-serif text-gray-700 text-lg mt-2">FAQ</h3>
            <p class="text-sm">Get answers to frequently asked questions about our classes & more!</p>
          </div>
          <div class="mt-2">
            <NuxtLink to="faq" class="text-gray-600 text-sm underline font-medium">
              <h5>Visit now</h5>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!--Courses-->
    <div class="flex flex-col items-center mt-16 gap-16">
      <div class="w-11/12 md:w-9/12 lg:w-8/12 max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        <h3 class="font-serif font-semibold text-4xl text-gray-700 col-span-full">All courses</h3>
        <hr class="my-2 col-span-full">
        <NuxtLink to="/courses#python">
          <div class="flex items-center hover:bg-gray-50 p-4 rounded-lg gap-2">
            <Icon name="tabler:brand-python" class="text-4xl text-emerald-600"></Icon>
            <h3 class="text-xl font-semibold text-gray-700 font-serif">Python</h3>
          </div>
        </NuxtLink>
        <NuxtLink to="/courses#web">
          <div class="flex items-center hover:bg-gray-50 p-4 rounded-md gap-2">
            <Icon name="tabler:brand-html5" class="text-4xl text-amber-600"></Icon>
            <h3 class="text-xl font-semibold text-gray-700 font-serif">Web dev</h3>
          </div>
        </NuxtLink>
        <NuxtLink to="/courses#java">
          <div class="flex items-center hover:bg-gray-50 p-4 rounded-md gap-2">
            <Icon name="tabler:coffee" class="text-4xl text-rose-600"></Icon>
            <h3 class="text-xl font-semibold text-gray-700 font-serif">Java</h3>
          </div>
        </NuxtLink>
        <NuxtLink to="/courses#cpp">
          <div class="flex items-center hover:bg-gray-50 p-4 rounded-md gap-2">
            <Icon name="tabler:brand-cpp" class="text-4xl text-sky-600"></Icon>
            <h3 class="text-xl font-semibold text-gray-700 font-serif">C++</h3>
          </div>
        </NuxtLink>
        <NuxtLink to="/courses#other-courses">
          <div class="flex items-center hover:bg-gray-50 p-4 rounded-md gap-2">
            <Icon name="tabler:device-imac" class="text-4xl text-purple-600"></Icon>
            <h3 class="text-xl font-semibold text-gray-700 font-serif">Other courses</h3>
          </div>
        </NuxtLink>
        <hr class="my-2 col-span-full">
      </div>
      <div class="w-11/12 md:w-9/12 lg:w-8/12 max-w-5xl" id="python">
        <h3 class="font-serif font-semibold text-4xl text-gray-700">Python</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          <CourseCard class="bg-emerald-50">
            <template #icon>
              <Icon name="tabler:brand-python" class="text-4xl text-emerald-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">About</h3>
            </template>
            <template #description>
              <p class="text-sm">Python is a popular, general-purpose programming language that is used in a wide
                variety
                of
                fields, including web development, data science, and machine learning. It is a great first language for
                beginners, as it is easy to learn and has a simple syntax, but is also very powerful and has a large
                number
                of libraries and frameworks that can be used
                to
                build complex applications.

              </p>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:brand-python" class="text-4xl text-emerald-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Python 1A</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sun. 11:00-11:45am ET</p>
            </template>
            <template #description>
              <p class="text-sm">A beginner level course aimed at children ages 6 & up. Provides a gentle introduction
                to
                Python &
                text-based coding.

              </p>
              <p class="text-sm">Students will learn basic Python syntax & programming concepts, like variables,
                conditional
                statements, data types, etc.</p>
            </template>
            <template #link>
              <LinkButton to="courses/python-1a" color="emerald">Learn more</LinkButton>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:brand-python" class="text-4xl text-emerald-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Python 1AB</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sun. 12:00-12:45pm ET</p>
            </template>
            <template #description>
              <p class="text-sm font-medium">Python 1AB is a more advanced, faster-paced version of Python 1A that
                covers
                all the
                content in 1A as well as a few additional topics.
              </p>
              <p class="text-sm">Students will learn basic Python syntax & programming concepts, like variables,
                conditional
                statements, data types, etc.</p>
            </template>
            <template #link>
              <LinkButton to="courses/python-1ab" color="emerald">Learn more</LinkButton>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:brand-python" class="text-4xl text-emerald-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Python 2</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sun. 1:00-1:45pm ET</p>
            </template>
            <template #description>
              <p class="text-sm">Python 2 builds on the material covered in Python 1A/1AB, taking students on a
                deeper journey into the Python programming language. It includes crucial concepts like functions, lists,
                string manipulation, and file I/O that are essential for more complex applications.
              </p>

            </template>
            <template #link>
              <LinkButton to="courses/python-2" color="emerald">Learn more</LinkButton>
            </template>
          </CourseCard>

          <CourseCard new badge-color="emerald">
            <template #icon>
              <Icon name="tabler:brand-python" class="text-4xl text-emerald-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Python 3</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sun. 2:00-2:45pm ET</p>
            </template>
            <template #description>
              <p class="text-sm">Python 3 provides an in-depth overview of object-oriented programming & data structures,
                and completes students' study of the fundamental concepts they will need to effectively write Python code.
              </p>
            </template>
            <template #link>
              <LinkButton to="courses/python-3" color="emerald">Learn more</LinkButton>
            </template>
          </CourseCard>

          <CourseCard new badge-color="emerald">
            <template #icon>
              <Icon name="tabler:topology-ring" class="text-4xl text-emerald-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Intro to Machine Learning
              </h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sun. 3:00-4:00pm ET </p>
            </template>
            <template #description>
              <p class="text-sm">More information coming soon!
              </p>

            </template>
            <template #link>
              <LinkButton disabled to="courses/intro-to-ml" color="emerald">Learn more</LinkButton>
            </template>
          </CourseCard>
        </div>
      </div>
      <div class="w-11/12 md:w-9/12 lg:w-8/12 max-w-5xl" id="web">
        <h3 class="font-serif font-semibold text-4xl text-gray-700">Web development</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          <CourseCard class="bg-amber-50">
            <template #icon>
              <Icon name="tabler:brand-html5" class="text-4xl text-amber-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">About</h3>
            </template>
            <template #description>
              <p class="text-sm">
                Web development is the process of building websites and web applications. Our courses cover a range of
                topics from basic HTMl & CSS in level 1 classes to integrating JavaScript for the creation of more
                advanced & dynamic websites.
              </p>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:brand-html5" class="text-4xl text-amber-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Web Design 1A</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sat. 12:00-12:45pm ET</p>
            </template>
            <template #description>
              <p class="text-sm">Introduces students to the basic principles of web development. Students will learn how
                to develop and style basic websites using HTML & CSS.
              </p>
              <p class="text-sm">Topics covered in 1A include HTML page structure, basic CSS styling, and the CSS box
                model. Students will able to create their own static (no JavaScript) website by the end of the class.
              </p>
            </template>
            <template #link>
              <LinkButton to="courses/web-design-1a" color="amber">Learn more</LinkButton>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:brand-html5" class="text-4xl text-amber-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Web Design 1AB</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sat. 1:00-1:45pm ET</p>
            </template>
            <template #description>
              <p class="text-sm font-medium">Web Design 1AB is a more advanced, faster-paced version of Web Design 1A
                that
                covers all the content in
                1A as well as a few additional topics.
              </p>
              <p class="text-sm">Introduces students to the basic principles of web development. Students will learn how
                to develop and style basic websites using HTML & CSS.
              </p>
            </template>
            <template #link>
              <LinkButton to="courses/web-design-1ab" color="amber"> Learn more</LinkButton>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:brand-html5" class="text-4xl text-amber-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Web Design 2</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sat. 2:00-3:00pm ET</p>
            </template>
            <template #description>
              <p class="text-sm">Web Design 2 is a fast paced, advanced class that introduces JavaScript, a
                popular scripting language that can be used to add functionality & interactivity to websites.
              </p>
              <p class="text-sm">Students will learn the syntax, data types, & control structures of JavaScript as well
                as
                how it can be applied to make their websites interactive, including possibly creating games if time
                allows.
              </p>
            </template>
            <template #link>
              <LinkButton to="courses/web-design-2" color="amber">Learn more</LinkButton>
            </template>
          </CourseCard>
        </div>
      </div>
      <div class="w-11/12 md:w-9/12 lg:w-8/12 max-w-5xl" id="java">
        <h3 class="font-serif font-semibold text-4xl text-gray-700">Java</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          <CourseCard class="bg-red-50">
            <template #icon>
              <Icon name="tabler:coffee" class="text-4xl text-red-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">About</h3>
            </template>
            <template #description>
              <p class="text-sm">
                Java is a versatile, object-oriented programming language developed by Oracle - it's popular in enterprise
                software, backend development, and Android app development.
              </p>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:coffee" class="text-4xl text-red-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Java 1</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sat. 4:15-5:00pm ET</p>
            </template>
            <template #description>
              <p class="text-sm">Java 1 is an introductory course that teaches the basics of programming in Java, a
                widely
                used object-oriented programming language.
              </p>
              <p class="text-sm">Students will learn about variables, data types, conditional statements, while loops,
                for
                loops, and more.
              </p>
            </template>
            <template #link>
              <LinkButton to="courses/java-1" color="red">Learn more</LinkButton>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:coffee" class="text-4xl text-red-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Java 2</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sat. 5:15-6:00pm ET</p>
            </template>
            <template #description>
              <p class="text-sm">Java 2 is a more advanced course that expands on the knowledge gained in Java 1 to dive
                deeper into the Java programming language. Students will continue learning foundational programming
                skills
                in Java.
              </p>
              <p class="text-sm">Topics covered include functions, arrays, string manipulation, and file I/O.
              </p>
            </template>
            <template #link>
              <LinkButton to="courses/java-2" color="red">Learn more</LinkButton>
            </template>
          </CourseCard>
          <CourseCard new badge-color="red">
            <template #icon>
              <Icon name="tabler:coffee" class="text-4xl text-red-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Java 3</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sat. 7:00-7:45pm ET</p>
            </template>
            <template #description>
              <p class="text-sm">Our highest-level Java course; intended for interested students that are ready to take
                their understanding to the next level by exploring the finer details of object-oriented programming in
                Java.
              </p>
              <p class="text-sm">Students will explore recursion, 2D arrays, OOP concepts, and more.</p>
            </template>
            <template #link>
              <LinkButton to="courses/java-3" color="red">Learn more</LinkButton>
            </template>
          </CourseCard>
        </div>
      </div>
      <div class="w-11/12 md:w-9/12 lg:w-8/12 max-w-5xl" id="cpp">
        <h3 class="font-serif font-semibold text-4xl text-gray-700">C++</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          <CourseCard class="bg-sky-50">
            <template #icon>
              <Icon name="tabler:brand-cpp" class="text-4xl text-sky-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">About</h3>
            </template>
            <template #description>
              <p class="text-sm">
                C++ is flexible & powerful programming language known for its efficiency and performance. C++ developers
                have
                more control over system resources and memory, making it a popular choice for high-performance
                applications like games, operating systems, etc.
              </p>
            </template>
          </CourseCard>
          <CourseCard>
            <template #icon>
              <Icon name="tabler:brand-cpp" class="text-4xl text-sky-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">C++ 1</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sat. 11:00-11:45am ET</p>
            </template>
            <template #description>
              <p class="text-sm">Covers basic programming concepts in C++, a powerful, performant, and widely used
                programming language.
              </p>
              <p class="text-sm">Note that since C++ concepts / syntax can be more difficult to understand, we
                recommend young children or those with no previous programming experience take one of our introductory
                programming classes like Python 1A/1AB.
              </p>
            </template>
            <template #link>
              <LinkButton to="courses/cpp-1" color="sky">Learn more</LinkButton>
            </template>
          </CourseCard>
        </div>
      </div>
      <div class="w-11/12 md:w-9/12 lg:w-8/12 max-w-5xl" id="other-courses">
        <h3 class="font-serif font-semibold text-4xl text-gray-700">Other courses</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          <CourseCard>
            <template #icon>
              <Icon name="tabler:device-imac" class="text-4xl text-purple-600 mb-2"></Icon>
            </template>
            <template #title>
              <h3 class="text-xl font-semibold font-serif text-gray-700">Intro to Programming</h3>
            </template>
            <template #details>
              <p class="text-sm text-gray-400 font-body font-medium">Sun. 5:00-5:45pm ET</p>
            </template>
            <template #description>
              <p class="text-sm">Intro to Programming is an new course tailored to kids aged 6 to 12 intended to
                give a gentle introduction to computer science. Using Scratch, a beginner-friendly visual programming
                language,
                children will embark on an exciting journey of creativity and problem-solving.
              </p>
            </template>
            <template #link>
              <LinkButton to="courses/intro-to-programming" color="purple">Learn more</LinkButton>
            </template>
          </CourseCard>
        </div>
      </div>
    </div>

  </NuxtLayout>
</template>
