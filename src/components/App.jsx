import blogData from "../data/blog";
import HeaderTag from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData.name);
console.log(blogData.img);
console.log(blogData.about);

function App() {
  return (
    <>
      <HeaderTag name={blogData.name} />
      <About about={blogData.about} image={blogData.image} />

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          padding: "16px",
        }}
      >
        {blogData.posts.map((post) => (
          <ArticleList key={post.id} post={post} />
        ))}
      </div>
      <div
      style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          padding: "16px",
        }}
      >
        {
        blogData.posts.map((post)=>(
          <Article title={post.title} date={post.date} preview={post.preview}/>
        ))
      }

      </div>
      






    </>


  );
}

export default App;
