import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Body extends Component {

    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <Link className="navbar-brand" to="/">
                            Gym Style
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link className="nav-link active" to="/Compras">
                                        Compras
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Home">
                                        Clases
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                {/* esta es la imagen de fondo https://fondosmil.com/fondo/4036.jpg  */}
                <body background="https://fondosmil.com/fondo/4031.jpg " class="fixed-static">



                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.clinicamcd.es/wp-content/uploads/2015/05/GIMNASIO-CLINICA-MCD-PILATES-Y-FISIOTERAPIA-DE-MANTENIMIENTO.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.clinicamcd.es/wp-content/uploads/2015/05/GIMNASIO-DE-PILATES-Y-MANTENIMIENTO-CLINICA-MCD.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.clinicamcd.es/wp-content/uploads/2015/05/GIMNASIO-DE-PILATES-Y-MANTENIMIENTO-CLINICA-MCD.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>




                    <h1 id="Titulo">Bienvenido a Gym Style</h1>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Where can I get some?</h5>
                                    <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">What is Lorem Ipsum?</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <hr id="hr"></hr>
                    </div>
                    <h1 id="Titulo">PROMOCIONES DE ULTIMA HORA</h1>

                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a short card.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <hr id="hr"></hr>
                    </div>

                    <div class="card">
                        <p>La Card</p>
                        <img id="img" src="https://cdn-icons-png.flaticon.com/512/69/69840.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>


                    <h1 id="Titulo">Vuelvete MAMADISIMO</h1>

                    <p id="Text_relleno">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                    <br />
                    <br />
                    <br />
                    <br />


                </body>


                <div>
                    {/* <!-- Footer --> */}
                    <footer class="text-center text-lg-start bg-light text-muted">
                        {/* <!-- Section: Social media --> */}
                        <section
                            class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                        >
                            {/* <!-- Left --> */}
                            <div class="me-5 d-none d-lg-block">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            {/* <!-- Left -->

<!-- Right --> */}
                            <div>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                            {/* <!-- Right --> */}
                        </section>
                        {/* <!-- Section: Social media -->

<!-- Section: Links  --> */}
                        <section class="">
                            <div class="container text-center text-md-start mt-5">
                                {/* <!-- Grid row --> */}
                                <div class="row mt-3">
                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        {/* <!-- Content --> */}
                                        <h6 class="text-uppercase fw-bold mb-4">
                                            <i class="fas fa-gem me-3"></i>Company name
                                        </h6>
                                        <p>
                                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                                            dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    {/* <!-- Grid column -->

    <!-- Grid column --> */}
                                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 class="text-uppercase fw-bold mb-4">
                                            Products
                                        </h6>
                                        <p>
                                            <a href="#!" class="text-reset">Angular</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">React</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Vue</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Laravel</a>
                                        </p>
                                    </div>
                                    {/* <!-- Grid column -->

    <!-- Grid column --> */}
                                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 class="text-uppercase fw-bold mb-4">
                                            Useful links
                                        </h6>
                                        <p>
                                            <a href="#!" class="text-reset">Pricing</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Settings</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Orders</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Help</a>
                                        </p>
                                    </div>
                                    {/* <!-- Grid column -->

    <!-- Grid column --> */}
                                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 class="text-uppercase fw-bold mb-4">
                                            Contact
                                        </h6>
                                        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                        <p>
                                            <i class="fas fa-envelope me-3"></i>
                                            info@example.com
                                        </p>
                                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                                    </div>
                                    {/* <!-- Grid column --> */}
                                </div>
                                {/* <!-- Grid row --> */}
                            </div>
                        </section>
                        {/* <!-- Section: Links  -->

<!-- Copyright --> */}
                        <div class="text-center p-4" id="Footer">
                            © 2021 Copyright:
                            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                        </div>
                        {/* <!-- Copyright --> */}
                    </footer>
                    {/* <!-- Footer --> */}
                </div>
            </div>

        )
    }
}

export default Body