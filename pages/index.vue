<template>
    <div class="flex flex-col justify-center items-center mt-32">
        <nuxt-img
            src="/profilepicture.png"
            height="250"
            width="250"
            alt="Alem's PFP"
        />
        <h1 class="text-white font-['Roboto'] font-bold text-4xl mt-6">Alem</h1>
        <h2 class="text-gray-400 font-['Inter']">
            Content Creator and Developer
        </h2>
        <p class="text-white text-center max-w-sm md:max-w-3xl mt-4">
            What's good!? I'm Alem, a 15 year old Content Creator and Developer
            who is passionate for everything related to electronics from the
            newest computers to old machines like the first Nintendo and such.
            <br /><br class="md:hidden flex" />
            I started doing YouTube, streaming and showing my face online a-bit
            more. Today I'm here on this website to gather all my past work and
            work I'm currently working on in this website. Enjoy!
        </p>
    </div>

    <div
        class="bg-[#202020] my-16 py-12 flex flex-col justify-center items-center"
    >
        <h1 class="text-white font-['Roboto'] font-bold text-3xl">
            Game Development
        </h1>
        <p class="text-white text-center max-w-sm md:max-w-3xl mt-4">
            Coming very soon. I don't have much good stuff to show at the
            moment.
            <br />
            I just don't want to show off bad stuff on my website so I prefer
            waiting to have some valuable stuff to put here.
            <br /><br />
            Thanks for understanding! :D
        </p>
    </div>

    <div class="my-16 flex flex-col justify-center items-center">
        <h1 class="text-white font-['Roboto'] font-bold text-3xl mb-4">
            Video Editing
        </h1>

        <iframe
            class="youtube-video my-1"
            src="https://www.youtube.com/embed/YjqN4hCjOhs"
            title="Hazem's Robux Obby: What went wrong"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <div>
            <iframe
                class="youtube-video my-1"
                src="https://www.youtube.com/embed/vMIWS5vYms8"
                title="ChatGPT decides HOW much I DONATE in Pls Donate (Roblox)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    </div>

    <div
        class="bg-[#202020] my-16 py-12 flex flex-col justify-center items-center"
    >
        <h1 class="text-white font-['Roboto'] font-bold text-3xl">
            Reviews & Comments
        </h1>

        <div class="text-center my-6">
            <div class="flex flex-row align-middle items-center justify-center">
                <nuxt-img
                    class="rounded-full"
                    src="/leafplays.png"
                    width="30"
                    height="30"
                    alt="Leaf Plays' PFP"
                />
                <h1 class="text-white font-['Inter'] ml-1">
                    <span class="font-bold">Video Editing</span> - Leaf Plays
                </h1>
            </div>
            <h2 class="text-white font-['Inter'] ml-1">
                <span class="font-bold">Rating:</span> 10/10 (100%)
            </h2>
            <p class="text-white font-['Inter'] mt-2 max-w-sm md:max-w-3xl">
                "10/10 Stars would definitely recommend to others"
            </p>
        </div>

        <div class="text-center my-6">
            <div class="flex flex-row align-middle items-center justify-center">
                <nuxt-img
                    class="rounded-full"
                    src="/default.png"
                    width="30"
                    height="30"
                    alt="Default PFP"
                />
                <h1 class="text-white font-['Inter'] ml-1">
                    <span class="font-bold">2D Art</span> - ASi_YT
                </h1>
            </div>
            <h2 class="text-white font-['Inter'] ml-1">
                <span class="font-bold">Rating:</span> 10/10 (100%)
            </h2>
            <p class="text-white font-['Inter'] mt-2 max-w-sm md:max-w-3xl">
                "Hi I’m a customer of AlemDev and all I can say is.. 1000/10
                work was quick amazing good looking more then I ever expected.
                Id go back to AlemDev in a heart beat work was amazing!! I
                highly recommend him!"
            </p>
        </div>

        <div class="text-center my-6">
            <div class="flex flex-row align-middle items-center justify-center">
                <nuxt-img
                    class="rounded-full"
                    src="/default.png"
                    width="30"
                    height="30"
                    alt="Default PFP"
                />
                <h1 class="text-white font-['Inter'] ml-1">
                    <span class="font-bold">2D Art</span> - IronicZones
                </h1>
            </div>
            <h2 class="text-white font-['Inter'] ml-1">
                <span class="font-bold">Rating:</span> 10/10 (100%)
            </h2>
            <p class="text-white font-['Inter'] mt-2 max-w-sm md:max-w-3xl">
                "The experience that I had at AlemDev was excellent, everything
                was on time, and the quality of the logo was amazing!"
            </p>
        </div>

        <div class="text-center my-6">
            <div class="flex flex-row align-middle items-center justify-center">
                <nuxt-img
                    class="rounded-full"
                    src="/default.png"
                    width="30"
                    height="30"
                    alt="Default PFP"
                />
                <h1 class="text-white font-['Inter'] ml-1">
                    <span class="font-bold">Building</span> - MrAsna
                </h1>
            </div>
            <h2 class="text-white font-['Inter'] ml-1">
                <span class="font-bold">Rating:</span> 8.5/10 (85%)
            </h2>
            <p class="text-white font-['Inter'] mt-2 max-w-sm md:max-w-3xl">
                No comment.
            </p>
        </div>
    </div>

    <div
        class="text-white font-['Inter'] my-14 flex flex-col justify-center items-center"
    >
        Crafted with ❤️ by qvgk
    </div>
</template>

<style>
body,
html {
    margin: 0;
    padding: 0;
    background-color: #181818;
}

.youtube-video {
    aspect-ratio: 16 / 9;
    width: clamp(384px, 60vw, 640px);
}
</style>
