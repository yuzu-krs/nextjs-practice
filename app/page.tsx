import BBSCardList from "./components/BBSCardList";
import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prismaClient"
import { BBSData } from "./types/taypes";

async function getBBSAllData(){
  const response=await fetch("http://localhost:3000/api/post",{
    cache:"no-store",
  });
  
  const bbsAllData:BBSData[]=await response.json();

  return bbsAllData;
}


  export default async function Home() {

  const bbsAllData=await getBBSAllData();

  return (
  <main> 
  <BBSCardList bbsAllData={bbsAllData}/>
  </main>
  );
  }