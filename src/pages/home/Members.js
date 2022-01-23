import honey from "../../assets/svg/honey.svg";
import person1 from '../../assets/svg/person1.svg';
import person2 from '../../assets/svg/person2.svg';
import person3 from '../../assets/svg/person3.svg';
const Members = ()=>{
    return (
        <div style={{fontFamily:'Sniglet'}} className="items-center p-8 w-screen flex flex-col">
          <h3 className="text-center font-normal text-6xl">Family Members of Beekaboo</h3>
          <div className="w-full mt-24 grid xl:grid-cols-3 2xl:grid-cols-3 lg: grid-cols-1 gap-4">
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
              <img src={person1} alt=""  />
              <div>Name</div>
            </div>
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
            <img src={person2} alt=""  />
              <div>Name</div>
            </div>
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
            <img src={person3} alt=""  />
              <div>Name</div>
            </div>
          </div>
      </div>
    )
}

export default Members