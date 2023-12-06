import { promises as fs } from "fs";

let x = 0;

async function example() {
  ++x;
  if (x >= 100) clearInterval(si);
  try {
    const data = await fs.readFile("./public/LiveScoredetails.json", {
      encoding: "utf8",
    });
    const parsedData = await JSON.parse(data);

    parsedData.LiveScore.map((LiveScore, index) => {
      if (index % 2 === 0) {
        LiveScore.runs = `${x + 100}/2`;
      } else LiveScore.runs = `${x + 9}/2`;
    });

    console.log(parsedData);

    const str = JSON.stringify(parsedData);

    await fs.writeFile("./public/LiveScoredetails.json", str, (err) => {
      if (err) console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
}

const si = setInterval(example, 10000);
