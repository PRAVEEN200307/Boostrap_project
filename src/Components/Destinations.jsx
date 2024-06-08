import CardCo from "./CardCo";

const Destionations = () => {
  return (
    <div>
      <div className=" text-center p-5">
        <span>Top Selling</span>
        <h1>Top Destinations</h1>
      </div>
      <div className="container d-flex flex-row flex-wrap justify-content-around gap-5 mb-4">
         <CardCo Imagesrc={'https://www.trawell.in/admin/images/thumbs/705432807Madurai_Main_thumb.jpg'}  
          cardTitle={'Madurai'} 
          moreDetail={'https://www.trawell.in/tamilnadu/madurai'} />

        <CardCo Imagesrc={'https://ihplb.b-cdn.net/wp-content/uploads/2016/11/ramanathaswamy-temple-rameshwaram.jpg'}  
          cardTitle={'Rameshwaram'} 
          moreDetail={'https://www.indianholiday.com/blog/famous-temples-tamil-nadu/'} />

        <CardCo Imagesrc={'https://www.tamilnadutourism.com/blog/wp-content/uploads/2023/02/kanchi-kailasanathar-temple.jpg'}  
          cardTitle={'Kanchipuram'} 
          moreDetail={'https://www.tamilnadutourism.com/blog/most-popular-temples-in-tamilnadu-you-must-visit-on-your-spiritual-journey/'} />
      </div>
      
    </div>
  );
};

export default Destionations;
