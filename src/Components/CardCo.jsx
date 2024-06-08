import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCo( {Imagesrc,cardTitle,moreDetail,cardText} ) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagesrc}/>
      <Card.Body>
        <Card.Title> {cardTitle} </Card.Title>
        <Card.Text>
            {cardText}
        </Card.Text>
        {moreDetail&&<Card.Link href={moreDetail}>click to  view more</Card.Link>}    
      </Card.Body>
    </Card>
  );
}

export default CardCo;