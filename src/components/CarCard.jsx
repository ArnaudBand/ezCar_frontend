import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CarCard(props) {
  const {
    id,
    img,
    name,
    carType,
    carBrand,
    carPrice,
    carColor,
    reservationDate,
    reservation,
    deleteCar,
  } = props;
  const date = new Date();
  const reservationLink = `reservation/${id}`;
  const today = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join(
    '-',
  );

  return (
    <Link to={reservationLink}>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-3">
        <img className="rounded-t-lg" src={img} alt={name} />
        <div className="p-5">
          <h1 className=" text-xl">
            {name}
            {' '}
            (
            {carBrand}
            )
          </h1>
          {!deleteCar && <p className=" text-sm">{carType}</p>}
          {!deleteCar && <p className=" text-xs">{carColor}</p>}
          {reservation && (
            <div
              className={
                today > reservationDate
                  ? ' bg-red-400 self-end p-2 rounded-full'
                  : ' bg-green-400 self-end p-2 rounded-full'
              }
            >
              <p>{reservationDate}</p>
            </div>
          )}
          {!reservation && !deleteCar && (
            <p className="self-end py-2 px-2 bg-lime-500 rounded-full my-4">
              $
              {carPrice}
              /day
            </p>
          )}
          {deleteCar && (
            <button
              className=" bg-red-400 self-stretch p-2 rounded-full mt-4 hover:bg-red-600 active:bg-red-200"
              type="button"
            >
              Delete Car
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default CarCard;

CarCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  carType: PropTypes.string.isRequired,
  carBrand: PropTypes.string.isRequired,
  carPrice: PropTypes.number.isRequired,
  carColor: PropTypes.string.isRequired,
  reservationDate: PropTypes.string,
  reservation: PropTypes.bool,
  deleteCar: PropTypes.bool,
};

CarCard.defaultProps = {
  reservationDate: String(Date.now()),
  reservation: false,
  deleteCar: false,
};
