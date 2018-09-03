const copyObject = (object, newProperties) => {
    return {
        ...object,
    ...newProperties
    };
};

export default copyObject;