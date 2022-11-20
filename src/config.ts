import * as dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env"
      : require("fs").existsSync(`.env.${process.env.NODE_ENV}.local`)
      ? `.env.${process.env.NODE_ENV}.local`
      : `.env.${process.env.NODE_ENV}`,
});

const strToBoolean = (str: string) => str === "true";

export const config = {
  logging: strToBoolean(process.env.LOGGER),
  enableLandingPage: process.env.NODE_ENV !== "production",
  port: parseInt(process.env.PORT) || 4000,
  introspection: strToBoolean(process.env.INTROSPECTION_ENABLED),
  services: {
    customer: {
      url: process.env.SERVICE_CUSTOMER_URL,
    },
    depositAccout: {
      url: process.env.SERVICE_DEPOSIT_ACCOUNT_URL,
    },
  },
};
