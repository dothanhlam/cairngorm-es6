class ValueObject {
    constructor() {
        this.id = '';
    }

    toJSON() {
        return {};
    }

    toJSONString() {
        return '';
    }
};

export default ValueObject;