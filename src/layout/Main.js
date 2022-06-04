import React, { useState } from "react";
import {
  AiFillPlusCircle,
  AiOutlinePlusCircle,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import TodoRow from "../components/TodoRow";
import { v4 as uuidv4 } from "uuid";

const initRows = [
  // {
  //   id: "30f978c0-a11f-4061-a08e-092a35fc0b7b",
  //   content: "default",
  //   date: "2022/06/04",
  // },
  // {
  //   id: "30f91-a08e-092a35fc0b7b",
  //   content: "default",
  //   date: "2022/06/04",
  // },
  // {
  //   id: "30f978c0-a11f-4061-a0b7b",
  //   content: "default",
  //   date: "2022/06/04",
  // },
];

const Main = () => {
  const [rows, setRows] = useState(initRows);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  
  return (
    <div>
      {/* icons */}
      <div className="px-3 py-1">
        <div className="flex">
          <input
            type="text"
            className="w-1/2 m-1 border"
            placeholder="Todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <input
            type="text"
            className="w-1/2 m-1 border"
            placeholder="YYYY/MM/DD"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <AiFillPlusCircle
          className="ml-auto hover:text-slate-500"
          onClick={() => {
            //宣告新的todo
            const newRow = {
              id: uuidv4(),
              content: todo,
              date: date,
            };
            
            //複製Rows
            const newRows = [...rows];
            // rows塞入新的todo
            newRows.push(newRow);
            //新的rows覆蓋舊的rows
            setRows(newRows);
            
            //把input清空
            setTodo("");
            setDate("");
            console.log(newRow);
          }}
        />
      </div>
      {rows.map((row) => (
        <TodoRow key={row.id} row={row} rows={rows} setRows={setRows} />
      ))}
    </div>
  );
};

export default Main;
