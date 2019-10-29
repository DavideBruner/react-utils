import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import apiService from '../services/api.service';

function useFetchData<T>(endpoint: string): [boolean, T] {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    apiService.get(endpoint).then(handleFetchDataSuccess);

    return () => {
      setData(null);
      setIsLoading(true);
    };
  }, []);

  const handleFetchDataSuccess = (res: AxiosResponse) => {
    setData(res.data);
    setIsLoading(false);
  };

  return [isLoading, data];
}

export default useFetchData;
