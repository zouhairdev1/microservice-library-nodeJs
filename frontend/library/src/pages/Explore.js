import { Link } from "react-router-dom";
import MenuCategories from "../components/MenuCategories";

export default function Explore(){
    const imgClasses = 'rounded-lg shadow-md'
    return(
        <div className="m-3 ">
        <MenuCategories></MenuCategories>
        <div className="grid grid-cols-2 sm:grid-cols-3 m-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(24).keys()].map((index) => (
            <Link to={'/BookDetails'}>
              <img
            key={index}
            src={`https://placehold.co/150x225`}
            alt={`Book ${index + 1}`}
            className={imgClasses}
          />
            </Link>
        
        ))}
      </div>
        </div>
    )
}