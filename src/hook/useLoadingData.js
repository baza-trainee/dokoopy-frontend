import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoadingData = (dataFetcher, event = false) => {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   const navigate = useNavigate();

   const fetchData = async data => {
      try {
         const response = await dataFetcher(data);
         setData(response.data);
         setIsLoading(false);
      } catch (error) {
         // 401 handling

         if (error.response.status === 401) {
            console.log(error.response.status);
            navigate("/login");
         }
         //
         setError(error);
         setIsLoading(false);
      }
   };

   useEffect(() => {
      if (!event) {
         fetchData();
      }
   }, [dataFetcher]);

   const eventLoading = data => {
      fetchData(data);
   };
   return { data, isLoading, error, eventLoading };
};
