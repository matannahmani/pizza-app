import Product from '../components/product';
import Flicking from "@egjs/react-flicking";
import {RiArrowLeftSLine} from 'react-icons/ri'
import React,{useEffect,useState} from 'react';
import {Image} from '@geist-ui/react';
const Productbox = () => {
    const [pizzalist,setpizzaList] = useState();
    const [pizzaindex,setIndex] = useState(0);
    const [loading,setLoading] = useState(true);
    const flicking = React.createRef(<Flicking/>);
    useEffect(() => {
        // fetch will be here to get pizzas
        const pizzaone = {key: 0, id: 0, img: 'pizza1', name: 'Pepperoni',price: 9.20,description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores molestias veritatis quidem.',size: 'XL',amount: 1}
        const pizzatwo = {key: 1,id: 1, img: 'pizza1', name: 'Margartia',price: 9.50,description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores molestias veritatis quidem.',size: 'XL',amount: 1}
        const pizzathree = {key: 2,id: 2, img: 'pizza1', name: 'Shrimps',price: 9.90,description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores molestias veritatis quidem.',size: 'XL',amount: 1}
        setpizzaList([pizzaone,pizzatwo,pizzathree])
        setLoading(false);
    }, [])
    return (
        
        <>
        {loading ? 
        <div className="product-slider">
            LOADING
        </div>
        :
        <div className="product-slider">
            <Flicking ref={flicking} onSelect = {(e) => {flicking.current.moveTo(e.index,500)}}  onChange = {(e) => setIndex(e.index)}   inputType = {["touch", "mouse"]} className="flicking flicking0"  autoResize = {true}
  adaptive = {true}bound={true} gap={16} circular={true}>
                
                {pizzalist !== 'undefined' ? 
                pizzalist.map((e) => 
                    {
                        if (e.img === '')
                            return(
                                <div key={e.id} className="panel">
                                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M100 200C155.228 160 160 155.228 160 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 160 100 200Z" fill="#5D6292"/>
                                    </svg>
                                </div>
                            )
                        else
                        {
                            return(
                                <Image src={`${e.img}.png`} width={160} height={160}/>
                            )
                        }
                })
                : console.log(false)}
            </Flicking>
            <div className="slider-indicators">
            <RiArrowLeftSLine onClick={() => flicking.current.prev(500)} className="glow" />
            <RiArrowLeftSLine onClick={() => flicking.current.next(500)} className="right glow"/>
            </div>
            <Product pizza={{...pizzalist[pizzaindex]}}/>
        </div>
        }
        </>
    )
}
export default Productbox;