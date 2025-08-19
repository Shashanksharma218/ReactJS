import { IMG_URL } from "../utils/constants"
const AccordianItems = (props) => {
  return (
    <div className="flex flex-col gap-5">
      {props?.itemCards?.map((dish) => {
        return (
          <div key={dish?.card?.info?.id} className="pb-1 border-b border-gray-400 mb-1 px-2">
            <div className="font-medium text-lg">
              <span>
                {dish?.card?.info?.name}
              </span>
              <span>
                {" - ₹" + (dish?.card?.info?.finalPrice || dish?.card?.info?.defaultPrice || dish?.card?.info?.price) / 100}
              </span>
            </div>
            {dish?.card?.info?.description ?
              (
                <div className="flex justify-between items-center">
                  <p className="text-sm w-10/12">{dish?.card?.info?.description}</p>
                  {dish?.card?.info?.imageId ? (
                    <div className="w-2/12 pl-2">
                      <img src={IMG_URL + dish?.card?.info?.imageId} className="w-full rounded-xl shadow"></img>
                    </div>
                  ) : null}
                </div>
              )
              : null
            }
          </div>
        )
      })}
    </div>
  )
}

export default AccordianItems