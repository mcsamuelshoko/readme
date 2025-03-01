import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../css/global.css'
import projects from '../json/projects.json'
import Navbar from "../components/navbar"
import CenteredTitle from "../components/centeredTitle"
import AvatarPortrait from "../components/avatarPortrait"
import Button from "../components/button"
import Paragraph from "../components/paragraph"
import ProjectCard from "../components/projectCard"
import Footer from "../components/footer"
import TechnologyIcon from "../components/technologyIcon"
import SkillCard from "../components/skillCard"
import ListItem from "../components/listItem"
import ContactCard from "../components/contactCard"
// import { randomUUID } from "crypto"
// import GatsbyConfig from "../../gatsby-config"

// -------------------------------------------------
const siteUrl: string = "https://mcsamuelshoko.github.io/readme/";//(GatsbyConfig.siteMetadata ? GatsbyConfig.siteMetadata.siteUrl : "") + "";
let currentUrlLocation: string = siteUrl;

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

if (isBrowser) {
  currentUrlLocation = window.location.href.split('#')[0];
}


const projectsData = projects;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="p-2 bg-pattern bg-cloud-white dark:bg-p-black dark:text-cloud-white">

          {/* <div className="bg-red-500 rounded-24 ">
            <CenteredTitle title={"THIS IS A WORK IN PROGRESS <!>"} ></CenteredTitle>
          </div>
          <hr /> */}
          <CenteredTitle title={"MC SAMUEL SHOKO"} ></CenteredTitle>


          <div className="flex flex-wrap justify-evenly">
            <AvatarPortrait
              imageUrl={"https://github.com/mcsamuelshoko/readme/blob/develop/src/images/my-avatar.png?raw=true"}
              orientation="square"
            />
            <div className="">
              <div className="mt-4"></div>
              <div className="text-xl">
                <Paragraph text="A software engineer with a strong interest in backend and full-stack development, actively seeking opportunities for growth and learning" />
              </div>
              <div className="mt-10"></div>
              <Button text="Download Resume" isExternalLink={true} link={"https://docs.google.com/document/d/1pyCX2P7chSFPGhTiqSFld0lutiR0GG_oWKL_DN3oMcc/edit?usp=sharing"} size={"large"} />
              <div className="mt-4"></div>
              <Button text="Github profile" isExternalLink={true} link={"https://github.com/mcsamuelshoko"} size={"large"} background="black" />

            </div>
          </div>

          <CenteredTitle title="PROJECTS" topChevron={true} id="projects"></CenteredTitle>
          {/* <pre>{JSON.stringify(projectsData)}</pre> */}
          <div className="flex flex-wrap justify-evenly">
            {projectsData.map((data) => <ProjectCard
              // key={randomUUID()}
              platform={data.platform ?? "--"}
              type={data.type ?? "--"}
              name={data.name ?? "--"}
              technologies={data.technologies ?? []}
              description={data.description ?? ""}
              logoUrl={data.logoUrl ?? "https://raw.githubusercontent.com/mcsamuelshoko/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg"}
              imgUrl={data.bannerUrl ?? "https://raw.githubusercontent.com/mcsamuelshoko/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg"}
              moreUrl={currentUrlLocation + data.moreUrl}
              openUrl={data.openUrl ?? ""}
            />)}

          </div>

          <CenteredTitle title="SKILLS" topChevron={true} id="skills"></CenteredTitle>
          <div className="flex flex-wrap justify-evenly">
            <div className="bg-cloud-white dark:bg-p-black border-2 border-grey rounded-24 py-2 px-4 mb-6">
              {/* MAIN CARDS */}



              <SkillCard title="Adaptability" skillScore={5} skillTotal={5} logo="https://api.iconify.design/nimbus:apps.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Algorithms & Data structures" skillScore={3} skillTotal={5} logo="https://api.iconify.design/nimbus:pyramid.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Automation" skillScore={2} skillTotal={5} logo="https://api.iconify.design/nimbus:share.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Coding best practices" skillScore={3} skillTotal={5} logo="https://api.iconify.design/nimbus:check-circle.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Collaboration" skillScore={4} skillTotal={5} logo="https://api.iconify.design/nimbus:user-group.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Communication" skillScore={48} skillTotal={50} logo="https://api.iconify.design/nimbus:chat-dots.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Databases" skillScore={4} skillTotal={5} logo="https://api.iconify.design/nimbus:vertical-stacks.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Documentation" skillScore={3} skillTotal={5} logo="https://api.iconify.design/nimbus:file-alt.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Initiative" skillScore={4} skillTotal={5} logo="https://api.iconify.design/nimbus:rocket.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Problem solving" skillScore={95} skillTotal={100} logo="https://api.iconify.design/nimbus:lightbulb.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Programming languages" skillScore={87} skillTotal={100} logo="https://api.iconify.design/nimbus:code.svg?color=%23f4f4f9" ></SkillCard>
              <SkillCard title="Testing/debugging" skillScore={2} skillTotal={5} ></SkillCard>
              <SkillCard title="Version Control" skillScore={65} skillTotal={100} logo="https://api.iconify.design/nimbus:history.svg?color=%23f4f4f9" ></SkillCard>






            </div>
            <div className="">
              <div className="bg-cloud-white dark:bg-p-black border-2 border-grey rounded-24 py-4 max-w-800">
                <span className="p-2 px-4 font-site-mono text-xl">
                  Technologies
                </span>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* L A N G U A G E S
                  <br /> */}
                  {/* Frontend: HTML/CSS,Sass, JavaScript, TypeScript */}
                  <TechnologyIcon src="https://api.iconify.design/logos:html-5.svg" link="https://html.com" alt="Html"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:css-3.svg" link="https://www.w3.org/Style/CSS/Overview.en.html" alt="CSS"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:sass.svg" link="https://sass-lang.com/" alt="Sass"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:json.svg" link="https://www.json.org/json-en.html" alt="Json"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:javascript.svg" link="https://www.javascript.com/" alt="JavaScript"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:typescript-icon.svg" link="https://www.typescriptlang.org/" alt="TypeScript"></TechnologyIcon>
                  {/* Backend: Python, Java, C#, C++, Php, Go */}
                  <TechnologyIcon src="https://api.iconify.design/logos:python.svg" link="https://python.org" alt="Python"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:java.svg" link="https://www.java.com/" alt="Java"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/devicon:csharp.svg" link="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" alt="csharp"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:c-plusplus.svg" link="https://cplusplus.com/" alt="c++"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:php.svg" link="https://www.php.net/" alt="Php"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/devicon:go.svg" link="https://go.dev/" alt="Golang"></TechnologyIcon>
                  {/* Mobile: Dart */}
                  <TechnologyIcon src="https://api.iconify.design/logos:dart.svg" link="https://dart.dev/" alt="dart"></TechnologyIcon>



                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* F R A M E W O R K S
                  <br />
                  Frontend: React,Gatsby, Bootstrap, Materialize,Tailwindcss */}
                  <TechnologyIcon src="https://api.iconify.design/logos:react.svg" link="https://react.dev" alt="React"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:gatsby.svg" link="https://www.gatsbyjs.com/" alt="Gatsby"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:bootstrap.svg" link="https://getbootstrap.com/" alt="Bootstrap"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:materializecss.svg" link="https://materializecss.com/" alt="MaterializeCss"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:tailwindcss-icon.svg" link="https://tailwindcss.com/" alt="TailwindCss"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:thymeleaf-icon.svg" link="https://www.thymeleaf.org/" alt="Thymeleaf"></TechnologyIcon>
                  {/* Backend: Django, Spring, Laravel, .NET */}
                  <TechnologyIcon src="https://api.iconify.design/logos:django-icon.svg" link="https://www.djangoproject.com/" alt="Django"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:spring-icon.svg" link="https://spring.io/" alt="Spring"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:laravel.svg" link="https://laravel.com/" alt="Laravel"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:dotnet.svg" link="https://dotnet.microsoft.com/" alt="DotNet"></TechnologyIcon>
                  {/* Mobile: Flutter */}
                  <TechnologyIcon src="https://api.iconify.design/logos:flutter.svg" link="https://flutter.dev/" alt="Flutter"></TechnologyIcon>
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* D A T A B A S E S
                  <br />
                  SQL: MySQL, PostgreSQL, SQL Server */}
                  <TechnologyIcon src="https://api.iconify.design/logos:mysql-icon.svg" link="https://www.mysql.com/" alt="MySql"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:postgresql.svg" link="https://www.postgresql.org/" alt="PostgreSql"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/devicon:azuresqldatabase.svg" link="https://www.microsoft.com/en-za/sql-server/sql-server-downloads" alt="SQL Server"></TechnologyIcon>
                  {/* NoSQL: MongoDB */}
                  <TechnologyIcon src="https://api.iconify.design/logos:mongodb-icon.svg" link="https://www.mongodb.com/" alt="MongoDB"></TechnologyIcon>

                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* I N F R A S T R U C T U R E
                  <br />
                  DevOps: Docker, Kubernetes, Azure */}
                  <TechnologyIcon src="https://api.iconify.design/logos:docker-icon.svg" link="https://www.docker.com/" alt="Docker"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:kubernetes.svg" link="https://kubernetes.io/" alt="Kubernetes"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:microsoft-azure.svg" link="https://azure.microsoft.com/" alt="Azure"></TechnologyIcon>
                  {/* Version Control: Git */}
                  <TechnologyIcon src="https://api.iconify.design/logos:git-icon.svg" link="https://git-scm.com/" alt="Git"></TechnologyIcon>
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* D E S I G N / P R O T O T Y P I N G
                  <br />
                  Lunacy, Figma, Inkscape */}
                  <TechnologyIcon src="https://raw.githubusercontent.com/maki-studio/.github/b974af72f4208daf7678d1cf772096e55bcc7aa0/profile/lunacy-logo.svg" link="https://icons8.com/lunacy" alt="Lunacy"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:figma.svg" link="https://www.figma.com/" alt="Figma"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/devicon:inkscape.svg" link="https://inkscape.org/" alt="Inkscape"></TechnologyIcon>

                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4 shadow">
                  {/* T E S T I N G
                  <br />
                  Jest */}
                  <TechnologyIcon src="https://api.iconify.design/logos:jest.svg" link="https://jestjs.io/" alt="jest"></TechnologyIcon>
                  <TechnologyIcon src="https://api.iconify.design/logos:storybook-icon.svg" link="https://storybook.js.org/" alt="storybook"></TechnologyIcon>
                </div>
                <hr className="border-grey" />
                <div className="flex flex-wrap px-4">
                  {/* O T H E R &nbsp; T O O L S
                  <br />
                  GitHub, Jira, Confluence */}
                  <TechnologyIcon invertColor={true} src="https://api.iconify.design/logos:github-icon.svg" link="https://github.com" alt="Github"></TechnologyIcon>
                  {/* <TechnologyIcon src="" link="" alt=""></TechnologyIcon> */}
                </div>
              </div>
              <div className="mb-6"></div>
              <div className="bg-cloud-white dark:bg-p-black border-2 border-grey rounded-24 font-site-sans p-4 py-12 flex flex-wrap ">
                <Paragraph text="I'm a passionate Software Engineer who always looks for new challenges to improve my skills. I enjoy working on backend and full-stack projects, and I find motivation in solving complex problems and taking on new tasks. Right now, I'm focused on improving my skills in DevOps, testing, and anything else that helps me progress."></Paragraph>
                <Paragraph text="I believe that new experiences and challenges help me learn and grow. I am looking for opportunities in the tech community to improve my skills and build my portfolio. My goal is to keep learning through different projects, expanding my network, and taking on more technical challenges."></Paragraph>
              </div>
            </div>
          </div>

          <CenteredTitle title="RESUME" topChevron={true} id="resume"></CenteredTitle>
          <div className="flex flex-wrap justify-evenly">
            <div className="bg-cloud-white dark:bg-p-black border-2 border-grey rounded-24 p-4 mb-6 job-xp-card flex flex-col flex-wrap justify-between" >
              <div className="flex flex-wrap-reverse">
                <ul>
                  <li>
                    <ListItem company="Indonesian Standard" position="Freelance Developer" jobBrief="Co-engineered and developed web-app according to client's requirements."></ListItem>
                    <ListItem company="Telecontract (telco)" position="Customer Service Representative" jobBrief="assisted clients with their technical issues and monitored thousands of equipment"></ListItem>
                  </li>
                </ul>

                <ul>
                  <li>
                    <ListItem company="University of Zimbabwe" position="Bsc. Honors Computer Science" jobBrief="Upper Second Class Honours | Weighted GPA of 3.00 - 3.59"></ListItem>
                  </li>
                </ul>
              </div>
              <div className="m-2">
                <Button text="Download Resume" isExternalLink={true} link="https://docs.google.com/document/d/1pyCX2P7chSFPGhTiqSFld0lutiR0GG_oWKL_DN3oMcc/edit?usp=sharing"></Button>
              </div>
            </div>

            <div>
              <AvatarPortrait
                imageUrl={"https://github.com/mcsamuelshoko/readme/blob/develop/src/images/graduation.jpg?raw=true"}
                height="469px"
              />
            </div>
          </div>

          <CenteredTitle title="CONTACT" topChevron={true} id="contact"></CenteredTitle>
          <div className="bg-cloud-white dark:bg-p-black border-2 border-grey rounded-24 p-4 m-6 flex flex-wrap justify-evenly">

            <ContactCard name="LinkedIn" contactUrl="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5" tag="lets connect on" logoUrl="https://api.iconify.design/logos:linkedin-icon.svg" iconUrl="https://api.iconify.design/nimbus:chat-dots.svg"></ContactCard>
            <ContactCard name="Discord" contactUrl="https://discord.com/users/generalseven" tag="find me on discord" logoUrl="https://api.iconify.design/logos:discord-icon.svg" iconUrl="https://api.iconify.design/nimbus:chat-dots.svg"></ContactCard>
            <ContactCard name="Twitter" contactUrl="https://twitter.com/shokosamuel" tag="send a tweet" logoUrl="https://api.iconify.design/logos:twitter.svg" iconUrl="https://api.iconify.design/nimbus:chat-dots.svg"></ContactCard>
            {/* <ContactCard name="PhoneNumber" contactUrl="" tag="contact me on" iconUrl="https://api.iconify.design/nimbus:mobile.svg"></ContactCard> */}
          </div>

          <CenteredTitle title="ABOUT" topChevron={true} id="about"></CenteredTitle>
          <div className="flex flex-wrap justify-evenly mb-6">
            <div className="mb-6">
              <AvatarPortrait
                imageUrl={"https://github.com/mcsamuelshoko/readme/blob/main/src/images/freelancer-profile.png?raw=true"}
                height="469px"
              />
            </div>
            <div className="bg-cloud-white dark:bg-p-black border-2 border-grey rounded-24 p-4 flex flex-col flex-wrap justify-between mb-6">
              <div className="flex flex-wrap justify-evenly">
                <Paragraph text="When I'm not immersed in the world of coding, I love to delve into various interests that expand my knowledge and spark my curiosity. I indulge in podcasts covering finance, self-help, graphic design, communication, and other captivating topics. For relaxation, I unwind with music, humorous videos, and games to effectively manage stress. Furthermore, I stay ahead of the curve in the tech industry by immersing myself in conference talks and developer podcasts, learning invaluable insights and tips from seasoned professionals."></Paragraph>
                <Paragraph text="As an engineer, my approach is grounded in pragmatic sustainability, efficiency, and integrity. I am committed to developing reusable, maintainable code, streamlining processes, and fostering a culture of accountability. Drawing wisdom from seasoned professionals, I am dedicated to adopting and implementing best practices. I continuously seek opportunities for learning and skill development to drive long-term personal and professional growth. My primary objective is to consistently deliver high-quality solutions, and I actively seek out opportunities to further enhance my capabilities and create a meaningful impact."></Paragraph>
              </div>
              <div className="mb-16"></div>
              <div className="flex flex-wrap">
                <TechnologyIcon invertColor={true} src="https://api.iconify.design/logos:github-icon.svg" link="https://github.com/mcsamuelshoko" alt="Github profile"></TechnologyIcon>
                <TechnologyIcon invertColor={true} src="https://api.iconify.design/logos:wakatime.svg" link="https://wakatime.com/@ef9df9b6-cb1a-4e73-9d42-35b93e0014d0" alt="Wakatime profile"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:microsoft-icon.svg" link="https://learn.microsoft.com/en-us/users/mcsamuelshoko-2509/" alt="Microsoft Learn profile"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:dribbble-icon.svg" link="https://dribbble.com/McSamuel" alt="Dribble profile"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/logos:figma.svg" link="https://www.figma.com/" alt="Figma profile"></TechnologyIcon>
                <TechnologyIcon src="https://api.iconify.design/devicon:behance.svg" link="https://www.behance.net/mcsamuelshoko" alt="Behance profile"></TechnologyIcon>

              </div>
            </div>
          </div>

        </div>
        <Footer></Footer>
      </div>
      <hr className="divide-x-2 divide-green-400" />

    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <> <title>Mc Samuel Shoko | Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" />
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
  <link rel="icon" href="https://raw.githubusercontent.com/mcsamuelshoko/readme/main/design/favicon.ico" />
  {/* Flowbite js */}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
</>
