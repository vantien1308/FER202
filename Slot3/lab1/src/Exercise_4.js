import React from "react";

function AverageAge()   {
    const averageAge = (...ages) => {
        const total = ages.reduce((sum, age) => sum + age, 0);
        return (total / ages.length).toFixed(1);
    };
    return <p>Average Age: {averageAge(25, 30, 35, 40)}</p>;
}

export default AverageAge;