"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useMovingViolationQuery } from "../queries/queries";
import {
  MovingViolation,
  MovingViolationCollection,
  ViolationsByYear,
  DateRange
} from "../constants/types/types";
import { CATEGORIES } from '../constants/constants'
import { BarChart } from "./BarChart";

export const SpeedComponent = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    minDate: null,
    maxDate: null,
  });
  const [movingViolationCollection, setMovingViolationCollection] =
    useState<MovingViolationCollection | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES.RECKLESS_DRIVING)
  const [violationsByYear, setViolationsByYear] = useState<ViolationsByYear | null>(null)

  const movingViolationQuery = useQuery({
    queryKey: ["movingViolation"],
    queryFn: useMovingViolationQuery,
  });



  useEffect(() => {
    const movingViolationCollectionTempObj: MovingViolationCollection = {};
    let minDateTemp: Date | null = null;
    let maxDateTemp: Date | null = null;

    movingViolationQuery.data?.forEach((element: MovingViolation) => {
      if (!minDateTemp || element.violation_date < minDateTemp) {
        minDateTemp = element.violation_date;
      }

      if (!maxDateTemp || element.violation_date > maxDateTemp) {
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

    setDateRange({
      minDate: minDateTemp,
      maxDate: maxDateTemp,
    });

    setMovingViolationCollection(movingViolationCollectionTempObj);
  }, [movingViolationQuery.data]);

  useEffect(() => {
    console.log(movingViolationCollection, selectedCategory)


    const violationsByYearTempObj: ViolationsByYear = {}

    if(movingViolationCollection){
      if(Object.keys(movingViolationCollection).length !== 0 && selectedCategory) {
      movingViolationCollection[selectedCategory].forEach((violation) => {
        if(violationsByYearTempObj[violation.violation_date.getFullYear()]) {
          violationsByYearTempObj[violation.violation_date.getFullYear()] += 1
        } else {
          violationsByYearTempObj[violation.violation_date.getFullYear()] = 1
        }
      })
    }
  }

    setViolationsByYear(violationsByYearTempObj)

  }, [movingViolationCollection, selectedCategory])

  console.log(dateRange);
  console.log(movingViolationCollection);
  console.log(violationsByYear)

  return (
   <div>
      {/* <BarChart data={data} width={400} height={400}/> */}
    </div>
  );
};
