import { AddSlider } from "./addNew/AddSlider";
import { EditSlider } from "./editPage/EditSlider";

export const AdminHero = () => {
   return (
      <div className="admin-hero">
         <AddSlider />
         <EditSlider />
      </div>
   );
};
