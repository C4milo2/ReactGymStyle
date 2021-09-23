import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sabado extends Component {

    render() {
        return (
            <div>
            <body background="https://fondosmil.com/fondo/4031.jpg " class="fixed-static">
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

                <h1 id="Titulo">Bienvenido a el Horario del Sabado</h1>
                <p id="text-horario">
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Link with href
                    </a>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        Selecciona en que hornada te gustaria participar
                        <button type="button" class="btn btn-dark"><Link to="/Mañana">Mañana</Link></button>
                        <button type="button" class="btn btn-dark"><Link to="/Tarde">Tarde</Link></button>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
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
            </body>
        </div>
        )
    }
}

export default Sabado;