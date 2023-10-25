
const resource = "/store/context";
export async function show({ endpoint }) {
    return endpoint.get(resource);
}
module.exports ={show}

