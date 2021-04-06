import React,{useState} from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import HeaderPageLogin from '../headePage/headerAfterLogin'

const items = [
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GxpBf-5qb899hamL6h1ykb8S3kqJjFPnpA&usqp=CAU",
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
        src:'https://media.worldnomads.com/Travel-Safety/nepal/nepal-altitude-sickness.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
        src:'http://www.e-tourismfrontiers.com/wp-content/uploads/2014/11/Nepal.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
  const buttontitle = [
    {
      name: 'overview',
      value: '1',
    },
    {
      name: 'itinerary',
      value: '2',
    },
    {
      name: 'trip fact',
      value: '3',
    },
    {
      name: 'cost info ',
      value: '4',
    },
  ]

const  TravelToursDetail=(props)=> {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [display, setDisplay] = useState(1);
    const [activeButton, setActiveButton] = useState(buttontitle[0].name)
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const onSideBtnClick=(e)=>{
      e.preventDefault();
      setDisplay(e.target.id)
      console.log("hello nepal",props)
      const name=e.target.innerText

      setActiveButton(name) 
    }
   const  onBooking=()=>{
      props.history.push('/booking')
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
        className="ImageTravelContainer"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} className="ImageCustomizeSlide" alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
        <div>
            <div>
                <HeaderPageLogin/>
            </div>
            <div className="TravelTourContentConytainer">
              <div className="TravelInnerContainer">

            <Carousel
            className="CarouselCustomize"
             activeIndex={activeIndex}
            next={next}
            previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}

      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <div className="CardDescriptionContainer">
    <div className="TitleForDescription">
      {buttontitle.map((items,index)=>{
        	const className =
					activeButton === items.name ? ' ButtonClassActiveTour ' : 'ButtonClassTourDisable'
        return(
       
        <div
        id={items.value}
        onClick={onSideBtnClick}
						className={` ${className}`}
        >{items.name}</div>
     
        )
      })}
       </div>
      <div className="LowerDescriptionContainer">
        {display==1 &&
        <div>
         Annapurna Base Camp Trekking is one of the most popular and well-known treks in the Annapurna region.. It is one of the demanded trekking among the trekkers. Starting point of the Annapurna base camp trekking is from the pokhara, the beautiful lake city in west Nepal. Annapurna base camp Trek is a mountainous region in the north central of Nepal comprising series of peaks which includes the 10th highest peak Annapurna I. Along with thirteen peaks above 8000 m, range and 16 other over 7,000m. The entire surrounding area of the Annapurna region is protected by the Annapurna Conservation Area Project within the 7,639 kilometer square range. This is the first and largest conversation area of Nepal. 
         The Annapurna Conversation Area organizes several world class trekking.
          meant amazing views and an amazing experience flying over the mountains coming in to Lukla.
        </div>      
        }
         {display==2 &&
        <div>
         Arrive at Kathmandu airport (1345meters).
Welcome to the Himalayan country of Nepal. Representative of Lovely Nepal Tours and Travels receives at the airport and transfer you to the hotel. A short briefing is given to you about the activities of tomorrow. Overnight at hotel. (B & B)

Day 02
Information about trip & full day sightseeing around Kathmandu valley.
After the breakfast, you set out for the guided city sightseeing trip. Kathmandu is a city of temples. The tour escorts you to the UNESCO listed World Heritage Sites. Temples and Buddhist Stupas are the focused travelling monumental sites. Pashupatinath (Hindu shrine), Boudhanath (Buddhist Stupa), Kathmandu Durbar Square and Swayambhunath Stupa are some of them. The mediaeval arts and architectures are amazing. Drive back to the hotel and take a rest. Overnight at hotel. (B & B)

Day 03
Drive to Pokhara from Kathmandu (200 Kilometers). About 6 hours.
Tourist buses leave at 7 am in the morning so you have to report at 6.30 am. But, the time is flexible having a private vehicle. It is more comfortable and drive at your time. Leaving Kathmandu, the Hilly scenery astounds you. The winding road above the River, forests, villages, fields all are awesome. Reaching Pokhara, transfer to the hotel. If you like, we can get out for the boating or walk around the city. (There is also a flight option from Kathmandu to Pokhara) Overnight at hotel. (B & B)

Day 04
Drive from Pokhara to Nayapul and Trek to Tikhedunga. About 4 hours.
After the breakfast at the hotel, we drive to Nayapul. It takes an hour to reach there. A short walk leads you to the ACAP (Annapurna Conservation Area Project) office. Then we begin the trek, enjoying the terraced fields and green hills. The first day of the trek, we walk a short distance. First, we reach to
        </div>      
        }
         {display==3 &&
        <div>
          The trek starts off going through many small villages along the path, 
          and its very interesting seeing people go about their daily lives there, 
          alongside sweeping beautiful views of greenery over the mountains,
           passing cows and donkeys carrying loads (the only version of Himalayan traffic jams youll see!) and lots of bridges to cross over the river.
            As the altitude goes higher the whole landscape changes to an alpine one with more shrubs and gravel and views of the snowy mountains above, and the climbing becomes colder, windier and more difficult because of the altitude, with some sections of steep climbing. Our guide Bibek was amazing he not only was cheery and easy to get along with, always motivating us with a Lets do!, but he gave us invaluable advice about what we needed for each days trek, what the route would be like, and recommendations on buying things like hiking poles and scarves where we would have struggled without them. Not only that but he has great knowledge of the surrounding mountains and views. He was also very understanding when things were harder for us, and always made sure we were well taken care of! Our safety and comfort were the most important things to him he always checked in on how we were feeling, took the lead when the trail was tough to show us the safest and easiest route, 
          and kept us safe from the traffic mentioned above.
          ant amazing views and an amazing experience flying over the mountains coming in to Lukla.
        </div>      
        }
          {display==4 &&
        <div>
          “My partner and I went on this unforgettable trek for 12 days to EBC and had an amazing time.
           There were issues with the flights on the day we were due to fly to Lukla but the company booked us a helicopter at no extra charge,
            which meant amazing views and an amazing experience flying over the mountains coming in to Lukla.
        </div>      
        }

      </div>
      <button className="BookingButtonCustomize" onClick={onBooking}>Book Now</button>
    </div>
    </div>

            </div>
            
        </div>
    )
}
export default TravelToursDetail
