import {
  descriptionLookup,
  categoryLookup,
  acceptedViolationCodes
} from "./violationCodeDescriptions/violationCodeDescriptions";
import { MovingViolation } from "../constants/types/types";

export const useMovingViolationQuery = async () => {
  try {
    const yearToDateResponse = await fetch(
      "https://data.cityofnewyork.us/resource/57p3-pdcj.json?$limit=30000&rpt_owning_cmd=094"
    );

    const historicalResponse = await fetch(
      "https://data.cityofnewyork.us/resource/bme5-7ty4.json?$limit=30000&rpt_owning_cmd=094"
    );

    const yearToDateData = await yearToDateResponse.json();
    const historicalData = await historicalResponse.json();

    const totalData = yearToDateData.concat(historicalData);

    const filteredTotalData = totalData.filter((element: MovingViolation) =>
      acceptedViolationCodes.includes(element.violation_code)
    );

    filteredTotalData.forEach((element: MovingViolation) => {
      element.violation_description = descriptionLookup[element.violation_code];
      element.violation_date = new Date(element.violation_date)

      for (let key in categoryLookup) {
        if(categoryLookup[key].includes(element.violation_code)) {
          element.violation_category = key
        }
      }
    });

    return filteredTotalData;
  } catch (error) {
    return error;
  }
};
