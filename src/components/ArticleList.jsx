import "./ArticleList.css"
const ArticleList = ({post}) => {
  return (
    <div className="main-container2">
        <main className="container2">
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <p>{post.preview}</p>
            <p>{post.minutes}</p>

        </main>
      
    </div>
  )
}

export default ArticleList
