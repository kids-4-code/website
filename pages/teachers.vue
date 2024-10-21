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
          <TeacherCard name="Ishaan Samantray" title="President"></TeacherCard>
          <TeacherCard name="Tyler Song" title="Vice President"></TeacherCard>
          <TeacherCard name="Ashley Kundi" title="Secretary"></TeacherCard>
          <TeacherCard name="Zaria Naqvi" title="Curriculum Manager"></TeacherCard>
          <TeacherCard name="Siddhant Shah" title="Team Lead, Python"></TeacherCard>
          <TeacherCard name="Rushil Gaddam" title="Team Lead, Python"></TeacherCard>
          <TeacherCard name="Bryan Yung" title="Team Lead, Java"></TeacherCard>
          <TeacherCard name="Michael James" title="Team Lead, Java"></TeacherCard>
          <TeacherCard name="Max Shawer" title="Team Lead, Java"></TeacherCard>
          <TeacherCard name="Aayan Shehzad" title="Team Lead, Web"></TeacherCard>
          <TeacherCard name="Lavanya Ravi" title="Team Lead, Web"></TeacherCard>
          <TeacherCard name="Harish Chandran" title="Team Lead, C++"></TeacherCard>
          <TeacherCard name="Andy Xiong" title="Curriculum Developer"></TeacherCard>
          <TeacherCard name="Jonathan Cai" title="Instructor"></TeacherCard>
          <TeacherCard name="Ahana Samantray" title="Instructor"></TeacherCard>
<<<<<<< Updated upstream
=======
          <TeacherCard name="Albert Gao" title="Instructor"></TeacherCard>
          <TeacherCard name="Kevin Xue" title="Instructor"></TeacherCard>
          <TeacherCard name="Michael James" title="Instructor"></TeacherCard>
          <TeacherCard name="Zaria Naqvi" title="Instructor"></TeacherCard>
          <TeacherCard name="Temur Nurimov" title="Instructor"></TeacherCard>
>>>>>>> Stashed changes
          <TeacherCard name="Luke Mehta" title="Instructor"></TeacherCard>
          <TeacherCard name="Andrew Dai" title="Instructor"></TeacherCard>
          <TeacherCard name="Naman Sarup Lohchab" title="Instructor"></TeacherCard>
          <TeacherCard name="Nishtha Sharma" title="Instructor"></TeacherCard>
          <TeacherCard name="Aahana Jain" title="Instructor"></TeacherCard>
          <TeacherCard name="Sophia He" title="Instructor"></TeacherCard>
          <TeacherCard name="Bethelehem Kebede" title="Instructor"></TeacherCard>
          


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
