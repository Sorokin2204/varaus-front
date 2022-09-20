import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const SearchSection = ({ value }) => {
  const occupancyOptions = [
    { value: 'one-adults', label: 'Один взрослый' },
    { value: 'two-adults-kid', label: 'Один взрослый + один ребёнок' },
    { value: 'two-adults', label: 'Два взрослых' },
    { value: 'two-adults-kid', label: 'Два взрослых + один ребёнок' },
  ];
  const roomsCountOptions = [
    { value: 'one-double-bed', label: 'Двуспальная кровать' },
    { value: 'two-double-bed', label: 'Две двуспальных кровать' },
    { value: 'two-double-bed-kids', label: 'Две односпальных кровать +  детская кровать' },
    { value: 'three-double-bed', label: 'Три односпальных кровать' },
  ];
  const countryOptions = [
    { value: 'argentina', label: 'Аргентина' },
    { value: 'belgium', label: 'Бельгия' },
    { value: 'egypt', label: 'Египет' },
    { value: 'germany', label: 'Германия' },
    { value: 'mexico', label: 'Мексика' },
    { value: 'latvia', label: 'Латвия' },
  ];
  const findInList = (value, list) => {
    return list?.find((item) => item?.value == value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wpo-select-section-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wpo-select-wrap">
              <div className="wpo-select-area">
                <form onSubmit={submitHandler} className="clearfix">
                  <div className="select-sub">
                    <span>Страна</span>
                    <h2>{findInList(value?.COUNTRY, countryOptions)?.label}</h2>
                  </div>{' '}
                  <div className="select-sub">
                    <span>Размещение</span>
                    <h2>{findInList(value?.COUNT_CUSTOMER, occupancyOptions)?.label}</h2>
                  </div>
                  <div className="select-sub">
                    <span>Кровати</span>
                    <h2>{findInList(value?.COUNT_BEDS, roomsCountOptions)?.label}</h2>
                  </div>
                  <div className="select-sub">
                    <span>Площадь комнаты, кв.м</span>
                    <h2>{value?.AREA}</h2>
                  </div>
                  <div className="select-sub">
                    <h5>
                      Цена <span>{'$' + value?.PRICE}</span> / за ночь
                    </h5>
                    <button className="theme-btn-s2" type="submit">
                      Проверить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
