import React from "react"
import styled from "styled-components"

const Form = styled.form`
  margin-bottom: 5px;
`
const Container = styled.div`
  margin: 0 20px;
`

const BooksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: scroll;
  height: 303px;
  flex-wrap: wrap;
`

export default class Books extends React.Component {
  constructor(props) {
    super(props)
    this.containerRef = React.createRef()
  }
  state = {
    missingWord: "",
    isLoading: true,
    books: [],
    startIndex: 0,
  }

  titleImgDescription = []
  time

  // infinity scroll (life circle methods)
  componentDidMount() {
    this.containerRef.current.addEventListener("scroll", this.trackScrolling)
  }

  componentWillUnmount() {
    this.containerRef.current.removeEventListener("scroll", this.trackScrolling)
  }

  inputChange = input => {
    clearTimeout(this.time)
    this.setState({
      missingWord: input.target.value,
    })
    this.time = setTimeout(() => {
      this.titleImgDescription = []
      this.fetchBooks()
    }, 500)
  }

  submit = event => {
    event.preventDefault()
    this.titleImgDescription = []
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        this.state.missingWord
      }+intitle&startIndex=${this.state.startIndex}`
    )
      .then(res => res.json())
      .then(json => this.setState({ books: json.items }, this.checkFetch))
  }

  checkFetch = () => {
    if (typeof this.state.books !== "undefined") {
      this.setState({ isLoading: false })
    }
  }

  printBooks = () => {
    if (typeof this.state.books === "undefined") {
      return this.titleImgDescription
    }

    let repeats = this.titleImgDescription.map(
      el => el.key === this.state.books[0].id
    )
    if (repeats.includes(true)) {
      return this.titleImgDescription
    }

    this.state.books.map(el => {
      let description = el.volumeInfo.description

      if (typeof description === "undefined") {
        description = "missing description"
      } else if (description.length > 100) {
        description = description.substr(0, description.lastIndexOf(" ", 100))
        description = description + "..."
      }

      this.titleImgDescription.push(
        <div className="bookContainer" key={el.id}>
          <h4>
            Title:
            <span className="title"> {el.volumeInfo.title}</span>
          </h4>
          {this.getImg(el)}
          <h4 className="description">{description}</h4>
        </div>
      )
      return 1
    })

    return <div>{this.titleImgDescription}</div>
  }

  getImg = el => {
    if (typeof el.volumeInfo.imageLinks === "undefined") {
      return <h4>Missing img</h4>
    }
    return <img alt="missing img" src={el.volumeInfo.imageLinks.thumbnail} />
  }

  // infinity scroll (isBottom, trackScrolling)
  isBottom(el) {
    if (this.state.books.length < 10) {
      return false
    }

    return el.getBoundingClientRect().bottom <= window.innerHeight
  }

  trackScrolling = () => {
    let wrappedElement = document.getElementById("footer")
    if (this.isBottom(wrappedElement)) {
      let startIndex = this.state.startIndex
      startIndex += 10
      this.setState(
        {
          startIndex: startIndex,
        },
        this.fetchBooks
      )
      this.containerRef.current.removeEventListener(
        "scroll",
        this.trackScrolling
      )
      setTimeout(() => {
        this.containerRef.current.addEventListener(
          "scroll",
          this.trackScrolling
        )
      }, 300)
    }
  }

  render() {
    return (
      <Container>
        <BooksWrapper ref={this.containerRef}>
          <Form className="input" onSubmit={this.submit}>
            <label htmlFor="title">enter the title of a book</label>
            <input
              id="title"
              type="text"
              autoFocus
              placeholder="Title"
              onChange={this.inputChange}
            />
          </Form>
          {this.state.isLoading ? this.titleImgDescription : this.printBooks()}
          <span id="footer" />
        </BooksWrapper>
      </Container>
    )
  }
}
