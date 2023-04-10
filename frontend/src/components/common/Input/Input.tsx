import React, { Dispatch, SetStateAction} from "react";
import styles from "./Input.module.css";

interface InputProps {
    name: string,
    label: string,
    setValue: Dispatch<SetStateAction<string>>
    type: string,
    value: string,
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <div className={styles.container}>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} value={props.value} id={props.name}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setValue(e.target.value)}/>
        </div>
    )
}

export default Input;
