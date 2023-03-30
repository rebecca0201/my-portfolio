import Head from 'next/head'
import About from '../components/About'
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
    <Projects />
    <Skills />
    </div>
  )
}
