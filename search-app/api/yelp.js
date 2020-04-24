import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer Aj2C8As3Qf4EE_YEXJS30JoJ5Xz0xo38faDp-Rtq_0wLPCxKaof2plYKcgG3x6jf7q6maS8imyT3LPL0V1Cae7lbC-Evz60d8meRiTTyRQluPX9BhrE2ej2Hd-SiXnYx",
  },
});
