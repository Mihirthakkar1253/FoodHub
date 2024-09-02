import { RestruantCard } from "./RestruantCard";
import {restaurantList} from '../utils/contants'
const Body=()=>{
    return (
        <div className='restcard'>
        {restaurantList.map((rest) => (
          <RestruantCard
            key={rest.data.id}  // It's important to include a unique key prop when rendering lists in React.
            name={rest.data.name}
            cloudinaryImageId={rest.data.cloudinaryImageId}
            cuisines={rest.data.cuisines}
            avgRating={rest.data.avgRating}
          />
        ))}
      </div>

    )
}

export default Body;