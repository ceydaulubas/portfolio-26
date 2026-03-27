import { motion, easeOut } from "framer-motion";

interface Story {
  title: string;
  description: string;
  image: string;
  size: string;
  rotate: string;
}

const aboutStories = [
  {
    title: "The Early Days",
    description:
      "Where it all started taking my first steps into school life in Kayseri.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1774614568/Pict0453_sobnhk.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "rotate-1",
  },
  {
    title: "The First Migration",
    description:
      "2011: Leaving home for Istanbul to pursue my dreams at university.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1774610544/IMG_1176_nw9prd.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "rotate-2",
  },

  {
    title: "A Major Milestone",
    description:
      "Graduating from Yeditepe University and preparing for the professional world.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1774609766/graduation_oajwlq.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "-rotate-3",
  },
];

const aboutStoriesTwo = [
  {
    title: "Where Balance Began",
    description:
      "On the slopes of Mount Erciyes, I learned that every great journey starts with a bit of courage and a lot of momentum.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669416486/ceyda_portfolio/image/IMG_0047_ykcwzi.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "-rotate-4",
  },
  {
    title: "Deep Focus in Nature",
    description:
      "Whether I'm navigating a new country or a complex codebase, I find my best inspiration when surrounded by nature.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1774610220/IMG_1043_hymqji.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "rotate-5",
  },
  {
    title: "Beyond the Screen",
    description:
      "Whether I’m in Stockholm or a new place, I find that the best solutions come when I balance deep focus with the small, joyful moments that keep my creativity flowing.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1774609342/IMG_6268_Original_y9tzqb.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "-rotate-6",
  },
];

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
    }),
  };

  const StoryCard = ({ story, index }: { story: Story; index: number }) => (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className={`${story.size} group relative`}
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 ${story.rotate}
      group-hover:rotate-0 transition-transform duration-500`}
      >
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-75 md:h-112.5 object-cover opacity-60 group-hover:opacity-100 transition-opacity
      duration-500 scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        <div
          className="absolute bottom-0 left-0 p-8 space-y-2 translate-y-4 group-hover:translate-y-0
      transition-transform duration-500"
        >
          <h4 className="text-2xl font-bold text-white">{story.title}</h4>
          <p
            className="text-slate-300 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100
      transition-opacity duration-500"
          >
            {story.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="w-full bg-black py-32 px-6 overflow-hidden">
      <div className="section-container">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-pink-400 font-medium tracking-widest uppercase mb-2">
            My Journey
          </h2>
          <h3 className="text-4xl md:text-4xl font-bold text-white mb-6">
            Behind the Code
          </h3>
          <div className="h-0.5 w-32 bg-brand-gradient mx-auto md:mx-0"></div>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {aboutStories.map((story, index) => (
            <StoryCard key={story.title} story={story} index={index} />
          ))}
        </div>
        <div>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mt-12 mb-6 ">
            My journey began in Kayseri, Turkey, in 1993, born at the foot of a
            Great Mountain. It was there, on the snowy slopes of Mount Erciyes,
            that I first learned the value of balance and momentum through
            snowboarding. In 2011, I packed my bags for my "first migration"
            moving to the vibrant, chaotic energy of Istanbul for university. I
            started my career in a marketing department, where I spent 2.5 years
            learning how businesses speak to people. But I felt a different
            calling. I didn't just want to talk about products, I wanted to
            build them. I craved a challenge that was more technical, more
            creative, and more complex.
          </p>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 ">
            I began teaching myself to code, and what started as a curiosity
            quickly turned into a passion. I loved the logic, the problem
            solving, and the immediate spark of seeing an idea come to life on a
            screen. To truly ground myself in this new world, I completed an
            intensive software development bootcamp in late 2020. My transition
            into tech led me to Digital Turbine, where I cut my teeth as a
            Junior Software Engineer. I spent my days balancing the fast-paced
            world of hypercasual game development with the precision of building
            full-stack microsites. Eventually, my heart settled on Frontend
            Development the perfect intersection of my marketing roots and my
            engineering skills. At NTT Business Solutions, I spent about two
            years refining my craft, working across diverse projects and
            discovering the joy of creating seamless user experiences.
          </p>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
            While my career was evolving, so was my life. After navigating a
            long-distance relationship and traveling across 10+ countries
            together, I married my husband in 2023. This sparked my second
            migration story ,a move from the heat of Istanbul to the cool,
            creative air of Stockholm. Since arriving in Sweden, I’ve embraced
            the local tech scene, most recently contributing my skills to the
            Haypp Group. Although that chapter was brief, it was a pivotal time
            for self-discovery, confirming exactly where I want to go next in my
            professional journey.
          </p>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
            Today, you can find me in a cozy Stockholm cafe, my home office or
            or surrounded by nature, deeply focused on mastering new
            technologies and sharpening my software development skills. When I’m
            not coding, I’m likely finding my center through Yoga or Pilates,
            exploring a new corner of the world, or meeting new people in this
            beautiful city I now call home. I love joining new events and
            discovering the little things that bring me joy, as they keep my
            perspective fresh and my creativity flowing. I am an explorer at
            heart whether I’m navigating a new codebase or a new country. I’m
            always open to new opportunities, challenging projects, and the
            chance to build something meaningful.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {aboutStoriesTwo.map((story, index) => (
            <StoryCard key={story.title} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
