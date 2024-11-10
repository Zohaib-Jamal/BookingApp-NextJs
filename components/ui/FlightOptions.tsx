import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FlightOptions() {
  return (
    <div className="flex flex-row">
      <div className="mx-5 flex justify-center items-center ">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html" className="ml-2 text-sm">
          One Way
        </label>
      </div>
      <div className="mx-5 flex justify-center items-center ">
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css" className="ml-2 text-sm">
          Return
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
          Multi City
        </label>
      </div>
    </div>
  );
}
