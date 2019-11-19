import React from "react";
import styles from "./Title.module.scss";

 const Title = ({children, SectionTitle, SectionDesc}) => (
   <h2 className={
                     SectionTitle ? styles.titleSectionTitle : 
                     SectionDesc ?  styles.titleSectionDesc : styles.title}
   >
      {children} 
   </h2>
 )

 export default Title;