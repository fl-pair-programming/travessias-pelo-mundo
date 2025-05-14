import { createClient } from '@supabase/supabase-js'
require('dotenv').config();
import * as process from "node:process";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export async function getClientes() {
    const { data, error } = await supabase.from('clientes').select('*')
    if (error) throw new Error(error.message)
    return data
}

export async function addCliente(cliente: { nome: string; email: string }) {
    const { data, error } = await supabase.from('clientes').insert([cliente])
    if (error) throw new Error(error.message)
    return data
}