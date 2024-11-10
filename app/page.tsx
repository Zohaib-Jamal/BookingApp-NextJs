import Image from "next/image";
import { trending_data } from "@/data/trending";
import SearchForm from "@/components/SearchForm";

const x = "#013B94";

export default function Home() {
  return (
    <main className="bg-primary ">
      <section className="mx-auto max-w-7xl  p-6">
        <h2 className="font-bold text-5xl text-white ">Find your Next Stay</h2>
        <h3 className="text-white py-5  text-xl">
          Search low prices on flights, hotels and much more...
        </h3>
      </section>

      <section className="m-4 lt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-3xl">
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
      <section className="w-full bg-white pt-10 pb-5 px-10 lg:rounded-t-3xl">
        <h2 className="font-bold text-3xl mb-7">Browse By Property Type</h2>
        <div className="hidden lg:flex flex-row justify-start items-center">
          {proprtyArray.map((name, id) => (
            <BrowseByPropertyCard key={id} name={name} />
          ))}
        </div>
        <div className="flex lg:hidden flex-row justify-start items-center">
          <BrowseByPropertyCard name="Hotel" />
        </div>
      </section>
      <section className="w-full bg-white py-5 px-10">
        <div className="mb-7">
          <h2 className="font-bold text-3xl mb-3">Deals for Weekend</h2>
          <span className="font-light ">
            Save on stays for 15 November - 17 November
          </span>
        </div>
        <div className="hidden lg:flex flex-row   justify-start items-start">
          {DealsArray.map((name, id) => (
            <DealsCard key={id} name={name} />
          ))}
        </div>
        <div className="flex lg:hidden flex-row justify-start items-start">
          <DealsCard name="Holiday Inn Express New York, IHG Hotel" />
        </div>
      </section>
      <section className="w-full bg-white py-5 px-10">
        <h2 className="font-bold text-3xl mb-7">
          Get inspiration for your next trip
        </h2>
        <div className="flex flex-col lg:flex-row w-full justify-start items-start">
          <div className="relative h-96 w-full lg:w-3/6 mr-10">
            <Image
              src="/people.webp"
              fill
              alt="blog"
              className="rounded-lg object-cover"
            />
            <div className="p-3 absolute inset-0 flex flex-col justify-end items-start text-white bg-black/50 rounded-lg">
              <h4 className="text-2xl font-bold">
                New Year's Eve in New York City
              </h4>
              <span className="text-left">
                Ring in New Year with iconic moments and unforgettable memories
                in New York City
              </span>
            </div>
          </div>
          <div>
            <div className="hidden lg:flex flex-row">
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const proprtyArray = ["Hotel", "Apartments", "Resorts"];
const DealsArray = [
  "Holiday Inn Express New York, IHG Hotel",
  "CitizenM WashingtonDC",
];

const BrowseByPropertyCard = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col justify-start items-start mr-3">
      <Image
        src="/hotel.jpeg"
        height={300}
        width={300}
        alt="hotel image"
        className="rounded-md"
      />
      <span className="font-semibold text-lg ">{name}</span>
    </div>
  );
};

const BlogCard = () => {
  return (
    <div className="flex flex-col justify-start w-72 items-start mr-10 shadow-md border-2 rounded-lg border-white">
      <Image
        src="/place.jpg"
        height={300}
        width={300}
        alt="hotel image"
        className="rounded-md"
      />
      <div className="px-3 pb-2">
        <h4 className="font-semibold text-lg ">
          New Year's Eve in New York City
        </h4>
        <span className="text-left font-light text-sm">
          Ring in New Year with iconic moments and unforgettable memories in New
          York City
        </span>
      </div>
    </div>
  );
};

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
