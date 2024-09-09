"use client"
import IncomeGraph from "@/components/IncomeGraph";
import UserCards from "@/components/UserCards";
import UsersGraph from "@/components/UsersGraph";
import React from "react";
import thumbimg1 from "@/assets/images/video1.png"
import thumbimg2 from "@/assets/images/video2.png"
import thumbimg3 from "@/assets/images/video3.png"
import thumbimg4 from "@/assets/images/video4.png"
import NewUserCard from "@/components/NewUserCard";


export default function Home() {
  const useCardData =[
    {
      id: 1,
      text: "New User",
      value: 360,
    },
    {
      id: 2,
      text: "Normal User",
      value: 2500,
    },
    {
      id: 3,
      text: "Premium User",
      value: 1560,
    },
    {
      id: 4,
      text: "Total User",
      value: 4060,
    },
  ]
  const UserData =[
    {
      id:1,
      title: "Lorem Ipsum Dummy Title",
      thumbnail: thumbimg1,
    },
    {
      id:2,
      title: "Lorem Ipsum Dummy Title",
      thumbnail: thumbimg2,
    },
    {
      id:3,
      title: "Lorem Ipsum Dummy Title",
      thumbnail: thumbimg3
    },
    {
      id:4,
      title: "Lorem Ipsum Dummy Title",
      thumbnail: thumbimg4
    },
  ]
  return (
  <div>
   <div className="grid md:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] gap-5 ">
   <IncomeGraph />
   <UsersGraph />
   </div>
   <section className="my-10">
   <div className="grid grid-cols-4 gap-5">
    {useCardData.map((data)=>(
      <UserCards 
      key={data.id}
      value={data.value}
      text={data.text}
      />
    ))}
   
   </div>
   </section>
<section>
  <div className="grid grid-cols-4">
  {UserData.map((data) =>(
            <NewUserCard
            key= {data.id}
            title={data.title}
            thumbnail={data.thumbnail}
            />
        ))}
  </div>
</section>

  </div>
  );
}
