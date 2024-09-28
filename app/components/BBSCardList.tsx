import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import React from 'react'
import BBSCard from "./BBSCard";
import { BBSData } from "../types/taypes";

interface BBSAllDataProps{
  bbsAllData:BBSData[];
}

const BBSCardList = ({bbsAllData}:BBSAllDataProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 px-4 py-4 ">
       {bbsAllData.map((bbsData:BBSData)=>(
          <BBSCard key={bbsData.id} bbsData={bbsData}/>
       ))}
    </div>
  )
}
      
export default BBSCardList
