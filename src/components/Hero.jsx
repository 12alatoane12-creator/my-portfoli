import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p>هلو شونكم اني</p>

        <h1>KAIDO</h1>

        <h2>مغني ومبرمج حديثا وطالب امن سيبراني يعني ابيع كلاوات </h2>

        <p>
          اني مبرمج مبتدأ وجاي اتعلم تفاصيل مهمة واساسية 
          ومن التفاصيل اللي جاي اشتغل بيهة هية     
        
        </p>
        <p>css,react,html,java.</p>
        <p> يعني هية قصدي Front-end </p>
        <p>رغم هواي جاي اترزل بس الحمدالله والشكر</p>

        <div className="hero-buttons">

          <a href="#projects" className="btn">
            شوف شغلي 
          </a>

          <a href="#contact" className="btn">
            تعال وسولف وياي
          </a>

        </div>

      </div>

      <div className="hero-avatar">
        YN
      </div>

    </section>
  )
}

export default Hero