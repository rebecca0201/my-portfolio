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
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-center">
            This website was created with the 
            <a href="https://github.com/fireclint/portfolio-nextjs">portfolio-nextjs template</a> 
            created by <a href="https://github.com/fireclint">fireclint</a>.
            <br />
            The icons used in the skills section were created by 
            <a href="https://icons8.com">icons8</a>.
            <br />
            Thank you to fireclint and icons8 for providing these valuable resources!
          </p>
        </div>
      </footer>
    </div>
  );
  
}
