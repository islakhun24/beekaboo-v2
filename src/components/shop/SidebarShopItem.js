import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarShopItem = (props) => {
  const { category } = props;
  return (
    <div className="flex space-y-2 flex-col">
      <div className="flex flex-row py-2 rounded-md cursor-pointer px-2 hover:bg-blue-100 space-x-3 w-full items-center">
        <div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="flex flex-col">
          <div className="text-base text-bee-black">{category.menu}</div>
          <div className="text-xs text-gray-400">{category.desc}</div>
        </div>
      </div>
      {category.sub.map((item) => {
        return (
          <div className="px-2">
            <div className="flex flex-row py-2 rounded-md cursor-pointer px-2 hover:bg-blue-100 space-x-3 w-full items-center">
              <div>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div className="flex flex-col">
                <div className="text-base text-bee-black">{item.menu}</div>
                <div className="text-xs text-gray-400">{item.desc}</div>
              </div>
            </div>
            {
                item.sub.map(sub =>{
                    return (
                        <div className="flex mx-6 flex-row py-2 rounded-md cursor-pointer px-2 hover:bg-blue-100 space-x-3 w-full items-center">
                        <div className="flex font-thin flex-col">
                          <div className="text-base text-bee-black">{sub.menu}</div>
                          <div className="text-xs text-gray-400">{sub.desc}</div>
                        </div>
                      </div> 
                    )
                })
            }
          </div>
        );
      })}
    </div>
  );
};

export default SidebarShopItem;
