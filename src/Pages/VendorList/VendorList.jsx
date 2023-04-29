
import "./style.scss";
import { firstList } from "./vendorSlice";
import { useDispatch, useSelector } from "react-redux";
import VendorsCards from "../../components/VendorsCard";
import ScrollTopBtn from "../../components/ScrollTopBtn";
import { useEffect } from "react";
import { getVendors } from "./vendorSlice";
import { useOnScrollLoadMore } from "../../hooks/useLoadMore";
import Filters from "../../components/Filters";
import SearchInput from "../../components/SearchInput";
export default function VendorList() {
  const state = useSelector(firstList);
  const dispatch = useDispatch();
  const cards = state.finalResult?.map((card, index) => (
    <VendorsCards cardsData={card.data} key={card.data.id - index} />
  ));

  const page = useOnScrollLoadMore(50, 1);

  useEffect(() => {
    dispatch(getVendors(page));
  }, [page]);

  return (
    <div className="vendors-list">
      <SearchInput />
      <Filters />
      <div className="total">
        <div className="sort-title">{state?.count} فروشنده ی باز</div>
      </div>
      <div className="scrollableContainer">{cards}</div>
      <ScrollTopBtn />
    </div>
  );
}
