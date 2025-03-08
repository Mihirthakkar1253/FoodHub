import { restaurantList } from "../utils/contants"
import  {IMAGE_CDN_URL} from '../utils/contants'
export const RestruantCard=(props)=>{
    const { resData } = props;
    // console.log(resData);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
      resData?.info;
    return  (
   <div className='card'>
    <img src={IMAGE_CDN_URL+cloudinaryImageId}></img>
    <h2>{name}</h2>
    <h3>{cuisines.join(', ')}</h3>
    <h4>{avgRating}</h4>
   </div>
    )
}
