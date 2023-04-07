import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Logout } from '../redux/actions/LoginAction';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';


function Navigation() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleNav(): void {
    if (loginStatus == "Logout") {
      dispatch(Logout())

    }
    navigate('/Login')
  }
  const [loginStatus, setLoginStatus] = useState("Login")
  const [categoryList, setCategoryList] = useState([])
  const session = useSelector((state: any) => state.Login.uid)
  useEffect(() => {
    getCategory()


  },)
  const getCategory = async () => {

    const Categories = await axios.get('https://localhost:7000/Categories').then((response) => response.data)
    const CategoryList = Categories.map((item: any) => item.category)
    setCategoryList(CategoryList)

  }
  useEffect(() => {
    (session != null) ?
      setLoginStatus("Logout") : setLoginStatus("Login")
  }, [session])
  function handleRegisterclick(): void {
    navigate('/Register')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Bulletin-Board</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">All Posts</Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <Dropdown.Menu>
                {
                  categoryList.map((item) => <Dropdown.Item onClick={() => { navigate(`/Post/${item}`) }}>{item}</Dropdown.Item>)

                }
              </Dropdown.Menu>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleRegisterclick}>Register</Nav.Link>
            <Nav.Link eventKey={2} onClick={handleNav}>
              {loginStatus}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;