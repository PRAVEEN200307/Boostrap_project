import Carousel from 'react-bootstrap/Carousel';
import SliderImageco from './SliderImageco';



function Slider() {

  return (
    <Carousel>
      <Carousel.Item>
          <SliderImageco ImageSrc={'https://www.tourmyindia.com/blog//wp-content/uploads/2021/05/Meenakshi-Amman-Temple-Madurai.jpg'} />
          <Carousel.Caption>
            <h3>Meenakshi Amman Temple Madurai {'-'} An Ancient Divine Destination </h3>
            <p>Dedicated to Goddess Parvati in the form of Meenakshi and her consort, Lord Shiva in the form of Lord Sundareswarar.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <SliderImageco ImageSrc={'https://www.tourmyindia.com/blog//wp-content/uploads/2021/05/Adi-Kumbeswarar-Temple-Kumbakonam.jpg'} />
          <Carousel.Caption>
            <h3>Adi Kumbeswarar Temple Kumbakonam {'-'} Royal Cholas Rich Legacy</h3>
            <p>he grandeur of Chola dynasty is still intact in the form of divine Adi Kumbeswarar temple. It’s an exquisite Dravidian style masterpiece which was renovated by Govinda Dikshitar, c</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <SliderImageco ImageSrc={'https://www.tourmyindia.com/blog//wp-content/uploads/2021/05/Brihadeeswarar-Temple-Thanjavur.jpg'} />
          <Carousel.Caption>
            <h3>Brihadeeswarar Temple Thanjavur – One of ‘Great living Chola Temples’</h3>
            <p>
            The ‘Brihadeeswarar Temple’ is a delightful abode of Lord Shiva and is located in the Thanjavur district of Tamil Nadu. 
            </p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;