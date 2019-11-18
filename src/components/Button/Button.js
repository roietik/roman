import React from "react";
import styles from "./Button.module.scss";

const Button = ({children, href, secondary, ...props}) => {

    const buttonClass = secondary ? styles.secondary : styles.button;

    return (
        <>
        {
            href ? (
                <a
                    href={href}
                    rel="noopener noreferrer" 
                    target="_blank" 
                    className={buttonClass}
                >
                    {children}
                </a>
            ) : (
                <button className={buttonClass} {...props}>
                    {children}
                </button>
            )
        }
        </>
    )
}

export default Button;