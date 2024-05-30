import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillTwitterCircle } from "react-icons/ai";

const teamMembers = [
    {
      name: 'Keith Singletary',
      title: 'Founder & CEO',
      image: '/2855.png',
      description: "Keith, with over 10 years of industry experience, navigates transformative landscapes adeptly. He thrives on innovating solutions for complex challenges, driving organizational success with visionary leadership."
    },
    {
      name: 'Xander Ramirez',
      title: 'Graphic Designer',
      image: '/681.png',
      description: "Xander, a seasoned professional, harnesses a decade of industry wisdom. His knack for navigating dynamic landscapes fuels innovative solutions, making him a go-to for complex design challenges."
    },
    {
      name: 'Evelyn Dubois',
      title: 'Media Influencer',
      image: '/1161.png',
      description: "Evelyn leverages over 5 years of industry insight to navigate evolving landscapes. She excels at crafting innovative solutions, consistently tackling complex challenges with creativity and influence."
    },
    {
      name: 'Kai Mitchell',
      title: 'UI/UX Designer (Web3)',
      image: '/2479.png',
      description: "With 3 years of industry experience, Kai adeptly navigates transformative landscapes. He thrives on innovating solutions for complex challenges, shaping seamless user experiences in the Web3 domain."
    },
    {
      name: 'Beatrice Nguyen',
      title: 'Full Stack Developer (Web3)',
      image: '/3200.png',
      description: "Beatrice brings 6 years of industry experience to the table, expertly navigating transformative landscapes. She excels at innovating solutions for complex challenges, driving Web3 development forward."
    },
    {
      name: 'Liam Jones',
      title: 'Smart Contract Engineer',
      image: '/4233.png',
      description: "Liam, boasting 2 years of industry experience, adeptly navigates transformative landscapes. He thrives on innovating solutions for complex challenges, shaping the future of trustless transactions."
    },
    {
      name: 'Sophie Patel',
      title: 'Community Manager',
      image: '/5011.png',
      description: "Sophie, with over 8 years in the industry, deftly navigates transformative landscapes. She excels at innovating solutions for complex challenges, fostering vibrant and engaged communities."
    },
    {
      name: 'Daniel Garcia',
      title: 'Metaverse Architect',
      image: '/6200.png',
      description: "Daniel's 12 years of industry experience inform his adept navigation of transformative landscapes. He innovates solutions for complex challenges, shaping immersive experiences in the metaverse."
    },
    {
      name: 'Alexia Moore',
      title: 'DAO Lead',
      image: '/7282.png',
      description: "With 3 years of industry insight, Alexia deftly navigates transformative landscapes. She excels at innovating solutions for complex challenges, driving decentralized autonomous organizations forward."
    },
    {
      name: 'Ethan Lee',
      title: 'NFT Artist',
      image: '/8195.png',
      description: "Ethan, drawing from 9 years of industry experience, adeptly navigates transformative landscapes. He thrives on innovating solutions for complex challenges, shaping the digital art landscape with creativity."
    },
    {
      name: 'Isabella Walker',
      title: 'Blockchain Researcher',
      image: '/28.png',
      description: "Isabella pioneers smart contract solutions, revolutionizing trustless transactions. Her expertise in blockchain programming ensures secure, efficient execution of digital contracts, fueling decentralized economies."
    },
    {
      name: 'Noah Davies',
      title: 'NFT Marketing Specialist',
      image: '/495.png',
      description: "Noah, with over 10 years in the industry, adeptly navigates transformative landscapes. He excels at innovating solutions for complex challenges, driving visibility and engagement in NFT markets."
    },
    {
      name: 'Chloe Bennett',
      title: 'DeFi (Decentralized Finance) Developer',
      image: '/1594.png',
      description: "Chloe brings a decade of industry experience to her adept navigation of transformative landscapes. She innovates solutions for complex challenges, driving progress in decentralized finance."
    },
    {
      name: 'Liam Torres',
      title: 'Web3 Content Creator',
      image: '/2497.png',
      description: "Liam leverages over 2 years of industry insight to navigate transformative landscapes. He excels at innovating solutions for complex challenges, shaping compelling content in the Web3 era."
    },
    {
      name: 'Ava Robinson',
      title: 'AI Engineer',
      image: '/3684.png',
      description: "Ava's 8 years of industry experience inform her adept navigation of transformative landscapes. She innovates solutions for complex challenges, driving advancements in artificial intelligence."
    },
    {
      name: 'Maya Miller',
      title: ' NFT Marketplace Developer',
      image: '/4683.png',
      description: "Maya brings over 7 years of industry expertise to her navigation of transformative landscapes. She excels at innovating solutions for complex challenges, shaping the future of digital asset exchanges."
    },
    {
      name: 'Lucas Hernandez',
      title: ' Data Analyst',
      image: '/5521.png',
      description: "Lucas adeptly navigates transformative landscapes with over 6 years of industry experience. He innovates solutions for complex challenges, driving insights and optimization through data analysis."
    },
    {
      name: 'Anika Singh',
      title: 'Blockchain Developer',
      image: '/6371.png',
      description: "Anika pioneers decentralized solutions, coding secure, transparent transactions. Her expertise ensures blockchain projects function seamlessly, driving innovation in digital economies."
    },
    {
      name: 'Ben Carter',
      title: 'VR/AR Experience Designer',
      image: '/7304.png',
      description: "Ben crafts immersive virtual worlds, blending reality with imagination. His designs redefine user experiences, pushing boundaries in virtual and augmented reality realms."
    },
    {
      name: 'David Lee',
      title: 'Cybersecurity Analyst',
      image: '/8257.png',
      description: "David safeguards digital infrastructures, fortifying defenses against cyber threats. His analytical prowess and proactive measures ensure data integrity and user privacy in a hyper-connected world."
    }
  ]

