<script setup lang="ts">
useHead({
  title: "Teachers & staff",
})
</script>

<template>
  <NuxtLayout>
    <div>

      <div class="flex flex-col items-center text-center gap-2 mt-16">
        <!--Icon-->
        <div class="flex items-center bg-violet-50 rounded-xl p-1 drop-shadow-light">
          <img src="/images/icons/teachers.png" class="w-20">
        </div>
        <h1 class="font-serif text-4xl lg:text-5xl text-gray-700 font-semibold my-4 mb-8">Teachers & staff</h1>

        <div class="divide-y divide-gray-200 w-11/12 md:w-10/12 lg:w-9/12 flex flex-col">
          <div class="flex justify-center">
            <TeacherCard name="Ishaan Samantray" title="President"></TeacherCard>
            <TeacherCard name="Tyler Song" title="Vice President"></TeacherCard>

          </div>
          <div class="flex justify-center">
            <TeacherCard name="Aanya Kapoor" title="Outreach Manager"></TeacherCard>
            <TeacherCard name="Haressh Nair" title="Secretary"></TeacherCard>
            <TeacherCard name="Luke Mehta" title="Finance Manager"></TeacherCard>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 mx-auto max-w-4xl">
            <TeacherCard name="Bryan Yung" title="Team Lead, Python"></TeacherCard>
            <TeacherCard name="Ved Roychowdhury" title="Team Lead, Python"></TeacherCard>
            <TeacherCard name="Siddhant Shah" title="Team Lead, HTML"></TeacherCard>
            <TeacherCard name="Albert Gao" title="Team Lead, HTML"></TeacherCard>
            <TeacherCard name="Digonto Chatterjee" title="Team Lead, C++"></TeacherCard>
            <TeacherCard name="Sudiksha Purohit" title="Team Lead, C++"></TeacherCard>
            <TeacherCard name="Kevin Xue" title="Team Lead, Intro to Programming"></TeacherCard>
            <TeacherCard name="Grant Kim" title="Team Lead, Intro to Programming"></TeacherCard>
            <TeacherCard name="Michael James" title="Team Lead, Java"></TeacherCard>
            <TeacherCard name="Maxwell Shawer" title="Team Lead, Java"></TeacherCard>
            <TeacherCard name="Aayan Shezhad" title="Team Lead, Java"></TeacherCard>
          </div>
        </div>

      </div>
    </div>
  </NuxtLayout>
</template>
