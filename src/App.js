import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import "./styles.css";
// 이미지 파일들을 import합니다.
import webImg from "./img/web.png";
import htmlImg from "./img/html.png";
import cssImg from "./img/css.png";
import jsImg from "./img/javascript.png";
import reactImg from "./img/react.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "web", sub: "World Wide Web!" },
      welcome: { title: "welcome", desc: "Hello, React", image: webImg },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information",
        image: htmlImg,
},
        { id: 2, title: "CSS", desc: "CSS is for design" , image: cssImg },
        { id: 3, title: "JavaScript", desc: "JS is for interactive", image: jsImg },
        { id: 4, title: "React", desc: "React is for UI" ,image: reactImg },
      ],
    };
  }
  render() {
    var _title,
      _desc = null,
      _image = null;
      if (this.state.mode === "welcome") {
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc,
        _image = this.state.welcome.image;

      } else if (this.state.mode === "read") {
        var i = 0;
        while (i < this.state.contents.length) {
          var data = this.state.contents[i];
          if (data.id === this.state.selected_content_id) {
            _title = data.title;
            _desc = data.desc;
            _image = data.image;

            break;
          }
          i = i + 1;
        }
      }
      return (
        <div className="App">
          <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage={function () {
              this.setState({ mode: "welcome" });
            }.bind(this)}
          ></Subject>
          <TOC
            data={this.state.contents}
            onChangePage={function (id) {
              this.setState({ mode: "read", selected_content_id: Number(id) });
            }.bind(this)}
          ></TOC>
          <Content title={_title} desc={_desc} img={_image}></Content>
        </div>
      );
    }
  }
  
  export default App;
  