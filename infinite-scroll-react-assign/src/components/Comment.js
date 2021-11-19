

function Comment({item: { title, image, category }}) {
    return (
        <div className="col-sm-4 my-2" >
        <div className="card shadow-sm w-100" style={{ minHeight: 125 }}>
        <div className="card-body">
          <h5 className="card-title text-center h2">{title}</h5>
          <h6 className="card-subtitle  text-center">
            <img src={image} alt=""/></h6>
          <p className="card-text">{category}</p>
        </div>
      </div>
    </div>
    )
}

export default Comment
