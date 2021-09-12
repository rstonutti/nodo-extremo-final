const { model, Schema } = require('mongoose')

const nodeSchema = new Schema({
  nodo: [
    {
        msg:{
            ip: { type : String, required: true },
            name: { type: String, max: 1, required: true }
            },
        "ip-send":{ type : String, required: true },
        "ip-recibe": { type : String, required: true }
    }
  ]
});

module.exports = model('node', nodeSchema)