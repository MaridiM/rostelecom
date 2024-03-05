import { SVGProps } from "react";

export interface IconSVG extends SVGProps<SVGSVGElement> {
    src: string,
    width: number,
    height: number,
}
