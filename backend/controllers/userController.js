'use strict';

const userControllers = {
    home: (req, res) => {
        let aboutInfo = {
            name: "rajan",
            version: "18.5.1"
        }
        res.json(aboutInfo);
    }
}

export default userControllers;