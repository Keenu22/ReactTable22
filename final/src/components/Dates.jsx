import { useState } from "react";
import "./Dates.css";

export default function Dates() {
  const [sortData, setSortData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const handleSortByDate = () => {
   const sortedArray = [...sortData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Sort by date first (latest first)
      const dateComparison = dateB - dateA; // Sort in descending order

      if (dateComparison !== 0) {
        return dateComparison; // If dates are different, return the comparison
      }

      // If dates are the same, sort by views (highest first)
      return b.views - a.views; // Sort by views in descending order
    });

    setSortData(sortedArray);
  };

  const handleSortByViews = () => {
    const sortedArray = [...sortData].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      return viewsComparison !== 0 ? viewsComparison : new Date(b.date) - new Date(a.date);
    });
    setSortData(sortedArray);
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>
      <div className="mainRow">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {sortData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
