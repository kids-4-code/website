<script setup lang="ts">
useHead({
  title: "Members",
})

const alumni = [
  { name: "Ishaan Samantray", role: "Former President", college: "Biomedical Engineering & CS @ Cornell University" },
  { name: "Tyler Song", role: "Former Vice President", college: "CS @ University of Maryland" },
  { name: "Zaria Naqvi", role: "Former Vice President", college: "CS & Economics @ Harvard University" },
  { name: "Lavanya Ravi", role: "Former Marketing & Advertising Director/Secretary", college: "Wharton @ University of Pennsylvania" },
  { name: "Hongjin Fang", role: "Former President", college: "Bioengineering @ Cornell University" },
  { name: "Bryan Yung", role: "Former Java Team Leader", college: "CS @ Carnegie Mellon University" },
  { name: "Kevin Xue", role: "Former Web Development Team Leader", college: "CS @ University of Pennsylvania" },
]
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center">

      <div class="w-11/12 md:w-9/12 lg:w-7/12 grid grid-cols-1 xl:grid-cols-3 gap-6 mt-16 mx-32 ">
        <!--Icon-->
        <div>
          <div class="bg-violet-50 dark:bg-violet-950/40 rounded-xl p-1 w-20 drop-shadow-light">
            <img src="/images/icons/teachers.png" class="w-20">
          </div>
          <h1 class="font-serif text-4xl lg:text-5xl text-gray-700 dark:text-night-text font-semibold my-4 mb-8">Members</h1>
          <div class="p-6 border border-gray-200 dark:border-night-border rounded-lg shadow-sm">
            <Icon name="tabler:school" class="text-4xl text-purple-600 mb-2"></Icon>
            <h3 class="font-serif font-semibold text-gray-700 dark:text-night-text">Interested in joining our team?</h3>
            <p class="text-gray-600 dark:text-night-muted text-sm">Gain experience teaching, work with younger students, receive volunteer
              hours, and
              more!</p>
            <LinkButton class="mt-4" to="/apply" color="purple">Learn more</LinkButton>
          </div>
        </div>
        <div class="reveal col-span-2 grid grid-cols-2 md:grid-cols-3" v-reveal>
          <TeacherCard name="Ahana Samantray" title="President"></TeacherCard>
          <TeacherCard name="Siddhant Shah" title="Co-Vice President"></TeacherCard>
          <TeacherCard name="Akshaj Gattu" title="Vice President"></TeacherCard>
          <TeacherCard name="Logan Zhang" title="Marketing & Advertising Director"></TeacherCard>
          <TeacherCard name="Sanjana Penugonda" title="Web Design 1AB Teacher"></TeacherCard>
          <TeacherCard name="Andrew Dai" title="Python Teacher"></TeacherCard>
          <TeacherCard name="Hyab Mekonnen" title="Java 1 Teacher"></TeacherCard>
          <TeacherCard name="Aislin Deng" title="Java 2 Teacher"></TeacherCard>
          <TeacherCard name="Temur Nurimov" title="Director Of Curriculum"></TeacherCard>

          <!-- <div class="p-6 border border-gray-200 dark:border-night-border rounded-lg shadow-sm">
            <Icon name="tabler:alert-triangle" class=" text-4xl text-purple-600 mb-2"></Icon>
            <h3 class="font-serif font-semibold text-gray-700 dark:text-night-text">Under construction</h3>
            <p class="text-gray-600 dark:text-night-muted text-sm">Please check later for updated leadership once our next session starts!</p>
          </div> -->
        </div>
        <!-- <div>
          <h2 class="font-semibold text-gray-700 dark:text-night-text font-serif text-3xl mt-6">Teachers</h2>
          <table class="font-body mt-2 text-left table-auto text-gray-600 dark:text-night-muted w-full border-y-2 border-y-gray-200 dark:border-y-night-border">
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

      <!--Alumni-->
      <div class="w-11/12 md:w-9/12 lg:w-7/12 mt-16 mb-24">
        <h2 class="reveal font-serif text-4xl text-gray-700 dark:text-night-text font-semibold mb-2" v-reveal>Alumni</h2>
        <p class="reveal text-gray-600 dark:text-night-muted text-sm mb-6" v-reveal="60">Former leaders & teachers, and where they are now.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(person, i) in alumni" :key="person.name" v-reveal="i * 60"
            class="reveal p-5 border border-gray-200 dark:border-night-border rounded-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <h3 class="font-serif font-semibold text-lg text-gray-700 dark:text-night-text">{{ person.name }}</h3>
            <p class="text-sm font-medium text-purple-600">{{ person.role }}</p>
            <p class="text-sm text-gray-500 dark:text-night-muted mt-1">{{ person.college }}</p>
          </div>
        </div>
      </div>

    </div>
  </NuxtLayout>
</template>
