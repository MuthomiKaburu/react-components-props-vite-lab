import "./Article.css"

const Article = ({title,date,preview}) => {
  return (
    <div className="container3">
        <article className="content">
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
        </article>
      
    </div>
  )
}

export default Article
