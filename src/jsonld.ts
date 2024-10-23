// Scalar JSON-LD
export const parseScalar = (json: { "@type": string, value: number }): number | null => {
    if (json["@type"] !== "Scalar") return null;
    return json.value;
};

export const toScalarJson = (value: number): object => {
    return {
        "@type": "Scalar",
        "value": value
    };
};

// Vector JSON-LD
export const parseVector = (json: { "@type": string, values: number[] }): number[] | null => {
    if (json["@type"] !== "Vector") return null;
    return json.values;
};

export const toVectorJson = (values: number[]): object => {
    return {
        "@type": "Vector",
        "values": values
    };
};