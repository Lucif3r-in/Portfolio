import React from "react";

import "./education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Intitute</th>
          <th>Year</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Secondary Schooling</td>
          <td>Science</td>
          <td>Carmel English Medium School</td>
          <td>2018</td>
        </tr>
        <tr>
          <td>Senior Secondary Schooling</td>
          <td>Science</td>
          <td>DAV Pkt</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>B.Tech</td>
          <td>Electrical Engineering</td>
          <td>NIT Rourkela</td>
          <td>2021-present8</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
