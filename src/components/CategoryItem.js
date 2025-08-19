import AccordianItems from "./AccordianItems"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const CategoryItem = ({ data, showItem, setIndex }) => {
    const handleClick = () => {
        setIndex();
    }

    return data?.itemCards?.length > 0 ?
        (
            <div className="w-6/12 mb-5 p-5 rounded-xl shadow-xl resMenuItemCard">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <span className="text-xl font-bold">
                        {data?.title} ({data?.itemCards?.length})
                    </span>
                    {showItem?<IoIosArrowUp/>:<IoIosArrowDown />}
                </div>
                {showItem && <div className="p-4">
                    <AccordianItems key={data?.categoryId} categoryName={data?.title} itemCards={data?.itemCards} />
                </div>}
            </div>
        ) : null
}

export default CategoryItem