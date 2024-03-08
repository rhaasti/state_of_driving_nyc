"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useMovingViolationQuery } from "../queries/queries";
import {
  MovingViolation,
  MovingViolationCollection,
  DateRange,
} from "../types/types";

export const SpeedComponent = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    minDate: null,
    maxDate: null,
  });
  const [movingViolationCollection, setMovingViolationCollection] =
    useState<MovingViolationCollection | null>(null);



  const movingViolationQuery = useQuery({
    queryKey: ["movingViolation"],
    queryFn: useMovingViolationQuery,
  });

  useEffect(() => {
    const movingViolationCollectionTempObj: MovingViolationCollection = {};
    let minDateTemp = "";
    let maxDateTemp = "";

    movingViolationQuery.data?.forEach((element: MovingViolation) => {
      if (minDateTemp === "" || element.violation_date < minDateTemp) {
        minDateTemp = element.violation_date;
      }

      if (maxDateTemp === "" || element.violation_date > maxDateTemp) {
        maxDateTemp = element.violation_date;
      }

      if (movingViolationCollectionTempObj[element.violation_category]) {
        movingViolationCollectionTempObj[element.violation_category].push(
          element
        );
      } else {
        movingViolationCollectionTempObj[element.violation_category] = [];
      }
    });

    //    const entriesToSort = Object.entries(descriptionStats)
    //    entriesToSort.sort((a, b) => {
    //     return b[1] - a[1]
    //    })

    //    console.log(entriesToSort)

    //    const sortedDescriptionStats = {}

    //    entriesToSort.forEach((element) => {
    //     sortedDescriptionStats[element[0]] = element[1]
    //    })

    setDateRange({
      minDate: new Date(minDateTemp),
      maxDate: new Date(maxDateTemp),
    });

    setMovingViolationCollection(movingViolationCollectionTempObj);
  }, [movingViolationQuery.data]);


  console.log(dateRange)
  console.log(movingViolationCollection)

  return (
    <div>
      {/* {speedQuery.data?.map((summons) => {
                return(
                <div>
                    {summons.violation}
                </div>
                )
            })} */}
      ={" "}
    </div>
  );
};
