import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 导入图片
import brandLayout from "./assets/brand-layout.png";

export default function PortfolioSkeleton() {
  const pages = ["Works", "About", "Contact"];
  const [activePage, setActivePage] = useState("Works");
  const [selectedWork, setSelectedWork] = useState(null);

  const worksData = [
    {
      id: 1,
      category: "1",
      title: "Stories from the Dusk / Illustration, Graphic Design, Poster Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/StoryDusk/titlepic.png",
      images: [
        
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/StoryDusk/cover2.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/StoryDusk/1-1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/StoryDusk/1-2.webp"

      ],
    content: `
  <div class="work-header">
    <h1 class="work-h1">Stories from the Dusk</h1>
    <h2 class="work-h2">Hongbin Yang / Illustration, Graphic Design, Poster Design / 2025</h2>

    <p class="work-desc">
      Dusk—a time when objects are still discernible, yet there isn't enough
light for outdoor activity. It feels like a dream, I can see, but I cannot will
my body or consciousness to interact with it. There's a sense of drifting
along, half willing, half resigned.
    </p>
    <p class="work-desc">
      It was during this hour that I read The Dream of the egg while listening to
the album of Tomo Katsurada and viewing the photography of Miyuki
Okuyama. It became a journey of exploration, spontaneity, courage, and
recklessness—a dreamlike path filled with uncertainty and a child's unfiltered sense of wonder. Much like moving through dusk itself, groping
through blurred dawn, bodies struggling in the surreal haze of dreams,
and that thrilling freshness born of the unknown, a sensation we often lose
after childhood.
    </p>
    <p class="work-desc">
      The theme of my work is Stories in the Dusk. I created a piece inspired by
a scene in Dream of the egg, where the young prince first enters the
enchanted forest and glimpses the Dream Spirit, a great golden bird standing at the center of a hollow tree. But I chose not to reveal the Dream
Spirit fully, to preserve mystery and leave space for narrative imagination.
    </p>
    <p class="work-desc">
      My other reason is, the prince eventually crosses a boundary. If he had
never seen the Dream Spirit, perhaps his disappointment wouldn't have
been so deep. Yet, had he not been determined to seek it out, he would
have missed a once-in-a-lifetime experience.
    </p>
    <p class="work-desc">
      I hope we can all draw endless imagination and joy from stories, regardless of media, and from the dreams we encounter.
    </p>
  </div>
`
    },
   
    {
      id: 2,
      category: "2",
      title: "Liberation BeerLiberation Beer / Product, Font, Packaging, Visual Identity Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer-logo.webp",
      images: [

        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer2.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer3.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer4.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer5.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer6.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer7.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer8.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/LiberationBeerWeb/beer9.webp"
      ],
content: `
  <div class="work-header">
    <h1 class="work-h1">Liberation Beer</h1>
    <h2 class="work-h2">Hongbin Yang / Product Design, Packaging Design, Font Design, Visual Identity Design / 2024</h2>

     <p class="work-desc">
      Liberation Beer, commissioned by the Veteranen Ontmoetings Centrum Den Bosch Brabant Noord, was created to celebrate
       the victorious liberation of all oppressed regions during World War II. The centerpiece of liberation depicts soldiers
        as the core, symbolizing courage in red, freedom in white, and the enduring perseverance and justice in blue, 
        complementing the primary colors of Liberation Day in the Netherlands. Soldiers lay down their arms, taking a rare moment 
        of respite to raise a bottle of beer in tribute to all they fought for, to liberation! Liberation here signifies not just
         the eternal freedom and revelry of Liberation Day, but the profound courage to confront evil and oppression during the
          process of liberation, and the pursuit of truth and justice with purity.</p>
    <p class="work-desc">
    “Lest we forget”
      </p>
  </div>
`
      
    },

 {
      id: 3,
      category: "3",
      title: "Art Worldbuilding / Poster, Graphic Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ArtWorldBuilding1/moth.webp",
      images: [
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ArtWorldBuilding1/art1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ArtWorldBuilding1/art2.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ArtWorldBuilding1/art3.webp"
      ],
      content: `
  <div class="work-header">
    <h1 class="work-h1">Art Worldbuilding</h1>
    <h2 class="work-h2">Hongbin Yang / Poster Design, Graphic Design / 2024</h2>

    <p class="work-desc">
      Commissioned by Extra Pool, the Art Worldbuilding Workshop poster was born from my creative hands. 
      The moth, to me, stands as a representative of the global collective subconscious, deeply entwined with dreams, 
      embodying the collective subconscious within. Yet, the moth is 'die to born'; from Virginia Woolf's 'The Death 
      of the Moth' to the concept of 'moth to flame,' the moth's significance is imbued with death, its subjectivity 
      inverted, its 'life' fulfilled only after its death. This is my homage in the workshop to questioning authorship, 
      intellectual property, and cultural labor; for true transformation begins from the opposite, in the crucible of 
      fire, in the ashes, reborn.”
    </p>

    <p class="work-desc">
      The workshop is an exercise in finding a collective subconscious through collage techniques and the design of signs. 
      Together, ideas of authorship, intellectual property and the role of cultural labor will be questioned. Art Worldbuilding 
      is a conceptual project that works with magical realism, liminality, alterity and all sorts of phenomenological tangles
       to bring about cultural transformation. The project believes in the construction of deeply meaningful ethical communities
        based on individual empowerment. The activities of Art Worldbuilding refer to practices from romanticism and symbolism
         of the late 19th century, the French Dada movement (1920s) and the American beat literature of the 1950s. Movements
          that have been popularized in postmodernity to incent transformative processes and collective production.
    </p>
  </div>
`
    },

    {
      id: 4,
      category: "4",
      title: "Rethinking Artist Economy / Editorial, Publication, Zine, Graphic Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/RethinkingArtistEconomy/newhive-01.png",
      images: [
        
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/RethinkingArtistEconomy/title-pic.jpg",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/RethinkingArtistEconomy/page1.jpg",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/RethinkingArtistEconomy/page2.jpg",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/RethinkingArtistEconomy/page3.jpg",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/RethinkingArtistEconomy/page4.jpg",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/RethinkingArtistEconomy/page5.jpg"
      ],
    content: `
  <div class="work-header">
    <h1 class="work-h1">Rethinking Artist Economy</h1>
    <h2 class="work-h2">Hongbin Yang / Editorial Design, Book Design / 2023</h2>

    <p class="work-desc">
      This zine was created during the art residency project, Rethinking Artist Economy. 
      The booklet documents the lives of St. Joost students over the course of a week, 
      and how they applied the principles and feedback loops observed in nature to the 
      practice of art economy.
    </p>
  </div>
`
    },

    {
      id: 5,
      category: "5",
      title: "Inward Connection / Product, Service, Speculative, Graphic Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/pic6.webp",
      images: [
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/arrow-1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/sword.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/nectar.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/ball.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/card.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/envelope.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/amulet-banner.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/InwardConnection/amulet-banner-back.webp"
      ],
      content: `
  <div class="work-header">
    <h1 class="work-h1">Connecting External Struggle to Internal Vulnerabilities: A Guide to Using
Religious Items</h1>
    <h2 class="work-h2">Hongbin Yang / Product Design, Service Design, Speculative Design, Graphic Design / 2023</h2>

    <h2 class="work-h2">Collaboration 'He Hua Temple' (Amsterdam)</h2>

    <h2 class="work-h2">
     <a href="https://mivc.imgix.net/static/_DaUbCRAT_thesis-hongbin-yang-2023.pdf" target="_blank">Thesis Download</a>
    </h2>

    <p class="work-desc">
      This research takes the pragmatic religious practice that I observed in the Buddhist temple where I practice Buddhism 
      as a starting point to explore the narrative of the pragmatic group itself and the reasons for practicing religion to
       solve issues or gain private interest instead of believing in values and principles of religion.
    </p>

    <p class="work-desc">
      My research question is how to use the religious figure to connect people's external struggle with their internal
       vulnerabilities. By using the religious weapon of Qian Shou Kuan Yin, a Buddhism god who can help with overcoming
        struggles and curing diseases, as a design language to reconstruct a religious symbol that people can resonate with. 
        Instead of finding help or solace within Buddhism and other religions, this symbol can aid to link their internal
         vulnerabilities and help them discover their own strength to face problems by themselves.
    </p>

    <p class="work-desc">
      The story starts when Chinese people approach Buddhism pragmatically, trying to find the most efficient temple.
       Religion practice became a simple trade between money and self-satisfaction. However, The right of explanation 
       is held by the offeror of the spiritual ceremonies. The temporary solution leads to an infinite cycle of finding
        the most efficient temple, Given a strong feeling of randomness, loss, and puzzle.
    </p>

    <p class="work-desc">
      I registered for volunteer work at He Hua temple to observe and research. The way He Hua Temple guides the problem
       that causes the hunting of the most efficient temple is different, The Monk Anjin does not sell the magic amulet or 
       cast spiritual spells. She guides the problem into the inner self of individuals, trying to empower the believers,
        explains that the effectiveness of the temple can only be temporary way, but how to enrich yourself, face, and then
         solve the issue is the quintessence of facing vulnerability.
    </p>

  </div>
`
    },

    {
      id: 6,
      category: "6",
      title: "MARS / Product, Sustainability, Literature, Bio Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/pic5.webp",
      images: [
        
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball0.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball2.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball3.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball4.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball5.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball6.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball7.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball8.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball9.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball10.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball11.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball12.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball13.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball14.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball15.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball16.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball17.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball18.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball19.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball20.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball21.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball22.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball23.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball24.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball25.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball26.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball27.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball28.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/ReefBall/reefball29.webp"
        
      ],
    content: `
  <div class="work-header">
    <h1 class="work-h1">MARS</h1>
    <h2 class="work-h2">Hongbin Yang, Odette Van Heesbeen, Yuxin Wang / Product Design, Bio Design, Sustainability Design / 2022</h2>

    <p class="work-desc">
      The project 'Modular Artificial Reef System' (MARS) is an experimental design initiative focused on restoring
       ecological diversity in the North Sea in the Netherlands. The research question revolves around modifying the
        physical and chemical characteristics of artificial reefs to accommodate various ecological populations. This
         project addresses the issue of damage caused to the seabed by bottom trawling fishing vessels, resulting in 
         a disturbed seabed with a less diverse community.
    </p>
    <p class="work-desc">
      Our project aims to study the habitat preferences of specific North Sea populations and adjust the physical and 
      chemical structure of artificial reefs to meet their specific requirements to achieve the goal of biological
       diversity and preservation of indigenous species. The physical structure of the MARS will consist of modular 
       spherical objects that can be interlocked and placed on the North Sea seabed. The objects will not be smooth,
        but rather have a pattern of grooves with writing embedded. The writing will be the story of the voiceless, 
        the story of the organism in the North Sea. These stories, we mean to exhibit on the MARS to the public to make
         them aware of the issue we are addressing. The chemical structure will focus on  the substrate of the objects,
          to make them nourishing and carbon neutral if possible. Contrary to structures currently in the North Sea, 
          it will not be made with regular construction concrete. Additionally, MARS will answer to the shortage of 
          hard substrate structures on the North Sea floor suited for habitation.
    </p>
    <p class="work-desc">
      The idea for this project originated from the need to tell the story of those without a voice. The reason we,
       as an artist and designer duo, work together is to serve our common goal of helping those without a voice and
        to combine our respective abilities to make a project on the intersection of art, design and science towards 
        environmental awareness and functionality. Art can be functional and design can be artistic, these two practices
         are closely related. Using them with science opens up possibilities to make the Dutch waters more sustainable
          and livable, more diverse and visually appealing. The story featured on MARS is about the unheard, the life
           in the North sea from a microscopic to macroscopic scale and the purpose of art and design. It is the story
            that we tell not only with the product, but also the process and the way of exhibition. We want to engage
             the public with what is currently happening to habitats in the North Sea and draw attention to fixing this 
             problem through art.
    </p>
    <p class="work-desc">
      This project is still being developed by me and Odette, we have completed the first phase of design, which resulted
       in a flexible, modular structure of interconnected columns and spheres as concrete artificial reef elements. In terms
        of materials, we have conducted research into various types of concrete surfaces to assess their attractiveness to 
        North Sea species and determine the surface grooves that are most suitable for the habitat preferences of North Sea species.
    </p>
    <p class="work-desc">
      We have currently tested the durability of our artificial reefs under seawater and have seen the quantity of biological
       growth after three months. From the results, we have gathered that the current structure can fully adapt to the marine
        environment and successfully attract a certain number of marine organisms to colonize the reef. This is our initial
         goal. In the next step, from a long-term perspective, we hope to cater to the populations we want to protect and breed
          by changing the composition of the materials. We also aim to find more environmentally friendly concrete materials 
          that can accommodate species' habitat preferences, with the goal of minimizing the carbon footprint as much as possible.
    </p>
    <p class="work-desc">
      The second point we expect is the return rate of the target population in the North Sea, which would prove the effectiveness 
      of this project. With the effectiveness ensured, we hope to determine whether this artificial reef can function in freshwater
       to increase biodiversity in different bodies of water.
    </p>
  </div>
`
    },

    {
      id: 7,
      category: "7",
      title: "Faithless / Card, Graphic, Speculative, Interface Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Faithless/titlepic.webp",
      images: [

        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Faithless/faithless0.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Faithless/faithless1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Faithless/faithless2.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Faithless/faithless3.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Faithless/faithless4.webp"
      ],
content: `
  <div class="work-header">
    <h1 class="work-h1">FAITHLESS</h1>
    <h2 class="work-h2">Hongbin Yang / Graphic Design, Speculative Design, Interface Design / 2021</h2>

     <p class="work-desc">
     Faithless is the “overture” project of Inward Connection. In Faithless, I extended whether an “efficient”
      religious place really exists based on the polytheist society background to refer the the right to interpret
       things held by the temple or by themselves? I merge the concept into Tatrot to demonstrate the process of 
       verifying “efficiency”, a scene when all the efficient gods are left from their duty of fulfilling the people's 
       wishes. By the unpredictability of tarot and praying, how do people connect the relationship between wishes
        and themselves? Who holds the interpretation power behind the religious practice?</p>
  </div>
`
      
    },

     {
      id: 8,
      category: "8",
      title: "WOFL / Editorial, Publication, Zine, Sustainability, Graphic Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/WOFL/pic-turtle.webp",
      theme: "wofl-theme", // 添加这个属性来标识黑色主题
      images: [
        
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/WOFL/cover.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/WOFL/1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/WOFL/2.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/WOFL/3.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/WOFL/4.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/WOFL/5.webp"
      ],
    content: `
  <div class="work-header">
    <h1 class="work-h1">WOFL</h1>
    <h2 class="work-h2">Hongbin Yang / Editorial Design, Book Design / 2021</h2>

    <p class="work-desc">
      The WOFL project is a zine telling the story of how light pollution affects sea turtles. The light
       is the most common and beneficial item in our daily life. However, when the light illuminates our
        well-being, it also threatens the lives of newborn sea turtles. I mapped the conflict between human 
        necessary activity and ocean animal habitat. The most commonly overlooked objects that attract predators
         and point to the wrong path for newborn sea turtles, and the effort people made so far to preserve the 
         species. Bring the thinking of the unconscious damage that was made during development and the balance
          between human and animal welfare.
    </p>
  </div>
`
    },

    {
      id: 9,
      category: "9",
      title: "Dripping Diary / Info Graphic Design, Data Visualization",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Dripping/pic3.webp",
      images: [
        
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Dripping/1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Dripping/2.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Dripping/3.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Dripping/4.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Dripping/5.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Dripping/6.webp"
      ],
    content: `
  <div class="work-header">
    <h1 class="work-h1">Dripping Diary</h1>
    <h2 class="work-h2">Hongbin Yang / Info Graphic Design, Data Visualization / 2020</h2>

    <p class="work-desc">
     This project delves into the security risks surrounding private data within public institutions. 
     In this digital age, these institutions increasingly demand personal information for online logging. 
     For instance, the absence of a mobile phone number can pose significant challenges when interacting with 
     fully digitized public services.Fraudulent SMS messages often follow interactions with public institutions,
      mimicking official communication to deceive individuals into transferring funds or subscribing to illegal services.
       Such practices disproportionately impact those with lower identification abilities, leading to substantial losses.
    </p>
    <p class="work-desc">
     While the digitization of public system data offers convenience, it concurrently heightens associated risks.
      This project aims to explore whether public institutions, serving as repositories of sensitive citizen information,
       should enhance privacy protocols during the digitization process. The widespread exposure of personal information 
       in public systems has disrupted and reshaped the trust dynamic between individuals and these institutions.
    </p>
    <p class="work-desc">
      Utilizing charts and data visualization, I illustrate the frequency and extent of personal data breaches within 
      the medical system yearly. Using blood droplets as a metaphor, this visualization aims to prompt a discussion on
       optimal media and registration strategies for individuals managing their data within the digital sphere of public 
       institutions.
    </p>
  </div>
`
    },

    
    {
      id: 10,
      category: "10",
      title: "ETHYLENE / Graphic Design, Poster Design",
      thumbnail: "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Ethylene/pic4.webp",
      images: [
        
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Ethylene/1.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Ethylene/2.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Ethylene/3.webp",
        "https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Ethylene/4.webp"
      ],
    content: `
  <div class="work-header">
    <h1 class="work-h1">Ethylene</h1>
    <h2 class="work-h2">Hongbin Yang / Graphic Design, Poster Design / 2020</h2>

    <p class="work-desc">
     The Ethylene Project, developed during my undergraduate studies, centered on the environmental
      impact of the plastic industry on the ocean and marine life. It explored the pervasive circulation
       of plastic particles throughout the ocean, affecting marine ecosystems and ultimately entering human
        consumption. I was inspired by post-apocalyptic art at the time, so I aimed to draw post-apocalyptic 
        imagery to reveal the state of the completely polluted ocean, and at that time, creatures could only
         be observed in the form of “ethylene”. It is a despairing and greasy future filled with inorganic 
         substances after being highly polluted.
    </p>
  </div>
`
    },
    
  ];

  useEffect(() => {
    if (document.getElementById("portfolio-style")) return;

    const style = document.createElement("style");
    style.id = "portfolio-style";
    style.innerHTML = `
      :root{
        --bg:#ffffff;
        --text:#000000;
        --muted:#6e6e6e;

        /* Work Header ---------------------------------- */
        .work-header {
          width: 980px; 
          margin: 0 auto 40px;
          margin-top: 50px;
}

/* 标题 */
.work-h1 {
  font-family: "MyriadPro", sans-serif;
  font-size: 54px;
  font-weight: 400;
  margin: 0 0 28px 0;
  line-height: 1.15; /* 视觉上接近你图中的行距 */
}

/* 副标题 */
.work-h2 {
  font-family: "Myriad Pro", sans-serif;
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 30px 0;
  color: #000;
  line-height: 1.3;
}

/* 描述（小段落） */
.work-desc {
  font-family: "Myriad Pro", sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #000;
  line-height: 1.5; /* 等效于你提供的视觉行距 */
  max-width: 100%;
  margin-bottom: 60px;
}



      }

      html, body, #root { 
        height: 100%; 
        margin: 0; 
        padding: 0;
        overflow: hidden;
      }
      
      body { 
        background: var(--bg); 
        font-family: Inter, sans-serif; 
        color: var(--text); 
      }
      
      * { 
        box-sizing: border-box; 
      }

      .app {
        display: flex;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
      }

      /* Sidebar left */
      .sidebar {
        width: 50vw;
        height: 100vh;
        padding: 40px;
        display: flex;
        flex-direction: column;
        position: relative;
        flex-shrink: 0;
        justify-content: space-between;
      }

      /* 图片容器样式 */
      .brand-image-container {
        align-self: flex-start;
        width: 100%;
      }

      .brand-image {
        width: 100%;
        height: auto;
        display: block;
        margin-top: -18px;
      }

      .center-line {
        position: absolute;
        right: -1px;
        top: 20px;
        height: calc(100% - 40px);
        width: 1px;
        background: #000;
      }

      .sidebar-footer {
        margin-top: 0;
        margin-bottom: -20px;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 500;
        align-self: flex-end;
        width: 100%;
      }

      .page-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: #000;
        font-size: 15px;
        padding: 0;
        opacity: 0.6;
        transition: opacity .2s;
        font-family: "Futura";
      }

      .page-btn.active { 
        opacity: 1; 
        font-weight: 700; 
      }
      
      .page-btn:focus { 
        outline: none; 
      }

      /* Main right - 调整上端对齐分割线顶端 */
      .main {
        width: 50vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background: white;
        flex-shrink: 0;
        padding-top: 20px; /* 与左侧padding-top保持一致 */
      }

      .hero {
        padding: 0 40px 25px; /* 移除上padding，由.main控制 */
        flex-shrink: 0;
      }

      .hero h1 {
        margin: 0;
        font-size: 26px;
        font-family: "Futura";
        font-weight: 400; /* 明确指定 semi-bold */
      }

      /* 主要内容区域 */
      .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 0;
        overflow: hidden;
      }

      /* Works gallery - 隐藏滚动条 */
      .gallery-wrap {
        flex: 1;
        overflow-y: auto;
        padding: 25px 40px 45px;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .gallery-wrap::-webkit-scrollbar {
        display: none;
      }

      .grid {
        display: flex;
        flex-direction: column;
        gap: 38px;
      }

      .item { 
        cursor: pointer; 
      }
      
      .item img { 
        width: 100%; 
         height: 300px; /* 固定高度 */
        object-fit: contain; /* 保持图片比例并裁剪 */
        border-radius: 6px; 
        display: block;
        
      }

      .item img:hover {
  filter: invert(1);
  transform: scale(1.03);
  transition: all 0.25s ease;
}
      
      .title { 
        font-size: 15px; 
        margin-top: 10px; 
        color: var(--muted); 
      }

      /* About / Contact content - 隐藏滚动条 */
      .page-content {
        flex: 1;
        padding: 45px 40px;
        font-size: 18px;
        line-height: 1.7;
        background: white;
        overflow-y: auto;
        min-height: 0;
        display: flex;
        flex-direction: column;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .page-content::-webkit-scrollbar {
        display: none;
      }

      .page-content-inner {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .content-fill {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 25px;
      }

      /* Fullscreen work */
      .work-overlay {
        position: fixed;
        inset: 0;
        background: white;
        overflow: auto;
        z-index: 2000;
        padding: 40px 0;
      }

      .work-overlay::-webkit-scrollbar {
  width: 6px;
}

.work-overlay::-webkit-scrollbar-track {
  background: transparent;
}

.work-overlay::-webkit-scrollbar-thumb {
  background: #bfbfbf;   /* 可调浅灰 */
  border-radius: 3px;
}

.work-overlay::-webkit-scrollbar-thumb:hover {
  background: #9a9a9a;
}

      .close-btn {
        position: fixed;
        top: 20px;
        right: 30px;
        font-size: 34px;
        cursor: pointer;
        font-weight: 200;
        color: #9c9c9c;
        z-index: 2001;
        transition: transform 0.25s ease, color 0.25s ease;
      }
        .close-btn:hover {
        transform: scale(1.25);
        color: #1f1f1fff;
}

      .work-container {
        width: 980px;
        margin: 0 auto;
      }

      .work-title {
        text-align: center;
        font-size: 20px;
        margin-bottom: 26px;
      }

      .work-images {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .work-images img {
        width: 100%;
      }

      /* WOFL项目黑色主题 */
.work-overlay.wofl-theme {
  background: #000000 !important;
}

.work-overlay.wofl-theme .close-btn {
  color: #ffffff !important;
}

.work-overlay.wofl-theme .work-h1,
.work-overlay.wofl-theme .work-h2,
.work-overlay.wofl-theme .work-desc {
  color: #ffffff !important;
}

.work-overlay.wofl-theme .work-h2 a {
  color: #ffffff !important;
  border-bottom: 1px solid #ffffff;
}

.work-overlay.wofl-theme .work-h2 a:hover {
  color: #cccccc !important;
}

/* About页面样式 */
/* About页面样式 - 照片在左，文字在右 */
.about-header {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;
}

.about-photo {
  width: 500px;
  height: 750px;
  object-fit: cover; /* 保持这个，确保图片比例正常 */
  /* 移除这两行： */
  /* border-radius: 50%; */
  /* border: 2px solid #000; */
  flex-shrink: 0;
}

.about-intro {
  flex: 1;
}

.about-intro h2 {
  font-size: 32px;
  margin: 0 0 12px 0;
  font-weight: 600;
  font-family: "Futura";
}

.about-tagline {
  font-size: 18px;
  color: var(--muted);
  margin: 0 0 20px 0;
  font-style: italic;
}

/* 文字内容样式 */
.about-content {
  line-height: 1.6;
}

.about-content p {
  margin-bottom: 16px;
}

      /* 响应式调整 */
      @media (max-width: 768px) {
        .app {
          flex-direction: column;
        }
        .sidebar, .main {
          width: 100vw;
          height: 50vh;
        }
        .main {
          padding-top: 20px;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="app">
      <aside className="sidebar">
        {/* 替换为图片 */}
        <div className="brand-image-container">
          <img 
            src={brandLayout}
            alt="Hongbin Yang" 
            className="brand-image"
          />
        </div>
        <div className="center-line"></div>

        <div className="sidebar-footer">
          {pages.map(p => (
            <button
              key={p}
              className={`page-btn ${activePage === p ? "active" : ""}`}
              onClick={() => setActivePage(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </aside>

      <main className="main">
        <div className="hero">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {activePage}
          </motion.h1>
        </div>

        <div className="main-content">
          {activePage === "Works" && (
            <div className="gallery-wrap">
              <div className="grid">
                {worksData.map(work => (
                  <motion.div
                    key={work.id}
                    layout
                    className="item"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedWork(work)}
                  >
                    <img src={work.thumbnail || work.images[0]} alt={work.title} />
                    <div className="title">{work.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {(activePage === "About" || activePage === "Contact") && (
  <div className="page-content">
    <div className="page-content-inner">
      <div className="content-fill">
        {activePage === "About" ? (
          <>
            {/* 照片单独一行 */}
            <div className="about-photo-container">
              <img 
                src="https://portfolio-pictures.oss-cn-beijing.aliyuncs.com/Hongbin.webp" 
                alt="Hongbin Yang" 
                className="about-photo" 
              />
            </div>
            
            {/* About内容直接跟在照片下面 */}
            <div className="about-content">
              
              
              <p>I do not feel bound by any specific title. Design, to me, is a science of tuning and balancing
                 a being with its surroundings. I reach as far as I can to connect every touchpoint, and I am honoured
                  to engage with different relationships in various ways. I hope every feeling can be experienced through my work.
</p>
              
              <p>My practice focuses on the vulnerability of ecosystems and humanity, reversed life cycles, broken promises, celebration, and remembrance.
Placement, posting, printing, taping, welding, casting, bending, painting, modelling, hot stamping, and diving are my ways of serving—to bring the unseen into sight.</p>

<p>My current research explores the regression of forms in daily necessities.
</p>
              
              
            </div>
          </>
        ) : (
          // Contact页面保持不变
          <>
            <div style={{ marginTop: '90px' }}>
              <p>杨鸿彬 Hongbin Yang</p>
              <p>yanghongbin1227@hotmail.com</p>
              <p>NL: +31 0610342893</p>
              <p>CN: +86 15061127307</p>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
)}
        </div>
      </main>

      <AnimatePresence>
  {selectedWork && (
    <motion.div
      className={`work-overlay ${selectedWork.theme || ''}`} // 动态添加主题类名
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="close-btn" onClick={() => setSelectedWork(null)}>×</div>

      <motion.div
        className="work-container"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        {/* 新增的内容插入区块 */}
        {selectedWork.content && (
          <div
            className="work-content"
            dangerouslySetInnerHTML={{ __html: selectedWork.content }}
          ></div>
        )}

        <div className="work-images">
          {selectedWork.images.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt=""
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
