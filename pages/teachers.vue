<script setup lang="ts">
useHead({
  title: "Members",
})
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center">

      <div class="w-11/12 md:w-9/12 lg:w-7/12 grid grid-cols-1 xl:grid-cols-3 gap-6 mt-16 mx-32 ">
        <!--Icon-->
        <div>
          <div class="bg-violet-50 rounded-xl p-1 w-20 drop-shadow-light">
            <img src="/images/icons/teachers.png" class="w-20">
          </div>
          <h1 class="font-serif text-4xl lg:text-5xl text-gray-700 font-semibold my-4 mb-8">Members</h1>
          <div class="p-6 border border-gray-200 rounded-lg shadow-sm">
            <Icon name="tabler:school" class="text-4xl text-purple-600 mb-2"></Icon>
            <h3 class="font-serif font-semibold text-gray-700">Interested in joining our team?</h3>
            <p class="text-gray-600 text-sm">Gain experience teaching, work with younger students, receive volunteer
              hours, and
              more!</p>
            <LinkButton class="mt-4" to="/apply" color="purple">Learn more</LinkButton>
          </div>
        </div>
        <div class="col-span-2 grid grid-cols-2 md:grid-cols-3">
          <TeacherCard name="Ahana Samantray" title="President"></TeacherCard>
          <TeacherCard name="Zaria Naqvi" title="Co-President"></TeacherCard>
          <TeacherCard name="Siddhant Shah" title="Vice President"></TeacherCard>
          <TeacherCard name="Lavanya Ravi" title="Marketing & Advertising Director"></TeacherCard>
          <TeacherCard name="Temur Nurimov" title="Director Of Curriculum"></TeacherCard>
          <TeacherCard name="Ishaan Samantray" title="Former President"></TeacherCard>
          <TeacherCard name="Tyler Song" title="Former Vice President"></TeacherCard>
          

          <!-- <div class="p-6 border border-gray-200 rounded-lg shadow-sm">
            <Icon name="tabler:alert-triangle" class=" text-4xl text-purple-600 mb-2"></Icon>
            <h3 class="font-serif font-semibold text-gray-700">Under construction</h3>
            <p class="text-gray-600 text-sm">Please check later for updated leadership once our next session starts!</p>
          </div> -->
        </div>
        <!-- <div>
          <h2 class="font-semibold text-gray-700 font-serif text-3xl mt-6">Teachers</h2>
          <table class="font-body mt-2 text-left table-auto text-gray-600 w-full border-y-2 border-y-gray-200">
            <thead>
              <tr>
                <th class="font-medium">Teacher</th>
                <th class="font-medium">Classes</th>
                <th class="font-medium">Grade</th>
              </tr>
            <tbody>
              <tr>
                <td>Digonto Chatterjee</td>
                <td>Java, Python, C++, ITP</td>
                <td>12</td>
              </tr>
            </tbody>
            </thead>
          </table>
        </div> -->
      </div>

    </div>
  </NuxtLayout>
</template>
