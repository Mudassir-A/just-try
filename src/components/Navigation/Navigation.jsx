import React from "react";

// Firebase
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// For Styling
import { Navbar, Nav, Container, Button } from "react-bootstrap";


const Navigation = () => {

	// Get the current logged in user
	const { currentUser } = useAuth();

	const navigate = useNavigate();

	// Sign Out Handler
	const handleSignout = async () => {
		await signOut(auth);

		navigate("/login");
	};

	return (
		<>
			{/* Navbar */}
			<Navbar bg="bright" expand="lg">
				<Container fluid >

					{/* Brand Name */}
					<img src="logo.svg" alt="Logo" width="30" height="30" className="d-inline-block align-top"/>
					<Navbar.Brand className="justify-content-start" href="/">Just-Try</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="justify-content-evenly flex-grow-1"
							style={{ maxHeight: "100px", padding:"0 25%" }}
							navbarScroll
						>

							{/* Nav Links */}
							<Nav.Link href="/men">Men</Nav.Link>
							<Nav.Link href="/women">Women</Nav.Link>
							<Nav.Link href="/bestseller">BestSellers</Nav.Link>
							<Nav.Link href="/recommand">Recommendation</Nav.Link>
							<Nav.Link href="/contact">Contact Us</Nav.Link>

						</Nav>

						{/* If User is Logged in then show Logout Button otherwise signin/signup */}
						{currentUser ? (
							<>
								<Button
									variant="outline-danger"
									onClick={handleSignout}
									style={{ marginLeft: "10px" }}
								>
									Logout
								</Button>
							</>
						) : (
							<>
								<Nav.Link href="/login">
									<Button variant="outline-success">Login/Signup</Button>
								</Nav.Link>
							</>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
