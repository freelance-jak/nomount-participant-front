import camelcaseKeys from "camelcase-keys";
import { useEffect, useState } from "react";
import type { Meet } from "src/types/meet";

export const useMeets = (year: string, month: string) => {
  const [meets, setMeets] = useState<Meet[] | null>(null);

  useEffect(() => {
    getMeets(year, month);
  }, [year, month]);

  const getMeets = async (year: string, month: string) => {
    // 一旦暫定対応としてfetchを利用
    const response = await fetch(`https://nomount-app-api.herokuapp.com/api/v1/meets/${year + month}`);
    const json = await response.json();
    const _meets: Meet[] = camelcaseKeys(json, { deep: true }).meets;
    setMeets(_meets);
  };

  return { meets, setMeets };
};
