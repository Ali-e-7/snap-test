
import { mdiMagnify, mdiSortAscending, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import './style.scss';
import { firstList } from './vendorSlice';
import { useDispatch, useSelector } from 'react-redux';
import VendorsCards from './components/VendorsCard';
import ScrollTopBtn from './components/ScrollTopBtn';
import { useEffect  } from 'react';
import { getVendors } from './vendorSlice';
import { useOnScrollLoadMore } from '../../assets/http/loadMore';


export default function VendorList() {

    const state = useSelector(firstList)
    const dispatch = useDispatch()
    const cards = state.finalResult?.map((card, index) => <VendorsCards cardsData={card.data} key={card.data.id - index} />)

    
    const page = useOnScrollLoadMore(50,1);

    useEffect(() => {
        dispatch(getVendors(page))
        
    },[page])
    return <div className='vendors-list'>
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
            <div className='sort-title'>{state?.count} فروشنده ی باز</div>
        </div>
        <div className="scrollableContainer">

            {cards}
        </div>
        <ScrollTopBtn />
    </div>
}