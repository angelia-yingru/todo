import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { AiFillEdit, AiFillDelete, AiOutlineSend } from "react-icons/ai";

// props = {todo:{ content, data}}
// const props = {
//   row: {
//     content: "練習React",
//     date: "2022/06/04",
//   },
// };

const TodoRow = (props) => {
  const { row, rows, setRows } = props;
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-around border">
      <div className="w-1/2 border-r">{row.content}</div>
      <div>{row.date}</div>
      {/* row_btn*/}
      <div className="flex">
        <AiFillEdit className="w-5 h-5 hover:text-slate-500" 
          onClick={()=>{
            setOpen(!open);
          }}
        />
        <AiFillDelete
          className="w-5 h-5 hover:text-slate-500"
          onClick={() => {
            // 複製todo清單
            const newRows = [...rows];
            // 抓取目前row id
            const { id } = row;
            // 篩選出跟目前id不同的項目
            const result = newRows.filter((row)=>{
              return row.id !== id;
            });
            //新陣列覆蓋舊陣列
            setRows(result);
          }}
        />
      </div>
    </div>
    {open ? (
    <div className="flex">
    <input
            type="text"
            className="w-1/2 border"
            placeholder="Todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <input
            type="text"
            className="w-1/2 border"
            placeholder="YYYY/MM/DD"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <AiOutlineSend className="w-5 h-5" 
            onClick={()=>{
              // 複製todo清單
            const newRows = [...rows];
            // 抓取目前row id
            const { id } = row;
            // 篩選出跟目前id相同的項目
            const targetIdx = newRows.findIndex((row)=>{
              return row.id === id;
            });
            newRows[targetIdx]={
              content:todo,
              date:date,
            }
            setRows(newRows);
            }}
          />
    </div>
    ): ""}
    </>
  );
};

export default TodoRow;
