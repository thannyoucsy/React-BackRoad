import { services } from "../data"

export const Service=({id,icon,title,info})=>
{    return (        
    <article className="service" key={id}>
        <span className="service-icon"><i className={icon}></i></span>
        <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">
            {info}
            </p>
        </div>
    </article>
          
    );
}