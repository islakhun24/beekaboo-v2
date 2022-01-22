import {
  faBookmark,
  faClosedCaptioning,
  faHeart,
  faList,
  faSearch,
  faStar,
  faTh,
  faThLarge,
  faThList,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import allshop from "../../assets/png/allshop.png";
import shoes from "../../assets/png/shoes.png";
import thumbler from "../../assets/png/thumbler.png";
import tshirt from "../../assets/png/tshirt.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ContainerShop = (props) => {
  return (
    <div style={{}} className="flex w-full flex-col md:items-end">
      <div className="w-full md:w-3/5">
        <div className="w-full bg-gray-200 items-center py-2 px-5 rounded-full flex flex-row">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Product..."
            className="outline-none bg-transparent flex-grow mx-4"
          />
          <FontAwesomeIcon icon={faTrashAlt} className="text-bee-blue" />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 mt-12">
        <div className="flex flex-row  col-span-1 gap-2">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">SORT BY</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"Useless first"}
              label="SORT BY"
            >
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label" >CONDITION</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={null}
              label="SORT BY"
            >
                
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Delivery options</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={null}
              label="SORT BY"
            >
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
              <MenuItem value={"Useless first"}>Useless first</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-span-1 flex flex-row md:justify-end items-center justify-start  gap-4">
            <div className="flex flex-row">
                <div className="px-4 py-1 rounded-l-md cursor-pointer bg-blue-100 text-gray-500">Show all</div>
                <div className="px-4 py-1 shadow-md cursor-pointer rounded-md text-blue-500 font-medium shadow-bee-blue">Auction</div>
                <div className="px-4 py-1 rounded-r-md cursor-pointer bg-blue-100 text-gray-500">Buy now</div>
            </div>
            <div className="flex flex-row">
                <div className="px-4 py-1 rounded-l-md cursor-pointer bg-blue-100">
                    <FontAwesomeIcon className="text-gray-500"icon={faThList}/>
                </div>
                <div className="px-4 py-1 shadow-md cursor-pointer rounded-md shadow-bee-blue">
                    <FontAwesomeIcon className="text-blue-500" icon={faThLarge}/>
                </div>
            </div>
        </div>
      </div>
      <div className="w-full overflow-hidden justify-start flex-col md:flex-row flex  mt-6 items-center">
        <div className="text-sm w-full flex  md:w-auto font-bold md:mr-4 ">
          Related
        </div>
        <div className="overflow-x-scroll scrollbar-hide py-2 md:py-2 hide-scroll-bar flex flex-wrap gap-2 w-full">
          {relatedList.map((related) => {
            return (
              <div className="text-sm  flex-shrink-0  cursor-pointer flex flex-nowrap hover:bg-bee-blue hover:text-blue-500 text-gray-500 px-4 py-1 rounded-full w-auto bg-gray-200">
                {related}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        {productList.map((product) => {
          return (
            <div className="flex hover:bg-blue-50 cursor-pointer p-2 rounded-md flex-col items-start justify-start">
              <div className="flex w-full items-center justify-center">
                <img
                  className="h-40 object-cover"
                  src={product.picture}
                  alt=""
                />
              </div>
              <div className="text-sm mt-4 font-medium">
                {product.product_name}
              </div>
              <div className="mt-2 justify-between w-full items-center flex flex-row">
                <div className="text-md  font-bold">{product.price}</div>
                <div>
                  {product.discount ? (
                    <div className="text-md text-green-600 bg-green-100 px-2 rounded-md py-1">
                      50% OFF
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2 font-normal">
                {product.desc}
              </div>
              <div className="flex w-full  mt-4 items-center justify-between flex-row">
                <div className="flex flex-row space-x-2">
                  <div className="flex items-center flex-row space-x-0.5">
                    <FontAwesomeIcon
                      className="text-bee-blue"
                      size="sm"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-bee-blue"
                      size="sm"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-bee-blue"
                      size="sm"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-bee-blue"
                      size="sm"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-bee-blue"
                      size="sm"
                      icon={faStar}
                    />
                  </div>
                  <div className="font-semibold text-gray-500">4.05</div>
                </div>
                <div className="border border-bee-blue rounded-md space-x-2 py-1 px-2 flex flex-row">
                  <FontAwesomeIcon className="text-bee-blue" icon={faHeart} />
                  <div className="text-xs font-medium text-bee-blue">Watch</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContainerShop;

const relatedList = [
  "worldwide shipping",
  "under $50",
  "kitten",
  "plastic plugs",
  "pucker shoes",
  "vintage typewriter",
];
const productList = [
  {
    product_name:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: "$49.50",
    desc: "Eligible for Shipping To Mars or somewhere else",
    picture: shoes,
  },
  {
    product_name:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: "$49.50",
    desc: "Eligible for Shipping To Mars or somewhere else",
    picture: allshop,
    discount: true,
  },
  {
    product_name:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: "$49.50",
    desc: "Eligible for Shipping To Mars or somewhere else",
    picture: thumbler,
  },
  {
    product_name:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: "$49.50",
    desc: "Eligible for Shipping To Mars or somewhere else",
    picture: tshirt,
  },
  {
    product_name:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: "$49.50",
    desc: "Eligible for Shipping To Mars or somewhere else",
    picture: shoes,
  },
  {
    product_name:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: "$49.50",
    desc: "Eligible for Shipping To Mars or somewhere else",
    picture: allshop,
  },
  {
    product_name:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: "$49.50",
    desc: "Eligible for Shipping To Mars or somewhere else",
    picture: thumbler,
    discount: true,
  },
  {
    product_name:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: "$49.50",
    desc: "Eligible for Shipping To Mars or somewhere else",
    picture: tshirt,
  },
];
