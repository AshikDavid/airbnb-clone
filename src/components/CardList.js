import "./CardList.css"
import Card from "./Card"

export default function CardList({data}){
   
    return(
        <div className="cards-list">
            {data.map((user)=>(
                <Card 
                img={user.coverImg}
                stats={user.stats}
                location={user.location}
                title={user.title}
                price={user.price}
                />
            ))}
        </div>
    )
}