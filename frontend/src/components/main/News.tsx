import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { generateNumberOfArticles, NewsArticle } from "../../assets/staticData";

const articles = generateNumberOfArticles(2, 5);

const ArticleCard = ({
	articleDate,
	articleHeader,
	articleHeaderImg,
	articleBodyText,
}: NewsArticle) => {
	return (
		<Card key={articleDate}>
			<Card.Img variant="top" src={articleHeaderImg} />
			<Card.Body>
				<Card.Title>{articleHeader}</Card.Title>
				<Card.Text>{articleBodyText}</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

const Grid = () => {
	return (
		<Container fluid>
			<Row className="row-cols-1 row-cols-lg-2 g-4">
				{articles.map((article: NewsArticle) => (
					<Col key={article.articleDate}>
						<ArticleCard {...article} />
					</Col>
				))}
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
