import ReaderFormBase from "@/modules/profile/components/ReaderFormBase";
import { Gender } from "@/modules/profile/types";
import { AddReaderFormProps } from "../../types";

function AddReaderForm(props: AddReaderFormProps) {

    return <ReaderFormBase 
        onSubmit={props.onSubmit}
        initial={props.initial ?? {
            age: 0,
            firstName: '',
            lastName: '',
            middleName: '',
            gender: Gender.MALE
        }}
        buttonText={"Create reader"}
    />
}

export default AddReaderForm;