import React from "react";

interface formProps {
    children : JSX.Element
}
const Form : React.FC<formProps> = (props) => {
    return (
        <form>
            {props.children}
        </form>
    )
}

export default Form
