import React from "react";
import { getInitialData } from "../utils";
import Header from "./Header";
import Body from "./Body";

class NotesApp extends React.Component {
  getData = getInitialData();

  constructor(props) {
    super(props);

    // inisialisasi data dalam state
    this.state = {
      data : this.getData,
      counter: 50,
      title: '',
      body: '',
      search: '',
      resultSearch: [],
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSubmitNewNoteHandler = this.onSubmitNewNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onSearchHandler = (event) => {
    const keyword = event.target.value.toLocaleLowerCase();
    const resultData = this.state.data.filter((item) => {
      if(item.title.toLocaleLowerCase().includes(keyword)){
        return item.id;
      }
    });
    
    this.setState(() => {
      return {
        search: event.target.value,
        resultSearch: resultData,
      };
    });
  }

  onSubmitNewNoteHandler = (event) => {
    event.preventDefault();

    const newData = {
      id: Number(+new Date()),
      title: String(this.state.title),
      body: String(this.state.body),
      createdAt: new Date().toISOString(),
      archived: Boolean(false),
    }

    this.setState((prev) => {
      return {
        data: [
          ...prev.data,
          newData
        ]
      }
    })
  }
  
  onArchivedHandler = (id) => {
    const findData = this.state.data.find((item) => item.id == id);
    findData.archived ? findData.archived = false : findData.archived = true;

    let updatedData = this.state.data.map((item) => item.id === findData.id ? findData : item);

    this.setState(() => {
      return  {
        data: updatedData,
      };
    });
  }

  onDeleteHandler = (id) => {
    const updatedData = this.state.data.filter((item) => item.id !== id);
    this.setState(() => {
      return {
        data: updatedData,
      };
    });
  }

  onChangeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if(name === 'title') {
      const len = 50 - value.length;

      if(len > -1) {
        this.setState(() => {
          return {
            title: value,
            counter:len,
          };
        });
      }
    }

    if(name === 'body') {
      this.setState(() => {
        return {
          body : value,
        };
      });
    }

  }

  render() {
    
    return(
      <>
        <Header search={this.state.search} onSearchHandler={this.onSearchHandler} />
        <Body 
          data={this.state.data} 
          title={this.state.title}
          body={this.state.body}
          search={this.state.search}
          onChangeInput={this.onChangeInput} 
          counter={this.state.counter} 
          onSubmitNewNote={this.onSubmitNewNoteHandler}
          onDeleteHandler={this.onDeleteHandler}
          onArchivedHandler={this.onArchivedHandler}
        />
      </>
    );
  }
  
}

export default NotesApp;