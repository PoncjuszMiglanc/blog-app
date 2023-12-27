import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainContainer from "../Components/MainContainer";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];

const UpdatePost = () => {
  const { id } = useParams();

  const [{ category, title, lead, author, content }, setData] = useState({});

  const [image, setImage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const handleReactQuill = (content) => {
    setData((prevVal) => ({
      ...prevVal,
      content,
    }));
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/posts/${id}`);
        const { post } = res.data;
        setData(post);
        console.log("Oto jest Post", post);
      } catch (error) {
        console.log("Błąd podczas pobierania danych", error);
      }
    };

    fetchPost();
  }, []);

  // const updatePost = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("category", category);
  //   formData.append("title", title);
  //   formData.append("lead", lead);
  //   formData.append("author", author);
  //   formData.append("image", image);
  //   formData.append("content", content);

  //   fetch("http://localhost:8080/post", {
  //     method: "POST",
  //     body: formData,
  //     credentials: "include",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   setKategoria("recenzja");
  //   setTytuł("");
  //   // setLead("");
  //   setAutor("");
  //   // setImage("");
  //   setTreść("");

  //   console.log("wysłano");
  // };

  return (
    <MainContainer>
      <div className="create">
        <h1 onClick={() => console.log(typeof image)} className="create__title">
          Edycja Posta
        </h1>
        <button
          onClick={() =>
            console.log(
              `przed edycją ${category} ${title} ${lead} ${author} ${image} ${content}`
            )
          }
        >
          Przed edycją
        </button>
        <button
          onClick={() =>
            console.log(
              `po edycji ${(category, title, lead, author, image, content)}`
            )
          }
        >
          Po edycji
        </button>
        <form onSubmit={console.log("hej")}>
          <div className="category">
            <label className="category__label" htmlFor="category">
              Kategoria
            </label>
            <select
              className="category__select"
              name="category"
              value={!category ? "" : category}
              id="category"
              onChange={handleInput}
            >
              <option className="category__option" value="recenzja">
                Recenzja
              </option>
              <option className="category__option" value="artykuł">
                Artykuł
              </option>
              <option className="category__option" value="esej">
                Esej
              </option>
            </select>
          </div>
          <div className="input">
            <label className="input__label" htmlFor="title">
              Tytuł
            </label>
            <input
              className="input__field"
              name="title"
              id="title"
              type="text"
              placeholder="tytuł tekstu"
              onChange={handleInput}
              value={!title ? "" : title}
            />
          </div>
          <div className="lead">
            <label className="lead__label" htmlFor="lead">
              Lead
            </label>
            <textarea
              className="lead__textfield"
              name="lead"
              id="lead"
              cols="30"
              rows="3"
              value={!lead ? "" : lead}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="input">
            <label className="input__label" htmlFor="author">
              Autor
            </label>
            <input
              className="input__field"
              id="author"
              name="author"
              type="text"
              placeholder="Autor wpisu"
              onChange={handleInput}
              value={!author ? "" : author}
            />
          </div>
          <div className="photo">
            <label className="photo__label" htmlFor="photo">
              Dodaj grafikę
            </label>
            <input
              className="photo__input"
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              id="photo"
            />
          </div>
          <div className="quill-container">
            <ReactQuill
              className="quill-container__my-editor"
              value={!content ? "" : content}
              name="content"
              onChange={handleReactQuill}
              modules={modules}
              formats={formats}
            />
          </div>

          <button className="create__btn">Opublikuj</button>
        </form>
      </div>
    </MainContainer>
  );
};

export default UpdatePost;
