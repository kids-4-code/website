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
              <h3 class="font-serif text-2xl font-semibold text-gray-700 mb-1">About</h3>
              <p>
                More info coming soon!
              </p>
              <h3 class="font-serif text-2xl font-semibold text-gray-700 mb-1 mt-4">Application process</h3>
              <p>
                More info coming soon!
              </p>
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
                  <p class="text-gray-700 text-xl font-body">February 22nd, 2024</p>
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
                <p class="text-sm">
                  More info coming soon!
                </p>
                <h4 class="text-lg text-gray-700 font-serif font-semibold mt-2">Skills</h4>
                <p class="text-sm">
                  More info coming soon!
                </p>
                <div class="mt-6">
                  <LinkButton disabled>Apply</LinkButton>
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
                <p class="text-sm">
                  More info coming soon!
                </p>
                <h4 class="text-lg text-gray-700 font-serif font-semibold mt-2">Skills</h4>
                <p class="text-sm">
                  More info coming soon!
                </p>
                <div class="mt-6">
                  <LinkButton disabled>Apply</LinkButton>
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
                <p class="text-sm">
                  More info coming soon!
                </p>
                <h4 class="text-lg text-gray-700 font-serif font-semibold mt-2">Skills</h4>
                <p class="text-sm">
                  More info coming soon!
                </p>
                <div class="mt-6">
                  <LinkButton disabled>Apply</LinkButton>
                </div>
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
}
</style>
