import ChevronIcon from "./icons/chevronIcon";
import { IconButton } from "vcc-ui";

interface PaginationDesktopProps{
    onClickLeft: () => void;
    onClickRight: () => void;
}

export default function PaginationDesktop({onClickRight, onClickLeft}: PaginationDesktopProps){
    return (
        <div className="btn-wrapper">
            <button>
            <IconButton onClick={onClickLeft} aria-label="esquerda" iconName="navigation-chevronback" disabled />
            </button>
            <button>
            <IconButton onClick={onClickRight} aria-label="direita" iconName="navigation-chevronforward" disabled /> 
            </button>

        </div>
    )
}