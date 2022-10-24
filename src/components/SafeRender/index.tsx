import { PropsWithChildren } from "react";
import { SafeRenderType } from "@/types";

function SafeRender(props: PropsWithChildren<SafeRenderType>) {
    return <>
        {props.data ? props.children : null}
    </>
}

export default SafeRender;