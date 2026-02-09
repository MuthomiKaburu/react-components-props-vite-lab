import "./About.css"


const About = ({image,about}) => {
  return (
    <div>
        <div className="card">
            <aside className="aside">
                <img src={image} alt="blog logo" className="img" />
            <p className="text">{about}</p>

            </aside>
            
        </div>
      
    </div>
  )
}

export default About
