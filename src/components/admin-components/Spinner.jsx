import ClipLoader from "react-spinners/ClipLoader";

const override = {
   display: "block",
   margin: "0 auto",
   borderColor: "bleak",
};

export const Spinner = ({ size, color }) => {
   return (
      <div className="admin-louder">
         <ClipLoader
            color={color}
            loading={true}
            cssOverride={override}
            size={size}
            aria-label="Loading Spinner"
         />
      </div>
   );
};
