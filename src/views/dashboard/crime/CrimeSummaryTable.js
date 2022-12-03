import React from "react";

//progressbar
import Progress from "../../../components/progress.js";
import DATA from "./data";

const CrimeTableRow = ({ data, key }) => {
  return (
    <tr key={key}>
      <td>
        <div className="d-flex align-items-center">
          <h4>{data.name}</h4>
        </div>
      </td>

      <td>
        <div className="mb-2 d-flex align-items-center">
          <h6>{data.value}%</h6>
        </div>
        <Progress
          softcolors="primary"
          color="primary"
          className="shadow-none w-100"
          value={parseInt(data.value)}
          minvalue={0}
          maxvalue={100}
          style={{ height: "4px" }}
        />
      </td>
    </tr>
  );
};

const CrimeSummaryTable = ({ currentCrime, isDetectionComplete }) => {
  const currentCrimeObject = DATA.filter((x) => x.crime === currentCrime)[0];

  const result = Object.keys(currentCrimeObject.stats)
    .map((key) => ({
      name: key,
      value: currentCrimeObject.stats[key],
    }))
    .sort((a, b) => b.value - a.value);

  console.log(result);

  const dummyValues = [
    { name: "Normal", value: 0 },
    { name: "Robbery", value: 0 },
    { name: "Shooting", value: 0 },
    { name: "Explosion", value: 0 },
    { name: "Fighting", value: 0 },
    { name: "Road Accident", value: 0 },
  ];
  return (
    <div
      className="overflow-hidden card"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <div className="p-0 card-body">
        <div className="mt-4 table-responsive">
          <table
            id="basic-table"
            className="table mb-0 table-striped"
            role="grid"
          >
            <thead>
              <tr>
                <th>Crime</th>

                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {isDetectionComplete
                ? result.map((data, index) => {
                    return (
                      <CrimeTableRow
                        data={data}
                        key={index}
                        isDetectionComplete={isDetectionComplete}
                      />
                    );
                  })
                : dummyValues.map((data, index) => {
                    return (
                      <CrimeTableRow
                        data={data}
                        key={index}
                        isDetectionComplete={isDetectionComplete}
                      />
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrimeSummaryTable;
