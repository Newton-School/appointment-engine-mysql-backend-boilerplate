
const connection = require("./connector");
const { data } = require('./data')

const refreshAll = async () => {

    await con.query("DROP TABLE IF EXISTS events, user;",
        (err, result) => {
            if (err) {
                console.log(err)
            }
        });

    await con.query("CREATE TABLE events (id INT AUTO_INCREMENT NOT NULL, date DATE NOT NULL,time TIME NOT NULL, book TINYINT(0) DEFAULT 0, primary key (id));",
        (err, result) => {
            if (err) {
                console.log(err)
            }
        });

    await con.query("CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, slot_id INT NOT NULL, name TEXT(65535), primary key (id));",
    (err, result) => {
        if (err) {
            console.log(err)
        }
    });

    await slot_data.forEach(element => {
        con.query("INSERT INTO events (date, time, book) VALUES (?,?,?);", [element.date, element.time, element.book], (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    });

    await data.forEach(element => {
        con.query("INSERT INTO user (name, slot_id) VALUES (?,?);", [element.name, element.slot_id], (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    });
}
refreshAll()