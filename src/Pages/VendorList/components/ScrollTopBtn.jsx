import { mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import '../style.scss';
export default function ScrollTopBtn() {
    function goToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return <>
        <button className={`scroll--top--btn + ${window.innerHeight > 800 ? 'btn-show':'btn-hide'}`} onClick={goToTop}>
            <Icon path={mdiChevronUp} size={1.4} className='search__icon' />
        </button>
    </>
}