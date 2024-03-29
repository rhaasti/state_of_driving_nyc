interface LocationPoint {
    coordinates: string[];
    type: string;
}

export interface MovingViolation {
    chg_law_cd: string;
    city_nm: string;
    evnt_key: string;
    juris_cd: string;
    latitude: string;
    location_point: LocationPoint;
    longitude: string;
    rpt_owning_cmd: string;
    veh_category: string;
    violation_code: string;
    violation_date: Date;
    violation_description: string;
    violation_category: string;
    violation_time: string;
    x_coord_cd: string;
    y_coord_cd: string;
}

export interface DescriptionLookup {
    [key: string]: string
}

export interface CategoryLookup {
    [key:string]: string[]
}

export interface ViolationsByYear {
    [key: string]: number
}

export interface MovingViolationCollection {
    [key: string]: MovingViolation[]
}

export interface DateRange {
    minDate: Date | null;
    maxDate: Date | null;
}

export interface BarChartProps {
    width: number;
    height: number;
    data: MovingViolation[]
}
