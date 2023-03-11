import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Rebecca | Software Developer</title>
        <link rel="icon" href="/fav.svg" />
      </Head>
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
