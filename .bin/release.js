import fs from "fs";
import path from "path";

function release() {
  console.log("Releasing build to 'docs' folder...");

  console.log(" --> Removing files in 'docs' folder...");
  // Remove all files in 'docs' except for the 'CNAME' file
  try {
    fs.readdirSync("docs")
      .filter((file) => file !== "CNAME")
      .forEach((file) => {
        try {
          fs.rmSync(path.join("docs", file), { recursive: true });
          console.log(` --> Deleted file ${file}`);
        } catch (err) {
          console.error(`Error while deleting file ${file}: `, err);
        }
      });
  } catch (err) {
    console.error("Error while reading the 'docs' folder: ", err);
    return;
  }

  console.log('Finished "docs" folder cleanup');
  console.log(`Started copying files from 'dist' folder to 'docs' folder...`);

  try {
    fs.readdirSync("dist").forEach((file) => {
      try {
        fs.cpSync(`dist/${file}`, `docs/${file}`, { recursive: true });
        console.log(` --> Copied file ${file} to 'docs' folder`);
      } catch (err) {
        console.error(
          `Error while copying file ${file} to 'docs' folder: `,
          err,
        );
      }
    });
  } catch (err) {
    console.error(
      `Error while reading the 'dist' folder. Please make sure you've run 'npm run build' first. Error: `,
      err,
    );
    return;
  }

  console.error("Finished release!");
}

release();
