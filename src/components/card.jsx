import style from './card.module.css'
 
export const Card = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <img className={style.imgStyle} src={props.img} alt={props.name} />
        </div>
    )
}
 