import "./Header.css"

export default function HeaderTag({name}){
    console.log(name);
    return(
        
        <div className="main-container">
            <header>
                <h1>{name}</h1>
            </header>
        </div>
    )
}