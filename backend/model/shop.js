const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your shop name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your shop email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password should be greater than 6 characters"],
    select: false,
  },
  description: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    // required: [true, "Please select your gender "],
  },
  area: {
    type: String,
    // enum: [
    //   "2 TALWAR",
    //   "3 TALWAR",
    //   "4K CHOWRANGI",
    //   "70 CLIFTON",
    //   "ABB TAKK TV HEAD OFFICE",
    //   "ABDULLAH HAROON ROAD",
    //   "ABID TOWN",
    //   "ABU HASSAN ASPHANI ROAD",
    //   "ADAMJEE NAGAR",
    //   "AF GARDEN",
    //   "AGHA KHAN HOSPITAL",
    //   "AHSAN ABAD",
    //   "AI GARH SOCIETY SCHEEM 33",
    //   "AL AZHAR GARDEN",
    //   "AL HAMRA SOCIETY",
    //   "AL HILAL SOCIETY",
    //   "AL MANZAR TOWER",
    //   "AL NOOR SOCIETY",
    //   "AL NOOR TERMINAL",
    //   "AL RAHIM OIL TERMINAL",
    //   "ALAMGIR ROAD",
    //   "ALAMGIR SOCIETY",
    //   "ALI GARH SOCIETY",
    //   "ALI HIGHTS COMPLEX",
    //   "ALLAH WALA TOWN",
    //   "AMROHA SOCIETY",
    //   "ANCHOLI",
    //   "ANDA MORE",
    //   "ARC TOWER",
    //   "ARMY HOUSING COLONY",
    //   "ARMY OFFICER HOUSING SCHEME",
    //   "ART COUNCIL",
    //   "ASKARI 1",
    //   "ASKARI 2",
    //   "ASKARI 3",
    //   "ASKARI 4",
    //   "ASKARI 5",
    //   "AZEEM PURA",
    //   "AZIZABAD",
    //   "BAHADURABAD",
    //   "BAHRIA AUDITORIUM",
    //   "BAHRIA COLLEGE",
    //   "BAHRIA COMPLEX",
    //   "BAHRIA TOWN PRECINCT 1",
    //   "BAHRIA TOWN PRECINCT 2",
    //   "BAHRIA TOWN PRECINCT 3",
    //   "BAHRIA TOWN PRECINCT 4",
    //   "BAHRIA TOWN PRECINCT 5",
    //   "BAHRIA TOWN PRECINCT 6",
    //   "BAHRIA TOWN PRECINCT 7",
    //   "BAHRIA TOWN PRECINCT 8",
    //   "BAHRIA TOWN PRECINCT 9",
    //   "BAHRIA TOWN PRECINCT 10",
    //   "BAHRIA TOWN PRECINCT 11",
    //   "BAHRIA TOWN PRECINCT 12",
    //   "BAHRIA TOWN PRECINCT 13",
    //   "BAHRIA TOWN PRECINCT 14",
    //   "BAHRIA TOWN PRECINCT 15",
    //   "BAHRIA TOWN PRECINCT 16",
    //   "BAHRIA TOWN PRECINCT 17",
    //   "BAHRIA TOWN PRECINCT 18",
    //   "BAHRIA TOWN PRECINCT 19",
    //   "BAHRIA TOWN PRECINCT 20",
    //   "BAHRIA TOWN PRECINCT 21",
    //   "BAHRIA TOWN PRECINCT 22",
    //   "BAHRIA TOWN PRECINCT 23",
    //   "BAHRIA TOWN PRECINCT 24",
    //   "BAHRIA TOWN PRECINCT 25",
    //   "BAHRIA TOWN PRECINCT 26",
    //   "BAHRIA TOWN PRECINCT 27",
    //   "BAHRIA TOWN PRECINCT 28",
    //   "BAHRIA TOWN PRECINCT 29",
    //   "BAHRIA TOWN PRECINCT 30",
    //   "BAHRIA UNIVERSITY STADIUM ROAD",
    //   "BANGLORE TOWN",
    //   "BARA BOARD",
    //   "BATHISLAND",
    //   "BEACH LUXURY",
    //   "BEACON HOUSE SCHOOL JUBILEE CAMPUS NASRA SCHOOL",
    //   "BHITTAI COLONY",
    //   "BILAWAL HOUSE",
    //   "BMCHS BLOCK 3",
    //   "BMCHS BLOCK 7",
    //   "BMCHS BLOCK 8",
    //   "BOATBASIN",
    //   "BROOKS PHARMA PVT LTD ARTISTIC GARMENTS INDUSTRIES",
    //   "BUFFER ZONE 15 A1",
    //   "BUFFER ZONE 15 A2",
    //   "BUFFER ZONE 15 A3",
    //   "BUFFER ZONE 15 A4",
    //   "BUFFER ZONE 15 A5",
    //   "BUFFER ZONE 15 B",
    //   "BURNS ROAD",
    //   "BYJCHS BLOCK 3",
    //   "BYJCHS BLOCK 7",
    //   "BYJCHS BLOCK 8",
    //   "CAA COLONY",
    //   "CANTT BAZAR",
    //   "CANTT KHI",
    //   "CBM UNIVERSITY INDUS HOSPITAL",
    //   "CENTER POINT",
    //   "CENTRAL HOUSING SOCIETY",
    //   "CHAMRA SHAN CHOWRANGI",
    //   "CHANDNI CHOWK",
    //   "CITIZEN FOUNDATION HEAD OFFICE",
    //   "CIVIL HOSPITAL KHI",
    //   "CIVIL LINES",
    //   "CLIFTON BLOCK 1",
    //   "CLIFTON BLOCK 2",
    //   "CLIFTON BLOCK 3",
    //   "CLIFTON BLOCK 4",
    //   "CLIFTON BLOCK 5",
    //   "CLIFTON BLOCK 6",
    //   "CLIFTON BLOCK 7",
    //   "CLIFTON BLOCK 8",
    //   "CLIFTON BLOCK 9",
    //   "CM HOUSE",
    //   "CMH HOSPITAL",
    //   "COMMANDER HEIGHTS",
    //   "COUNTRY CLUB",
    //   "CP BERAR 3",
    //   "CP BERAR 7",
    //   "CP BERAR 8",
    //   "CUSTOM CHS",
    //   "DAR UL AMAN SOCIETY",
    //   "DAR UL SALAM",
    //   "DARUL ALOOM",
    //   "DASTAGIR",
    //   "DAWOOD POTA ROAD",
    //   "DAWOOD SOCIETY",
    //   "DEFENCE GARDEN",
    //   "DEFENCE VIEW KHI PHASE 1",
    //   "DEFENCE VIEW KHI PHASE 2",
    //   "DEFENCE VIEW KHI PHASE 3",
    //   "DEHLI COLONY",
    //   "DHA KHI PHASE 1",
    //   "DHA KHI PHASE 2",
    //   "DHA KHI PHASE 2 EXTENTION",
    //   "DHA KHI PHASE 4",
    //   "DHA KHI PHASE 5",
    //   "DHA KHI PHASE 5 EXTENTION",
    //   "DHA KHI PHASE 5 KHY SHAMSHEER",
    //   "DHA KHI PHASE 5 KHY TANZEEM",
    //   "DHA KHI PHASE 5C STREET",
    //   "DHA KHI PHASE 5D STREET",
    //   "DHA KHI PHASE 5E STREET",
    //   "DHA KHI PHASE 6",
    //   "DHA KHI PHASE 7",
    //   "DHA KHI PHASE 7 EXTENTION",
    //   "DHA KHI PHASE 8",
    //   "DHORAJEE",
    //   "DIAMOND CITY",
    //   "DJ SCIENCE COLLEGE",
    //   "DMCHS BLOCK 3",
    //   "DMCHS BLOCK 7",
    //   "DMCHS BLOCK 8",
    //   "DO MINUTE CHOWRANGI",
    //   "DOCHS",
    //   "DOHS",
    //   "DOW UNIVERSITY HOSPITAL OJHA CAMPUS",
    //   "DR ZIAUDDIN AHMED ROAD",
    //   "DRIGH ROAD",
    //   "ELECTION COMMISSION OFFICE",
    //   "EMBASSY INN",
    //   "ENGLISH BISCUIT EBM",
    //   "FALAKNAZ PLAZA",
    //   "FALCON COMPLEX MALIR CANTT",
    //   "FALCON HOUSING SOCIETY",
    //   "FARHAN SOCIETY",
    //   "FATIMIYAH COLLEGE",
    //   "FATIMIYAH HOSPITAL",
    //   "FB AREA BLOCK NO 1",
    //   "FB AREA BLOCK NO 2",
    //   "FB AREA BLOCK NO 3",
    //   "FB AREA BLOCK NO 4",
    //   "FB AREA BLOCK NO 5",
    //   "FB AREA BLOCK NO 6",
    //   "FB AREA BLOCK NO 7",
    //   "FB AREA BLOCK NO 8",
    //   "FB AREA BLOCK NO 9",
    //   "FB AREA BLOCK NO 10",
    //   "FB AREA BLOCK NO 11",
    //   "FB AREA BLOCK NO 12",
    //   "FB AREA BLOCK NO 13",
    //   "FB AREA BLOCK NO 14",
    //   "FB AREA BLOCK NO 15",
    //   "FB AREA BLOCK NO 16",
    //   "FB AREA BLOCK NO 17",
    //   "FB AREA BLOCK NO 18",
    //   "FB AREA BLOCK NO 19",
    //   "FB AREA BLOCK NO 20",
    //   "FB AREA BLOCK NO 21",
    //   "FB AREA BLOCK NO 22",
    //   "FC AREA",
    //   "FERRER TOWN",
    //   "FIRDOUS COLONY",
    //   "FLORIDA HOMES",
    //   "GABOL TOWN",
    //   "GALAXY APPARTMENT",
    //   "GARDEN EAST",
    //   "GARDEN JAMAT KHANA",
    //   "GARDEN WEST",
    //   "GAWALIR SOCIETY",
    //   "GETZ PHARMA PVT LTD",
    //   "GHAFOORIA RESIDENCY",
    //   "GODAM BROOKS CHOWRANGI",
    //   "GODHRA",
    //   "GOHAR RESIDENCIA & SHOPPING CENTRE",
    //   "GOVERNER HOUSE",
    //   "GREEN TOWN",
    //   "GUL PLAZA SHOPPING MALL",
    //   "GULBAHAR",
    //   "GULBERG",
    //   "GULISTAN E JOHAR 8A",
    //   "GULISTAN E JOHAR 9A",
    //   "GULISTAN E JOHAR 16A",
    //   "GULISTAN E JOHAR 17",
    //   "GULISTAN E JOHAR 18",
    //   "GULISTAN E JOHAR 19",
    //   "GULISTAN E JOHAR 20",
    //   "GULISTAN E JOHAR 8",
    //   "GULISTAN SOCIETY",
    //   "GULISTANE JOHAR 1",
    //   "GULISTANE JOHAR 2",
    //   "GULISTANE JOHAR 3",
    //   "GULISTANE JOHAR 4",
    //   "GULISTANE JOHAR 5",
    //   "GULISTANE JOHAR 6",
    //   "GULISTANE JOHAR 7",
    //   "GULISTANE JOHAR 9",
    //   "GULISTANE JOHAR 10",
    //   "GULISTANE JOHAR 11",
    //   "GULISTANE JOHAR 12",
    //   "GULISTANE JOHAR 13",
    //   "GULISTANE JOHAR 14",
    //   "GULISTANE JOHAR 15",
    //   "GULISTANE JOHAR 16",
    //   "GULSHAN BLOCK 14",
    //   "GULSHAN E ERUM",
    //   "GULSHAN E GHAZIAN",
    //   "GULSHAN E JAMAL",
    //   "GULSHAN E MAYMAR",
    //   "GULSHAN E ROMI",
    //   "GULSHAN E UMAIR",
    //   "GULSHAN E USMAN",
    //   "GULSHAN IQBAL BLOCK NO 1",
    //   "GULSHAN IQBAL BLOCK NO 2",
    //   "GULSHAN IQBAL BLOCK NO 3",
    //   "GULSHAN IQBAL BLOCK NO 4",
    //   "GULSHAN IQBAL BLOCK NO 4A",
    //   "GULSHAN IQBAL BLOCK NO 5",
    //   "GULSHAN IQBAL BLOCK NO 6",
    //   "GULSHAN IQBAL BLOCK NO 7",
    //   "GULSHAN IQBAL BLOCK NO 8",
    //   "GULSHAN IQBAL BLOCK NO 9",
    //   "GULSHAN IQBAL BLOCK NO 10",
    //   "GULSHAN IQBAL BLOCK NO 10A",
    //   "GULSHAN IQBAL BLOCK NO 11",
    //   "GULSHAN IQBAL BLOCK NO 12",
    //   "GULSHAN IQBAL BLOCK NO 13",
    //   "GULSHAN IQBAL BLOCK NO 13A",
    //   "GULSHAN IQBAL BLOCK NO 13B",
    //   "GULSHAN IQBAL BLOCK NO 13C",
    //   "GULSHAN IQBAL BLOCK NO 13D1",
    //   "GULSHAN IQBAL BLOCK NO 13D2",
    //   "GULSHAN IQBAL BLOCK NO 13D3",
    //   "GULSHAN IQBAL BLOCK NO 13E",
    //   "GULSHAN IQBAL BLOCK NO 13G",
    //   "GULSHAN IQBAL BLOCK NO 15",
    //   "GULSHAN IQBAL BLOCK NO 16",
    //   "GULSHAN IQBAL BLOCK NO 17",
    //   "GULSHAN IQBAL BLOCK NO 18",
    //   "GULSHAN IQBAL BLOCK NO 19",
    //   "GULSHAN IQBAL BLOCK NO 20",
    //   "GURU MANDIR",
    //   "HABIB CHOWRANGI",
    //   "HADIYAABAD",
    //   "HALARI MEMON SOCIETY",
    //   "HAMITCHEIKH PHOTOEYE COTTON SOCIETY",
    //   "HAROON BUNGALOW PHASE 1",
    //   "HAROON BUNGALOW PHASE 2",
    //   "HAVEN CITY",
    //   "HIGH COURT",
    //   "HOCKEY STADIUM",
    //   "HOLY FAMILY",
    //   "HOTEL GALAXY",
    //   "HOTEL MEHRAN",
    //   "HUSSAINABAD",
    //   "HUSSAINI SOCIETY BLOCK 3",
    //   "HUSSAINI SOCIETY BLOCK 7",
    //   "HUSSAINI SOCIETY BLOCK 8",
    //   "HYDERABAD COLONY",
    //   "ICI PAKISTAN",
    //   "IGLOO ICE CREAMORIENT ENERGY SYSTEM PVT LTD",
    //   "II CHUNDRIGARH ROAD",
    //   "IMTIAZ STORE QAYYUMABAD",
    //   "INARA GARDEN",
    //   "IQRA UNIVERSITY DEFENCE VIEW",
    //   "JAMA CLOTH MARKET",
    //   "JAMAT KHANA",
    //   "JAMSHED ROAD",
    //   "JAMSHED TOWN",
    //   "JAWENI HIGHTS",
    //   "JCHS",
    //   "JINNAH COURT",
    //   "JINNAH MEDICAL DENTAL COLLEGE",
    //   "JOHAR COMPLEX",
    //   "JUBILEE CLOTH MARKET",
    //   "KAECHS BLOCK 1",
    //   "KAECHS BLOCK 2",
    //   "KAECHS BLOCK 3",
    //   "KAECHS BLOCK 4",
    //   "KAECHS BLOCK 5",
    //   "KAECHS BLOCK 6",
    // ],
    // required: [true, "Please choose from your area!"],
  },

  address: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: Number,
    // required: true,
  },
  role: {
    type: String,
    default: "Seller",
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  cnicNumber: {
    type: Number,
    // required: true,
  },
  withdrawMethod: {
    type: Object,
  },
  availableBalance: {
    type: Number,
    default: 0,
  },
  transections: [
    {
      amount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        default: "Processing",
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      updatedAt: {
        type: Date,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

// Hash password
shopSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
shopSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// comapre password
shopSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Shop", shopSchema);
