const MainPost = () => {
  return (
    <>
      <main className="main-post">
        <div className="main-post__head">
          <h1>Tytuł całego bloga</h1>
          <p>Podtytuł mojego bloga</p>
        </div>
        <div className="main-post__view">
          <p className="author">Wojciech An</p>
          <p className="date">22.05.2023</p>
          <h2>Tytuł wpisu blogowego</h2>
          <p>Podtytuł wpisu</p>
          <div className="tags">
            <span>Film</span>
            <span>Berlinale</span>
            <span>Drama</span>
            <span>Michaelangelo Antonioni</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPost;
