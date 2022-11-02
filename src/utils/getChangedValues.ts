const getChangedValues = <T extends Record<string, string>>(values: Partial<T>, initialValues: Partial<T>) => {
    return Object
        .entries(values)
        .reduce((acc: Record<string, string>, [key, value]) => {
            const hasChanged = initialValues[key] !== value;

            if (hasChanged) {
                acc[key] = value;
            }

            return acc
        }, {});
}

export default getChangedValues;