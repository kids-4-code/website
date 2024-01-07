<template>
  <NuxtLayout>

    <div class="flex flex-col items-center text-left gap-2 pt-4 pb-16 lg:pb-32 mx-2">
      <div class="w-10/12 md:w-9/12 lg:w-8/12 max-w-4xl">
        <div class="bg border-gray-200  border p-6 py-12 mb-8 rounded-xl text-gray-700">
          <img src="/images/icons/apply.png" class="w-16 mb-2 drop-shadow-sm">
          <h1 class="text-4xl font-serif font-semibold">Join Kids for Code</h1>
        </div>
        <div class="px-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h3 class="font-serif text-2xl font-semibold text-gray-700 mb-1 mt-4">About us</h3>
              <p>Kids for Code was founded in 2020 by students in Montgomery County, Maryland. Since then, we've expanded
                to include teachers from across Maryland & the DMV area and developed more than a dozen unique courses
                featuring custom curriculum designed specifically for young learners. Over our past 6 sessions, we've
                taught nearly 5,000 students from across 40+ U.S. states and 13 countries. Our mission is to teach and
                prepare kids to become active and engaged citizens in the future, by providing them access to computer
                science skills often not taught in schools.

              </p>
              <h3 class="font-serif text-2xl font-semibold text-gray-700 mb-1 mt-4">Application</h3>
              <p class="mb-4">Please see the below link for descriptions of each open position as well as additional
                information on our
                hiring process.</p>
              <LinkButton
                to="https://docs.google.com/document/d/1K8CO0-p6a1Hu-uCH7QhMlVefCTKB_SyOyVhjTMqZl8M/edit?usp=sharing">
                Application info
              </LinkButton>
              <!-- <p class="mb-2">We appreciate your interest in Kids for Code and look forward to welcoming you to our team!
                If
                you
                have any questions, please feel free to reach out to us at kidsforcodeteam@gmail.com.</p>
              <hr class="my-4">
              <h4 class="font-serif text-lg font-semibold text-gray-700">Application deadline:</h4>
              <ul>
                <li>
                  <span class="font-semibold">Deadline for teachers:</span> Friday, February 16th
                </li>
                <li><span class="font-semibold">Deadline for Team Lead, Web Developer, Curriculum Developer, Finance
                    Director, and Outreach Director:</span>
                  Friday, February
                  7th</li>
              </ul>
              <h4 class="font-serif text-lg font-semibold text-gray-700">Interview and decision</h4>
              <p>If your application is shortlisted, we will contact you for an interview.
                Decisions will be announced 2-3 days after the application deadline.</p> -->
            </div>
            <div>
              <div class="p-6 shadow-sm flex flex-col gap-y-2 border border-gray-200 bg-white rounded-lg">
                <h3 class="font-serif text-xl font-semibold text-gray-700 mb-1">Important dates</h3>
                <div> <span class="flex items-center  ">
                    <Icon name="tabler:calendar-time" class="text-md text-emerald-700"></Icon>
                    <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Applications open</span>
                  </span>
                  <p class="text-gray-700 text-xl font-body">January 4th, 2024</p>
                </div>
                <div> <span class="flex items-center">
                    <Icon name="tabler:calendar-check" class="text-md text-emerald-700"></Icon>
                    <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Applications close</span>
                  </span>
                  <p class="text-gray-700 text-xl font-body">
                    February
                    7th,
                    2024</p>
                </div>
                <div> <span class="flex items-center">
                    <Icon name="tabler:calendar-code" class="text-md text-emerald-700"></Icon>
                    <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Training and orientation</span>
                  </span>
                  <p class="text-gray-700 text-xl font-body">February 26th - March 1st, 2024</p>
                </div>
                <hr class="border my-2 border-gray-200">
                <div> <span class="flex items-center">
                    <Icon name="tabler:cash" class="text-md text-brand-700"></Icon>
                    <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Classes start</span>
                  </span>
                  <p class="text-gray-700 text-xl font-body">March 2nd, 2024</p>
                </div>
                <div> <span class="flex items-center">
                    <Icon name="tabler:cash" class="text-md text-brand-700"></Icon>
                    <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Classes end</span>
                  </span>
                  <p class="text-gray-700 text-xl font-body">April 14th, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div>
            <div class="p-6 shadow-sm flex flex-col gap-y-2 border border-gray-200 bg-white rounded-lg">
              <h3 class="font-serif text-xl font-semibold text-gray-700 mb-1">Important dates</h3>
              <div> <span class="flex items-center  ">
                  <Icon name="tabler:calendar-time" class="text-md text-emerald-700"></Icon>
                  <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Applications open</span>
                </span>
                <p class="text-gray-700 text-xl font-body">January 4th, 2024</p>
              </div>
              <div> <span class="flex items-center">
                  <Icon name="tabler:calendar-check" class="text-md text-emerald-700"></Icon>
                  <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Applications close</span>
                </span>
                <p class="text-gray-700 text-xl font-body">
                  February
                  7th,
                  2024</p>
              </div>
              <div> <span class="flex items-center">
                  <Icon name="tabler:calendar-code" class="text-md text-emerald-700"></Icon>
                  <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Training and orientation</span>
                </span>
                <p class="text-gray-700 text-xl font-body">February 26th - March 1st, 2024</p>
              </div>
              <hr class="border my-2 border-gray-200">
              <div> <span class="flex items-center">
                  <Icon name="tabler:cash" class="text-md text-brand-700"></Icon>
                  <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Classes start</span>
                </span>
                <p class="text-gray-700 text-xl font-body">March 2nd, 2024</p>
              </div>
              <div> <span class="flex items-center">
                  <Icon name="tabler:cash" class="text-md text-brand-700"></Icon>
                  <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Classes end</span>
                </span>
                <p class="text-gray-700 text-xl font-body">April 14th, 2024</p>
              </div>
            </div>
          </div> -->

        </div>
        <hr class="mt-6 mb-4">
        <h3 class="font-serif text-2xl font-semibold text-gray-700 mb-4">Open positions</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col border border-gray-200 rounded-lg p-6 gap-y-2">
            <div class="flex items-center gap-2 border-gray-200 rounded-md text-gray-700 p-2 pb-0">
              <Icon name="tabler:code-circle-2" class="text-3xl text-gray-700"></Icon>
              <h3 class="text-xl font-serif font-semibold text-gray-700">Web developer</h3>
            </div>
            <hr class="mt-2 mx-2">
            <div class="p-2">
              <h4 class="text-lg text-gray-700 font-serif font-semibold">Role</h4>
              <ul class="text-sm list-disc list-inside">
                <li>Helps develop our website, including designing new pages &amp; updating existing ones.</li>
                <li>Experience in the following areas is prioritized:</li>
                <ul class="text-sm list-disc list-inside ml-4">
                  <li>HTML/CSS (required)</li>
                  <li>Web/UI design (highly recommended)</li>
                  <li>Vue.js (nice to have)</li>
                  <li>TailwindCSS (not super important but a nice plus)</li>
                </ul>
              </ul>
              <div class="mt-6">
                <LinkButton to="https://forms.gle/XjVUnNWk6gghyp4U6">Apply by 2/7</LinkButton>
              </div>
            </div>

          </div>
          <div class="flex flex-col border border-gray-200 rounded-lg p-6 gap-y-2">
            <div class="flex items-center gap-2 border-gray-200 rounded-md text-gray-700 p-2 pb-0">
              <Icon name="tabler:school" class="text-3xl text-gray-700"></Icon>
              <h3 class="text-xl font-serif font-semibold text-gray-700">Teacher</h3>
            </div>
            <hr class="mt-2 mx-2">
            <div class="p-2">
              <h4 class="text-lg text-gray-700 font-serif font-semibold">Role</h4>
              <ul class="text-sm list-disc list-inside">
                <li>Have a comprehensive understanding of the programming language of choice.</li>
                <li>Be able to communicate with students in a professional, but friendly manner.</li>
                <li>Grade assignments of the previous week after the class ends.</li>
                <li>Works directly with students, teaching classes virtually over Zoom</li>
                <li>All classes are on weekends and run for around 45m - 1hr.</li>
                <li>Must teach at least 3 classes per session.</li>
              </ul>
              <div class="mt-6">
                <LinkButton to="https://forms.gle/xKYcqgK7HrGykoTq6">Apply by 2/16</LinkButton>
              </div>
            </div>

          </div>
          <div class="flex flex-col border border-gray-200 rounded-lg p-6 gap-y-2">
            <div class="flex items-center gap-2 border-gray-200 rounded-md text-gray-700 p-2 pb-0">
              <Icon name="tabler:books" class="text-3xl text-gray-700"></Icon>
              <h3 class="text-xl font-serif font-semibold text-gray-700">Curriculum developer</h3>
            </div>
            <hr class="mt-2 mx-2">
            <div class="p-2">
              <h4 class="text-lg text-gray-700 font-serif font-semibold">Role</h4>
              <ul class="text-sm list-disc list-inside">
                <li>Develop slides &amp; homework assignments for new courses.</li>
                <li>Our classes are targeted at roughly 8-13-year-olds, so ensuring that concepts are explained in a
                  simple
                  &amp; easy-to-understand way is crucial!</li>
                <li>The new courses we will be offering are:</li>
                <ul class="ml-4 text-sm list-disc list-inside">
                  <li>Java 3: roughly AP CSA level or a little bit below: if you took AP CSA you should have enough
                    knowledge to help
                    work on this course</li>
                  <li>Python 3</li>
                  <li>Intro to Machine Learning (more details coming soon!)
                    We will focus on basic machine learning concepts in sci-kit-learn and possibly PyTorch if there is
                    time.</li>
                </ul>
                <li>Syllabi can be found on our courses page.</li>
              </ul>
              <div class="mt-6">
                <LinkButton to="https://forms.gle/ZyyS26jSqfPkRyCQA">Apply by 2/7</LinkButton>
              </div>
            </div>

          </div>
          <div class="flex flex-col border border-gray-200 rounded-lg p-6 gap-y-2">
            <div class="flex items-center gap-2 border-gray-200 rounded-md text-gray-700 p-2 pb-0">
              <Icon name="tabler:school" class="text-3xl text-gray-700"></Icon>
              <h3 class="text-xl font-serif font-semibold text-gray-700">Team Lead</h3>
            </div>
            <hr class="mt-2 mx-2">
            <div class="p-2">
              <h4 class="text-lg text-gray-700 font-serif font-semibold">Role</h4>
              <ul class="text-sm list-disc list-inside">
                <li>Manages all the teachers in specific subjects. Oversees attendance of teachers within their course.
                </li>
                <li>Must have solid communication skills, be able to reach your teachers, and communicate effectively.
                </li>
                <li>
                  Be able to fill in for classes with absent teachers.
                </li>
                <li>
                  Requirement of 3 classes per session in any language.
                </li>
                <li>Grade assignments within the languages of choice.</li>
                <li>Be fluent in the language of choice.</li>
                <li>Working closely with Curriculum Developers, Teachers, and other team members, to smooth
                  collaboration
                  and communication.</li>
                <li>The Team Lead plays a vital role in fostering a positive and productive working environment within
                  the
                  team.</li>
              </ul>
              <div class="mt-6">
                <LinkButton to="https://forms.gle/qXVaXaFFdDgr7VPh9">Apply by 2/7</LinkButton>
              </div>
            </div>

          </div>
          <div class="flex flex-col border border-gray-200 rounded-lg p-6 gap-y-2">
            <div class="flex items-center gap-2 border-gray-200 rounded-md text-gray-700 p-2 pb-0">
              <Icon name="tabler:school" class="text-3xl text-gray-700"></Icon>
              <h3 class="text-xl font-serif font-semibold text-gray-700">Outreach Director</h3>
            </div>
            <hr class="mt-2 mx-2">
            <div class="p-2">
              <h4 class="text-lg text-gray-700 font-serif font-semibold">Role</h4>
              <ul class="text-sm list-disc list-inside">
                <li>Expanding our reach and impact within the community.</li>
                <li>This role involves developing and implementing strategies to engage with schools, parents, and
                  potential
                  partners.</li>
                <li>The Outreach Director is responsible for creating and maintaining relationships with teachers and
                  promoting awareness of our coding programs.</li>
                <li>Must have prior experience in communication (emailing &amp; calling).
                  Must have some advertising experience.</li>
                <li>Be able to write professional emails to parents, teachers, and students and communicate with partner
                  organizations.</li>

              </ul>
              <div class="mt-6">
                <LinkButton to="https://forms.gle/qXVaXaFFdDgr7VPh9">Apply by 2/7</LinkButton>
              </div>
            </div>

          </div>
          <div class="flex flex-col border border-gray-200 rounded-lg p-6 gap-y-2">
            <div class="flex items-center gap-2 border-gray-200 rounded-md text-gray-700 p-2 pb-0">
              <Icon name="tabler:school" class="text-3xl text-gray-700"></Icon>
              <h3 class="text-xl font-serif font-semibold text-gray-700">Finance Director</h3>
            </div>
            <hr class="mt-2 mx-2">
            <div class="p-2">
              <h4 class="text-lg text-gray-700 font-serif font-semibold">Role</h4>
              <ul class="text-sm list-disc list-inside">
                <li>Oversee the finances of the organization.</li>
                <li>Responsibilities include budgeting, financial planning, and ensuring the efficient use of resources.
                </li>
                <li>The Finance Director works closely with the leadership team to make informed financial decisions
                  that
                  align with the nonprofit's mission and goals.</li>
                <li>Responsibilities include paying for Zoom &amp; other subscriptions, managing advertising funds, and
                  organizing fundraisers.
                </li>
                <li>Should have prior experience handling money.</li>
                <li>Demonstrates a skill for accounting, and tracking expenditures.</li>
              </ul>
              <div class="mt-6">
                <LinkButton to="https://forms.gle/qXVaXaFFdDgr7VPh9">Apply by 2/7</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: "Apply",
})
</script>



<style>
.bg {
  background-size: cover;
  background-position: center center;
  background-image: url("/images/graphics/apply-graphic.png");
}</style>
