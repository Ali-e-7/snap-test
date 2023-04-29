import Icon from "@mdi/react";
import { mdiSortAscending, mdiMagnify } from "@mdi/js";

export default function Filters() {
  return (
    <>
      <div className="filters">
        <button className="filtrs__btn">
          <Icon path={mdiMagnify} size={0.7} className="filtrs__btn__icon" />
          فیلتر ها
        </button>
        <button className="filtrs__btn">
          <Icon
            path={mdiSortAscending}
            size={0.7}
            className="filtrs__btn__icon"
          />
          مرتب سازی
        </button>
        <button className="filtrs__btn">جایزه خرید</button>
        <button className="filtrs__btn">فود پرو</button>
        <button className="filtrs__btn">دارای کوپن</button>
        <button className="filtrs__btn">دارای تخفیف</button>
      </div>
    </>
  );
}
