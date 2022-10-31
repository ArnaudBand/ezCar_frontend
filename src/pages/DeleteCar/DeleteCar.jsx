import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../../components/CarCard';
import getCars from '../../data-api/getCars';

export default function DeleteCar() {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div className="pb-8 px-4 md:px-16">
      <div className="flex flex-col items-center justify-center py-8 md:py-16 md:pb-32">
        <h1 className=" text-4xl font-bold text-center">
          List of cars created
        </h1>
        <p className=" text-xs text-slate-400">
          Please select the car to delete
        </p>
      </div>
      <Carousel responsive={responsive}>
        {cars.map((car) => (
          <div key={car.id}>
            <CarCard
              key={car.id}
              id={car.id}
              img={car.image}
              name={car.name}
              carType={car.car_type}
              carBrand={car.brand}
              carPrice={car.fee_per_day}
              carColor={car.color}
              deleteCar
            />
          </div>
        ))}
      </Carousel>
    </div>
    // <section className="pb-4">
    //   <div className="flex flex-col items-center justify-center py-16 md:pb-32">
    //     <h1 className=" text-4xl font-bold text-center">Available Cars.</h1>
    //     <p className=" text-xs text-slate-400">Lists of all cars for delete</p>
    //   </div>
    //   <div className="grid gap-4 grid-cols-responsive">
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={1}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={2}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={3}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={4}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    //     <CarCard
    //       id={5}
    //       img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
    //       name="Hyundai Venue"
    //       carType="Kia Sonet"
    //       carBrand="Hyundai"
    //       carPrice="40000"
    //       carColor="Red"
    //       deleteCar
    //     />
    // </section>
  // </div>
  );
}
