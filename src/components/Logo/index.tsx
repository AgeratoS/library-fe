import {styled} from "@mui/system";

const Uppercased = styled('span')`
    text-transform: uppercase;
    font-family: Poppins;
    font-weight: 600;
    font-size: 40px;
`

const Accent = styled('span')`
    color: ${props => props.theme.palette.primary.main}
`;

function Logo() {
    return (
        <Uppercased>L<Accent>CRM</Accent></Uppercased>
    );
}

export default Logo;