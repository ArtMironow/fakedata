import React from "react";
import { Container, Typography } from "@mui/material";
import Buttons from "../components/Buttons/Buttons";
import Input from "../components/Input/Input";
import Sliders from "../components/Slider/Sliders";
//import axios from "axios";
import Contents from "../components/Contents/Contents";
import seedrandom from "seedrandom";
import { faker } from "@faker-js/faker";

const Home = () => {
  const [input, setInput] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [dataBase, setDataBase] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        en: generateDataEn(1000),
        pl: generateDataPl(1000),
        uk: generateDataUk(1000),
      })
    );
  });

  const generateDataEn = (number) => {
    faker.locale = "en_US";
    const persons = [];
    while (number >= 0) {
      persons.push({
        id: number,
        name: faker.name.fullName(),
        city: faker.address.city(),
        street: faker.address.street(),
        secondary: faker.address.secondaryAddress(),
        address: faker.address.streetAddress(),
        phone: faker.phone.number(),
      });
      number--;
    }
    return persons;
  };
  const generateDataPl = (number) => {
    faker.locale = "pl";
    const persons = [];
    while (number >= 0) {
      persons.push({
        id: number,
        name: faker.name.fullName(),
        city: faker.address.city(),
        street: faker.address.street(),
        secondary: faker.address.secondaryAddress(),
        address: faker.address.streetAddress(),
        phone: faker.phone.number(),
      });
      number--;
    }
    return persons;
  };
  const generateDataUk = (number) => {
    faker.locale = "uk";
    const persons = [];
    while (number >= 0) {
      persons.push({
        id: number,
        name: faker.name.fullName(),
        city: faker.address.city(),
        street: faker.address.street(),
        secondary: faker.address.secondaryAddress(),
        address: faker.address.streetAddress(),
        phone: faker.phone.number(),
      });
      number--;
    }
    return persons;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInput = (e) => {
    e.preventDefault();
    generate(input);
    setInput("");
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const random = (arr) => {
    return arr[getRandomInt(0, arr.length - 1)];
  };
  const generate = (number) => {
    if (input === "") {
      alert("enter number");
    }

    function randoms(arr, length) {
      let result = [];

      for (let i = 0; i < length; i++) {
        result.push(random(arr));
      }

      return result;
    }

    setDataBase(randoms(dataBase, number));
  };

  const toggleLanguages = async (string) => {
    try {
      const json = localStorage.getItem("data");
      var obj = JSON.parse(json);
      var value;

      if (string === "pl") {
        value = obj.pl;
      } else if (string === "uk") {
        value = obj.uk;
      } else {
        value = obj.en;
      }

      setDataBase(value);
    } catch (error) {
      alert("The data did not come from the server (");
    }
  };

  return (
    <Container maxWidth="lg">
      <Buttons toggleLanguages={toggleLanguages} />
      <Input handleInput={handleInput} input={input} setInput={setInput} />
      <Sliders value={value} handleChange={handleChange} />
      {dataBase.length === 0 ? (
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Data will be displayed here
        </Typography>
      ) : (
        <Contents value={value} dataBase={dataBase} />
      )}
    </Container>
  );
};

export default Home;
