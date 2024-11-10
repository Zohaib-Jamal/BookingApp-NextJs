import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function HotelOptions() {
  return (
    <div className="flex flex-row">
      <div className="mr-5 lg:mx-5 flex justify-center items-center ">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html" className="ml-2 text-sm">
          Single Room
        </label>
      </div>
      <div className="mx-5 flex justify-center items-center ">
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css" className="ml-2 text-sm">
          Double Room
        </label>
      </div>
      <div className="mx-5 flex justify-center items-center ">
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label htmlFor="javascript" className="ml-2 text-sm">
          Apartment
        </label>
      </div>
    </div>
  );
}
