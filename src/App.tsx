import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./Types/Item";
import { ListItem } from "./Components/ListItem";
import { AddArea } from "./Components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      task: "Desenvolver um projeto pessoal em React",
      done: false,
    },
    {
      id: 2,
      task: "Conseguir um emprego como Desenvolvedor",
      done: true,
    },
    {
      id: 3,
      task: "Aperfeiçõar meu inglês",
      done: false,
    },
  ]);

  const handleAddTask = (taskBody: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      task: taskBody,
      done: false
    });
    setList(newList);
  }


  return (
    <C.Container>
      <C.Area>
        <>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask}/>

          {list.map((item, index) => (
            <ListItem key={index} item={item}/>
          ))}
        </>
      </C.Area>
    </C.Container>
  );
};

export default App;