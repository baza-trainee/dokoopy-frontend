import { useEffect, useState } from "react";

export const useLoadingData = (dataFetcher, event = false) => {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchData = async data => {
      try {
         const response = await dataFetcher(data);
         setData(response.data);
         setIsLoading(false);
      } catch (error) {
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
