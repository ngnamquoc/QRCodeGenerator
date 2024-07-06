import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {"message":"Please input your url: ","name":"userURL"}
  ])
  .then((answers) => {

    const userURL=answers.userURL;
    var qr_png = qr.image(userURL);
    qr_png.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });