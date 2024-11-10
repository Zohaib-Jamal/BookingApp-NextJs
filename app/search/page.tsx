import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

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

//{ searchParams }: Props

async function SearchPage() {
  //if (!searchParams.url) return notFound();

  //const results = await fetchResults(searchParams);

  // if (!results) return <div className="my-56 text-red-600 text-9xl text-center  ">No results...</div>;

  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <h1 className="text-4xl font-bold pb-3">Your Trip Results</h1>

        <h2 className="pb-3">
          Dates of trip:
          <span className="italic ml-2">2024-1-15 to 2024-1-15</span>
        </h2>

        <hr className="mb-5" />

        <h3 className="font-semibold text-xl">Sousse: 116 properties found</h3>

        <div className="lg:hidden">
            <DealsCard name="Holiday Inn Express New York, IHG Hotel" />
          </div>

        <div className="space-y-2 mt-5 hidden lg:block">
          <div className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg">
            <img
              src="/place.jpg"
              alt="image of property"
              className="h-44 w-44 rounded-lg"
            />

            <div className="flex flex-1 space-x-5 justify-between">
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

export default SearchPage;
