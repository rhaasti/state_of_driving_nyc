import { DescriptionLookup, CategoryLookup } from "../../constants/types/types";

export const categoryLookup: CategoryLookup = {
  'RECKLESS DRIVING': ["402C", "1110A", "412P2", "407C", "1225A", "407H1", "1127A", "404D", "403C1", "404B", "403A1", "403A3II", "1160C", "1160B", "1160A", "1163AT", "1128A", "1122A"],
  'STOP SIGN': ["1172A"],
  'RED LIGHT': ["403A3I", "403A4", "1111D3", "1111D1N"],
  'SPEED': ["1180A", "1180D", "406A1", "406A2", "1180B", "1180C", "406A3"],
  'PLATE OBFUSCATION': ["4021B1", "4021B2"],
  'DISTRACTED DRIVING': ["1225D", "1225C2A"]
}

export const acceptedViolationCodes = [
  "412P2",
  "1122A",
  "4021B1",
  "4021B2",
  "1110A",
  "1111D1N",
  "1111D3",
  "1127A",
  "1128A",
  "1160A",
  "1160B",
  "1160C",
  "1163AT",
  "1166B",
  "1166C",
  "1172A",
  "1180A",
  "1180B",
  "1180C",
  "1180D",
  "1180F",
  "1225A",
  "1225C2A",
  "1225D",
  "402C",
  "403A1",
  "403A3I",
  "403A3II",
  "403A4",
  "403A5",
  "403C1",
  "404B",
  "404D",
  "405B2",
  "406A1",
  "406A2",
  "406A3",
  "407A",
  "407C",
  "407H1",
  "407H2",
];