export default function Team() {
  return (
    <>
      <div className="background-image-team w-screen h-full relative flex flex-row-reverse items-center min-h-[750px]">
        <div className="absolute ml-44 text-black text-center top-20 mr-12">
          <h1 className='text-6xl font-apercuBold'>ABOUT US</h1>
          <p className='text-xl font-apercuRegular'>Web3 for a cause. Join us.</p>
        </div>
      </div>
      <div className="min-h-[650px] flex justify-center items-center bg-blackLight p-4 z-10">
        <div className="container ml-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex justify-center items-center mb-52">
              <div className="flex flex-col items-center justify-center">
                <h1 className='text-6xl font-apercuBold text-white '>BEAT UP BEARS</h1>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0 ml-16 text-white">
              <p className="text-2xl font-apercuMedium">AN EXTRAORDINARY BRAND BUILT BY ORDINARY PEOPLE</p>
              <p className="font-apercuRegular text-lg">
                Meet the Beat Up Bears team. a team of builders, thinkers, operators, and creators, all unified with the purpose of excelling Beat Up Bears into the fastest-growing web3 brand in the world.
              </p>
              <p className="text-lg font-apercuRegular">
                Through meaningful member-only merch drops, outdoor campaigns, exclusive live events and collaborations with indie businesses and world-renowned brands, we create a community-centric, globally recognised brand that is a force for good.
              </p>
              <p className='text-lg font-apercuRegular'>
                We also want to shout out our amazing community team consisting of John Doe (community spaces lead), John Smith (chief meme officer), and Pichael (community safety lead).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 py-16">
        <div className="container mx-auto ">
          <h2 className="text-5xl font-bold font-apercuBold mb-12 text-left ml-20">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-transparent shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 transform-gpu rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4 bg-yellow-50 relative">
                    <Link href="#">
                        <AiFillTwitterCircle className='absolute text-blue-400 hover:text-blue-600 right-0 mr-3 w-7 h-7 transition-all duration-500 ease-in-out hover:-translate-x-1 transform-gpu' />
                    </Link>
                    <h3 className="text-xl font-semibold font-apercuBold">{member.name}</h3>
                    <p className="text-sm text-gray-600 font-apercuMedium">{member.title}</p>
                    <p className="text-sm mt-2 font-apercuRegular">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

