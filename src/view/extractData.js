module.exports = {
    show: (message, res) => {
        res.status(201).json({
            status: "Success",
            message: message,
            // data: data.map((item) =>
            //     item
            // ),
        });
    },
    error: ({message, _message},res) => {
        res.status(403).json({
            error: message,
            completeError: _message,
        });
    }
};
