import React, {Fragment, useState} from "react";
import Input from "../../../components/common/Input/Input";
import Form from "../../../components/ui/Form/Form";

const Registration: React.FC = () => {

    const [inputFirstName, setInputFirstName] = useState(" ");

    return (
        <Fragment>
            <h1>Register new Account</h1>
            <Form>
                <Input type={"text"}
                       name={"firstName"}
                       label={"First Name"}
                       value={inputFirstName}
                       setValue={setInputFirstName}/>
            </Form>
        </Fragment>
    )
}

export default Registration;
