import { services } from "../data";
import { Service } from "./Service";
import { Title } from "./Title";

export const Services=()=>{
return (
    <>
     <section className="section services" id="services">
        <Title title='our' subTitle='services'/> 

      <div className="section-center services-center">
        {services.map((service)=>{
           return(
            <Service icon= {service.icon} title={service.title} info={service.info} id={service.id}/>
            )
        })}      
      </div>
    </section>

    </>
);

}