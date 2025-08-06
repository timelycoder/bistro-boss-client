import MenuItem from "../shared/MenuItem/MenuItem";
import Cover from "../shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline  mt-4 border-0 border-b-4">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
