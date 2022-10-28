import { PropsWithChildren } from "react";
import { SafeRenderType } from "@/appTypes";

function SafeRender(props: PropsWithChildren<SafeRenderType>) {
    return <>
        {props.data ? props.children : null}
    </>
}

export default SafeRender;