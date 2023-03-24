import React, { useEffect, useState } from "react";
import axios from "axios";

export const useRemoteService = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchBoooks = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBoooks();
  }, []);

  return { data, loading, error };
};
