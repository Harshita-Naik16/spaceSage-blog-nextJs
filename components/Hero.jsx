
const Hero = () => {
  return (
    <section className="section flex flex-col lg:flex-row justify-center md:items-center md:justify-between">
      <div className='image max-w-sm lg:max-w-md lg:order-2'>
        <img src='/images/female-avatar.png' alt="female avatar" />
      </div>
      <div className="info">
        <h1 className="sm:text-5xl text-2xl pb-6 sm:pb-10 text-center md:text-left">Hi there, I’m <span className="gradient-accent font-bold sm:text-5xl text-2xl">Harshita</span>👋</h1>
        <p className="max-w-2xl xl:text-xl md:text-xl text-base md:leading-12 leading-6 text-center md:text-left">
        I'm an enthusiastic writer with a passion for astronomy and space exploration. Through captivating articles, we shall delve into the wonders of the universe, sharing the latest discoveries, unraveling cosmic mysteries, and inspiring you with the beauty and vastness of the cosmos.</p>
      </div>
    </section>
  )
}

export default Hero
