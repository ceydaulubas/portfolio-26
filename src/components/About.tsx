import { easeOut, motion } from "motion/react";

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
    rotate: "-rotate-4",
  },
  {
    title: "The First Migration",
    description:
      "2011: Leaving home for Istanbul to pursue my dreams at university.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1774610544/IMG_1176_nw9prd.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "rotate-5",
  },

  {
    title: "A Major Milestone",
    description:
      "Graduating from Yeditepe University and preparing for the professional world.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1774609766/graduation_oajwlq.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "-rotate-6",
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
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>
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
          <h4 className="text-pink-200 mt-12 text-lg md:text-xl leading-relaxed ">
            The First Ascent
          </h4>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed  ">
            My journey began in Kayseri, Turkey, a city where the silhouette of
            Mount Erciyes was a constant backdrop to my daily life. It was there
            that I discovered my passion for snowboarding, learning the value of
            balance and momentum long before I wrote my first line of code. In
            2011, I moved to the vibrant energy of Istanbul for university
            marking the start of my first 'migration story.
          </p>
          <h4 className="text-pink-200 mt-6 text-lg md:text-xl leading-relaxed ">
            The Pivot to Tech
          </h4>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed ">
            I started in marketing, learning how businesses speak to people. But
            I craved more. I didn’t just want to talk about products; I wanted
            to build them. In the end of 2020, I taught myself to code,
            completed an intensive bootcamp in Amsterdam, and transitioned into
            software development. From software development focused on game
            development at Digital Turbine to refining my craft at NTT Business
            Solutions, I found my true passion in Frontend Development, the
            perfect intersection of my marketing roots and engineering logic.
          </p>
          <h4 className="text-pink-200 mt-6 text-lg md:text-xl leading-relaxed ">
            A New Chapter in Stockholm
          </h4>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            Life brought another "migration story" in 2025: moving from the heat
            of Istanbul to the cool, creative air of Stockholm. Since arriving,
            I’ve embraced the Swedish tech scene (most recently at Haypp Group)
            and the unique balance of life here.
          </p>
          <h4 className="text-pink-200 mt-6 text-lg md:text-xl leading-relaxed ">
            Where I Am Now
          </h4>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            Today, you can find me in a cozy Stockholm cafe, my home office, or
            surrounded by nature, mastering new technologies. When I’m not
            coding, I’m finding my center through Yoga or Pilates, exploring a
            new country, or joining local events to keep my perspective fresh.
          </p>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
            I am an explorer at heart whether navigating a new codebase or a new
            country. I’m always open to new opportunities to build something
            meaningful.
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
