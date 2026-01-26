import { type FunctionComponent } from "react";
import { InfoPill } from "@/app/components";

const Experience: FunctionComponent = () => {
  return (
    <div>
      <InfoPill
        title="Palantir Foundry Developer"
        description={
          "On this engagement, I was the lead developer for a custom web applications built on Palantir Foundry. " +
          "Our tech stack was primary ReactJS, using TypeScript and Material UI. This project also involved querying data " +
          "from the Foundry Ontology using their SDK's. We focussed on tabular data visualizations and building custom " +
          "KPI cards to show user latest updates on shipment plans."
        }
        duration="6 Months"
      />
      <InfoPill
        title="Data Engineer"
        description={
          "As a Data Engineer, I worked on a Databricks focussed project where I was responsible for designing and implementing data pipelines " +
          "using Databricks and Azure services. Our main stack was Azure Databricks, Spark, SQL Server, and Service Now. " +
          "My role mainly focussed on writing Spark based data pipelines, writing SQL Stored Procedures for database maintenance, and building " +
          "API driven scripts for writing data to custom Service Now tables."
        }
        duration="1 Year"
      />
      <InfoPill
        title="Software Engineer"
        description={
          "Working with my Alma Mater, I led automation efforts across their Advancement department. As the sole engineer, " +
          "I built custom automation scripts to streamline data processing and reporting, resulting in a 50% reduction in manual effort and an increase in data accuracy. " +
          "Focussed on automating Microsoft Excel based workflows and building Data Products through Python based App Development, I created software " +
          "that years later still remained utilized and maintained by the department."
        }
        duration="1 Year"
      />
    </div>
  );
};

export default Experience;
