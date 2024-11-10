import { fetchResults } from "@/lib/fetchResults";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { trending_data } from "@/data/trending";
import FlightAndHotelForm from "@/components/FlightAndHotelForm";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

const RadioButton = ({ name }: { name: string }) => {
  return (
    <div className="flex justify-center items-center mb-2">
      <input
        type="radio"
        id={name}
        name="fav_language"
        value={name}
        className="appearance-none h-[20px] w-[20px] border border-gray-500 rounded-sm checked:p-[1px]    checked:border-primary checked:bg-primary checked:ring-2 checked:ring-primary checked:ring-offset-2 checked:ring-offset-white cursor-pointer"
      />
      <label htmlFor={name} className="ml-2 text-sm">
        {name}
      </label>
    </div>
  );
};

async function Both() {
  return (
    <main className="w-full h-full bg-primary">
      <section className="bg-primary">
        <section className="max-w-7xl w-full px-auto p-6 bg-primary xl:ml-20">
          <h2 className="font-bold text-5xl text-white ">
            Book Your Next Flight and Stay
          </h2>
          <h3 className="text-white py-5 text-xl">
            Discover amazing destinations and unbeatable prices. Start your journey
            today!
          </h3>
        </section>

        <section className="m-4 lt-0 -mb-14 px-2 lg:px-4 bg-primary">
          <FlightAndHotelForm />
        </section>

        <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-3xl  ">
          <div className="mt-5">
            <h3 className="text-xl font-bold">Trending Destination</h3>
            <p className="font-light">
              Most popular choices for travellers from arround the world
            </p>
          </div>
          <div className="flex space-x-4 py-5 overflow-x-scroll ">
            {trending_data.map((item) => (
              <div
                key={item.id}
                className="space-y-1 shrink-0 cursor-pointer scroll-smooth focus:scroll-auto"
              >
                <Image
                  key={item.id}
                  className="w-80 h-72 object-cover rounded-lg pv-2"
                  src={item.src}
                  height={500}
                  width={500}
                  alt={item.description}
                />
                <p className="font-bold">{item.title}</p>
                <h1>{item.location}</h1>
                <p className="font-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="w-full  p-10 lg:rounded-t-3xl bg-white">
        <div className="flex  flex-row ">
          <div className="hidden lg:flex flex-col w-[20%] border-r px-5">
            <h2 className="text-2xl font-bold text-left">Destinations</h2>
            <div className="flex flex-col justify-start items-start my-5">
              <h3 className="text-xl font-semibold text-left mb-5">America</h3>
              <RadioButton name="Argentina" />
              <RadioButton name="Canada" />
              <RadioButton name="Columbia" />
              <RadioButton name="Costo Rico" />
            </div>
            <div className="flex flex-col justify-start items-start my-5">
              <h3 className="text-xl font-semibold text-left mb-5">Asia</h3>
              <RadioButton name="Combodia" />
              <RadioButton name="Japan" />
              <RadioButton name="Nepal" />
              <RadioButton name="Thailand" />
            </div>
          </div>

          <div className="lg:hidden">
            <DealsCard name="Holiday Inn Express New York, IHG Hotel" />
          </div>

          <div className="hidden lg:block space-y-2 mt-5 w-full lg:w-[80%] lg:pl-10">
            <div className="flex flex-row space-y-2 justify-between space-x-4 p-5 border rounded-3xl">
              <img
                src="/place.jpg"
                alt="image of property"
                className="h-44 w-44 rounded-lg"
              />

              <div className="flex lg:flex-1 space-x-5 justify-between">
                <div>
                  <Link
                    href="/#"
                    className="font-bold text-blue-500 hover:text-blue-600 hover:underline"
                  >
                    Hotel Marhaba Beach
                  </Link>
                  <p className="text-xs">Standard Double Room</p>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex items-start justify-end space-x-2 text-right">
                    <div>
                      <p className="font-bold">Good</p>
                      <p className="text-xs">141 reviews</p>
                    </div>

                    <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rounded-lg flex-shrink-0">
                      7.8
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs ">3 nights, 1 adult</p>
                    <p className="text-2xl font-bold">$121</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const DealsCard = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col justify-between items-start mr-3 w-72 h-full shadow-md border-2 rounded-lg border-white">
      <Image
        src="/place.jpg"
        height={300}
        width={300}
        alt="hotel image"
        className="rounded-md"
      />
      <div className=" flex flex-col h-32 w-full justify-between  px-2">
        <h4 className="font-semibold text-lg ">{name}</h4>
        <span className="font-light">Dubai, United Arab Emirates</span>
        <div className="flex flex-row justify-between items-center">
          <span className="text-white  bg-primary px-1 rounded-sm mr-2">8</span>
          <span className="font-light text-sm mr-2">Very Good</span>
          <span className="font-thin text-sm">5784 reviews</span>
        </div>
        <div className="flex w-full flex-row justify-end items-center">
          <span className="pr-2 font-bold text-sm">2 nights</span>
          <h5 className=" text-base">USD 250</h5>
        </div>
      </div>
    </div>
  );
};

export default Both;
