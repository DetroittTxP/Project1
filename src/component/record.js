import Items from "./items"
import './record.css'

const record = (props)=>{
    const {items} = props;
    return(
        <div>
            <ul>
                {items.map((element)=>{
                    return <Items {...element} key={element.id}/>
                })}
            </ul>
        </div>
    )
}
export default record
