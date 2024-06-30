import './Categorias.css'

export default function Categorias(){
    return(
        <div>
    <section className="categories">
        <h2>1º HABILITAÇÃO</h2>
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src="https://i.ibb.co/bF1J6Y1/category-image-1.png" alt="Category Image 1" />
              <h3>Categoria A</h3>
            </div>
            <div className="carousel-item">
              <img src="https://i.ibb.co/92x5Q9n/category-image-2.png" alt="Category Image 2" />
              <h3>Categoria B</h3>
            </div>
            <div className="carousel-item">
              <img src="https://i.ibb.co/z58w8jS/category-image-3.png" alt="Category Image 3" />
              <h3>Categoria AB</h3>
            </div>
          </div>
          <button className="carousel-prev">‹</button>
          <button className="carousel-next">›</button>
        </div>
      </section>
    </div>
    )
}