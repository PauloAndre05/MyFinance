import { BsUiRadiosGrid, BsListCheck } from "react-icons/bs"

interface ViewProps {
    setValue: (value: "grid" | "list") => void
}

export const ViewToggle = ({setValue} : ViewProps) => {
    return(
        <div className="flex gap-3 items-center">
            <span className="cursor-pointer" onClick={() => setValue("grid")}><BsUiRadiosGrid size={20}/></span>
            <span className="cursor-pointer" onClick={() => setValue("list")}><BsListCheck size={27}/></span>
        </div>
    )
}