import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
  {
    id: 0,
    title: "Hello World",
    desc: "A HTML and CSS and  based my 1st web page.",
    img: "/helloworld.png",
    tags: ["HTML" , "CSS"],  
  },
  {
    id: 1,
    title:"Faj Static Resume",
    desc: "A HTML CSS and Typescript based i made my resume 2nd web page.",
    img: "/faj-resume.png",
    tags: ["HTML", "CSS" ,"Typescript","Javascript"],

  },
  {
    id: 2,
    title: "My Form",
    desc: "A simple using HTML and CSS to make a form",
    img: "/my-form.png",
    tags: ["HTML","CSS"],
  },
  {
    id: 3,
    title: "My Pages",
    desc: "A Next.js ,simple CSS , Typescript  based make a pages web show Header and Footer",
    img: "/pages.png",
    tags: ["Next.Js", "Typescript", "React", "Node"],

  },
  {
    id: 4,
    title: "Shareable Link",
    desc: "A HTML , CSS , Typescript , javascript based a shareable link resume.",
    img: "/shreable.png",
    tags: ["HTML","CSS","Typescript", "Javascript" ],
  },
]

const Projects = () => {
  return(
    <div id='projects' className='container pt-32'>
      <Heading title = 'MY PROJECTS'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img ={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default Projects