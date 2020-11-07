import React, { Component } from "react";

// CSS
import "./BlogPost.css";

const POSTS_JSON = [
  {
    title: "Facebook Shuts Down Massive ‘Stop the Steal’ Group",
    author: "Sarah Emerson",
    category: ["Facebook", "Security"],
    imgUrl: "https://miro.medium.com/max/700/1*1gY2EyVRO5prYjRkL7LVaA.jpeg",
  },
  {
    title: "20 Things Most People Learn Too Late In Life",
    author: "Nicolas Cole",
    category: ["Learning", "Life"],
    imgUrl: "https://miro.medium.com/max/700/1*BO36vszZiTsOZl0EU6lwLA.jpeg",
  },
  {
    title: "Six Powerful Quotes That Slapped Me Square in the Face",
    author: "Brian Pennie",
    category: ["Quotes", "Life"],
    imgUrl: "https://miro.medium.com/max/1000/1*zlAecOQjiOXOV0fkXEvVhQ.jpeg",
  },
];

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      // koderName: "",
      // koderAge: "",
    };

    // this.handlerNewKoderChange = this.handlerNewKoderChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      posts: POSTS_JSON,
    });
  }

  renderPosts() {
    return this.state.posts.map(({ title, author, category, imgUrl }) => {
      return (
        <div className='post-item'>
          <li>
            <img src={imgUrl} alt={title}/>
            <h2>{title}</h2>
            <p>{author}</p>
            <span>{category}</span>
          </li>
        </div>
      );
    });
  }

  // handlerNewKoderChange({ target: { value, name } }) {
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   let { koders, koderName, koderAge } = this.state;
  //   const newKoder = {
  //     name: koderName,
  //     age: koderAge,
  //     hobbies: [],
  //   };
  //   koders.push(newKoder);
  //   this.setState({
  //     koders,
  //     koderName: "",
  //     koderAge: "",
  //   });
  // }

  render() {
    // const { koders, koderName, koderAge } = this.state;
    const { posts } = this.state;
    return (
      <div>
        {posts.length ? (
        <ul>{this.renderPosts()}</ul>
        ) : (
          <h1>No hay Koders</h1>
        )}
        {/* <form onSubmit={this.handleSubmit}>
          Name:{" "}
          <input
            value={koderName}
            onChange={this.handlerNewKoderChange}
            name="koderName"
          />
          Age:{" "}
          <input
            value={koderAge}
            onChange={this.handlerNewKoderChange}
            name="koderAge"
          />
          <button type="submit">Crear Koder</button>
        </form> */}
      </div>
    );
  }
}

export default BlogPost;

/*
1. ABSTRAER el objeto POST de un blog
2. Crear un JSON con varios objetos POST
3. Crear un componente que renderize esos POST's a modo de Cards (como un blog)
4. Añadir un formulario a ese componente para poder añadir POST
Happy Hacking!
*/