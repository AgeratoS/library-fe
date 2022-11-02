import {styled} from "@mui/system";
import { LogoTypes } from "../types";

const Uppercased = styled('span')`
    text-transform: uppercase;
    font-family: Poppins;
    font-weight: 600;
    font-size: 40px;
`

const Accent = styled('span')`
    color: ${props => props.theme.palette.primary.main}
`;

function Logo(props: LogoTypes) {
    return (
        <Uppercased>L<Accent>CRM</Accent>{props.isAdmin && "Admin"}</Uppercased>
    );
}

export default Logo;