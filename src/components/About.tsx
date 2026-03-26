import React from "react";
import { motion } from "framer-motion";

const aboutStories = [
  {
    title: "Chasing the Peak",
    description:
      "Snowboarding isn't only a sport for me also it teaches me to embrace challenges and keep pushing forward.",
    image:
      "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669416486/ceyda_portfolio/image/IMG_0047_ykcwzi.jpg",
    size: "col-span-12 md:col-span-7",
    rotate: "-rotate-2",
  },
  {
    title: "Deep Focus",
    description:
      "When I'm coding, I like to quiet the world and focus solely on the solution.",
    image: "/images/coding-setup.jpg",
    size: "col-span-12 md:col-span-5",
    rotate: "rotate-3",
  },
  {
    title: "Travel & Inspiration",
    description: "Exploring new places is expanding my design vision.",
    image: "/images/travel.jpg",
    size: "col-span-12 md:col-span-4",
    rotate: "-rotate-1",
  },
  {
    title: "Tech Enthusiast",
    description:
      "En yeni teknolojileri (Vite, Tailwind v4, React 19) denemek benim tutkum.",
    image: "/images/workspace.jpg",
    size: "col-span-12 md:col-span-8",
    rotate: "rotate-2",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-black py-32 px-6
      overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2
            className="text-pink-400 font-medium tracking-widest uppercase
      mb-2"
          >
            01. My Journey
          </h2>
          <h3
            className="text-4xl md:text-6xl font-bold text-white
      mb-6"
          >
            Behind the Code
          </h3>
          <div
            className="h-[2px] w-32 bg-brand-gradient mx-auto
      md:mx-0"
          ></div>
        </div>
        <div>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 max-w-6xl mx-auto md:mx-0">
            I was born in Kayseri, Turkey in 1993. In 2011, I moved to Istanbul
            to enroll in the International Trade and Business program at
            Yeditepe University. During my university years, I gained invaluable
            experience through internships at several companies, including
            Shell, Havas, Anadolu Bilişim, and DEİK, which provided me with
            insights into the workings of various businesses. After graduating,
            I started working in brand management at Yataş Grup. However, I soon
            felt limited by the repetitive nature of my role and the lack of
            opportunities for growth. Seeking new experiences, I left my job and
            spent several months in Amsterdam, attending events and observing
            global business practices to gain insights into my career
            aspirations. Upon my return, I decided to pursue a career in web
            development and enrolled in Ironhack's Web Development bootcamp at
            the end of 2020. Over the course of the intensive 2.5-3 month
            program, I honed my skills by working on lab projects and creating
            three full-stack projects, including one using the MERN stack. After
            completing the bootcamp, I continued to develop my technical skills
            through personal projects. In June 2021, I joined AdColony as a
            Software Developer, where I developed games and REST API projects
            using pure JavaScript and TypeScript on the company's proprietary
            game engine. In addition to developing gamified digital ad
            solutions, I worked on several internal projects as a full-stack
            developer, primarily using the MERN stack and deploying on AWS
            services like EC2 and S3. Following the acquisition of AdColony by
            Digital Turbine in June 2022, I expanded my skills by testing some
            functions of the game engine using Jest. I left Digital Turbine in
            early February 2023 to continue improving my skills. Although I
            enjoy working on both the backend and frontend of projects, I have
            recently focused on frontend development to deepen my knowledge and
            expertise in this area. In July 2023, I began my second role in the
            IT sector as a Frontend Developer at NTT Data Business Solutions,
            where I am currently employed. I am involved in a project for one of
            Turkey's leading companies to manage OKR systems. Here, I develop
            the project using React.js, Redux, and Less. I enjoy working in an
            Agile environment with two-week sprints. The project is live, so I
            must always be prepared to fix bugs, which has significantly
            enhanced my skills.{" "}
          </p>
          <p>
            1993 yilinda kayseri'de ailenin 2. kiz cocugu olarak dunyaya geldim.
            2011 yilinda universite egitimi icin Istanbul'a goc ettim ( bu benim
            ilk goc hikayemin baslangici). Universiteden mezun olduktan son
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {aboutStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${story.size} group relative`}
            >
              {/* Görsel Kutusu */}
              <div
                className={`relative overflow-hidden rounded-3xl
      bg-slate-900 border border-white/10 ${story.rotate} group-hover:rotate-0
      transition-transform duration-500`}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[300px] md:h-[450px] object-cover
      opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-110
      group-hover:scale-100 transition-transform"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t
      from-black/90 via-transparent to-transparent opacity-100"
                ></div>

                <div
                  className="absolute bottom-0 left-0 p-8 space-y-2
      translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <h4
                    className="text-2xl font-bold
      text-white"
                  >
                    {story.title}
                  </h4>
                  <p
                    className="text-slate-300 text-sm leading-relaxed
      max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {story.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
