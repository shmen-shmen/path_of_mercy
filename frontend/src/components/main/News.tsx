import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Grid = () => {
	return (
		<Container fluid>
			<Row className="row-cols-1 row-cols-lg-2 g-4">
				<Col>
					<Card>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export const News = () => {
	return (
		<Fragment>
			<h2>News</h2>
			<Grid />
		</Fragment>
	);
};
