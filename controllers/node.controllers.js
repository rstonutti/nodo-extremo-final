const { response, request } = require('express');

const Node = require('../models/node')

const nodePost = async (req = request, res = response) => {
    const data = await req.body;

    const nodoC =  {
            'msg': {
                'ip': '192.168.80.224', 'name': 'C'
            }, 'ip-send': '192.168.0.xx', 'ip-recibe': '192.168.80.213'
        };

    const nodos = [ ...data, nodoC];

    console.log(JSON.stringify(nodos));

    const nodosDB = new Node(nodos);

    await nodosDB.save();

};

module.exports = {
    nodePost
};