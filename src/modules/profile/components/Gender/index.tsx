import { Male, Female } from "@mui/icons-material";
import { GenderProps, Gender as GenderEnum } from "../../types";


function Gender(props: GenderProps) {

    const { gender } = props;
    

    if (gender === GenderEnum.MALE) {
        return (
            <>
                <Male />
            </>
        )
    }
    else {
        return (
            <>
                <Female />
            </>
        )
    }
}

export default Gender;