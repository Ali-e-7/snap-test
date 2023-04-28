
import { mdiMagnify, mdiSortAscending, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import './style.scss';
import { firstList, getMoreVendors, newTest } from './vendorSlice';
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import VendorsCards from './components/VendorsCard';
import store from '../../store'

export default function VendorList() {
    const state = useSelector(firstList)
    const NewR = useSelector(newTest)
    const cards = state.finalResult?.map((card, index) => <VendorsCards cardsData={card.data} key={card.data.id - index} />)

    // const ref = useRef(null)
    // const setScroll = () => {
    //     const scroll = window.pageYOffset
    //     const height = ref.current.clientHeight/2
    //     if(scroll > height) {
    //         store.dispatch<any>(getMoreVendors)
    //         NewR.newResult.map(item => {
    //             state.finalResult.push(item)
    //         })

    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", setScroll);
    //     return () => {
    //         window.removeEventListener("scroll", setScroll);
    //     };
    // }, [state]);
    function test() {
        store.dispatch(getMoreVendors)
        NewR.newResult.map(item => {
            state.finalResult.push(item)
        })
    }

    function goToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return <div className='vendors-list' onClick={test} >
        <div className="search">
            <input type="text" className="search__input" placeholder='جستجو   ' />
            <Icon path={mdiMagnify} size={1.4} className='search__icon' />
        </div>
        <div className="filters">
            <button className='filtrs__btn'>
                <Icon path={mdiMagnify} size={0.7} className='filtrs__btn__icon' />
                فیلتر ها

            </button>
            <button className='filtrs__btn'>
                <Icon path={mdiSortAscending} size={0.7} className='filtrs__btn__icon' />
                مرتب سازی

            </button>
            <button className='filtrs__btn' >جایزه خرید</button>
            <button className='filtrs__btn'>فود پرو</button>
            <button className='filtrs__btn'>دارای کوپن</button>
            <button className='filtrs__btn'>دارای تخفیف</button>
        </div>
        <div className="total">
            <div className='sort-title'>{state.count} فروشنده ی باز</div>
        </div>
        <div className="scrollableContainer">

            {cards}
        </div>
        <button className=' scroll--top--btn' onClick={goToTop}>
            <Icon path={mdiChevronUp} size={1.4} className='search__icon' />
        </button>
    </div>
}