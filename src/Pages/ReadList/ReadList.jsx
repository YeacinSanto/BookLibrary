import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../Utility/addToDb";
import Book from "../Book/Book";

const ReadList = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const data = useLoaderData()
  const [readList,setReadList] = useState([])
  console.log(data)  

    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id=>parseInt(id))
        const myReadList = data.filter(book=>convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    },[])
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-lifted">
        <a
          role="tab"
          className={`tab ${activeTab === "tab1" ? "tab-active text-primary" : ""}`}
          onClick={() => setActiveTab("tab1")}
        >
          Read Book List
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "tab2" ? "tab-active text-primary" : ""}`}
          onClick={() => setActiveTab("tab2")}
        >
          Wish List
        </a>
        
      </div>

      {/* Tab Content */}
      <div className="mt-6 w-3/4 p-6 border rounded-lg bg-base-200">
        {activeTab === "tab1" && <p>Book I read {readList.length}</p>}
        {
            readList.map(b=><Book key={b.bookId} book={b}></Book>)
        }
        {activeTab === "tab2" && <p>My wish List💡</p>}
        
      </div>
    </div>
  );
};

export default ReadList;
