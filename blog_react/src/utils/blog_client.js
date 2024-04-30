import OpenAPIClientAxios from "openapi-client-axios";

const baseUrl = "http://localhost:8000";

const blogClient = new OpenAPIClientAxios({
    definition: `${baseUrl}/api/schema/`,
    axiosConfigDefaults: {
        baseURL: baseUrl,
    },
});

export default blogClient;