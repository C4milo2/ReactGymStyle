import { Component } from "react";
import { Link } from "react-router-dom"


class Home extends Component {

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
                    <h1 id="Titulo">Clases De Gym Style</h1>
                    <br />
                    <br />
                    <br />

                <h3 id="titulo-Home"> Preciona sobre el Horario y el Dia en el cual vas a reservar su clase </h3>
                <div className="container">
                <table class="table table-dark table-striped">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lunes</th>
                            <th scope="col">Martes</th>
                            <th scope="col">Miercoles</th>
                            <th scope="col">Jueves</th>
                            <th scope="col">Viernes</th>
                            <th scope="col">Sabados</th>
                            <th scope="col">Domingos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Mañana</th>
                            <td><Link to="/Lunes">6:30 Am 12:00 Pm </Link></td>
                            <td><Link to="/Martes">6:30 Am 12:00 Pm</Link></td>
                            <td><Link to="/Miercoles">6:30 Am 12:00 Pm</Link></td>
                            <td><Link to="/Jueves">7:30 Am 12:00 Pm</Link></td>
                            <td><Link to="/Viernes">6:30 Am 12:00 Pm</Link></td>
                            <td><Link to="/Sabado">8:00 Am 12:00 Pm</Link></td>
                            <td><Link to="/Domingo">8:00 Am 12:00 Pm</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">Tarde</th>
                            <td><Link to="/Lunes">2:00 Pm 8:00 Pm</Link></td>
                            <td><Link to="/Martes">2:00 Pm 8:00 Pm</Link></td>
                            <td><Link to="/Miercoles">2:00 Pm 8:00 Pm</Link></td>
                            <td><Link to="/Jueves">2:00 Pm 8:00 Pm</Link></td>
                            <td><Link to="/Viernes">2:00 Pm 8:00 Pm</Link></td>
                            <td><Link to="/Sabado">2:00 Pm 8:00 Pm</Link></td>
                            <td><Link to="/Domingo">2:00 Pm 8:00 Pm</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="8">Larry the Bird</td>
                        </tr>
                    </tbody>
                </table>
                </div>

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

export default Home;