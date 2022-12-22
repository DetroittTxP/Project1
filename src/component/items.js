
import './items..css';


const items=(props)=>{
    const {title,amount} = props;
    return(
        <div className='item-list'>
            <li>{title} <span>{amount}</span></li>
        </div>
    )
}

export default items;