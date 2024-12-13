import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// Create a Sequelize instance
const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Disable strict SSL verification (not recommended for production)
    },
  },
  logging: false,
});


// Test connection
const connectDB = async () => {
  try {
   await sequelize.authenticate();
   console.log("PostgreSQL connected successfully using Sequelize.");

   // Sync all defined models to the database
   await sequelize.sync({ alter: true }); // Set `alter: true` to modify tables if needed
   console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

export { connectDB }; // Named export for the connection function
export default sequelize; // Default export for Sequelize instance
