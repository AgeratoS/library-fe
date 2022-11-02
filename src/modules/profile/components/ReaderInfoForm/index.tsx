import ReaderFormBase from '../ReaderFormBase';
import { ReaderInfoFormProps } from "../../types";

function ReaderInfoForm(props: ReaderInfoFormProps) {
    
    return (
        <ReaderFormBase 
            initial={props.initial}
            onSubmit={props.onSubmit}
            buttonText={"Change data"}
        />
    )
}

export default ReaderInfoForm;