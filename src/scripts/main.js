import API from "./data.js";

const employeeCardFactory = () => {
    API.getData()
    .then(API.renderData);
};

employeeCardFactory();