export const descriptionLookup: DescriptionLookup = {
  "413": "OPERATE TRUCK OFF AUTHORIZED RTE",
  "416": "OPERATE VEHICLE WITH DEALER PLATES MORE THAN 5 DAYS",
  "601": "LEAVE SCENE OF INCIDENT- DOMESTIC ANIMAL STRUCK AND INJURED",
  "1102": "FAILED TO COMPLY WITH LAWFUL ORDER",
  "1117": "FAILED TO STOP AT MALFUNCTIONING TRAFFIC LIGHT",
  "1121": "FAILED TO GIVE ONE HALF OF ROADWAY",
  "1124": "INTERFERED WITH SAFE OPERATION",
  "1131": "DRIVING ON SHOULDER/LIMITED ACCESS HGWY",
  "1141": "FAILED TO YIELD RIGHT-OF -WAY ON LEFT TURN",
  "1143": "FAILED TO YIELD RIGHT-OF -WAY WHEN ENTERING ROADWAY",
  "1145": "FAILED TO YIELD RIGHT-OF -WAY AT TRAFFIC CIRCLE",
  "1146": "FAILED TO USE DUE CARE BICYCLE/PEDESTRIAN/ANIMAL",
  "1162": "UNSAFE STARTING",
  "1165": "IMPROPER HAND SIGNAL",
  "1173": "FAILED TO STOP FROM ALLEY/DRIVEWAY/PRIVATE ROAD AS REQUIRED",
  "1175": "OBSTRUCTING INTERSECTION",
  "1176": "OBSTRUCTING RAILROAD CROSSING",
  "1214": "OPENED DOOR UNSAFELY",
  "1221": "DRIVING THRU SAFETY ZONE",
  "1225": "AVOIDING TRAFFIC DEVICE OR INTERSECTION",
  "1226": "NO HANDS ON WHEEL OR STEERING DEVICE",
  "1235": "ARTICLES ON BIKE OR SKATEBOARD",
  "1235E": "CARRYING ARTICLES ON E-BIKE E",
  "1238": "CHILD BICYCLE HELMET",
  "1456": "UNAUTHORIZED USE OF A FOR HIRE VEHICLE",
  "2501": "UNREGISTERED MOTOR VEHICLE-NON-RESIDENT",
  "2502": "NON-RESIDENT OPERATING MOTOR VEHICLE WITHOUT A LICENSE",
  "3753": "FAILED TO DIM HEADLAMPS",
  "3754": "FAULTY/UNAPPROVED HEADLIGHT",
  "3759": "NO FIRE EXTINGUISHER- OMNIBUS 10 PASS",
  "3762": "INSUFFICIENT WIRING-COMMERICAL VEHICLE",
  "3763": "UNAPPROVED LIGHTS/SIGNALS/REFLECTORS",
  "3812": "UNAPPROVED HEADLAMPS- MOTORCYCLE",
  "3813": "UNAUTHORIZED COLORED LIGHTS-MOTORCYCLE",
  "3814": "INADEQUATE/NO REAR REFLECTOR -MOTORCYCLE",
  "3815": "IMPROPER HANDLEBARS- MOTORCYCLE",
  "3816": "UNAPPROVED/NO PROTECTIVE HELMET MOTORCYCLE",
  "3817": "UNAPPROVED/NO FACE SHIELD/GOGGLES -MOTORCYCLE",
  "3818": "UNAPPROVED/NO WINDSCREEN- MOTORCYCLE",
  "3852": "OVERHEIGHT VEHICLE (13.5 FEET)",
  "3856": "OVERLOAD ON SINGLE TIRE",
  "3858": "OVERLOAD ON AXLE",
  "3859": "OVERLOAD ON CONSECUTIVE AXLES",
  "3961": "UNAUTHORIZED FEDERAL/STATE/MUNICIPAL SHIELD LETTERING",
  "3962": "UNAUTHORIZED POLICE SHIELD/SEAL LETTERING",
  "3963": "UNAUTHORIZED FIRE DEPT/SHIELD/SEAL LETTER",
  "4013": "FAILED TO CHANGE ADDRESS ON REGISTRATION",
  "4017": "IMPROPER USE/AGRICULTURAL TRUCK",
  "4021A": "NO LICENSE PLATE OR SINGLE LICENSE PLATE ADDED",
  "4021B1": "DIRTY PLATE OR PLATE COVERED BY GLASS OR PLASTIC ADDED",
  "4021B2": "PLATE KNOWINGLY COVERED WITH INTENT TO OBSCURE ADDED",
  "4021B3": "PLATE OBSCURED BY VEHICLE OR ANYTHING CARRIED THEREON ADDED",
  "4022": "PLATES NOT ISSUED BY COMMISSIONER",
  "4023": "UNREGISTERED TRAILER",
  "4024": "IMPROPER PLATES",
  "4025": "PERMITTING USE OF IMPROPER PLATES",
  "4026": "PERMITTING USE IN VIOLATION OF PROVISION SECTION 402",
  "4031": "NO/IMPROPERLY AFFIXED REGISTRATION STICKER",
  "4101": "UNREGISTERED MOTORCYCLE",
  "4111": "NO MOTORCYCLE PLATE",
  "4112": "PLATES FROM MORE THAN 1 STATE/NOT ISSUED BY NYS- MOTORCYCLE",
  "4113": "IMPROPER PLATES MOTORCYCLE",
  "4114": "PERMITTING IMPROPER USE OF PLATES ON A MOTORCYCLE",
  "4158": "MISUSE OF DEALER/TRANSPORTER PLATES",
  "4201": "FAILED TO REMOVE PLATES ON TRANSFER",
  "5051": "MUTILATED LICENSE",
  "5055": "FAILURE TO CHANGE ADDRESS ON LICENSE",
  "5091": "UNLICENSED OPERATOR",
  "5092": "OPERATING OUT OF CLASS",
  "5093": "OPERATING IN VIOLATION OF RESTRICTIONS",
  "5094": "PERMITTING UNLICENSED OPERATION",
  "5095": "HOLDING MORE THAN 1 NYS LICENSE",
  "5096": "USING ANOTHERS LICENSE",
  "5097": "OPERATING CMV WITHOUT CDL",
  "5098": "FAILED TO NOTIFY DMV CHANGE OF ADDRESS",
  "5099": "OPERATING WITHOUT FILING NOTICE/DISABILITY",
  "5306": "VIOLATION OF RESTRICTED LICENSE",
  "5511": "ESCORTING WITHOUT CERTIFICATE",
  "10208": "FAILED TO OBEY SIGNS- TBTA",
  "10212": "OVERSIZE/WEIGHT VEHICLES",
  "10231": "CARELESS/NEGLIGENT OPERATION",
  "10237": "EVASION OF TOLL",
  "11302": "ENTERING EXIT RAMP OF A CONTINUOUS ACCESS HIGHWAY",
  "11967": "OPERATING IN VIOLATION OF CONDITIONAL LICENSE",
  "12221": "NO OPERATION UNLESS SEATS SECURE-AUTO TRUCK",
  "12271": "CONSUMPTION OF ALCOHOL IN MOTOR VEHICLE",
  "12271Z": "CONSUMPTION OF CANNABIS IN A MOTOR VEHICLE",
  "12331": "CLINGING TO MOVING MOTOR VEHICLE",
  "12332": "SELF TO MOVING MOTOR VEHICLE",
  "12333": "PERMITTING CLINGING TO MOTOR VEHICLE",
  "22611": "UNREGISTERED LIMITED USE VEHICLE",
  "22623": "LIMITED USE VEHICLE DRIVEN IN UNAUTHORIZED AREA",
  "22641": "FAILED TO DISPLAY NUMBER PLATES",
  "22644": "PERMITTING IMPROPER USE OF DEALER PLATES",
  "22651": "EQUIPMENT VIOLATION LIMITED USE VEHICLE",
  "22671": "UNREGISTERED DEALER LIMITED USE VEHICLE",
  "37511": "NO SAFETY GLASS-BUS",
  "37512": "NO SAFETY GLASS-MOTOR VEHICLE",
  "37513": "FAILURE TO REPLACE GLASS WITH SAFETY GLASS",
  "37517": "NO/INADEQUATE EMERGENCY REFLECTORS",
  "37518": "NO/INADEQUATE DIRECTIONAL SIGNALS",
  "37519": "OPERATOR PERMITTING OPERATION OF INADEQUATE VEHICLE",
  "37522": "VISIBILITY DISTORTED BROKEN/DISCOLORED GLASS",
  "37523": "NO DOOR HANDLES FOR HIRE VEHICLE",
  "37524": "UNLAWFUL USE OF TV RECEIVING SET",
  "37526": "UNLAWFUL USE OF SIREN OR GONG",
  "37527": "NO/INADEQUATE RED FLAG OR LIGHT ON LOAD",
  "37528": "UNNECESSARY SMOKE",
  "37529": "IMPROPER TOWING /MORE THAN 1 VEH",
  "37530": "DRIVERS VIEW OBSTRUCTED",
  "37531AV": "NO/INADEQUATE MUFFLER/EXHAUST SYSTEM ADDED",
  "37531BV": "SELL OFFER INSTALL ILLEGAL MOD VEHICLE EXHAUST ADDED",
  "37534": "NO BACKUP LIGHTS",
  "37537": "NO/IMPROPER CAUTIONARY DEVICE ON FROZEN DESSERT VEHICLE",
  "37542": "UNLAWFUL SPEEDOMETER",
  "37544": "OPERATE DRIVER ED VEHICLE WITH NO STUDENT DRIVER SIGN",
  "38110": "NO REARVIEW MIRROR MOTORCYCLE",
  "38111":
    "OPERATE MOTORCYCLE NO/ALTERED/ILLEGAL MOD EXHAUST MODIFIED DESCRIPTION",
  "38112": "OPERATE MOTORCYCLE ILLEGAL MOD EXHAUST MODIFIED DESCRIPTION",
  "38510": "OVERLOADED VEHICLE 3 OR MORE AXLES",
  "38514": "EXCEEDING BRIDGE CAPACITY/CLEARANCE",
  "38515": "NO OVERWEIGHT/OVERSIZE PERMIT",
  "50910": "HOLD VALID DRIVER LICENSES FROM NY AND OTHER JURISDICTIONS",
  "102310": "COASTING PROHIBITED",
  "123810": "REFLECTOR AFTER SUNSET",
  "191762": "OPERATING MOTORIZED SCOOTER IN NYC",
  "375411": "UNAUTHORIZED LIGHTS/IMPROPER COLOR",
  "375412": "NON AUTHORIZED EMERGENCY VEHICLE RED LIGHT/WHITE LIGHT USE",
  "375413": "NO AMBER LIGHT",
  "375414": "ILLEGAL BLUE LIGHT-VOLUNTEER FIRE",
  "375415": "NON AUTHORIZED GREEN LIGHT USEAGE- VOLUNTEER AMBULANCE",
  "408E5": "STOP IN CROSSWALK NYC",
  "10127B": "OWNER NAME/ADDRESS NOT DISPLAYED ON COMMERCIAL VEHICLE",
  "10208B": "FAILED TO OBEY SIGNS- TBTA",
  "10221C": "NO FLAT TIRES",
  "10221CB": "NO FLAT TIRES",
  "10231B": "CARELESS/NEGLIGENT OPERATION",
  "10232A": "UNREGISTERED VEHICLE-REG EXP LESS THAN 60 DAYS",
  "10233B": "FAILED TO COMPLY WITH ORDER",
  "10233BB": "FAILED TO COMPLY WITH ORDER",
  "1102B": "FAILED TO COMPLY WITH LAWFUL ORDER",
  "1110A": "DISOBEYED TRAFFIC DEVICE- PAVEMENT MARKINGS",
  "1110AB": "TRAFFIC DEVICE WHILE OPERATING BICYCLE",
  "1110HOV": "DISOBEYED TRAFFIC DEVICE-HOV LANE",
  "1111A1": "FAILED TO YIELD RIGHT-OF -WAY-GREEN LIGHT",
  "1111A1B": "FAILED TO YIELD RIGHT-OF -WAY-GREEN LIGHT",
  "1111A2D": "DISOBEYED GREEN ARROW",
  "1111A2F": "FAILED TO YIELD GREEN ARROW",
  "1111A2X": "DISOBEYED GREEN ARROW",
  "1111A2Z": "FAILED TO YIELD GREEN ARROW",
  "1111D1C": "OR SKATEBOARD FAILED TO STOP AT RED LIGHT",
  "1111D1E": "DISOBEYING A RED LIGHT ON A BICYCLE WITH ELECTRIC ASSIST E",
  "1111D1N": "NYC REDLIGHT",
  "1111D1R": "DISOBEYING A RED LIGHT ON AN ELECTRIC SCOOTER R",
  "1111D2A": "FAILED TO YIELD RIGHT-OF -WAY/RIGHT TURN AT RED SIGNAL",
  "1111D2B": "FAILED TO YIELD RIGHT-OF -WAY/LEFT TURN AT RED SIGNAL",
  "1111D3": "FAILED TO STOP ON A STEADY RED ARROW",
  "1111D5": "SCHOOL BUS TURN ON RED",
  "1111E": "FAILED TO OBEY TRAFFIC SIGNAL/SIGN",
  "1113A": "PASSED FLASHING RED LIGHT",
  "1113B": "PROCEED WITHOUT CAUTION/FLASHING YELLOW",
  "1114A": "DISPLAYED UNATHORIZED TRAFFIC CONTROL DEVICE",
  "1114B": "COMMERCIAL ADVERT ON TRAFFIC SIGN/CONTROL DEVICE",
  "1116D": "TRAVEL IN LANE CONTROLLED BY RED X SIGNAL",
  "1120A": "FAILED TO KEEP RIGHT",
  "1120B": "FAILED TO KEEP RIGHT/SLOW MOVING VEHICLE",
  "1120C": "FAILED TO KEEP RIGHT/4 OR MORE LANE",
  "1122A": "PASSED VEHICLE ON RIGHT",
  "1122AU": "FAILED TO SAFELY PASS A BICYCLE",
  "1122B": "FAILED TO GIVE RIGHT-OF -WAY",
  "1123B": "DROVE OFF PAVEMENT TO PASS ON RIGHT",
  "1125A2": "DRIVING TO LEFT AT RAILROAD CROSSING",
  "1126A": "DRIVING TO LEFT OF PAVEMENT MARKINGS",
  "1127A": "DRIVING WRONG DIRECTION ON ONE-WAY STREET",
  "1127AB": "WRONG DIRECTION ON ONE-WAY STREET-BICYCLE",
  "1127B": "DROVE LEFT AROUND CIRCULAR INTERSECTION",
  "1128A": "MOVED FROM LANE UNSAFELY/WEAVING",
  "1128B": "DRIVING IN CENTER LANE",
  "1128C": "FAILED TO USE DESIGNATED LANE",
  "1128D": "DROVE ACROSS HAZARD MARKING",
  "1129A": "FOLLOWING TOO CLOSELY",
  "1129B": "FAILED TO LEAVE SUFFICIENT SPACE/COMBINATION OF VEHICLES",
  "1140A": "FAILED TO YIELD RIGHT-OF -WAY AT INTERSECTION",
  "1140B": "FAILED TO YIELD RIGHT-OF -WAY TO VEHICLE ON RIGHT",
  "1142A": "FAILED TO YIELD RIGHT-OF -WAY AT STOP SIGN",
  "1142B": "FAILED TO YIELD RIGHT-OF -WAY AT YIELD SIGN",
  "1144A": "FAILED TO YIELD RIGHT-OF -WAY TO EMERGENCY VEHICLE",
  "1144AV": "FAIL TO USE DUE CARE PASSING HAZARD/EMERGENCY VEHICLE",
  "1146A": "FAILED TO USE DUE CARE BICYCLE/PEDESTRIAN/ANIMAL",
  "1146A1": "FAILED TO USE DUE CARE APPROACHING HORSE",
  "1146A2": "IMPRUDENT SPEED APPROACHING HORSE",
  "1146B": "FAILED TO USE DUE CARE PERSONAL INJURY",
  "1151A": "FAILED TO YIELD RIGHT-OF -WAY TO PEDESTRIAN ON SIDEWALK",
  "1151C": "PASSED STOPPED VEHICLE AT INTERSECTION",
  "1153A": "FAILED TO YIELD RIGHT-OF -WAY TO BLIND PERSON",
  "1160A": "IMPROPER RIGHT TURN AT INTERSECTION",
  "1160B": "IMPROPER LEFT TURN ON TWO-WAY ROADWAY",
  "1160C": "IMPROPER LEFT TURN ON ONE-WAY ROADWAY",
  "1160D": "FAILED TO TURN AS REQUIRED",
  "1160E": "IMPROPER U-TURN",
  "1161A": "IMPROPER U-TURN AT GRADE/CURVE",
  "1161B": "IMPROPER U-TURN IN SCHOOL ZONE",
  "1163AS": "IMPROPER SIGNAL",
  "1163AT": "IMPROPER TURN",
  "1163B": "INSUFFICIENT TURN SIGNAL-LESS THAN 100 FEET",
  "1163CD": "DECREASED SPEED WITHOUT SIGNALING",
  "1163CS": "STOPPED WITHOUT SIGNALING",
  "1163D": "FAILED TO SIGNAL LANE CHANGE",
  "1163DI": "IMPROPER SIGNAL WHEN CHANGING LANES",
  "1163E": "FAILED TO USE/IMPROPER USE 4-WAY FLASHERS",
  "1164B": "FAILED TO USE SIGNAL AS REQUIRED",
  "1166A": "IMPROPER RIGHT TURN",
  "1166B": "IMPROPER LEFT TURN-TWO-WAY ROADWAY",
  "1166C": "IMPROPER LEFT TURN-ONE-WAY ROADWAY",
  "1170A": "FAILED TO STOP AT RAILROAD CROSSING",
  "1170B": "DROVE THRU/AROUND/UNDER RAILROAD BARRIER",
  "1172A": "FAILED TO STOP AT STOP SIGN",
  "1172B": "FAILED TO STOP AT YIELD SIGN WHEN REQUIRED",
  "1174A": "FAILED TO STOP SCHOOL BUS",
  "1174B": "FAILED TO KEEP SCHOOL BUS HALTED/LIGHTED (DRIVER)",
  "1180A": "SPEED NOT REASONABLE AND PRUDENT",
  "1180B": "SPEEDING",
  "1180C": "SPEEDING IN SCHOOL ZONE",
  "1180D": "SPEED OVER POSTED LIMIT",
  "1180D2": "SPEEDING ON RESTRICTED HIGHWAY",
  "1180DJ": "SPEED OVER POSTED LIMIT-JR DRIVER",
  "1180E": "UNREASONABLE SPEED/SPECIAL HAZARDS",
  "1180F": "SPEEDING IN WORK ZONE",
  "1181A": "DRIVING TOO SLOW",
  "1181B": "DRIVING TOO SLOW IN ZONE",
  "11967F": "OPERATOR IN VIOLATION OF CONDITIONAL LICENSE",
  "1210A": "UNATTENDED VEHICLE ENGINE RUNNING",
  "1211A": "BACKING UNSAFELY",
  "1211B": "BACKING ON CONTROLLED -ACCESS HIGHWAY",
  "1213A": "DRIVERS VIEW OBSTRUCTED BY OVERLOAD OR TOO MANY PASSENGERS",
  "1213B": "PASSENGER INTERFERED WITH DRIVER VIEW/CONTROL",
  "1215U": "VEHICLE NOT UNDER CONTROL ON MOUNTAIN HIGHWAY",
  "1217F": "FOLLOWING FIRE APPARATUS TOO CLOSELY",
  "1217I": "INTERFERED WITH FIRE APPARATUS",
  "1219A": "THREW/DEPOSITED GLASS/ETC ON HIGHWAY",
  "1219AB": "THREW/DEPOSITED GLASS/ETC ON HIGHWAY",
  "1220A": "THREW/DEPOSITED REFUSE/ETC HIGHWAY",
  "1220AB": "THREW/DEPOSITED REFUSE/ETC HIGHWAY",
  "1220B": "UNLAWFUL SOLICITATION OF GROUND TRANSP AT AIRPORT",
  "12221C": "NO OPERATION UNLESS TAILGATE SECURE",
  "1225A": "DRIVING ON SIDEWALK",
  "1225C2A": "OPERATING MOTOR VEHICLE WHILE ON MOBILE PHONE",
  "1225C2D": "MOTOR CARRIER ALLOW/REQUIRE DRIVER TO USE CELL PHONE IN CMV",
  "1225D": "OPER MOTOR VEHICLE WHILE USING PORTABLE ELECTRONIC DEVICE",
  "1225D1A": "MOTOR CARRIER ALLOW/REQ DRIVER TO USE PORT ELECT DEV IN CMV",
  "1229AB": "DRAWN VEHICLE ON EXPRESSWAY",
  "1229B1": "OPERATING CAMP/CHARTER BUS WITH STANDEES/10 MILES OR MORE",
  "1229C1A": "BACK SEAT PASSENGER LESS THAN 4 NO/IMPROPER RESTRAINT",
  "1229C1B": "BACK SEAT PASSENGER AGE 4-7 NO/IMPROPER RESTRAINT",
  "1229C1C": "BACK SEAT PASSENGER AGE 8-15 NO/IMPROPER SEAT BELT",
  "1229C2A": "FRONT SEAT PASSENGER AGE 8-15 NO/IMPROPER SEATBELT",
  "1229C2B": "FRONT SEAT PASSENGER LESS THAN 4 NO/IMPROPER RESTRAINT",
  "1229C2C": "FRONT SEAT PASSENGER AGE 4-7 NO/IMPROPER RESTRAINT",
  "1229C3": "NO SEAT BELT",
  "1229C3A": "NO SEAT BELT DRIVER",
  "1229C3B": "NO SEAT BELT ADULT PASSENGER MODIFIED DESCRIPTION",
  "1229C3C": "NO SEAT BELT PASSENGER 8-15-TAXI/LIVERY VEH ADDED",
  "1229C3U": "NO SEAT BELT DRIVER-TAXI/LIVERY VEHICLE",
  "1229C3V":
    "NO SEAT BELT PASSENGER 16/OLDER -TAXI/LIVERY VEH MODIFIED DESCRIPTION",
  "1229C3W": "NO LAP/SHOULDER HARNESS DRIVER",
  "1229C3X": "NO LAP/SHOULDER HARNESS ADULT PASSENGER",
  "1229C3Y": "NO SEAT BELT DRIVER-CLASS DJ LICENSE",
  "1229C3Z": "NO SEAT BELT ADULT PASS- DRIVER CLASS DJ LICENSE",
  "1232A": "OPERATION OF BICYCLE",
  "1230AE":
    "PERMITTING A CHILD TO OPERATE A BICYCLE WITH ELECTRIC ASSIST IN VIOLATION OF ARTICLE 34 E",
  "1232AE": "IMPROPER RIDING OF E-BIKE E",
  "1232B": "MANY RIDERS-BICYCLE",
  "1232BE": "TOO MANY RIDERS ON E-BIKE E",
  "12331E": "PERSON OPERATING E-BIKE CLINGING TO VEHICLE E",
  "1234A": "TO KEEP RIGHT-BICYCLE",
  "1234AE": "FAILURE TO KEEP RIGHT (E-BIKE) E",
  "1234B": "THAN TWO ABREAST-BICYCLE",
  "1234C": "TO STOP WHEN ENTERING ROAD/BICYCLE",
  "1234CE": "FAILURE TO STOP E-BIKE BEFORE ENTERING ROADWAY E",
  "1234D": "OR SKATEBOARD FAILED TO STOP",
  "1236A": "LIGHTS-BICYCLE",
  "1236AE": "NO/INADEQUATE LIGHTS (E-BIKE) E",
  "1236B": "BELL OR SIGNAL DEVICE ON BICYCLE",
  "1236BE": "NO BELL/SIGNAL DEVICE (E-BIKE) E",
  "1236C": "BRAKES-BICYCLE",
  "1236CE": "NO/INADEQUATE BRAKES (E-BIKE) E",
  "1236D": "REFLECTOR WHEEL/BICYCLE",
  "1236DE": "NO/REFLECTIVE TIRES/REFLECTORS (E-BIKE) E",
  "1236E": "REFLECTOR -BICYCLE",
  "1236EE": "NO/IMPROPER REFLECTIVE DEVICES (E-BIKE) E",
  "1237E": "IMPROPER HAND AND ARM SIGNALS (E-BIKE) E",
  "12385C": "OPERATING CLASS THREE E-BIKE WITHOUT A HELMET E",
  "1240E":
    "LEAVING THE SCENE OF A PHYSICAL INJURY INCIDENT WHILE OPERATING A BICYCLE WITH ELECTRIC ASS IST, INFRACTION E",
  "1241E":
    "LEAVING THE SCENE OF A SERIOUS PHYSICAL INJURY INCIDENT WHILE OPERATING A BICYCLE WITH ELECTRI C ASSIST, MISDEMEANOR E",
  "12421": "OPERATING E-BIKE WITHOUT PROPER ELECTRIC MOTOR E",
  "12422": "UNDERAGE OPERATION OF E-BIKE E",
  "12424":
    "UNLAWFUL OPERATION OF E-BIKE ON ANY PUBLIC LANDS, PROPERTY OR GREENWAY OTHER THAN HIGHWAY E",
  "12425A": "UNLAWFUL OPERATION OR PARKING OF E-BIKE ON SIDEWALK E",
  "12426": "E-BIKE FAILING TO YIELD RIGHT OF WAY TO PEDESTRIAN E",
  "12427": "FAILURE TO OPERATE E-BIKE IN A SINGLE FILE E",
  "12428":
    "UNLAWFUL OPERATION OF E-BIKE ON HIGHWAY WITH SPEED LIMIT GREATER THAN 30 MPH E",
  "12429": "OPERATION OF E-BIKE AT A PROHIBITED SPEED E",
  "124210": "PROHIBITED USE OF CLASS 3 E-BIKE OUTSIDE OF NYC E",
  "124211B": "OPERATION OF E-BIKE WITH NO/IMPROPER MANUFACTURER\u2019S LABEL E",
  "1251A": "TWO ON SEAT FOR ONE-MOTORCYCLE",
  "1251B": "NOT SEATED PROPERLY-MOTORCYCLE",
  "1251C": "HANDS NOT ON HANDLEBARS- MOTORCYCLE",
  "1251D": "INTERFERED WITH CYCLE OPER IN VIEW",
  "1252A": "INTERFERED WITH USE OF LANE- MOTORCYCLE",
  "1252B": "IMPROPER PASSING-MOTORCYCLE",
  "1252C": "RIDING MOTORCYCLE BETWEEN LANES",
  "1252D": "RIDING MOTORCYCLE MORE THAN 2 ABREAST",
  "12801":
    "PERMITTING OPERATION IN VIOLATION OF ARTICLE 34-D (PARENT OR GUARDIAN)(E -SCOOTER) R",
  "12821":
    "CARRYING MORE THAN ONE PERSON ON E-SCOOTER; CARRYING PERSON AS A PASSENGER IN A PACK R",
  "12822": "CARRYING ARTICLES ON E-SCOOTER R",
  "12823": "E-SCOOTER FAILING TO YIELD RIGHT OF WAY TO PEDESTRIAN R",
  "12824":
    "UNDERAGE OPERATION OF E-SCOOTER; PERMITTING UNDERAGE OPERATION OF E-SCOOTER R",
  "12825":
    "UNLAWFUL OPERATION OF E-SCOOTER ON HIGHWAY WITH SPEED LIMIT GREATER THAN 30 MPH R",
  "12826": "OPERATION OF E-SCOOTER AT A PROHIBITED SPEED R",
  "12827A": "UNLAWFUL OPERATION OR PARKING OF E-SCOOTER ON SIDEWALK R",
  "12828":
    "UNLAWFUL OPERATION OF E-SCOOTER ON ANY PUBLIC LANDS, PROPERTY OR GREENWAY OTHER THAN HIGHWAY R",
  "12829B":
    "OPERATION OF E-SCOOTER WITH NO/IMPROPER MANUFACTURER\u2019S LABEL R",
  "12831":
    "CLINGING TO A MOVING MOTOR VEHICLE WHILE OPERATING AN ELECTRIC SCOOTER R",
  "12331R":
    "CLINGING TO A MOVING MOTOR VEHICLE WHILE OPERATING AN ELECTRIC SCOOTER R",
  "12832":
    "PERMITTING AN ELECTRIC SCOOTER TO CLING TO A MOVING MOTOR VEHICLE R",
  "12841": "FAILURE TO KEEP RIGHT (E-SCOOTER) R",
  "12842": "MORE THAN SINGLE FILE (E-SCOOTER) R",
  "12843": "FAILURE TO STOP E-SCOOTER BEFORE ENTERING ROADWAY R",
  "12851": "NO/INADEQUATE LIGHTS (E-SCOOTER) R",
  "12852": "NO BELL/SIGNAL DEVICE (E-SCOOTER) R",
  "12853": "NO/INADEQUATE BRAKES (E-SCOOTER) R",
  "12861": "MINOR OPERATING E-SCOOTER WITHOUT A HELMET R",
  "1287":
    "LEAVING THE SCENE OF A PHYSICAL INJURY INCIDENT WHILE OPERATING AN ELECTRIC SCOOTER, INFRACTION R",
  "1288":
    "LEAVING THE SCENE OF A SERIOUS PHYSICAL INJURY INCIDENT WHILE OPERATING AN ELECTRIC SCOOTER, MISDEMEANOR R",
  "22651M": "MISCELLANEOUS EQUIPMENT VIOLATION- LIMITED USE MOTORCYCLE",
  "301B1": "HEAVY VEHICLE EXCEEDING EMISSIONS",
  "301B2": "UNINSPECTED HEAVY VEHICLE",
  "301B2G": "UNINSPECTED HEAVY VEHICLE >30 DAYS",
  "303C": "FAILED TO DISPLAY/GIVE NOTICE/REINSPECTION",
  "306B": "UNINSPECTED MOTOR VEHICLE",
  "306BG": "UNINSPECTED MOTOR VEHICLE > 60 DAYS",
  "306C": "NO REGISTRATION UNLESS INSPECTED",
  "306D": "CERTIFICATE ISSUED WITHOUT A COMPLETE INSPECTION",
  "3191P": "PERMITTING OPERATION WITHOUT INSURANCE",
  "3191U": "OPERATING WITHOUT INSURANCE",
  "37510A": "NO MIRROR/NO LEFTSIDE VIEW MIRROR",
  "37510B": "NO RIGHT SIDE MIRROR/OMNIBUS 10+ PASS",
  "37510C": "UNAPPROVED INTERIOR MIRROR",
  "37510E": "NO REAR OBJECT DETECTION SYSTEM DELIVERY TRUCK",
  "37512A": "NO/ILLEGAL FRONT WINDSHIELD",
  "37512A1": "FRONT WINDSHIELD NONTRANSPARENT",
  "37512A2": "SIDEWINGS/SIDEWINDOWS/NONTRANSPARENT",
  "37512A3": "REAR SIDE WINDOWS NONTRANSPARENT",
  "37512A4": "REAR WINDOW NONTRANSPARENT",
  "37512AF": "IMPROPER FUNERAL SIGN",
  "37517F": "NO/INADEQUATE EMERGENCY FLARE",
  "37518A": "INADEQUATE/NO TRAFFIC HAZARD WARNING LIGHTS",
  "3751A": "INADEQUATE STEERING, BRAKES OR HORN",
  "3751B": "IMPROPER/INADEQUATE WIPERS",
  "3751BI": "UNAUTHORIZED STICKER/POSTER ON WINDSHIELD OR REAR WINDOW",
  "3751MH": "HORN USED NO DANGER",
  "37520A": "NO FLASHING RED LIGHT ON SCHOOL BUS",
  "37520E": "NO FRONT MIRROR SCHOOL BUS/OMNIBUS",
  "37520I": "NO HEADLIGHTS/TAIL LIGHTS LIT OMNIBUS",
  "37524AB": "BICYCLE WITH MORE 1 EARPHONE",
  "37525A": "INADEQUATE/NO SPLASH GUARDS",
  "37525B": "IMPROPERLY MOUNTED SPLASH GUARDS",
  "37528A": "REMOVE/DISMANTLE/INTERFERE WITH AIR POLLUTION SYSTEM",
  "37528B": "INADEQUATE/NO AIR CONTAMINANT EMISSION CONTROL SYSTEM",
  "37529A": "IMPROPER TOWING /MORE THAN 1 VEHICLE",
  "37529C": "TOW/ROPE CONNECTION OVER SIXTEEN FEET",
  "37529D": "ROPE TOWED VEHICLE WITHOUT LICENSED DRIVER",
  "3752A": "NO HEADLAMPS/INCLEMENT WEATHER",
  "3752A1": "NO HEADLAMPS IN USE",
  "3752A1I": "INADEQUATE HEADLAMPS",
  "3752A2": "NO/INADEQUATE LIGHTS",
  "3752A3": "NO/INSUFFICIENT TAIL LAMPS",
  "3752A4": "NO/INADEQUATE PLATE LAMPS",
  "3752AW": "NO HEADLIGHTS WITH WIPERS ON",
  "3752B": "DAZZLING HEADLAMPS",
  "3752C": "UNAPPROVED LAMP",
  "3752D": "NO ADDITIONAL HEADLAMPS (SNOWPLOW)",
  "37531AM": "SELL OFFER INSTALL ILLEGAL MOTORCYCLE EXHAUST ADDED",
  "37531BM": "SELL OFFER INSTALL ILLEGAL MOD MOTORCYCLE EXHAUST ADDED",
  "37535A": "PROHIBITED USE/STUD TIRES 5/1- 10/15",
  "37535C": "UNSAFE TIRE",
  "37540A": "INADEQUATE OR NO STOP LAMP OR LAMPS",
  "37540B": "INADEQUATE OR NO STOP LAMPS",
  "375413A": "HAZARD VEHICLE WITHOUT AMBER LIGHT OR RED FLAG",
  "37547A": "OPERATING AMPLIFICATION SYSTEM IN EXCESS 0F 70DB",
  "37548B": "OPERATING WITH NO OR IMPROPER FRONT/REAR BUMPER",
  "37550A": "NO SAFETY SHIELD-TAXICAB",
  "37550B": "NO AMBER DISTRESS LIGHTS-TAXICAB",
  "37551A": "NO TAXI/LIVERY SEATBELT SIGN",
  "3761A": "LIGHTING VIOLATION ON VEHICLE & TRAILERS",
  "380A1": "FAILED TO COVER LOOSE CARGO",
  "381D": "NO SEAT BELT ALT VEH MAN AFTER 1/1/2021 ADDED",
  "3831AZ": "NO SEAT BELT ALT VEH MAN BEFORE 1/1/2021 ADDED",
  "3811AB": "INADEQUATE BRAKES-MOTORCYCLE",
  "3811H": "NO HORN- MOTORCYCLE",
  "3811L": "INSUFFICIENT LIGHT-MOTORCYCLE",
  "3812A": "UNAPPROVED LIGHTS-MOTORCYCLE",
  "382C": "INADEQUATE/NO OCCUPANT COMPARTMENT PROTECTION",
  "3831A": "NO SAFETY-BELT FRONT SEAT-1965",
  "3831B": "NO SAFETY-BELT REAR SEAT PASS-1967",
  "3831C": "NO SAFETY-BELT EACH SEAT POSITION-1968",
  "3834A": "FAILURE SCHOOL BUS DRIVER USE SEATBELT",
  "3834B": "NO/UNUSABLE TAXI/LIVERY SAFETY BELT",
  "3851A": "OVERWIDTH VEHICLE",
  "3853B": "OVERLENGTH SEMI/TRAILER -48 FEET",
  "3853E": "OVER LENGTH VEHICLE SEMI TRAILER",
  "3854A": "OVER LENGTH VEHICLE-COMBINATION",
  "3863A": "EXCESSIVE NOISE-OPER/MOVING MGW 10000 LBS",
  "3863C": "EXCESSIVE NOISE-OPER/MOVING MGW UNDER 10000 LBS",
  "3863D": "EXCESSIVE NOISE/OPERATING MOTORCYCLE",
  "397A": "RADAR/LASER DETECTORS PROHIBITED",
  "4011A": "UNREGISTERED MOTOR VEHICLE",
  "4011AG": "UNREGISTERED MOTOR VEHICLE-REG EXPIRED MORE THAN 60 DAYS",
  "4011B": "SWITCHED TRAILER PLATES",
  "4011U": "IMPROPER REGISTRATION/CLASS",
  "4014B": "COMMERCIAL VEHICLE ON PARKWAY",
  "4017FBL": "OVERWEIGHT ON REG SINGLE VEHICLE LESS THAN 18,000 POUNDS",
  "4017FBW": "OVERWEIGHT ON REG SINGLE VEHICLE GREATER THAN 18,000 POUNDS",
  "4018CL": "OVERWEIGHT ON REG COMBINATION LESS THAN 18,000 POUNDS",
  "4018CW": "OVERWEIGHT ON REG COMBINATION GREATER THAN 18,000",
  "4023G": "UNREGISTERED TRAILER- REG EXPIRED LESS THAN 60 DAYS",
  "402C": "DANGEROUS DRIVING",
  "403A": "FALSIFYING TEMPORARY INDICIA OF REGISTRATION",
  "403A1": "FAILED TO YIELD TO VEHICLE/PEDESTRIAN",
  "403A3I": "DISOBEYED STEADY RED LIGHT",
  "403A3II": "FAILED TO YIELD TO VEHICLE/PEDESTRIAN AT RED LIGHT",
  "403A3IX": "FAILED TO YIELD TO PEDESTRIAN AT RED LIGHT",
  "403A4": "DISOBEYED COLORED ARROW",
  "403A4B": "DISOBEYED COLORED ARROW",
  "403A5": "DISOBEYED STOP SIGN",
  "403A5B": "DISOBEYED STOP SIGN",
  "403C1": "FAIL TO YLD RIGHT OF WAY TO PEDESTRIAN WITH WALK SIGNAL",
  "403C1B": "FAIL TO YLD RIGHT OF WAY TO PEDESTRIAN WITH WALK SIGNAL",
  "404B": "FAILED TO YIELD TO PEDESTRIAN IN A CROSSWALK",
  "404D": "FAIL TO USE DUE CARE RESULTING IN COLLISION WITH PEDESTRIAN",
  "405B1": "U-TURN IN BUSINESS DISTRICT",
  "405B2": "IMPROPER U TURN",
  "406A1": "SPEEDING",
  "406A2": "SPEEDING OVER POSTED LIMIT",
  "406A3": "SPEED NOT REASONABLE AND PRUDENT",
  "407A": "DISOBEYED YIELD SIGN",
  "407B1": "OBSTRUCTED TRAFFIC LANE",
  "407B2": "OBSTRUCTED INTERSECTION/CROSSWALK",
  "407C": "DRIVE ON SIDEWALK",
  "407C2": "AVOIDING INTERSECTION",
  "407C31": "ON SIDEWALK",
  "407D": "BACKING UNSAFELY",
  "407G": "FOLLOWING TOO CLOSE TO EMERGENCY VEHICLE",
  "407H1": "DRIVING OVER DIVIDING SPACE",
  "407H2": "U-TURN ON DIVIDED HIGHWAY",
  "408F1": "OBSTRUCTING TRAFFIC LANE",
  "408N8": "EQUIPMENT- MISCELLANEOUS",
  "409B1": "NO HEADLIGHTS IN USE",
  "409B2": "NO LIGHTING EQUIPMENT",
  "4101G": "UNREGISTERED MOTORCYCLE -REG EXPIRED MORE THAN 60 DAYS",
  "410C1": "UNAUTHORIZED PICK UP/DISCHARGE OF PASSENGERS AT BUS STOP",
  "411B": "CRUISING FOR PASSENGERS",
  "411C": "IMPROPER TAXI PICKUP",
  "412A1": "FAILED TO COMPLY WITH ORDER",
  "412A1B": "FAILED TO COMPLY WITH ORDER",
  "412A3": "FAILED TO PRESENT DOCUMENT",
  "412B": "PASSENGER IN VEHICLE",
  "412I": "HORN USED NO DANGER",
  "412M": "IMPROPER USE OF BUS LANE",
  "412P1": "OFF LANE",
  "412P2": "DRIVE ON BIKE LANE",
  "413A3": "NO BILL OF LADING",
  "414A2": "NO CMV ON PARKWAY",
  "414B4": "BUS ON PARK/PARKWAY",
  "415B1": "OVERWIDTH VEHICLE",
  "415B10": "OVERWEIGHT 3 OR MORE AXLES",
  "415B13": "EXCESS BRIDGE HEIGHT/WEIGHT",
  "415B2": "OVERHEIGHT VEHICLE",
  "415B3": "OVERLENGTH SINGLE VEHICLE",
  "415B4": "OVERLENGTH COMBINATION VEHICLE",
  "415B8": "OVERLOAD SINGLE AXLE",
  "415B9": "OVERWEIGHT CONSECUTIVE AXLES",
  "415F1": "NO OVERWEIGHT PERMIT",
  "415H": "OVER 5000 POUNDS ON FDR DRIVEWAY",
  "501B": "VIOLATED GRADUATED LICENSE RESTRICTION",
  "5091A": "OPERATE CMV WITHOUT PROPER ENDORSEMENT",
  "5091G": "UNLICENSED OPERATOR- LIC EXP MORE THAN 60 DAYS",
  "5091J": "UNLICENSED OPERATION -JUNIOR DRIVER",
  "5091JG": "UNLICENSED JR OPERATOR- LIC EXP MORE THAN 60 DAYS",
  "5092M": "UNLICENSED OPERATOR MOTORCYCLE -LIC EXP LESS THAN 60 DAYS",
  "5092MG": "UNLICENSED OPERATOR MOTORCYCLE -LIC EXP MORE THAN 60 DAYS",
  "5096U": "USING LICENSE OF ANOTHER",
  "5097A": "a) OPERATING CMV WITHOUT PROPER MEDICAL CERTIFICATION",
  "6001A": "LEAVING SCENE OF PROPERTY DAMAGE CRASH N-",
  "1229C10": "NO SEATBELT FIRE/ AMBULANCE ADDED",
  "1229C13": "NO SEATBELT NON SCHOOL SCHOOL BUS ADDED",
  "4021": "NO DISTINCTIVE PLATE/INSECURE/DIRTY REMOVED",
  "37531": "NO/INADEQUATE MUFFLER/EXHAUST SYSTEM REMOVED",
  "37531A": "SALE/INSTALL/USE MOTORCYCLE WITHOUT STRAIGHT PIPE REMOVED",
  "37531B": "SALE/USE ILLEGAL MOTORCYCLE EXHAUST DEVICE REMOVED",
};
