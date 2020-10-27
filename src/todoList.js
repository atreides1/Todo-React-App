import React, { Component } from "react";
import './todoList.css';

class Items extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return ( <li onClick={(e) => e.target.classList.toggle("crossedOut")}
                     key={item.key}>{item.text}
                <button className="delete"
                        onClick={() => this.delete(item.key)}>×
                </button>
                </li>

               )
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        let listStyle = {
            padding: 0
        };
        return (
            <ul id="source-html" style={listStyle} className="theList">
                {listItems}
            </ul>
        );
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [],
                       title: 'To Do: '};

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.exportHTML = this.exportHTML.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
    }

    handleLoad() {
        console.log("Refreshed!");
        //check if data is stored in localstorage
        if (localStorage.length > 0)
        {
        //parse data from string to array
        let listItems = JSON.parse(localStorage.getItem("listItems"));
        //setState
        this.setState({items: listItems});
        }

    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
            localStorage.setItem("listItems", JSON.stringify(this.state.items.concat(newItem)));
        }
        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
        localStorage.setItem("listItems", JSON.stringify(filteredItems));
    }

    updateTitle(e) {
        if (this._titleElement.value !== "") {
            this.setState({title: this._titleElement.value});
            let title = document.querySelector(".title");
            title.placeholder = this.state.title;
            this._titleElement.value = "";
        }
        e.preventDefault();
    }

    exportHTML() {
        let header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";

        let footer = "</body></html>";
        let title = this.state.title;
        let sourceHTML = header+title+document.getElementById("source-html").innerHTML+footer;
        //gets rid of × from word doc
        sourceHTML = sourceHTML.replace(/×/g, '');
        let source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        let fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = title + '.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
        console.log("exported successfully!")
    }

    render() {
        
        let inputStyle = {
            padding: 10,
            fontSize: 16,
            borderWidth: 2,
            borderStyle: "solid",
            width: 165
        };


        return(
            <div>
                <div>
                    <form onSubmit={this.updateTitle}>
                        <input ref={(a) => this._titleElement = a}
                               className="title" type="text"
                               placeholder={this.state.title}>
                        </input>
                    </form>

                    <form onSubmit={this.addItem}>
                        <input style={inputStyle}
                               ref={(a) => this._inputElement = a}
                               placeholder="enter task">
                        </input>
                        <button type="submit" className="uiButton">add</button>
                    </form>
                </div>
                <Items entries={this.state.items}
                           delete={this.deleteItem}/>
               <div>
                   <button id="btn-export" className="uiButton" onClick={this.exportHTML}> Export to Word</button>
               </div>
            </div>
        );
    }
}



export default List;
