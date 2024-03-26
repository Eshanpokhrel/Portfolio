import './index.scss'


const Project_Layout = ({ imgUrl, link, title, desc }) => {

  const image = imgUrl

  return (
    <div>
      <div style={{backgroundImage:`url(${image})` }} class="parallax-image"></div>
        <section>
            <a rel="noreferrer" target="_blank" href={link}>
                <h2>{title}</h2>
            </a>
            <p>{desc}</p>
        </section>
    </div>
  )
}

export default Project_Layout