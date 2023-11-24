import { Component } from "react";

class Content extends Component {
  // render 메서드는 컴포넌트가 화면에 렌더링될 때마다 호출됩니다.
  render() {
    // 반환하는 JSX는 article 요소로 구성되어 있습니다.
    return (
      // article 요소는 HTML5의 구조적 요소 중 하나로, 독립적인 콘텐츠를 나타냅니다.
      <article>
        {/* h2 태그를 사용하여 제목을 렌더링합니다. this.props를 통해 부모 컴포넌트로부터 전달받은 title 값을 표시합니다. */}
        <h2>{this.props.title}</h2>
        {/* 부모 컴포넌트로부터 전달받은 desc(설명)을 렌더링합니다. */}
        {this.props.desc}
        {/* div 요소를 사용하여 이미지를 감싸고, img 태그를 통해 이미지를 렌더링합니다. */}
        <div>
          {/* img 태그의 src 속성은 부모 컴포넌트로부터 전달받은 img 값을 사용하며, alt 속성은 이미지에 대한 대체 텍스트로 title을 사용합니다. */}
          <img src={this.props.img} alt={this.props.title}></img>
        </div>
      </article>
    );
  }
}

export default Content;
