"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import HotelOptions from "./ui/HotelOptions";

export const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z
    .object({
      from: z.date().optional(),
      to: z.date().optional(),
    })
    .refine((val) => val.from && val.to, {
      message: "Please insert valid dates",
    }),
  adults: z
    .string()
    .min(1, {
      message: "Please select at least 1 adult",
    })
    .max(12, { message: "Max 12 adults Occupancy" }),
  children: z.string().min(0).max(12, {
    message: "Max 12 children Occupancy",
  }),
  rooms: z.string().min(1, {
    message: "Please select at least 1 room",
  }),
});

function HotelSearchForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    /*
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },*/
  });

  function onSubmitBtn() {
    router.push(`/search`);
    //console.log(values);
    /*
    if (values.dates.from && values.dates.to) {
      const checkin_monthday = values.dates.from.getDate().toString();
      const checkin_month = (values.dates.from.getMonth() + 1).toString();
      const checkin_year = values.dates.from.getFullYear().toString();
      
      const checkout_monthday = values.dates.to.getDate().toString();
      const checkout_month = (values.dates.to.getMonth() + 1).toString();
      const checkout_year = values.dates.to.getFullYear().toString();

      const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
      const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

      const url = new URL("https://www.booking.com/searchresults.html");
      url.searchParams.set("ss", values.location);
      url.searchParams.set("group_adults", values.adults);
      url.searchParams.set("group_children", values.children);
      url.searchParams.set("no_rooms", values.rooms);
      url.searchParams.set("checkin", checkin);
      url.searchParams.set("checkout", checkout);

      router.push(`/search?url=${url.href}`);
    }
      */
  }

  return (
    <section className="flex flex-col  lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-t-3xl bg-white p-5 border-2 shadow-md shadow-black z-50">
        <div className="flex flex-row justify-start items-start w-full">
        <HotelOptions />
        </div>
      <Form {...form}>
        <form
          onSubmit={() => onSubmitBtn()}
          className="flex flex-col lg:flex-row "
        >
          

          <div className="grid w-full lg:max-w-sm items-center gap-1.5">
            <FormField
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white flex">
                    Location
                    <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                  </FormLabel>

                  <FormMessage />

                  <FormControl>
                    <Input placeholder="Tunisia, Monastir" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
            <FormField
              name="dates"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white">Dates</FormLabel>
                  <FormMessage />

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          id="date"
                          name="dates"
                          variant={"outline"}
                          className={cn(
                            "w-full lg:w-[300px] justify-start text-left font-normal"
                            // !field.value.from && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                          {field.value?.from ? (
                            field.value?.to ? (
                              <>
                                {format(field.value?.from, "LLL dd, y")} -{" "}
                                {format(field.value?.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(field.value?.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Select your dates</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range" //select the beginning & the ending day
                        /*
                    selected={{
                      from: field.value.from,
                      to: field.value.to,
                    }}*/
                        //defaultMonth={field.value.from}
                        //onSelect={field.onChange}
                        numberOfMonths={2}
                        //date refers to each individual date object that the Calendar component iterates through when rendering its available days,
                        // for each day displayed in the calendar, the function evaluates whether it's disabled based on the comparison.
                        //setHours(0, 0, 0, 0): This method sets the hours, minutes, seconds, and milliseconds of the Date object to 0, effectively resetting it to midnight of the current day.
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full items-center space-x-2">
            <div className="grid items-center flex-1">
              <FormField
                name="adults"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white">Adults</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input type="number" placeholder="Adults" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid items-center flex-1">
              <FormField
                name="children"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white">Children</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input type="number" placeholder="Children" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid items-center flex-1">
              <FormField
                name="rooms"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white">Rooms</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input type="number" placeholder="rooms" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-auto">
              <Button
                type="button"
                onClick={() => router.push(`/search`)}
                className="bg-blue-500 text-base"
              >
                Search
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default HotelSearchForm;
