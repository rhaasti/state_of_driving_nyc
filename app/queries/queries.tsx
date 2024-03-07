import {
  descriptionObj,
  acceptedViolationCodes,
} from "./violationCodeDescriptions/violationCodeDescriptions";
import { MovingViolation } from "../types/types";

export const useSpeedQuery = async () => {
  // there isn't much in here related to the 94th precinct as far as speed
  // or school zone violations go

  try {
    const response = await fetch(
      "https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=50000"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const useMovingViolationQuery = async () => {
  try {
    const yearToDateResponse = await fetch(
      "https://data.cityofnewyork.us/resource/57p3-pdcj.json?$limit=10000&rpt_owning_cmd=094"
    );

    const historicalResponse = await fetch(
      "https://data.cityofnewyork.us/resource/bme5-7ty4.json?$limit=10000&rpt_owning_cmd=094"
    );

    const yearToDateData = await yearToDateResponse.json();
    const historicalData = await historicalResponse.json();

    const totalData = yearToDateData.concat(historicalData);

    const filteredTotalData = totalData.filter((element: MovingViolation) =>
      acceptedViolationCodes.includes(element.violation_code)
    );

    filteredTotalData.forEach((element: MovingViolation) => {
      element.violation_description = descriptionObj[element.violation_code];
    });

    return filteredTotalData;
  } catch (error) {
    return error;
  }
};
