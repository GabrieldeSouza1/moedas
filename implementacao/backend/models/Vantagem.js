const mongoose = require("mongoose")
const { Schema } = mongoose;

const vantagemSchema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        preco: {
            type: Number,
            required: true
        },
        foto: {
            type: String,
            required: true
        },
        empresa: {
            type: Schema.Types.ObjectId,
            ref: 'Empresa'
        }
    },
    { timestemps: true }
)

const Vantagem = mongoose.model("Vantagem", vantagemSchema)

module.exports = {
    Vantagem,
    vantagemSchema
}