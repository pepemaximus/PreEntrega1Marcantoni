import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <button type="button" class="btn btn-outline-primary">Static website</button>
                    <button type="button" class="btn btn-outline-primary">Autoadmin website</button>
                    <button type="button" class="btn btn-outline-primary">E-commerce</button>
                    <button type="button" class="btn btn-outline-primary">Website consultancy</button>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar