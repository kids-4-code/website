<template>
    <div>
        <div class="bg-zinc-50 dark:bg-gray-800">
            <div class="mx-auto md:px-32 lg:max-w-5xl p-8 dark:text-gray-300">
                <h3>© 2023 Kids for Code</h3>
                <hr class="my-4 border-gray-200" />
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="text-sm">
                        <h4 class="font-bold">Contact</h4>
                        <p>kidsforcodeteachers@gmail.com</p>
                    </div>
                    <div class="text-sm">
                        <!--todo fix the alignment here-->
                        <h4 class="font-bold">Social media & links</h4>
                        <div class="flex gap-1">
                            <a href="https://www.youtube.com/@kidsforcode9529"><i
                                    class="fa-brands fa-youtube text-xl inline-block mx"></i></a>
                            <a href="https://www.instagram.com/kidsforcode"><i
                                    class="fa-brands fa-instagram text-xl inline-block mx"></i></a>
                            <a href="https://github.com/kids-4-code"><i
                                    class="fa-brands fa-github text-xl inline-block mx"></i></a>
                        </div>
                    </div>
                    <div class="text-sm">
                        <h4 class="font-bold">Quick links</h4>
                        <ul>
                            <li><a class="underline"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdGXa26ecBIs3v1CBOTWYi4kmnTKoXxhtXm7u59acVcSbQppA/viewform ">Enroll</a>
                            </li>
                            <li><a class="underline"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSc6Z4jJy4sGnSrbh6USwbSjLYZ-J9cwpx9Sc6KoaJQcWdTYqQ/viewform">Apply
                                    to teach</a></li>
                            <li><a class="underline"
                                    href="https://docs.google.com/document/d/1kX1w2TKUfz0x261wWIiBJqLF76C1rBK-011kV0qd1R4/edit?usp=sharing">Course
                                    schedule</a></li>
                            <li>
                                <router-link class="underline" to="/faq">Frequently asked questions</router-link>
                            </li>
                            <li>
                                <router-link class="underline" to="/donate">Donate to Kids for Code</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>