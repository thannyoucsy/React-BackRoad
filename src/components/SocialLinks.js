import { socialLinks } from "../data";
import { SocialLink } from "./SocialLink";

export const SocialLinks=({parentClass,itemClass})=>{

    return(
        <ul className={parentClass}>
            {socialLinks.map((link)=>{
                return (
                    <SocialLink link={link} itemClass={itemClass}/>                    
                );
            })}          
        </ul>
    );
}